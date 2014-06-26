var FF = FF || {};

FF.Main = (function($) {

    var win = $(window),
        doc = $(document);

    var pub = {},
        els = {};

    pub.init = init;

    function init() {

        console.log("main.js init");

    }

    return pub;

})(jQuery);


$(document).ready(function() {

    FF.Main.init();

});