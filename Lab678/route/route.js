const app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/list-phone", {
      templateUrl: "./views/list.html",
      controller: ListController,
    })
    .when("/phone/add", {
      templateUrl: "./views/add.html",
      controller: AddController,
    })
    .when("/detail/phone/:id", {
      templateUrl: "./views/detail.html",
      controller: DetailController,
    })
    .when("/edit/phone/:id", {
      templateUrl: "./views/edit.html",
      controller: EditController,
    });
});
