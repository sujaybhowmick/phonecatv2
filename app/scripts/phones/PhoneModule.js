
    var phoneModule = angular.module('phones.phoneModule', []);

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
            templateUrl: 'views/phones/phones.list.html'
        }).state('phones.detail', {
            url:'/{id}',
            views:{
                '':{
                    controller: 'phoneDetailController',
                    templateUrl: '/views/phones/phones.detail.html'
                }
            }
            
            
        });
    }
]);


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

    phoneModule.factory('phoneModel', ['phoneService', function(phoneService){
        return new PhoneModel(phoneService);
    }]);

    phoneModule.controller('phoneController', ['$scope', '$stateParams',
                                                'phoneModel', 'phones', 
                                                PhoneController]);

    phoneModule.controller('phoneDetailController', ['$scope', '$state',
                                                'phoneModel', PhoneDetailController]);                                                    
