[Skip to content](https://v9.fakerjs.dev/api/commerce#VPContent)

On this page

# Commerce [​](https://v9.fakerjs.dev/api/commerce\#commerce)

Module to generate commerce and product related entries.

### Overview [​](https://v9.fakerjs.dev/api/commerce\#overview)

For a long product name like `'Incredible Soft Gloves'`, use [`productName()`](https://v9.fakerjs.dev/api/commerce#productname). The product names are generated from a list of adjectives, materials, and products, which can each be accessed separately using [`productAdjective()`](https://v9.fakerjs.dev/api/commerce#productadjective), [`productMaterial()`](https://v9.fakerjs.dev/api/commerce#productmaterial), and [`product()`](https://v9.fakerjs.dev/api/commerce#product). You can also create a description using [`productDescription()`](https://v9.fakerjs.dev/api/commerce#productdescription).

For a department in a shop or product category, use [`department()`](https://v9.fakerjs.dev/api/commerce#department).

You can also create a price using [`price()`](https://v9.fakerjs.dev/api/commerce#price).

## department [​](https://v9.fakerjs.dev/api/commerce\#department)

Returns a department inside a shop.

_Available since v3.0.0_

**Returns:** string

ts

```
function department(): string;
```

### Examples

ts

```
faker.commerce.department() // 'Garden'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L97)

## isbn [​](https://v9.fakerjs.dev/api/commerce\#isbn)

Returns a random [ISBN](https://en.wikipedia.org/wiki/ISBN) identifier.

_Available since v8.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | 10 \| 13 \| { ... } | `{}` | The variant to return or an options object. |
| options.separator? | string | `'-'` | The separator to use in the format. |
| options.variant? | 10 \| 13 | `13` | The variant of the identifier to return.<br>Can be either `10` (10-digit format)<br>or `13` (13-digit format). |

**Returns:** string

ts

```
function isbn(
  options:
    | 10
    | 13
    | {
        variant?: 10 | 13;
        separator?: string;
      } = {}
): string;
```

### Examples

ts

```
faker.commerce.isbn() // '978-0-692-82459-7'
faker.commerce.isbn(10) // '1-155-36404-X'
faker.commerce.isbn(13) // '978-1-60808-867-6'
faker.commerce.isbn({ separator: ' ' }) // '978 0 452 81498 1'
faker.commerce.isbn({ variant: 10, separator: ' ' }) // '0 940319 49 7'
faker.commerce.isbn({ variant: 13, separator: ' ' }) // '978 1 6618 9122 0'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L285)

## price [​](https://v9.fakerjs.dev/api/commerce\#price)

Generates a price between min and max (inclusive).

To better represent real-world prices, when `options.dec` is greater than `0`, the final decimal digit in the returned string will be generated as follows:

- 50% of the time: `9`
- 30% of the time: `5`
- 10% of the time: `0`
- 10% of the time: a random digit from `0` to `9`

_Available since v3.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.dec? | number | `2` | The number of decimal places. |
| options.max? | number | `1000` | The maximum price. |
| options.min? | number | `1` | The minimum price. |
| options.symbol? | string | `''` | The currency value to use. |

**Returns:** string

ts

```
function price(
  options: {
    min?: number;
    max?: number;
    dec?: number;
    symbol?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.commerce.price() // '828.07'
faker.commerce.price({ min: 100 }) // '904.19'
faker.commerce.price({ min: 100, max: 200 }) // '154.55'
faker.commerce.price({ min: 100, max: 200, dec: 0 }) // '133'
faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: '$' }) // '$114'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L140)

## product [​](https://v9.fakerjs.dev/api/commerce\#product)

Returns a short product name.

_Available since v3.0.0_

**Returns:** string

ts

```
function product(): string;
```

### Examples

ts

```
faker.commerce.product() // 'Computer'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L247)

## productAdjective [​](https://v9.fakerjs.dev/api/commerce\#productadjective)

Returns an adjective describing a product.

_Available since v3.0.0_

**Returns:** string

ts

```
function productAdjective(): string;
```

### Examples

ts

```
faker.commerce.productAdjective() // 'Handcrafted'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L219)

## productDescription [​](https://v9.fakerjs.dev/api/commerce\#productdescription)

Returns a product description.

_Available since v5.0.0_

**Returns:** string

ts

```
function productDescription(): string;
```

### Examples

ts

```
faker.commerce.productDescription() // 'Featuring Phosphorus-enhanced technology, our Fish offers unparalleled Modern performance'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L261)

## productMaterial [​](https://v9.fakerjs.dev/api/commerce\#productmaterial)

Returns a material of a product.

_Available since v3.0.0_

**Returns:** string

ts

```
function productMaterial(): string;
```

### Examples

ts

```
faker.commerce.productMaterial() // 'Rubber'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L233)

## productName [​](https://v9.fakerjs.dev/api/commerce\#productname)

Generates a random descriptive product name.

_Available since v3.0.0_

**Returns:** string

ts

```
function productName(): string;
```

### Examples

ts

```
faker.commerce.productName() // 'Incredible Soft Gloves'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/commerce/index.ts#L111)