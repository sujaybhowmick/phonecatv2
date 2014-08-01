
    var phoneModule = angular.module('phones.phoneModule', []);

    phoneModule.service('phoneService', ['$q', '$resource', 'configuration',
        function($q, $resource, configuration){
            return new PhoneService($q, $resource, configuration);
        }
    ]);

    phoneModule.factory('phoneModel', ['phoneService', function(phoneService){
        return new PhoneModel(phoneService);
    }]);

    phoneModule.controller('phoneController', ['$scope', 'phones', 
                                                PhoneController]);    
