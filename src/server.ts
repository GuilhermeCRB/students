import app from "./app.js";

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})
