import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';     // ✅ v2 import
import Button from 'react-bootstrap/Button'; // ✅ v2 import
import CustomerDetails from './CustomerDetails';
import axios from 'axios';

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCustomer: 1, customerList: null };
  }

  componentDidMount() { this.getCustomerData(); }

  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then((response) => {
      this.setState({ customerList: response });
    });
  }

  render() {
    if (!this.state.customerList) return <p>Loading data</p>;

    return (
      <div className="addmargin">
        <div className="col-md-3">
          {this.state.customerList.data.map((customer) => (
            <Card border="info" className="centeralign mb-3" key={customer.id}>
              <Card.Header as="h3">{customer.name}</Card.Header>
              <Card.Body>
                <p className="mb-1">{customer.email}</p>
                <p className="mb-3">{customer.phone}</p>
                <Button
                  variant="info"
                  onClick={() => this.setState({ selectedCustomer: customer.id })}
                >
                  Click to View Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="col-md-6">
          <CustomerDetails val={this.state.selectedCustomer} />
        </div>
      </div>
    );
  }
}
