'use strict';

function PhoneModel(phoneService){

    this.loadPhones = function(){
        return phoneService.findAll();
    };

    this.getPhoneDetail = function(id){
    	return phoneService.findPhoneDetail(id)
    }
}