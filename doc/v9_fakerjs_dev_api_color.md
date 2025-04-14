[Skip to content](https://v9.fakerjs.dev/api/color#VPContent)

On this page

# Color [​](https://v9.fakerjs.dev/api/color\#color)

Module to generate colors.

### Overview [​](https://v9.fakerjs.dev/api/color\#overview)

For a human-readable color like `'red'`, use [`human()`](https://v9.fakerjs.dev/api/color#human).

For a hex color like `#ff0000` used in HTML/CSS, use [`rgb()`](https://v9.fakerjs.dev/api/color#rgb). There are also methods for other color formats such as [`hsl()`](https://v9.fakerjs.dev/api/color#hsl), [`cmyk()`](https://v9.fakerjs.dev/api/color#cmyk), [`hwb()`](https://v9.fakerjs.dev/api/color#hwb), [`lab()`](https://v9.fakerjs.dev/api/color#lab), and [`lch()`](https://v9.fakerjs.dev/api/color#lch).

## cmyk [​](https://v9.fakerjs.dev/api/color\#cmyk)

Returns a CMYK color.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } | `{}` | Options object. |
| options.format? | ColorFormat | `'decimal'` | Format of generated CMYK color. |

**Returns:** string \| number\[\]

ts

```
function cmyk(options?: { format?: ColorFormat }): string | number[];
```

### Examples

ts

```
faker.color.cmyk() // [0.31, 0.52, 0.32, 0.43]
faker.color.cmyk({ format: 'decimal' }) // [0.31, 0.52, 0.32, 0.43]
faker.color.cmyk({ format: 'css' }) // 'cmyk(35%, 39%, 68%, 60%)'
faker.color.cmyk({ format: 'binary' }) // (8-32 bits) x 4
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L503)

## colorByCSSColorSpace [​](https://v9.fakerjs.dev/api/color\#colorbycsscolorspace)

Returns a random color based on CSS color space specified.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } | `{}` | Options object. |
| options.format? | ColorFormat | `'decimal'` | Format of generated RGB color. |
| options.space? | 'sRGB' \| 'display-p3' \| 'rec2020' \| 'a98-rgb' \| 'prophoto-rgb' | `'sRGB'` | Color space to generate the color for. |

**Returns:** string \| number\[\]

ts

```
function colorByCSSColorSpace(options?: {
  format?: ColorFormat;
  space?: CssSpaceType;
}): string | number[];
```

### Examples

ts

```
faker.color.colorByCSSColorSpace() // [0.93, 1, 0.82]
faker.color.colorByCSSColorSpace({ format: 'decimal' }) // [0.12, 0.21, 0.31]
faker.color.colorByCSSColorSpace({ format: 'css', space: 'display-p3' }) // color(display-p3 0.12 1 0.23)
faker.color.colorByCSSColorSpace({ format: 'binary' }) // (8-32 bits x 3)
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L1001)

## cssSupportedFunction [​](https://v9.fakerjs.dev/api/color\#csssupportedfunction)

Returns a random css supported color function name.

_Available since v7.0.0_

**Returns:** 'rgb' \| 'rgba' \| 'hsl' \| 'hsla' \| 'hwb' \| 'cmyk' \| 'lab' \| 'lch' \| 'color'

ts

```
function cssSupportedFunction(): CssFunctionType;
```

### Examples

ts

```
faker.color.cssSupportedFunction() // 'rgb'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L244)

## cssSupportedSpace [​](https://v9.fakerjs.dev/api/color\#csssupportedspace)

Returns a random css supported color space name.

_Available since v7.0.0_

**Returns:** 'sRGB' \| 'display-p3' \| 'rec2020' \| 'a98-rgb' \| 'prophoto-rgb'

ts

```
function cssSupportedSpace(): CssSpaceType;
```

### Examples

ts

```
faker.color.cssSupportedSpace() // 'display-p3'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L256)

## hsl [​](https://v9.fakerjs.dev/api/color\#hsl)

Returns an HSL color.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } | `{}` | Options object. |
| options.format? | ColorFormat | `'decimal'` | Format of generated HSL color. |
| options.includeAlpha? | boolean | `false` | Adds an alpha value to the color (RGBA). |

**Returns:** string \| number\[\]

ts

```
function hsl(options?: {
  format?: ColorFormat;
  includeAlpha?: boolean;
}): string | number[];
```

### Examples

ts

```
faker.color.hsl() // [201, 0.23, 0.32]
faker.color.hsl({ format: 'decimal' }) // [300, 0.21, 0.52]
faker.color.hsl({ format: 'decimal', includeAlpha: true }) // [300, 0.21, 0.52, 0.28]
faker.color.hsl({ format: 'css' }) // hsl(0deg, 100%, 80%)
faker.color.hsl({ format: 'css', includeAlpha: true }) // hsl(0deg 100% 50% / 0.5)
faker.color.hsl({ format: 'binary' }) // (8-32 bits) x 3
faker.color.hsl({ format: 'binary', includeAlpha: true }) // (8-32 bits) x 4
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L610)

## human [​](https://v9.fakerjs.dev/api/color\#human)

Returns a random human-readable color name.

_Available since v7.0.0_

**Returns:** string

ts

```
function human(): string;
```

### Examples

ts

```
faker.color.human() // 'red'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L219)

