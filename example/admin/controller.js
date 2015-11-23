window.Project.module('Admin.Controller', function(Controller) {
    Controller.init = function() {
        console.log('init');
        window.Project.Admin.Components.HelloWorld();
    };
});
