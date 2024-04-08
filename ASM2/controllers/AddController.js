window.AddController = function ($scope, $http, $location) {
  $scope.check = {
    code: false,
    company: false,
    from: false,
    to: false,
    tft: false,
    departure: false,
    departureTime: false,
    arrival: false,
    arrivalTime: false,
    price: false,
  };
  const apiUrl = "http://localhost:3000/flights";
  const apiAirs = "http://localhost:3000/airports";
  const apiCompany = "http://localhost:3000/company";
  $scope.render = function () {
    $http.get(apiAirs).then(function (res) {
      $scope.airports = res.data;
    });
    $http.get(apiCompany).then(function (res) {
      $scope.companies = res.data;
    });
  };
  $scope.render();

  $scope.add = function () {
    let flag = false;

    if (!$scope.inputValue || !$scope.inputValue.code) {
      $scope.check.code = true;
    } else {
      $scope.check.code = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.company.name) {
      $scope.check.company = true;
    } else {
      $scope.check.company = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.from.code) {
      $scope.check.from = true;
    } else {
      $scope.check.from = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.to.code) {
      $scope.check.to = true;
    } else {
      $scope.check.to = false;
    }

    if ($scope.inputValue && $scope.inputValue.from.code && $scope.inputValue.from.code && $scope.inputValue.to.code && $scope.inputValue.from.code == $scope.inputValue.to.code) {
      $scope.check.tft = true;
    } else {
      $scope.check.tft = false;
    }  

    if (!$scope.inputValue || !$scope.inputValue.departure) {
      $scope.check.departure = true;
    } else {
      $scope.check.departure = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.arrival) {
      $scope.check.arrival = true;
    } else {
      $scope.check.arrival = false;
    }

    if (!$scope.inputValue || !$scope.inputValue.price) {
      $scope.check.price = true;
    } else {
      $scope.check.price = false;
    }

    for (const key in $scope.check) {
      if ($scope.check[key] == true) {
        flag = true;
      } else {
        flag = false;
      }
    }

    if (flag == false) {
      $http.get(apiAirs).then(function (res) {
        $scope.airports = res.data;
        $scope.airports.forEach((airport) => {
          if ($scope.inputValue.from.code == airport.code) {
            $scope.inputValue.from.name = airport.name;
          } else if ($scope.inputValue.to.code == airport.code) {
            $scope.inputValue.to.name = airport.name;
          }
        });
        $http.get(apiCompany).then(function (res) {
          $scope.companies = res.data;
          $scope.companies.forEach((company) => {
            if ($scope.inputValue.company.name == company.name) {
              $scope.inputValue.company.image = company.image;
            }
          });

          const dataAdd = { ...$scope.inputValue };
          $http.post(apiUrl, dataAdd).then(function (res) {
            if (res.status == 201) {
              alert("Add Flight successfully!");
              $location.path("/admin");
            }
          });
        });
      });
    } 
  };
};
