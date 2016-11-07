/* jslint node: true */
var gulp = require("gulp");
var GitHubApi = require("github");
var config = require("./config.json");

var github = new GitHubApi({
  debug: false
});

gulp.task("default", ["authenticate"]);

gulp.task("authenticate", function () {
  return github.authenticate({
    type: "oauth",
    token: config.token,
  });
});

gulp.task("pulls", ["authenticate"], function () {
  return github.issues.getForUser({
    username: "bergren2"
  }, function (err, res) {
    if (err) {
      console.log(err.toJSON());
    } else {
      console.log(res);
    }
  });
});