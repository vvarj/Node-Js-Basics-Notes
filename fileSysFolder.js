const fs = require("fs");

// To create folder
fs.mkdir("tutorial", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.rmdir("tutorial", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Folder deleted");
      }
    });
  }
});

// To remove folder (Note:cannot remove folder which is not empty)

// fs.rmdir("tutorial", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder successfully deleted!");
//   }
// });
