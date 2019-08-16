function ioCascade(e){void 0===e&&(e={});var t=e.selector;void 0===t&&(t="[data-observe]");var r=e.delay;void 0===r&&(r=100);var o=e.threshold;void 0===o&&(o=0);var a=e.rootMargin;void 0===a&&(a="0px 100px -100px 100px");var i=e.root;void 0===i&&(i=null);var n=e.once;if(void 0===n&&(n=!1),!("IntersectionObserver"in window))return console.log("observeThis.js says intersection Observer is not supported in your browser"),void document.querySelectorAll(t).forEach(function(e){e.removeAttribute("data-observe")});var s=!0,d=[],v=function(e){if(e.length>=1&&!0===s){s=!1,e[0].classList.add("observed-in");var t=e.filter(function(t){return t!==e[0]});d=t;var o=e[0].getAttribute("data-delay")||r;clearTimeout(a);var a=setTimeout(function(){s=!0,v(d)},o)}},c=function(e){return"child"===e.getAttribute("data-observe")},l=new IntersectionObserver(function(e,t){for(var r=0;r<e.length;r++){var o=e[r],a=o.target;if(o.isIntersecting&&!c(a)){var i=a.querySelectorAll('[data-observe="child"]');i.length?(d.push(a),i.forEach(function(e){d.push(e)}),console.log("added children --\x3e",i),console.log("Queue --\x3e",d),v(d)):(d.push(a),console.log("Queue --\x3e",d),v(d))}o.isIntersecting&&n&&t.unobserve(o.target),o.isIntersecting||(o.target.classList.remove("observed-in"),c(o.target)?(o.target.removeAttribute("data-observe"),o.target.offsetWidth,o.target.setAttribute("data-observe","child")):(o.target.removeAttribute("data-observe"),o.target.offsetWidth,o.target.setAttribute("data-observe","")))}},{root:i,threshold:o,rootMargin:a});Array.prototype.slice.call(document.querySelectorAll(t)).forEach(function(e){return l.observe(e)})}export default ioCascade;