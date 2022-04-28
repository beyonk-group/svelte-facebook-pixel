<script>
  import { onMount } from 'svelte'
  import { queue } from './queue.js'

  export let enabled = true
  export let version = '2.0'
  export let pixels = []

  onMount(() => {
    if (!enabled) { return }
    init()
  })

  export function init () {
    const fn = !function (f, b, e, v, n, t, s) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = version
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    }

    fn(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    callback()
  }

  function event (cmd, params) {
    window.fbq(cmd, ...params)
  }

  function callback () {
    if (!window.fbq) { return }

    pixels.forEach(pixel => event('init', [ pixel ]))

    return queue.subscribe(queue => {
      let next = queue.length && queue.shift()

      while (next) {
        const { type, params } = next
        event(type, params)
        next = queue.shift()
      }
    })
  }
</script>
