const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
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
  

// Membuat then catch
cekHariKerja('senin')
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error.message)
})

// try catch
async function cariHariKerja(day) {
    try {
      const result = await cekHariKerja(day);
      console.log(`Hari kerja yang ditemukan: ${result}`);
    } catch (error) {
      console.log(`Terjadi kesalahan: ${error.message}`);
    }
  }
