'use strict';

var commonModule = angular.module('common.commonModule', []);

commonModule.factory('properties', [Properties]);

commonModule.factory('configuration', ['properties', Configuration]);

commonModule.service('messageService', ['$rootScope', function($rootScope){
    return new MessageService($rootScope);
}]);

commonModule.directive('appMessage', ['$compile', MessageDirective]);