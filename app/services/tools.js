
App.service('tools', function(){
    
    this.truncate = function(text, length, end) {

        if (isNaN(length))

            length = 50;

        if (end === undefined)

            end = "...";

        if (text.length <= length || text.length - end.length <= length) {

            return text;

        }
        else {

            return String(text).substring(0, length-end.length) + end;
        }

    };

    this.anyChecked = function (object) {

        var log = false;

        angular.forEach(object, function (value) {

            if (value == true) {

                log = true;

            }

        });

        return log;
    }

   this.statusCountObj = function(obj, k) {

        var count = 0;
      
        angular.forEach(obj, function(value) {

              count = value[k] ? count + 1 : count;

        });

        return count;

   }

   this.requestActiveObj = function(obj, k, r) {

        var requestObj = []
      
        angular.forEach(obj, function(value) {

              if(value[k]){ 

                 if(value[r]) requestObj.push(value[r]);

                 else requestObj.push(value); 

              }

        });

        return requestObj;

   }

});