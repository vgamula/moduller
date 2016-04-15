(function(define) {
    return define(function() {
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
                        }
                        dest = dest[chunk];
                    });
                    if (cb && typeof cb === 'function') {
                        cb(dest);
                    }
                }
            };
        };
    });
})(typeof define !== 'undefined' ? define : function(factory) {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        module.exports = factory();
        return module.exports;
    } else {
        window.Moduller = factory();
        return window.Moduller;
    }
});
