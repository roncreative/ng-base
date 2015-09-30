'use strict';

App.controller('loginCtrl', function($scope, $location, postObject, $rootScope, lang) {

    $scope.lang = lang[$rootScope.defaultData.lang].loginConfig;

    $scope.message = {};

    $scope.message.go = false;
    
    $scope.message.done = false; // alert color : done or failed

    $scope.login = function(obj){

          postObject.Json(Init.defaultData.api+'/login.json', obj).success(function(data) {

              $scope.message.done = false;

                 if(data.success){

                    $location.path( "/profile" );

                 }
                 else{

                    $scope.message.go = true;

                    $scope.message.text = data.message;

                 }

          });
    }

});