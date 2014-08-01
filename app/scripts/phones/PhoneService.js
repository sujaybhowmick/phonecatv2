'use strict';


function PhoneService($q, $resource, configuration){

   this.get = function(id){
        return $resource(configuration.restUrl + '/collections/phone/:id',
                     {id: '@id', apiKey: configuration.apiKey});
    };


    this.listAll = function(params){
       var phone = this.get(),
       deferred =  $q.defer();
       phone.query(function(phones){
          deferred.resolve(phones);
       }, function(){
            deferred.reject('Unable to load phones')

       }, {isArray: true});
       return deferred.promise;
    };
}