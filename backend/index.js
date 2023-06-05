const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username},
        {headers: {"private-key": "2a78c25e-74c7-4277-b95d-31c9295a419e"}}
    ); 
    return res.status(r.status).json(r.data);
  } catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);