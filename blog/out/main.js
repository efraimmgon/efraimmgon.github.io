window.CLOSURE_UNCOMPILED_DEFINES = {};
window.CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="blog/out/goog/base.js"></script>');
document.write('<script src="blog/out/goog/deps.js"></script>');
document.write('<script src="blog/out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("process.env");</script>');
document.write('<script>goog.require("clojure.browser.repl.preload");</script>');
document.write('<script>goog.require("blog.core");</script>');
