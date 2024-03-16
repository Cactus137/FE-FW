// function myFunction($scope) {
//   // Luon luon co $scope
//   // $scope: la thanh phan bien chua cac bien duoc su dung trong Angular JS
//   // Phia sau $scope la bien do nguoi dung khoi tao
//   $scope.hello = "Hello World, I'm Cactus";
// }
const app = angular.module("myApp", []);
// // Khai bao Angular JS cung voi khu vuc da dinh nghia truoc do
// app.controller("demoController", myFunction);

// Viet tat
app.controller("demoController", ($scope) => {
  $scope.hello = "Hello World, I'm Cactus";
  $scope.name = "Le Van Thanh";
  $scope.age = "20";
  $scope.country = "VietNam";
  $scope.email = "Blackwhilee04@gmail.com";
});
