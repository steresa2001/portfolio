const express = require("express");

const app = express();
app.set("view engine", "pug");
app.use("/static", express.static("public"));

// Set routes
const routes = require("./routes");
app.use(routes);

// Handle page not found error
app.use((req, res, next) => {
  const error = new Error("We couldn't find what you are looking for");
  error.status = 404;
  next(error);
});

// Handle server error
app.use((req, res, next) => {
  const error = new Error("Oops!... something is wrong");
  error.status = 500;
  next(error);
});

// Show either page not found or error page depending on status code
app.use((err, req, res, next) => {
  console.log(err.status);
  if (err.status === 404) {
    res.status(err.status);
    res.render("./not-found", { err });
  }
  if (err.status === 500) {
    res.status(err.status);
    res.render("./error", { err });
  }
});

app.listen(3000);
console.log("Server running on port 3000");
