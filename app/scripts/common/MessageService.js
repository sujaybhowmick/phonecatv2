'use strict';

function MessageService($rootScope){
    return {
        alert: function(event, args){
            $rootScope.$broadcast(event, args);
        }
    };
}