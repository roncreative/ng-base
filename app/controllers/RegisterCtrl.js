'use strict';

App.controller('registerCtrl', function($scope, $location, postObject, $rootScope, lang) {

    $scope.messages = {};

    $scope.lang = lang[$rootScope.defaultData.lang].registerConfig;

    $scope.register = function(obj){

        postObject.Json(Init.defaultData.api + '/register.json', obj).success(function(data) {

                if(data.success){

                    $location.path('/profile');

                }

                else{
                    
                    $scope.messages = data.message;

                }

        });
    }
});