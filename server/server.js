const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000

app.use(express.json());
app.use(cors());

app.post('/signin', (req, res) => {
    res.json('sign in page')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
