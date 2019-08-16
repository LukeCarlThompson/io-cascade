!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("iocascade",t):(e=e||self).iocascade=t()}(this,function(){"use strict";return function(e){void 0===e&&(e={});var t=e.selector;void 0===t&&(t="[data-observe]");var r=e.delay;void 0===r&&(r=100);var o=e.threshold;void 0===o&&(o=0);var i=e.rootMargin;void 0===i&&(i="0px 100px -100px 100px");var n=e.root;void 0===n&&(n=null);var s=e.once;if(void 0===s&&(s=!1),!("IntersectionObserver"in window))return console.log("observeThis.js says intersection Observer is not supported in your browser"),void document.querySelectorAll(t).forEach(function(e){e.removeAttribute("data-observe")});var a=!0,d=[],c=function(e){if(e.length>=1&&!0===a){a=!1,e[0].classList.add("observed-in");var t=e.filter(function(t){return t!==e[0]});d=t;var o=e[0].getAttribute("data-delay")||r;clearTimeout(i);var i=setTimeout(function(){a=!0,c(d)},o)}},u=function(e){return"child"===e.getAttribute("data-observe")},l=new IntersectionObserver(function(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=o.target;if(o.isIntersecting&&!u(i)){var n=i.querySelectorAll('[data-observe="child"]');n.length?(d.push(i),n.forEach(function(e){d.push(e)}),console.log("added children --\x3e",n),console.log("Queue --\x3e",d),c(d)):(d.push(i),console.log("Queue --\x3e",d),c(d))}o.isIntersecting&&s&&t.unobserve(o.target),o.isIntersecting||(o.target.classList.remove("observed-in"),u(o.target)?(o.target.removeAttribute("data-observe"),o.target.offsetWidth,o.target.setAttribute("data-observe","child")):(o.target.removeAttribute("data-observe"),o.target.offsetWidth,o.target.setAttribute("data-observe","")))}},{root:n,threshold:o,rootMargin:i});Array.prototype.slice.call(document.querySelectorAll(t)).forEach(function(e){return l.observe(e)})}});