'use strict';

/**
 * @ngdoc overview
 * @name phonecatv2App
 * @description
 * # phonecatv2App
 *
 * Main module of the application.
 */
var app = angular.module('phonecatv2App', ['ngResource', 'ui.router', 
                'phones.phoneModule', 'common.commonModule']);


app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/phonelist');

        $stateProvider.state('phonelist', {
            url: '/phonelist',
            views:{
                '':{
                    templateUrl: 'views/phone-list.html',
                    controller: 'phoneController',        
                }
            },
            resolve: {
                phones: function(phoneModel){
                    return phoneModel.loadPhones();
                }
            }
        });
    }
]);
