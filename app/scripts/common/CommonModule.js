'use strict';

var commonModule = angular.module('common.commonModule', []);

commonModule.factory('properties', [Properties]);

commonModule.factory('configuration', ['properties', Configuration]);