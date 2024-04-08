var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: "./views/home.html",
    })
    .when("/contact", {
      templateUrl: "./views/contact.html",
    })
    .when("/book-ticket", {
      templateUrl: "./views/book-ticket.html",
      controller: ListController,
    })
    .when("/blog", {
      templateUrl: "./views/blog.html",
    })
    .when("/about", {
      templateUrl: "./views/about.html",
    })
    .when("/checkout", {
      templateUrl: "./views/checkout.html",
    })
    .when("/pay", {
      templateUrl: "./views/pay.html",
    })
    .when("/admin/", {
      templateUrl: "./views/list.html",
      controller: ListController,
    })
    .when("/flight/add", {
      templateUrl: "./views/add.html",
      controller: AddController,
    })
    .when("/flight/detail/:id", {
      templateUrl: "./views/detail.html",
      controller: DetailController,
    })
    .when("/flight/edit/:id", {
      templateUrl: "./views/edit.html",
      controller: EditController,
    });
});

app.controller("footer", ($scope) => {
  $scope.hotline = "0382606012";
  $scope.email = "Blackwhilee04@gmail.com";
  $scope.address =
    "7, Lane 14/126, Me Tri Ha Ward, Nam Tu Liem District, Hanoi City";
  $scope.copyright = "Copyright © 2024 C-Plane. All rights reserved.";
});
