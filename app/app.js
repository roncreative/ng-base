'use strict';

// Declare app level module which depends on filters, and services

var App = angular.module('App', [

  'ngRoute',

  'ngResource'

]);

App.run(function ($rootScope) {

    $rootScope.defaultData = {

        lang : 'en',

        api  : 'json',

        slug : '/'

    };
    
});


App.config(function($routeProvider) {

  $routeProvider

      .when('/login', {

          templateUrl: 'app/views/login.html',

          controller: 'loginCtrl'

      })

      .when('/register', {

          templateUrl: 'app/views/register.html',

          controller: 'registerCtrl'

      })

      .when('/profile', {

          templateUrl: 'app/views/profile.html',

          controller: 'profileCtrl'

      })

      .when('/readme', {

          templateUrl: 'app/views/readme.html'
          
      })

      .otherwise({

          redirectTo: '/login'

      });
      
});

App.config(function ($httpProvider) {

    $httpProvider.interceptors.push(function($window, $q) {

        return {

            'responseError': function(response) {

                if (response.status == 401) { // Unathorized

                    $window.location.href = 'index.html';

                }

                return $q.reject(response);
            }

        };

    });

        $httpProvider.defaults.useXDomain = true;

        delete $httpProvider.defaults.headers.common['X-Requested-With'];

});


App.filter('humanize', function() {

    return function(text) {

        if (text) {

            var string = text.replace("_", " ").toLowerCase();

            string = string.charAt(0).toUpperCase() + string.slice(1);

            return string

        };

    };

});

App.directive('form', function (FieldBuilder) {

    return {

        restrict: 'E',

        require: 'form',

        link: function postLink(scope, elem, attrs, formCtrl) {

            FieldBuilder.extendFormController(formCtrl);

        }

    };

});

App.directive("dynamicName", function($compile) {

    return {

        restrict: "A",

        terminal: true,

        priority: 1000,

        link: function(scope, element, attrs) {

            var name = scope.$eval(attrs.dynamicName);

            if (name) {

                element.attr('name', name);

                element.removeAttr("dynamic-name");

                $compile(element)(scope);

            }
        }

    };

});

// Access to UnderscoreJS through Angular Dependency Injection

App.factory('_', function() {

    return window._;

});

App.factory('FieldModernizr', function (tools) {

    return function (control, attrs) {

        if (attrs.type == 'time' && ! Modernizr.inputtypes.time && attrs.ngReadonly) {

            timePicker(control);

        } else if (attrs.type == 'date' && ! Modernizr.inputtypes.date) {

            datePicker(control);

        }
    }

});


