import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

let usersBD = [{ id: "1", name: "Svit" }];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.json(usersBD);
});

app.post("/user", (req, res) => {
  try {
    req.body && usersBD.push(req.body);
    res.json({ message: "User was added", statusCode: "200" });
  } catch (e) {
    res.json({ message: e });
  }
});

app.delete("/user/:id", (req, res) => {
  let id = req.params.id;

  usersBD = usersBD.filter((item) => {
    return item !== id;
  });
  res.json({ message: "User was deleted" });
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  const { name } = req.body;
  usersBD[id - 1].name = name;
  res.json({ message: `User was updated to ${name}` });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
