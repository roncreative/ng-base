'use strict';

App.controller('profileCtrl', function($scope, $location, $rootScope, getObject, lang) {

	$scope.lang = lang[$rootScope.defaultData.lang].profileConfig;

    $scope.user = {}

    getObject.Json($rootScope.defaultData.api+'/user.json').success(function(data) {

            $scope.user = data;

    });


});