'use strict';

function MessageDirective($compile){
    var fnLink = function(scope, element, attributes){
        scope.$on('success', function(event, args){
            var template =  angular.element('<div class="alert alert-success alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.message + '</strong></div>');

            template.insertAfter(element);
            $compile(template)(scope).delay(3000).fadeOut('slow', function() { $(this).remove(); });
        });

        scope.$on('error', function(event, args){
            var template = angular.element('<div class="alert alert-danger alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.message + '</strong></div>');
            template.insertAfter(element);
            $compile(template)(scope).delay(3000).fadeOut('slow', function() { $(this).remove(); });
        });

        scope.$on('warning', function(event, args){
            var template = angular.element('<div class="alert alert-warning alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.message + '</strong></div>');
            template.insertAfter(element);
            $compile(template)(scope).delay(3000).fadeOut('slow', function() { $(this).remove(); });
        });

        scope.$on('info', function(event, args){
            var template = angular.element('<div class="alert alert-success alert-dismissable">' +
                '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' +
                args.message + '</strong></div>');
            template.insertAfter(element);
            $compile(template)(scope).delay(3000).fadeOut('slow', function() { $(this).remove(); });
        });

    };
    return {
        restrict: 'A',
        link: fnLink,
        replace: false
    }
}