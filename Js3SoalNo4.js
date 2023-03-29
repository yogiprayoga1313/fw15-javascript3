// contoh program 1
const janjian = (err) => new Promise((resolve, reject) => {
    if (err) {
        reject('error')
    } else {
        resolve('success')
    }
});


async function searchPromise() {
    try {
        const hasilJanjian = await janjian('');
        console.log(hasilJanjian)
    } catch (err) {
        console.log(err, 'ada error disini')
    }
    
}

searchPromise()

// Contoh program 2

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function searchName(name) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let result = names.find(function(element) {
        return element.toLowerCase() === name.toLowerCase();
      });
      if (result) {
        resolve(result);
      } else {
        reject('Name not found');
      }
    }, 1000);
  });
}

// searchName('rizal')
//   .then(function(name) {
//     console.log('Found name:', name);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });``

async function testSearchName() {
    try {
        const hasilSearchName = await searchName('alice');
        console.log(hasilSearchName)
    }catch(err) {
        console.log(err)
    }

}
testSearchName()

  