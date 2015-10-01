'use strict';

App.directive('field', function (FieldBuilder) {
    return {
        require:   "^form",
        restrict:  "AE",
        replace:   true,
        templateUrl: function (element, attr) {
            return FieldBuilder.getTemplateUrl(attr.type);
        },
        scope: {
            model:       "=",
            type:        "@",
            id:          "@",
            label:       "=",
            placeholder: "=",
            ngrequired:  "@",
            options:     "=",
            mask:        "@"
        },
        compile: function (element, attrs) {
            FieldBuilder.setDefaultAttributes(attrs);
            var control = FieldBuilder.getControl(element, attrs.type);
            FieldBuilder.setControlAttributes(control, attrs);
            return function(scope, element, attrs, form) {
                scope.field = form[control.attr('name')];
                scope.$watch('field.$error', function (errors) {
                    console.log(attrs.type);
                    scope.field.message = FieldBuilder.getErrorMessage(errors, attrs);
                }, true);
            }
        }
    }
});

App.directive('input', function (FieldModernizr) {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var unwatch = scope.$watch('model', function (value, oldValue) {
                if (value) {
                    FieldModernizr(element, attrs);
                    unwatch();
                }
            });
        }
    }
});

App.directive('radios', function (FieldBuilder) {
    return {
        restrict:   'AE',
        replace:    true,
        templateUrl: function (element, attr) {
            return FieldBuilder.getTemplateUrl("radios");
        },
        scope: {
            model:      "=",
            id:         "@",
            label:      "=",
            ngrequired: "@",
            options:    "="
        },
        compile: function (element, attrs) {
            FieldBuilder.setDefaultAttributes(attrs);
            return function(scope, element, attrs) {
                scope.name = FieldBuilder.getName(attrs);
                scope.field = {};
            }
        }
    }
});


App.directive('password', function (FieldBuilder, FieldModernizr) {
    return {
        require:   "^form",
        restrict:  "AE",
        replace:   true,
        templateUrl: function (element, attr) {
            return FieldBuilder.getTemplateUrl(attr.type);
        },
        scope: {
            model:       "=",
            id:          "@",
            label:       "=",
            match:       "=",
            placeholder: "@",
            type:        "@",
            ngrequired:  "@",
            lengthmin:   "@"
        },
        compile: function (element, attrs) {

            FieldBuilder.setDefaultAttributes(attrs);

            var control = FieldBuilder.getControl(element, attrs.type);

            FieldBuilder.setControlAttributes(control, attrs);

            return function(scope, element, attrs, form) {
                
                scope.field = form[control.attr('name')];

                scope.$watch('[model, match, field.$error]', function () {

                    scope.model = scope.model ? scope.model : "";

                    if (scope.match) {

                            scope.field.$setValidity('match', (scope.model == scope.match) || ((scope.model.length == 0) && (scope.ngrequired == 'false')) );

                    }

                    if (scope.lengthmin) {

                            scope.field.$setValidity('lengthmin', (scope.model.length >= scope.lengthmin) || ((scope.model.length == 0) && (scope.ngrequired == 'false')) ); 

                    }

                    scope.field.message = FieldBuilder.getErrorMessage(scope.field.$error, attrs);

                }, true);

            }
        }
    }
});
