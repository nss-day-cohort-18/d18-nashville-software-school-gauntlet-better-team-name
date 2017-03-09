"use strict";

var app = angular.module('GauntletApp', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/buildView.html",
        controller: "AppCtrl"
    })
    .when("/gauntlet/:selected", {
        templateUrl: "partials/gauntlet.html",
        controller: "PlayerCtrl"
    });
});

