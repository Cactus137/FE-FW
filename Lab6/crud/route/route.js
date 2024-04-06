var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/list", {
      templateUrl: "./views/list.html",
      controller: ListController,
    })
    .when("/add", {
      templateUrl: "./views/add.html",
      controller: AddController,
    })
    .when("/edit/:id", {
      templateUrl: "./views/edit.html",
      controller: EditController,
    });
});
