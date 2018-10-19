<p align="center">
  <img width="186" height="90" src="https://user-images.githubusercontent.com/218949/44782765-377e7c80-ab80-11e8-9dd8-fce0e37c235b.png" alt="Beyonk" />
</p>

## Svelte Facebook Pixel Component

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/svelte-facebook-pixel.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/svelte-facebook-pixel)


Facebook pixel tracking component for Svelte.

## Install

```bash
$ npm install --save-dev @beyonk/svelte-facebook-pixel
```

## Usage

```html
<FacebookPixel ref:fb {...fbOptions} />

<script>
  import FacebookPixel from '@beyonk/svelte-facebook-pixel'

	export default {
		data () {
			return {
				fbOptions: {
					pixelId: 123
				}
			}
		},
		
		components: {
			FacebookPixel
		}
	}
</script>
```

You can import FacebookPixel component whenever and wherever you want, the facebook tracking code is only initialised in the first instance.

### Tracking

Simply call the track mehtod:


```html
<FacebookPixel ref:fb />

<script>
  import FacebookPixel from '@beyonk/svelte-facebook-pixel'

	export default {
		components: {
			FacebookPixel
    }
    
    oncreate () {
      this.refs.fb.track('SomeEvent', { some: 'data' })
    }
	}
</script>
```

## Disabling the pixel (for GDPR)

If you'd like to install the pixel disabled, and enable it later after the user has consented to its use, you can do so by setting `enabled: false` in the pixel configuration:

```js
fbOptions: {
  pixelId: 123,
  enabled: false
}
```

Now, in your component, you can call the following in order to start the pixel and track the current page.

```js
this.refs.fb.enable()
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| pixelId  | null     | true     | The unique pixel identifier provided by Facebook.                                         |
| version  | v3.1     | false    | Tracking version.                                                                         |
| enabled  | true     | false    | Disable the Pixel by default when initialized. Can be enabled later through `<component>.enable()`. |

## License

[MIT License](./LICENSE)

## Thanks

Thanks to [William DASILVA](https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module) for his original Nuxt facebook pixel module which inspired this project.