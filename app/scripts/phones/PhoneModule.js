
    var phoneModule = angular.module('phones.phoneModule', []);


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
