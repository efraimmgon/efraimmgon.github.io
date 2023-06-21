(ns blog.core)

(js/console.log "Hello world!")

(comment
  ; build a dev version
  ; clj -m cljs.main -d "blog/out"  -c blog.core -r

  ; build a production version
  ; clj -m cljs.main -O advanced -c "blog.core"
  )