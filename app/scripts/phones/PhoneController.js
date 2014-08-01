'use strict';

function PhoneController($scope, phones){
    console.log('PhoneController init');
    $scope.phones = phones;
}