const app = angular.module("myApp", []);

app.controller("main", ($scope) => {
  $scope.student = {
    fullname: "Le Van Thanh",
    birthday: "13-07-2004",
    gender: "Nam",
    photo:
      "https://lh3.googleusercontent.com/pw/AP1GczPzq7aJLOBJ0Z9wrH6R__zh6m77KEYSGya5uX1cjg8SrTGKn7z8ER-04nnm5rX2WseTwebjyd9zqF_zdDM3WtmmJelDjy98REWmW-pG8vvLp-HVMVW4lumEtTrrDOg65o6YZXzvj12TcoqHBlE1sTAMmb6crKs4Dl44UPYrIRyJiE07vticvtV7uWvsMvHKLiY9R4vJ6kODLCc-hUaE3MGxcIwhXOkJEwLxIYsltXrwDuU67-u0hL9ozVuDzuPMxuzs_yNKZGw4KhsYgYqBpFCxb7T-WHfH30MeJrJ2w_71mOmOcdc_hw7RqywYlgsrehwusrV9eWsve3WvCQIuQROmolaJQG4snyNnJ0kNHuNPhZA3cKQB5hIWabeGBzfakakGvMEJjiF32RagqpBeytrBX9fvy_DgMSDRDGySaICctv3QtPsVX9D98j45_2I28n6CcALEnar3QhMybHPM3PQYgUjC3QuUpmMGEOOEdb-wlWP8JZEhG47ajpaL1571f94GNAmrdSIWQtG270flDjRgHXk-t33RDMT03qCftaaDL8iA5b04lJIkayV9-5Em8fU7qrnV1qJt6DW_KMEaDnxXJ2VW55AiQo74fW9q5eMKIhRZajd1lstK0s8WJhZoTU98_LZtIx2RaCyQ4dkheppi9f4PIwuScrMDwgHcaXPQrqycglzYfzJFtIwSYkXxGUmWFegcNO4qzxOJPrG8Nm-5PPMJ-Ci-Orx9cUsCJGs5xAbVBY6dSlB8JFCVHhWRIzHDaKOvNDpcTf2klJXlMMYRENgFcKvMVU6iMgUDJMEl07NjE6T5HtUqZp06CQJNvleUrO1K9119qgc1p60sc4C-qSwgltGQTvxos-TsiGuBYvBx-ntSsvV_PnpO43TJzb9W7x5fN0qPrITOcr49TpKvUtOAABLbKrKuLBlBHfIZJK7QMGEFeuD1TweqRusyYasKHXVKUZBvnhcIux2XViqhw-oVoUUTJ5EirjvRuq4cBzcBjJpK8rJe3tAOWyUhEk5NTM1lYaf_RzAfJFlCLH6A2G8llJN6Q2wnXNbSitMVpzz3tKlOtNe27gBHocg2A2ugHmvNqg=w599-h932-s-no-gm?authuser=0",
    mark: 9.5,    
  };

  $scope.grade = () => {
    var a = parseFloat($scope.student.mark);
    if (a < 5) {
      $scope.student.grade = "Rớt";
    } else {
      $scope.student.grade = "Đậu";
    }
  };
});
