var User = require("../models/user");

const db = require("../models")

exports.index = (req, res, next) => {
  db.User.findAll()
  .then ( users => {
    // res.render('index', {title: "Get Users",users: JSON.stringify(users)});
    res.send(JSON.stringify(users));
  })

}

exports.user_detail = (req, res, next) => {
  db.User.findById(req.params.id)
  .then ( user => {
    res.send(JSON.stringify(user));
  })
}

exports.user_create_get = (req, res, next) => {
  res.render('./users/new', {title: "Create New User"});
}

exports.user_create_post = (req, res, next) => {
  let name = req.body.name;
  let username = req.body.username;
  let phone = req.body.phone;
  let email = req.body.email;
  let password = req.body.password;

  db.User.create({name: name, username: username, phone: phone, email: email, password: password})
  .then ( user => {
    res.send(`Created user ${user.username}`);
  })
}

exports.user_delete = (req, res, next) => {
  let user_id = req.params.id

  db.User.destroy({where: {id: user_id}})
  .then ( row => {
    console.log(row);
    if(row > 0)
      res.send(`Deleted user with user id: ${user_id}.`);
    else
      res.send(`Delete not successful, make sure user id is correct.`);
  })
}

exports.user_update_get = (req, res, next) => {
  let user_id = req.params.id
  db.User.findById(user_id)
  .then ( user => {
    res.render('./users/edit', {title: "Edit User", user: user})
  })

}

exports.user_update_post = (req, res, next) => {
  let user_id = req.params.id
  let name = req.body.name;
  let username = req.body.username;
  let phone = req.body.phone;
  let email = req.body.email;
  let password = req.body.password;

  console.log(req.body);

  db.User.update({name: name, username: username, phone: phone, email: email, password: password}, {fields: ['name', 'username', 'phone', 'email', 'password'], where: {id: user_id}})
  .then ( row => {
    if (row > 0)
      res.send(`User id=${user_id} has been updated.`);
    else
      res.send('Update is unsuccessful')

  })

}







//
