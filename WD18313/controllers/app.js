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
  $scope.hello = "Angular JS";
  // $scope.id = "PH39393";
  // $scope.name = "Le Van Thanh";
  // $scope.yearOld = "2004";

  $scope.student = {
    idStudent: "PH39393",
    nameStudent: "LeVanThanh",
    yearOld: 2004,
  };

  // mang doi tuong
  $scope.students = [
    {
      idStudent: "PH39393",
      nameStudent: "LeVanThanh",
      yearOld: 2004,
    },
    {
      idStudent: "PH484848",
      nameStudent: "ThanhLeVan",
      yearOld: 2003,
    },
  ];

  $scope.crizens = [
    {
      name: "Tran Van Cong", 
      yearOld: "1995",
      idCard: "183728943028545",
      phoneNumber: "09739847322",
      address: "HaNoi"
    },
    {
      name: "Le Trong Dai", 
      yearOld: "2004",
      idCard: "183728943028545",
      phoneNumber: "09739847322",
      address: "HaNoi"
    },
    {
      name: "Pham Van Dong", 
      yearOld: "1999",
      idCard: "183728943028545",
      phoneNumber: "09739847322",
      address: "HaNoi"
    },
    {
      name: "Nguyen Tien Thanh", 
      yearOld: "2000",
      idCard: "154913219416216",
      phoneNumber: "09739847322",
      address: "BinhThuan"
    },
    {
      name: "Dang Tran Phong", 
      yearOld: "2006",
      idCard: "219869498662164946131",
      phoneNumber: "09739847322",
      address: "HaiPhong"
    },
  ]
});
