exports.index = function (req, res) {
  if (!req.session.user) {
    return res.redirect("/users/authorization");
  }
  res.render("chat", {
    title: "Chat",
    user: req.session.user,
  });
};
