'use strict';

App.service('Messages', function (_, $rootScope, lang) {


    var messages = lang[$rootScope.defaultData.lang].directives.messages;

    this.get = function (key, params) {
        if ( _.isUndefined(messages[key])) return key;
        var msg = messages[key];
        for (var p in params) {
            msg = msg.replace(':' + p, params[p]);
        }
        return msg;
    }

    this.set = function (key, message) {
        messages[key] = message;
    }
});