const connection = require("../../Model/db_config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretkey = "secretkey";


app.post("/login", (req, req) => {
  const user = {
    username: Shivay,
    email: "singhshruti61398@gmail.com",
  };
  jwt.sign({ user }, secretkey, { expireIn: "800s" }, (err, token) => {
    res.json({
        token
        
    });
  });
});

const userSignup = async (req, res) => {
  const { user_id, user_name, password } = req.body;
  const query = "SELECT * FROM token WHERE userid = ?";
  const query1 = "INSERT INTO token SET ?";
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, salt);
  const data1 = {
    user_id,
    user_name,
    password: pass,
  };
  connection.query(query, user_id, (error, result) => {
    if (result.length) {
      return res.send({ message: "user id already exist " });
    }
    connection.query(query1, data1, (err, result) => {
      if (err) {
        return res.send({ Error: err.sqlMessage });
      }
      return res.send({ status: 200, Response: result });
    });
  });
};
module.exports = userSignup;
