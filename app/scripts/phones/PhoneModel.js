'use strict';

function PhoneModel(phoneService){

    this.loadPhones = function(){
        return phoneService.listAll();
    };
}