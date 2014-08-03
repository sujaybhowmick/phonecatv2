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

app.run(
  [ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
  ]
);
