const getMonth = (callback) => {
    setTimeout(() => {
      let error = false; // mengubah error menjadi true untuk menampilkan error, apabila variable error tetap false maka akan menampilkan data
      let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
      if (!error) {
        callback(null, month);
      } else {
        callback(new Error("Sorry Data Not Found"), []); // menampilkan error pada callback
      }
    }, 4000);
  };
  
//   getmonth value yg dikirim ke callback (parm1,parm2)
  getMonth((err, data) => {
    if (err) {
      console.log(err.message); // menampilkan error pada console
    } else {
      data.map((month) => {
        console.log(month);
      });
    }
  });
  