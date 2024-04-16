window.ListController = function ($http, $location, $scope) {
  const apiUrl = "http://localhost:3000/foods";

  $scope.formatDate = function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear(); 
    
    return `${day}/${month}/${year}`;
  }

  $scope.render = function () {
    $http.get(apiUrl).then((res) => {
      $scope.foods = res.data;
    });
  };

  $scope.render();
};
