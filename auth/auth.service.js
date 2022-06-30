const userData = require("../dummy/users.json");

const authLogin = (req, res) => {
  const username = req.body.username.toLowerCase();
  const password = req.body.password;

  const selectedUser = userData.find(
    (index) => index.username == username && index.password == password
  );

  if (selectedUser) {
    res
      .status(200)
      .json({ status: 200, message: "Login success!", data: selectedUser });
  } else {
    res.status(400).json({
      status: 400,
      message:
        "Login failed! Please check your username was registered or your password filled correctly!",
    });
  }
};

module.exports = { authLogin };
