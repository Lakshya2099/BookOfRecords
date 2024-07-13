const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir(`./hisaab`, (err, files) => {
    if (err) return res.status(500).send(err);
    res.render('index', { files: files });
  });
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/edit/:filename", (req, res) => {
  fs.readFile(`./hisaab/${req.params.filename}`, "utf8", (err, filedata) => {
    if (err) return res.status(500).send(err);
    res.render("edit", { filedata, filename: req.params.filename });
  });
}); // For edit route you can even add res.redirect.


app.get("/hisaab/:filename", (req, res) => {
  fs.readFile(`./hisaab/${req.params.filename}`,"utf-8", (err,filedata) => {
    if (err) return res.status(500).send(err);
    res.render("hisaab",{ filedata , filename: req.params.filename });
  })
});


app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./hisaab/${req.params.filename}`, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/"); // Redirect to the homepage after deleting the file
  });
});

app.post("/update/:filename", (req, res) => {
  fs.writeFile(`./hisaab/${req.params.filename}`, req.body.content, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  })
});

app.post("/createhisaab", (req, res) => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
  const directoryPath = './hisaab';
  
  // Function to get the next available identifier for the file
  const getNextFileIdentifier = (callback) => {
    let identifier = 1;

    const checkFileExists = () => {
      const filePath = path.join(directoryPath, `${date}-${identifier}.txt`);
      fs.stat(filePath, (err) => {
        if (err) {
          if (err.code === 'ENOENT') {
            // File does not exist, we can use this identifier
            callback(identifier);
          } else {
            // Some other error occurred
            res.status(500).send(err);
          }
        } else {
          // File exists, increment the identifier and check again
          identifier++;
          checkFileExists();
        }
      });
    };

    checkFileExists();
  };

  getNextFileIdentifier((identifier) => {
    const newFileName = `${date}-${identifier}.txt`;
    const newFilePath = path.join(directoryPath, newFileName);

    fs.writeFile(newFilePath, req.body.content, (err) => {
      if (err) return res.status(500).send(err);
      res.redirect("/");
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});