'use strict';

function PhoneController($scope, $stateParams, phoneModel, phones){
    $scope.phones = phones;
}

function PhoneDetailController($scope, $state, phoneModel){
	 phoneModel.getPhoneDetail($state.params.id).then(function(phone){
	 	$scope.phone = phone;
	 	$scope.mainImageUrl = phone.images[0];
	     $scope.setImage = function(imageUrl) {
	        $scope.mainImageUrl = imageUrl;
	     }
	 }, function(error){
	 		console.log(error);
	 });

	 

}