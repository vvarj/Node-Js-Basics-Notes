const fs = require("fs");

fs.readdir("tutorial", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    for (file of files) {
      fs.unlink("./tutorial/" + file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`File deleted`);
        }
      });
    }
  }
});

//output of files-> ["1.txt","2.txt","3.txt"]
