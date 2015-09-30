'use strict';

App.service('postObject', function ($http) {

    this.Json = function(url, data){

        return $http.post(url, data);

    };

});