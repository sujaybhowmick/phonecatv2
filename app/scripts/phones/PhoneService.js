'use strict';

function PhoneService($q, $resource){
   

   this.get = function(){
        var baseUrl = 'https://api.mongolab.com/api/1/databases/phonecatdb',
    apiKey = 'WDEbDbrj6btv1Fb8n5E4NPNNQdiICGtD';

        return $resource(baseUrl + '/collections/phone/:id',{id: '@id', apiKey: apiKey});
    };


    this.listAll = function(){
       var phone = this.get(),
       deferred =  $q.defer();
       phone.query(function(phones){
          console.log(phones);
          deferred.resolve(phones);
       }, function(){
            deferred.reject('Unable to load phones')

       }, {isArray: true});
       return deferred.promise;
    };
}