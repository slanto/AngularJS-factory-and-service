(function() {
    angular.module('app').factory('formattingFactory',['$filter', formattingFactory]);

    function formattingFactory($filter) {
        return {
            format: format
        };

        function format(text) {
            return (text.length % 2 === 0) ? $filter('uppercase')(text) : $filter('lowercase')(text);
        };
    }
})();