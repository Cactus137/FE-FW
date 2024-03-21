const app = angular.module("myApp", []);

app.controller("mainController", ($scope) => {
  //   $scope.check = "test";
  //   $scope.name = "Le Van Thanh";
  // $scope.input = {
  //   list: {
  //     a: false,
  //     b: false,
  //     c: false,
  //   },
  //   select: "tabaco",
  //   category: "coffee1",
  // };

  // $scope.categories = [
  //   {
  //     id: "beer1",
  //     name: "Beer",
  //   },
  //   {
  //     id: "tabaco1",
  //     name: "Tabaco",
  //   },
  //   {
  //     id: "wine1",
  //     name: "Wine",
  //   },
  //   {
  //     id: "coffee1",
  //     name: "Coffee",
  //   },
  // ];
  // $scope.sum = $scope.a + $scope.b;
  // $scope.diff = $scope.a - $scope.b;
  // $scope.pro = $scope.a * $scope.b;
  // $scope.quo = $scope.a / $scope.b;
  // console.log($scope.input.gender);
  // console.log($scope.input.list);
  // console.log($scope.number);

  $scope.result = "";
  $scope.submit = () => {
    switch ($scope.input.checkNumber) {
      case "check1":
        if (isInteger(Number($scope.number))) {
          $scope.result = `${$scope.number} là số nguyên`;
        } else {
          $scope.result = `${$scope.number} không phải là số nguyên`;
        }
        break;
      case "check2":
        if (isPerfectSquare(Number($scope.number))) {
          $scope.result = `${$scope.number} là số chính phương`;
        } else {
          $scope.result = `${$scope.number} không phải là số chính phương`;
        }
        break;
      case "check3":
        if (isPerfectNumber(Number($scope.number))) {
          $scope.result = `${$scope.number} là số hoàn hảo`;
        } else {
          $scope.result = `${$scope.number} không phải là số hoàn hảo`;
        }
        break;
      default:
        break;
    }
  };
});

const isInteger = (number) => {
  return Number.isInteger(number);
};

const isPerfectSquare = (number) => {
  return Math.sqrt(number) % 1 === 0;
};

const isPerfectNumber = (number) => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
};
