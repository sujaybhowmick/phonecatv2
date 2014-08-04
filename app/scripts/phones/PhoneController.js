'use strict';

function PhoneController($scope, $stateParams, phones, messageService){
    $scope.phones = phones;
    messageService.alert('info', 
            {message:'This is a test message from message service'});
};

function PhoneDetailController($scope, $state, phoneModel, messageService){
	 phoneModel.getPhoneDetail($state.params.id).then(function(phone){
	 	$scope.phone = phone;
	 	$scope.mainImageUrl = phone.images[0];
	     $scope.setImage = function(imageUrl) {
	        $scope.mainImageUrl = imageUrl;
	     }
	 }, function(error){
	 		console.log(error);
            messageService.alert('error', error);

	 });

};