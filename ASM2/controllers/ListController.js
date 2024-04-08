window.ListController = function ($scope, $http, $location) {
  const apiUrl = "http://localhost:3000/flights";

  $scope.formatDate = function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}:00`;
  }

  $scope.render = function () {
    $http.get(apiUrl).then(function (res) {
      $scope.flights = res.data;
    });
  };

  $scope.delete = function (id) {
    let isConfirm = window.confirm("Do you want to delete this flight?");
    if (isConfirm) {
      $http.delete(`${apiUrl}/${id}`).then((res) => {
        alert("Delete Flight successfully!");
        $scope.render();
      });
    }
  };
  $scope.render();
};
