System.register([], function (_export) {
    'use strict';

    _export('register', register);

    function register(appName) {

        var app = angular.module(appName);

        return {
            directive: directive,
            controller: controller,
            service: service,
            provider: provider,
            factory: factory
        };

        function directive(name, constructorFn) {

            constructorFn = _normalizeConstructor(constructorFn);

            if (!constructorFn.prototype.compile) {
                constructorFn.prototype.compile = function () {};
            }

            var originalCompileFn = _cloneFunction(constructorFn.prototype.compile);

            _override(constructorFn.prototype, 'compile', function () {
                return function () {
                    originalCompileFn.apply(this, arguments);

                    if (constructorFn.prototype.link) {
                        return constructorFn.prototype.link.bind(this);
                    }
                };
            });

            var factoryArray = _createFactoryArray(constructorFn);

            app.directive(name, factoryArray);
            return this;
        }

        function controller(name, contructorFn) {
            app.controller(name, contructorFn);
            return this;
        }

        function service(name, contructorFn) {
            app.service(name, contructorFn);
            return this;
        }

        function provider(name, constructorFn) {
            app.provider(name, constructorFn);
            return this;
        }

        function factory(name, constructorFn) {
            constructorFn = _normalizeConstructor(constructorFn);
            var factoryArray = _createFactoryArray(constructorFn);
            app.factory(name, factoryArray);
            return this;
        }

        function _normalizeConstructor(input) {
            var constructorFn;

            if (input.constructor === Array) {
                var injected = input.slice(0, input.length - 1);
                constructorFn = input[input.length - 1];
                constructorFn.$inject = injected;
            } else {
                constructorFn = input;
            }

            return constructorFn;
        }

        function _createFactoryArray(constructorFn) {
            var args = constructorFn.$inject || [];
            var factoryArray = args.slice();
            factoryArray.push(function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var instance = new (babelHelpers.bind.apply(constructorFn, [null].concat(args)))();
                for (var key in instance) {
                    instance[key] = instance[key];
                }
                return instance;
            });

            return factoryArray;
        }

        function _cloneFunction(original) {
            return function () {
                return original.apply(this, arguments);
            };
        }

        function _override(object, methodName, callback) {
            object[methodName] = callback(object[methodName]);
        }
    }

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=../../app/widget/Util.js.map