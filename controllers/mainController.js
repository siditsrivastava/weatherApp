app.controller("mainController", function ($scope, $http) {
    $scope.Math = window.Math;
    $scope.fetchWeather = (city) => {
        $http({
          method: "GET",
          url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e0f95cbb6ce20c0f753187b40c3f42a&units=metric`,
        })
         
         
          .then((res) => {
            $scope.mainInfo = res.data;
            $http({
              method: "GET",
              url: `https://api.openweathermap.org/data/2.5/onecall?lat=${$scope.mainInfo.coord.lat}&lon=${$scope.mainInfo.coord.lon}&appid=6e0f95cbb6ce20c0f753187b40c3f42a&units=metric`,
            }).then((res) => {
              $scope.allInfo = res.data;
            });
          })
          .catch((err) => {
            console.log("myError: ", err);
          });

    };

    $scope.today = new Date();
    $scope.monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    $scope.days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
})