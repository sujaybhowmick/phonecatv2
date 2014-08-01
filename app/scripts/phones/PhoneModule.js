
    var phoneModule = angular.module('phones.phoneModule', ['ngResource']);

    phoneModule.service('phoneService', ['$q', '$resource', 
        function($q, $resource){
            return new PhoneService($q, $resource);
        }
    ]);

    phoneModule.factory('phoneModel', ['phoneService', function(phoneService){
        return new PhoneModel(phoneService);
    }]);

    phoneModule.controller('phoneController', ['$scope', 'phones', 
                                                PhoneController]);    
