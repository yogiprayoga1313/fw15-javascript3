const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
        // find method dalam array untuk mencari data
        let cek = dataDay.find((item) => {
          return item === day;
        });
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error('Hari ini bukan hari kerja'));
        }
      }, 3000);
    });
  };
  

// then catch (2.A)
// cekHariKerja('senin')
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error.message)
// })

// try catch (2.B)
const hasilCari = async () => {
    try {
      const result = await cekHariKerja('sabtu');
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  hasilCari()