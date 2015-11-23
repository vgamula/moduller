(function() {
    function modulerr() {
        var obj = {
            module: function(path, cb) {
                var dest = this;
                path.split('.').forEach(function(chunk) {
                    if (!dest[chunk]) {
                        dest[chunk] = {};
                    }
                    dest = dest[chunk];
                });
                cb(dest);
            }
        };
        return obj;
    }
    window.Modulerr = modulerr;
})();
