!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("iocascade",t):(e=e||self).iocascade=t()}(this,function(){"use strict";return function(e){void 0===e&&(e={});var t=e.selector;void 0===t&&(t="[data-io]");var o=e.delay;void 0===o&&(o=100);var r=e.threshold;void 0===r&&(r=0);var i=e.rootMargin;void 0===i&&(i="0px 100px 0px 100px");var n=e.root;if(void 0===n&&(n=null),!("IntersectionObserver"in window))return console.log("The javascript feature intersection Observer is not supported in your browser. We suggest upgrading to a more modern browser for a better experience."),void document.querySelectorAll(t).forEach(function(e){e.removeAttribute("data-io")});var a=!0,c=[],s=function(e){return"child"===e.getAttribute("data-io")},u=function(e){if(e.length>=1&&a){a=!1;var t=e.shift(),r=t.getAttribute("data-delay")||o;setTimeout(function(){t.classList.add("io-in"),a=!0,u(e),console.log("timeout ran")},r)}},d=new IntersectionObserver(function(e,t){for(var o=0;o<e.length;o++){var i=e[o],n=i.target;if(i.intersectionRatio>=r&&!s(n)){var a=n.querySelectorAll('[data-io="child"]');a.length?(c.push(n),a.forEach(function(e){c.push(e)}),u(c)):i.isIntersecting&&(c.push(n),u(c)),t.unobserve(i.target)}}},{root:n,threshold:r,rootMargin:i});Array.prototype.slice.call(document.querySelectorAll(t)).forEach(function(e){return d.observe(e)})}});