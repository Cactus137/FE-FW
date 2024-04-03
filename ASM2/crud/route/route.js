var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/list", {
      templateUrl: "./views/list.html",
      controller: ListController,
    })
    .when("/edit", {
      templateUrl: "./views/edit.html",
      // controller: EditController,
    })
    .when("/add", {
      templateUrl: "./views/add.html",
      controller: AddController,
    });
});
