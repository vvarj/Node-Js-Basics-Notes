// create, read, delete, rename

const fs = require("fs");

fs.writeFile("eg.txt", "this is an example", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Successfully created !!");
    //buff stream store data in binary, so specify the encoding type(eg:"utf8")
    fs.readFile("eg.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
});

// TO RENAME :

// fs.rename("eg.txt", "eg2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully renamed the file");
//   }
// });

// TO Append

// fs.appendFile("eg2.txt", "Some data is added", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfuly Appended data");
//   }
// });

// TO Delete a file

fs.unlink("eg2.txt", (err) => {
  if (err) console.log(err);
  console.log("Successfully deleted the file");
});
