'use strict';

angular.module('bahmni.common.uiHelper')
    .directive('scrollToObsElement', function ($timeout) {
        return function (scope, elem, attrs) {
            if (attrs.scrollToObsElement) {
                $(elem).focus();
                var scrollPosition = $(elem).offset().top - window.innerHeight / 2;
                if($('#editObs')[0]) {
                    var container = $('#editObs');
                    var scrollTo = elem;
                    scrollPosition = scrollTo.offset().top + container.scrollTop() - (container.offset().top + container.offset().top/2)
                    container.animate({scrollTop : scrollPosition}, 900);
                } else {
                    $(window).animate({scrollTop: scrollPosition}, 900);
                }
            }
        };
    });
