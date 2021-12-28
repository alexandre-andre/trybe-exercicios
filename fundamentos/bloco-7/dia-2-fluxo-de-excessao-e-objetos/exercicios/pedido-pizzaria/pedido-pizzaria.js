const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

// 1 Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// - Note que o parâmetro da função já está sendo passado na chamada da função.
// 2 Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// - Modifique o nome da pessoa compradora.
// - Modifique o valor total da compra para R$ 50,00.
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  let self = order;
  let entregador = self.order.delivery.deliveryPerson;
  let cliente = self['name'];
  let telefone = self['phoneNumber'];
  let endereco = self.address.street;
  let numero = self.address.number;
  let apartmento = self.address.apartment;
  return `Olá ${entregador}, entrega para: ${cliente}, telefone ${telefone}, R.${endereco}, N°: ${numero}, AP: ${apartmento}`
}
console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // let self = order;
  // let cliente = self['name']['Luiz Silva']
  order.name = 'Luiz Silva';
  let cliente = order.name;
  let pizza1 = Object.keys(order.order.pizza)[0];
  let precoPizza1 = Object.values(order.order.pizza)[0].price;
  let pizza2 = Object.keys(order.order.pizza)[1];
  let precoPizza2 = Object.values(order.order.pizza)[1].price;
  let bebida = order.order.drinks.coke.type;
  let precoBebida =  order.order.drinks.coke.price;
  let preco = (precoPizza1 + precoPizza2 + precoBebida) - 5
  return `Olá ${cliente}, o total do seu pedido de ${pizza1}, ${pizza2} e ${bebida} é R$ ${preco},00.`
}
console.log(orderModifier(order));


