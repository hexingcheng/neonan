/**
 * Created by Administrator on 2016/3/19.
 */
var app = angular.module('neomanApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/phone-list.html'
        }).
        when('/phones', {templateUrl: './views/phone-list.html'}).
        when('/members', {templateUrl: './views/phone-detail.html'}).
        otherwise({redirectTo: '/'});
}]);