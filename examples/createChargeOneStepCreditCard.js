'use strict';

var Gerencianet = require('gn-api-sdk-node');
var credentials = require('./credentials');

var options = {
  client_id: credentials.client_id,
  client_secret: credentials.client_secret,
  sandbox: true
}

var body = {

  payment: {
    credit_card: {
      installments: 1,
      payment_token: '83d52dbd590d9ebc991938c711ddd31f65df89a5',
      billing_address: {
        street: 'Street 3',
        number: 10,
        neighborhood: 'Bauxita',
        zipcode: '35400000',
        city: 'Ouro Preto',
        state: 'MG'
      },
      customer: {
        name: 'Gorbadoc Oldbuck',
        email: 'oldbuck@gerencianet.com.br',
        cpf: '94271564656',
        birth: '1977-01-15',
        phone_number: '5144916523'
      }
    }
  },

  items: [{
    name: 'Product 1',
    value: 1000,
    amount: 2
  }],
  shippings: [{
    name: 'Default Shipping Cost',
    value: 100
  }]
}

var gerencianet = new Gerencianet(options);

gerencianet
  .oneStep([], body)
  .then(console.log)
  .catch(console.log)
  .done();
