const app = angular.module("myApp", []);

app.controller("main", ($scope) => {
  $scope.students = [
    {
      fullname: "Le Van Thanh",
      birthday: "13-07-2004",
      gender: "Male",
      photo: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
      mark: 9.5,
    },
    {
      fullname: "Nguyen Trung Quan",
      birthday: "20-05-2000",
      gender: "Male",
      photo:
        "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      mark: 9,
    },
    {
      fullname: "Nguyen Lan Anh",
      birthday: "16-05-2003",
      gender: "Female",
      photo:
        "https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp",
      mark: 9.2,
    },
  ];
});
