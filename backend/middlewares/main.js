const express = require("express");
const zod = require("zod");
const schema = zod.array(zod.number());

const app = express();


// middleware : It is kind of separate place to perform validation checks
app.use(express.json()); //before posting something convert it to json first
//coz we might dont know type of body , either could be json or some other format

// app.post("/health-checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const kidneyLength = kidneys.length;
//   res.send("you have" + kidneyLength + " kidneys.");
// });

//global catches
// app.use(function (err, req, res, next) {
//   res.json({
//     msg: "Sorry something is wrong with the server",
//   });
// });
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  // Check if both username and password are correct
  if (username !== "manpreet" || password !== "pass") {
    res.status(400).json({ msg: "Incorrect inputs." });
  } else {
    next();
  }
}
function kidneyMiddleware(req, res, next) {
  const kidneyId = parseInt(req.query.kidneyId, 10);
  if (kidneyId !== 1 && kidneyId !== 2) {
    res.status(400).json({
      msg: "Invalid kidneyId. It should be either 1 or 2.",
    });
  } else {
    next();
  }
}

// app.use(userMiddleware); //anything after this line will use userMiddleware
app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    //here send the final response after middlewares
    res.send("Your kidney is f4efimjnhbgvfcdsne ");
  }
);

// app.get('/health-checkup', function(req, res) {
//     console.log('Query:', req.query);
//     console.log('Headers:', req.headers);

//     // Retrieve the kidneyId from the query params and ensure it's treated as a number
//     const kidneyId = parseInt(req.query.kidneyId, 10);
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (!username || !password) {
//         res.status(400).json({
//             msg: "Username or password missing",
//         });
//         return;
//     }

//     if (username !== "manpreet" || password !== "pass") {
//         res.status(400).json({
//             msg: "User does not exist",
//         });
//         return;
//     }

//     // Validate kidneyId to ensure it's either 1 or 2
//     if (kidneyId !== 1 && kidneyId !== 2) {
//         res.status(400).json({
//             msg: "Invalid kidneyId. It should be either 1 or 2.",
//         });
//         return;
//     }

//     // Successful health check
//     res.json({
//         msg: "Your kidney is fkihuy!"
//     });
// });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
