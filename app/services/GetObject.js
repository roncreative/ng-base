'use strict';

App.service('getObject', function ($http) {

    this.Json = function(url){

        return $http.get(url,{responseType : "json"});

    };
    
});