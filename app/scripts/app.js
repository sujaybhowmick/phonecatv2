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
        $urlRouterProvider.otherwise('/phones');

        $stateProvider.state('phones',{
            abstract: true,
            url: '/phones',
            templateUrl: 'views/phones/phones.html',
            controller: 'phoneController',
            resolve: {
                phones: function(phoneModel){
                    return phoneModel.loadPhones();
                }
            }
        }).state('phones.list', {
            url: '',
            templateUrl: 'views/phones/phones.list.html'
        }).state('phones.detail', {
            url:'/{id}',
            views:{
                '':{
                    controller: 'phoneDetailController',
                    templateUrl: '/views/phones/phones.detail.html'
                }
            }
            
            
        });
    }
]);
