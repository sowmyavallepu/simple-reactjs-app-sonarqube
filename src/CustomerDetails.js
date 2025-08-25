import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';   // ✅ v2 import
import axios from 'axios';

// Child of Customers
export default class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { customerDetails: null };
  }

  componentDidMount() {
    this.getCustomerDetails(this.props.val);
  }

  componentDidUpdate(prevProps) {
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
    }
  }

  // Load customer details from JSON
  getCustomerDetails(id) {
    axios.get(`assets/samplejson/customer${id}.json`).then((response) => {
      // keep the same shape your code expects (response.data holds the object)
      this.setState({ customerDetails: response });
    });
  }

  render() {
    const data = this.state.customerDetails?.data;
    if (!data) return <p>Loading Data</p>;

    return (
      <div className="customerdetails">
        <Card border="info" className="centeralign">
          <Card.Header as="h3">{data.name}</Card.Header>
          <Card.Body>
            <p>Name : {data.name}</p>
            <p>Email : {data.email}</p>
            <p>Phone : {data.phone}</p>
            <p>City : {data.city}</p>
            <p>State : {data.state}</p>
            <p>Country : {data.country}</p>
            <p>Organization : {data.organization}</p>
            <p>Job Profile : {data.jobProfile}</p>
            <p>Additional Info : {data.additionalInfo}</p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
