angular.module("myRoute", ["ngRoute"]).config(($routeProvider) => {
  $routeProvider
    .when("/dashboard", {
      templateUrl: "./views/dashboard.html",
    })
    .when("/add", {
      templateUrl: "./views/add.html",
    })
    .when("/edit", {
      templateUrl: "./views/edit.html",
    })
    .when("/login", {
      templateUrl: "./views/login.html",
    })
    .when("/signup", {
      templateUrl: "./views/signup.html",
    });
});
