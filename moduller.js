(function(define) {
    return define(function() {
        var events = '__events';
        return function() {
            return {
                module: function(path, cb) {
                    var dest = this;
                    var chunks = path.split('.');
                    if (chunks[0] === 'module') {
                        console.error('You have no ability to set path like `module`!');
                        return false;
                    }
                    chunks.forEach(function(chunk) {
                        if (!dest[chunk]) {
                            dest[chunk] = {};
                            dest[chunk][events] = {};
                            const self = dest[chunk];
                            self['on'] = function(name, func) {
                                self[events][name] = func;
                            };
                            self['trigger'] = function() {
                                if (arguments.length) {
                                    funcName = arguments[0];
                                    if (typeof self[events][funcName] === 'function') {
                                        self[events][funcName].apply(self, Array.prototype.slice.call(arguments, 1));
                                    }
                                };
                            };
                        }
                        dest = dest[chunk];
                    });
                    if (cb && typeof cb === 'function') {
                        cb(dest);
                    }
                }
            };
        }
    });
})((typeof define !== 'undefined' ? define : function(factory) {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        return module.exports = factory();
    } else {
        return window.Moduller = factory();
    }
}));
