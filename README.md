# TailwindCSS Crossbrowser Touch Plugin

This plugin adds a collection of variants to style how elements appear on touch and non touch devices. To ensure Crossbrowser compatibility a small line of javascript is needed.

## Installation

Add this plugin to your project:

```bash
# Install via npm
npm install --save-dev tailwindcss-crossbrowser-touch
```

## Usage

Add the javascript to the header of your html.

```html
<script>
  document.documentElement.className += (("ontouchstart" in document.documentElement) ? ' touch' : ' no-touch');
</script>
```

Add the tailwindcss-crossbrowser-touch plugin to your plugins key in your tailwind.js config file. 

```js
plugins: [
    require('tailwindcss-crossbrowser-touch')(),
],

```

Enabling a variant on a module is just like enabling any other variant, locate the modules object and add the variants to the module you would like to enable touch capabilites for:

```js
modules: {
    boxShadow: ['responsive', 'hover', 'focus', 'no-touch', 'no-touch-hover', 'no-touch-group-hover'],
},
```

The following variants are then available:

```css
/* touch  */
.touch .touch\:shadow { ... }

/* no-touch  */
.no-touch .no-touch\:shadow { ... }

/* no-touch-hover */
.no-touch .no-touch-hover\:shadow:hover { ... }

/* no-touch-group-hover */
.no-touch .group:hover .no-touch-hover\:shadow { ... }
```


Once the variant is enabled, using it is just like using any other variant, for example if you have a div which you would like to add a small shadow on touch enabled devices but a large shadow on non touch devices you would do it like so:
```html
<div class="touch:shadow-lg no-touch:shadow">...</div>
```

## Credits

- [tan3](https://tan3.de/)
- [Steadfast Collective](https://github.com/steadfastcollective)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

