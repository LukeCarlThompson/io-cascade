function ioCascade(e){void 0===e&&(e={});var t=e.selector;void 0===t&&(t="[data-io]");var o=e.delay;void 0===o&&(o=100);var r=e.threshold;void 0===r&&(r=0);var i=e.rootMargin;void 0===i&&(i="0px 100px -100px 100px");var n=e.root;void 0===n&&(n=null);var a=e.once;if(void 0===a&&(a=!1),!("IntersectionObserver"in window))return console.log("observeThis.js says intersection Observer is not supported in your browser"),void document.querySelectorAll(t).forEach(function(e){e.removeAttribute("data-io")});var s=!0,c=[],l=function(e){return"child"===e.getAttribute("data-io")},d=function(e){if(e.length>=1&&s){s=!1;var t=e.shift(),r=t.getAttribute("data-delay")||o;setTimeout(function(){t.classList.add("observed-in"),s=!0,d(e),console.log("timeout ran")},r)}},u=new IntersectionObserver(function(e,t){for(var o=0;o<e.length;o++){var r=e[o],i=r.target;if(r.isIntersecting&&!l(i)){var n=i.querySelectorAll('[data-io="child"]');n.length?(c.push(i),n.forEach(function(e){c.push(e)}),d(c)):r.isIntersecting&&(c.push(i),d(c))}r.isIntersecting&&a&&t.unobserve(r.target)}},{root:n,threshold:r,rootMargin:i});Array.prototype.slice.call(document.querySelectorAll(t)).forEach(function(e){return u.observe(e)})}export default ioCascade;