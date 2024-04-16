const app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/list-foods", {
      templateUrl: "./views/list.html",
      controller: ListController,
    })
    .when("/", {
      templateUrl: "./views/list.html",
      controller: ListController,
    })
    .when("/foods/add", {
      templateUrl: "./views/add.html",
      controller: AddController,
    })
    .when("/foods/detail/:id", {
      templateUrl: "./views/detail.html",
      controller: DetailController,
    })
    .when("/foods/edit/:id", {
      templateUrl: "./views/edit.html",
      controller: EditController,
    });
});
