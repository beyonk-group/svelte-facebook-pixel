<script>
  import { fb } from '../../src/index.js'

  const currency = 'SvelteBucks'
  const items = [ { id: 'prd-1', name: 'Svelte Swag', quantity: 1, price: 10 } ]
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<main>
  <h1>Home Page</h1>
  <p>Welcome this is my website</p>

  <button on:click={e => fb.trackCustom('Voucher', { currency, discount: 50 })}>
    Earn 50 SvelteBucks
  </button>
  <button on:click={e => fb.track('Lead', { currency, items, cost: 10 })}>
    Add Swag to Cart
  </button>
  <button on:click={e => fb.trackSingle('ABC123', 'Purchase', { currency, items, cost: 10 })}>
    Purchase Swag
  </button>
</main>
