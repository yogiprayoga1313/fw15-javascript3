fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    // set array kosong untuk menampung object baru
    let newData = []
  // melakukan looping untuk bisa mendapatkan element object agar mudah diakses
    data.map((data)  =>{
      newData.push({name:data.name})
    })
     console.log(newData)
  })
   

  .catch(error => console.error(error));

// const fetch = require('node-fetch')

// const data = [{
//   id: 1,
//   name: 'Leanne Graham',
//   username: 'Bret',
//   email: 'Sincere@april.biz',
//   address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: [Object]
//   },
//   phone: '1-770-736-8031 x56442',
//   website: 'hildegard.org',
//   company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
//   }
// },
// {
//   "id": 2,
//   "name": "Ervin Howell",
//   "username": "Antonette",
//   "email": "Shanna@melissa.tv",
//   "address": {
//     "street": "Victor Plains",
//     "suite": "Suite 879",
//     "city": "Wisokyburgh",
//     "zipcode": "90566-7771",
//     "geo": {
//       "lat": "-43.9509",
//       "lng": "-34.4618"
//     }
//   },
//   "phone": "010-692-6593 x09125",
//   "website": "anastasia.net",
//   "company": {
//     "name": "Deckow-Crist",
//     "catchPhrase": "Proactive didactic contingency",
//     "bs": "synergize scalable supply-chains"
//   }
// }]


// const newData = [
//   {
//     name: data[0].name.split(' ')
//   },
//   {
//     name: data[1].name.split(' ')
//   }
// ]
// console.log('Manual')
// console.log(newData)
// console.log('Manual')

// const newDataBaru = [];

// data.map((data) => {
//   newDataBaru.push({
//     name: data.name.split(' ')
//   })
// })
// console.log('Otomatis')
// console.log(newDataBaru)
// console.log('Otomatis')


// fetch('https://jsonplaceholdaaaer.typicode.com/users')
//   .then(async response => {
//     const data = await response.json()
//     console.log(data)
//   })
//   .catch(error => {
//     console.log('error ')
//     console.error(error)
//   });
