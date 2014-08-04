
var phoneModule = angular.module('phones.phoneModule', []);

/*
    Phone Module Configuration
*/
phoneModule.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/phones');

    $stateProvider.state('phones',{
        abstract: true,
        url: '/phones',
        templateUrl: 'views/phones/phones.html',
        controller: 'phoneController',
        resolve: {
            phones: function(phoneModel){
                return phoneModel.loadPhones();
            }
        }
    }).state('phones.list', {
        url: '',
        views: {
            '':{
                templateUrl: 'views/phones/phones.list.html'    
            },
            'messages@':{
                // include messages templates in the pages you want to display
                templateUrl: 'views/common/messages.html'
            }
        }
    }).state('phones.detail', {
        url:'/{id}',
        views:{
            '':{
                controller: 'phoneDetailController',
                templateUrl: '/views/phones/phones.detail.html'
            },
            'messages@':{
                // include messages templates in the pages you want to display
                templateUrl: 'views/common/messages.html'
            }
        }
    });
}]);

/*
    Phone module services declarations
*/
phoneModule.service('phoneResource', ['$resource', 'configuration', 
    function($resource, configuration){
        return new PhoneResource($resource, configuration);
    }
]);

phoneModule.service('phoneDetailResource', ['$resource', 'configuration', 
    function($resource, configuration){
        return new PhoneDetailResource($resource, configuration);
    }
]);

phoneModule.service('phoneService', ['$q', 'phoneResource', 'phoneDetailResource',
    function($q, phoneResource, phoneDetailResource){
        return new PhoneService($q, phoneResource, phoneDetailResource);
    }
]);

/*
    Phone module models declarations
*/
phoneModule.factory('phoneModel', ['phoneService', function(phoneService){
    return new PhoneModel(phoneService);
}]);

/*
    Phone module controller declarations
*/
phoneModule.controller('phoneController', ['$scope', '$stateParams',
                            'phones', 'messageService', PhoneController]);

phoneModule.controller('phoneDetailController', ['$scope', '$state',
                        'phoneModel', 'messageService', PhoneDetailController]);                                                    
