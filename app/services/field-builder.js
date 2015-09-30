'use strict';

App.service('FieldBuilder', function ($filter, Messages, _) {

    var defaultRequired = false;
   
    this.getType = function (attrs) {
        if (typeof attrs.type == "undefined") {
            return "text";
        }
        return attrs.type;
    };

    this.getName = function (attrs) {
        if (_.isUndefined(attrs.name)) {
            return attrs.model.substr(attrs.model.indexOf('.') + 1);
        }
        return attrs.name;
    }

    this.getId = function (attrs) {
        if (_.isUndefined(attrs.id)) {
            return attrs.model.replace('.', '_');
        }

        return attrs.id;
    };

    this.setDefaultRequired = function (value) {
        defaultRequired = value;
    };

    this.getDefaultRequired = function () {
        return defaultRequired;
    };

    this.getRequired = function (attrs) {
        if (typeof attrs.required == "undefined") {
            return this.getDefaultRequired();
        }
    };

    this.getLabel = function (attrs) {
        if (typeof attrs.label == "undefined") {
            return $filter('humanize')(attrs.name.replace('.', '_'));
        }

        return attrs.label;
    };

    this.attrs = {
        default:  ['ng-pattern'],
        text:     ['ng-maxlength', 'ng-minlength'],
        textarea: ['ng-maxlength', 'ng-minlength'],
        tel:      ['ng-maxlength', 'ng-minlength'],
        number:   ['min', 'max'],
        password: ['ng-minlength', 'ng-maxlength', 'match'],
        radio:    ['value'],
        time:     ['step', 'readonly']
    };

    this.templates = {
        default:       'app/views/field/default.html',
        select:        'app/views/field/select.html',
        checkbox:      'app/views/field/checkbox.html',
        radio:         'app/views/field/radio.html',
        textarea:      'app/views/field/textarea.html',
        radios:        'app/views/field/radios.html',
        password:      'app/views/field/password.html'
    };

    this.getTemplateUrl = function (type) {
        if (typeof (this.templates[type]) == "undefined") {
            return this.templates['default'];
        }

        return this.templates[type];
    };

    this.getValidAttrs = function (type) {
        var attrs = this.attrs.default;
        if (typeof (this.attrs[type]) != "undefined") {
            return attrs.concat(this.attrs[type]);
        }

        return attrs;
    };

    this.getControl = function (element, type) {
        switch (type) {
            case 'select':
                return element.find('select');
            case 'textarea':
                return element.find('textarea');
            default:
                return element.find('input');
        }
    };

    this.setDefaultAttributes = function (attrs) {
        attrs.type     = this.getType(attrs);
        attrs.id       = this.getId(attrs);
        attrs.label    = this.getLabel(attrs);
        attrs.required = this.getRequired(attrs);
    }

    this.setControlAttributes = function (control, attrs) {
        control.attr('name', this.getName(attrs));

        this.getValidAttrs(attrs.type).forEach(function (name) {
            var attrName = name.replace(/^ng-/, '');
            if (typeof attrs[attrName] != "undefined") {
                control.attr(name, attrs[attrName]);
            }
        });
    };


    this.getErrorKey = function (errorsObject) {
        var errorsArray = _.pairs(errorsObject);
        var activeError = _.find(errorsArray, function (e) { return e[1]; });
        if (_.isUndefined(activeError)) return "";
        return activeError[0];
    };

    this.getErrorMessage = function (errors, attrs) {
        return Messages.get(this.getErrorKey(errors), attrs);
    };

    this.getErrorMessageValue = function (errors, attrs, value) {
        return Messages.getValue(this.getErrorKey(errors), attrs, value);
    };

    this.extendFormController = function (form) {
        if ( ! _.isUndefined(form.addErrors)) return;
        form.addErrorsArray = function (errorsArray, prefix) {
            if (typeof(prefix) == 'undefined') {
                prefix = 'form';
            }
            for (var i in errorsArray) {
                this[prefix + i].addErrors = this.addErrors;
                this[prefix + i].addErrors(errorsArray[i]);
            }
        }
        form.addErrors = function (errors) {
            for (var name in errors) {
                if (_.isUndefined(this[name])) {
                    this[name] = {};
                }
                this[name].$dirty = true;
                this[name].$invalid = true;
                this[name].message = errors[name];
            }
        }
    };

});