## hwb [​](https://v9.fakerjs.dev/api/color\#hwb)

Returns an HWB color.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } | `{}` | Options object. |
| options.format? | ColorFormat | `'decimal'` | Format of generated RGB color. |

**Returns:** string \| number\[\]

ts

```
function hwb(options?: { format?: ColorFormat }): string | number[];
```

### Examples

ts

```
faker.color.hwb() // [201, 0.21, 0.31]
faker.color.hwb({ format: 'decimal' }) // [201, 0.21, 0.31]
faker.color.hwb({ format: 'css' }) // 'hwb(354 72% 41%)'
faker.color.hwb({ format: 'binary' }) // (8-32 bits x 3)
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L711)

## lab [​](https://v9.fakerjs.dev/api/color\#lab)

Returns a LAB (CIELAB) color.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } | `{}` | Options object. |
| options.format? | ColorFormat | `'decimal'` | Format of generated RGB color. |

**Returns:** string \| number\[\]

ts

```
function lab(options?: { format?: ColorFormat }): string | number[];
```

### Examples

ts

```
faker.color.lab() // [0.832133, -80.3245, 100.1234]
faker.color.lab({ format: 'decimal' }) // [0.856773, -80.2345, 100.2341]
faker.color.lab({ format: 'css' }) // 'lab(29.2345% 39.3825 20.0664)'
faker.color.lab({ format: 'binary' }) // (8-32 bits x 3)
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L802)

## lch [​](https://v9.fakerjs.dev/api/color\#lch)

Returns an LCH color. Even though upper bound of
chroma in LCH color space is theoretically unbounded,
it is bounded to 230 as anything above will not
make a noticeable difference in the browser.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } | `{}` | Options object. |
| options.format? | ColorFormat | `'decimal'` | Format of generated RGB color. |

**Returns:** string \| number\[\]

ts

```
function lch(options?: { format?: ColorFormat }): string | number[];
```

### Examples

ts

```
faker.color.lch() // [0.522345, 72.2, 56.2]
faker.color.lch({ format: 'decimal' }) // [0.522345, 72.2, 56.2]
faker.color.lch({ format: 'css' }) // 'lch(52.2345% 72.2 56.2)'
faker.color.lch({ format: 'binary' }) // (8-32 bits x 3)
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L898)

## rgb [​](https://v9.fakerjs.dev/api/color\#rgb)

Returns an RGB color.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } | `{}` | Options object. |
| options.casing? | Casing | `'lower'` | Letter type case of the generated hex color. Only applied when `'hex'` format is used. |
| options.format? | 'css' \| 'binary' \| 'decimal' \| 'hex' | `'hex'` | Format of generated RGB color. |
| options.includeAlpha? | boolean | `false` | Adds an alpha value to the color (RGBA). |
| options.prefix? | string | `'#'` | Prefix of the generated hex color. Only applied when `'hex'` format is used. |

**Returns:** string \| number\[\]

ts

```
function rgb(options?: {
  prefix?: string;
  casing?: Casing;
  format?: 'hex' | ColorFormat;
  includeAlpha?: boolean;
}): string | number[];
```

### Examples

ts

```
faker.color.rgb() // '#0d7f26'
faker.color.rgb({ prefix: '0x' }) // '0x9ddc8b'
faker.color.rgb({ casing: 'upper' }) // '#B8A51E'
faker.color.rgb({ casing: 'lower' }) // '#b12f8b'
faker.color.rgb({ prefix: '#', casing: 'lower' }) // '#eb0c16'
faker.color.rgb({ format: 'hex', casing: 'lower' }) // '#bb9d17'
faker.color.rgb({ format: 'decimal' }) // [64, 192,174]
faker.color.rgb({ format: 'css' }) // 'rgb(216, 17, 192)'
faker.color.rgb({ format: 'binary' }) // '00110010 00001000 01110110'
faker.color.rgb({ includeAlpha: true }) // '#f96efb5e'
faker.color.rgb({ format: 'css', includeAlpha: true }) // 'rgba(180, 158, 24, 0.75)'
faker.color.rgb({ format: 'decimal', includeAlpha: true }) // [52, 250, 209, 0.21]
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L397)

## space [​](https://v9.fakerjs.dev/api/color\#space)

Returns a random color space name from the worldwide accepted color spaces.
Source: [https://en.wikipedia.org/wiki/List\_of\_color\_spaces\_and\_their\_uses](https://en.wikipedia.org/wiki/List_of_color_spaces_and_their_uses)

_Available since v7.0.0_

**Returns:** string

ts

```
function space(): string;
```

### Examples

ts

```
faker.color.space() // 'sRGB'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/color/index.ts#L232)