const app = angular.module("WeatherApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.
        when("/", {
            templateUrl: "views/main.html",
            controller: "mainController"
        })
        .otherwise({
            redirectTo: "/"
        });
    });