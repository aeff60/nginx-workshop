const express = require("express");
const app = express();
const port = 3000;

let count = 0;
let containers = 0;

async function getContainerCount() {
  return 10;
}

app.get("/api", (req, res) => {
  count++;
  res.json({ count });
});

app.get("/containers", async (req, res) => {
  containers = await getContainerCount();
  res.json({ containers });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
