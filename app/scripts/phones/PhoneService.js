'use strict';


function PhoneResource($resource, configuration){
  return $resource(configuration.restUrl + '/collections/phone/:id',
                     {id: '@id', apiKey: configuration.apiKey});
}

function PhoneDetailResource($resource, configuration){
  return $resource(configuration.restUrl + '/collections/phoneDetail/:id',
                     {apiKey: configuration.apiKey});
}

function PhoneService($q, phoneResource, phoneDetailResource){

    this.findAll = function(){
       var deferred =  $q.defer();
       phoneResource.query(function(phones){
          deferred.resolve(phones);
       }, function(){
            deferred.reject('Unable to load phones')

       }, {isArray: true});
       return deferred.promise;
    };

    this.findPhoneDetail = function(id){
      //console.log($state.params.id)
      var deferred =  $q.defer();
      phoneDetailResource.get({id: id, isArray: false},
        function(phone){
          deferred.resolve(phone.details);
        }, function(){
           deferred.reject('Cannot load phone detail');
        });
       return deferred.promise;
    };
}