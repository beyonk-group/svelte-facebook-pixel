<script>
  import { onMount } from 'svelte'
  import loader from '@beyonk/async-script-loader'
  import { queue } from './queue.js'

  export let enabled = true
  export let pixels = []

  let _fbq

  onMount(() => {
    if (!enabled) { return }
    init()
  })

  export function init () {
    loader(
      [
        {
          type: 'script',
          url: 'https://connect.facebook.net/en_US/fbevents.js'
        }
      ],
      test,
      callback
    )
  }

  function test () {
    return Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
  }

  function query (cmd, params) {
    _fbq(cmd, ...params)
  }

  function callback () {
    if (!window.fbq) { return }

    pixels.forEach(pixel => query('init', [pixel]))

    return queue.subscribe(queue => {
      let next = queue.length && queue.shift()

      while (next) {
        const { type, params } = next
        query(type, params)
        next = queue.shift()
      }
    })
  }
</script>
