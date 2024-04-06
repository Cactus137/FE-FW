const app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "./views/list.html",
      controller: ListController,
    })
    .when("/add", {
      templateUrl: "./views/add.html",
      controller: AddController,
    });
});
