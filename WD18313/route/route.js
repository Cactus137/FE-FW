angular.module("myRoute", ["ngRoute"]).config(($routeProvider) => {
  $routeProvider.when("/home", {
    templateUrl: "./views/home.html",
  });
});
