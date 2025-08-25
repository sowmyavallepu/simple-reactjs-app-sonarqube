// src/setupTests.js
import '@testing-library/jest-dom';

// Make axios a *virtual* mock so Jest never resolves the real ESM package
jest.mock(
  'axios',
  () => ({
    get: jest.fn((url) => {
      if (url.includes('customerlist.json')) {
        return Promise.resolve({
          data: [
            { id: 1, name: 'Alice', email: 'a@ex.com', phone: '111-111-1111' },
            { id: 2, name: 'Bob',   email: 'b@ex.com', phone: '222-222-2222' }
          ],
        });
      }
      const m = url.match(/customer(\d+)\.json$/);
      const id = m ? Number(m[1]) : 1;
      return Promise.resolve({
        data: {
          id,
          name: id === 1 ? 'Alice' : 'Bob',
          email: id === 1 ? 'a@ex.com' : 'b@ex.com',
          phone: '000-000-0000',
          city: 'City',
          state: 'State',
          country: 'Country',
          organization: 'Org',
          jobProfile: 'Dev',
          additionalInfo: '-',
        },
      });
    }),
  }),
  { virtual: true } // <-- THIS is the key
);
