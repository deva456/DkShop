var db = require('./database')
const { ConnectableObserveble } = require ('rxjs');
const express = require ('express');
const app = express();

db.connect(err => {
  if (err) { console.log('err'); }
  console.log('database Connected....');
})

app.get('/user', (req, res) => {
  let qr = `Select * from "Stud"`
  db
      .query({
          rowMode: "array",
          text: qr
      })
      .then(result => {

          res.send({
              message: 'all info data',
              data: result.rows
          });
      })
      .catch(err => console.log(err, 'errs'));

});
app.listen(3000, () => {
  console.log('Server Running');
})


//for single result

// app.get('/user/:Id', (req, res) => {
//     let gID = req.params.Id;
//     let qr = `Select * from public."Stud" where Id=${gID}`;
//     db
//     .query({
//         rowMode: "array",
//         text: qr
//     })
//     .then(result => {
//         res.send({
//             message: 'get single data',
//             data: result.rows
//         });
//     })
//     .catch(err => console.log(err, 'errs'));
// });
