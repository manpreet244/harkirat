const express = require("express");
const jwt = require("jsonwebtoken");
//use JWT to create tokens
//2) User gets back the token at a signin request
//3) User sends back the tokens in all authenticated requests
const jwtPassword = "123456";

const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = true;
   for(let i =0;i<ALL_USERS.length;i++){
    if(ALL_USERS.username == username && ALL_USERS.password == password){
      userExists = true;
    }
   }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  // If the user exists, a JWT token is generated using jwt.sign().
  //  The payload contains the username, and "shhhhh" is used as the secret key
  //   (this should be more secure in a real-world scenario).

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;//whatever jwt returns
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
      users:ALL_USERS.filter((val)=>{
        if(val.username == username){
          return true;
        }else{
          return false;
        }
      })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)