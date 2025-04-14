[Skip to content](https://v9.fakerjs.dev/api/number#VPContent)

On this page

# Number [​](https://v9.fakerjs.dev/api/number\#number)

Module to generate numbers of any kind.

### Overview [​](https://v9.fakerjs.dev/api/number\#overview)

For simple integers, use [`int()`](https://v9.fakerjs.dev/api/number#int). For decimal/floating-point numbers, use [`float()`](https://v9.fakerjs.dev/api/number#float).

For numbers not in base-10, you can use [`hex()`](https://v9.fakerjs.dev/api/number#hex), [`octal()`](https://v9.fakerjs.dev/api/number#octal) and [`binary()`](https://v9.fakerjs.dev/api/number#binary) \`.

### Related modules [​](https://v9.fakerjs.dev/api/number\#related-modules)

- For numeric strings of a given length, use [`faker.string.numeric()`](https://v9.fakerjs.dev/api/string#numeric).
- For credit card numbers, use [`faker.finance.creditCardNumber()`](https://v9.fakerjs.dev/api/finance#creditcardnumber).

## bigInt [​](https://v9.fakerjs.dev/api/number\#bigint)

Returns a [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) number.
The bounds are inclusive.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | string \| number \| bigint \| boolean \| { ... } | `{}` | Maximum value or options object. |
| options.max? | string \| number \| bigint \| boolean | `min + 999999999999999n` | Upper bound for generated bigint. |
| options.min? | string \| number \| bigint \| boolean | `0n` | Lower bound for generated bigint. |
| options.multipleOf? | string \| number \| bigint \| boolean | `1n` | The generated bigint will be a multiple of this parameter. |

**Returns:** bigint

**Throws:** When `min` is greater than `max`.
When there are no suitable bigint between `min` and `max`.
When `multipleOf` is not a positive bigint.

ts

```
function bigInt(
  options:
    | bigint
    | number
    | string
    | boolean
    | {
        min?: bigint | number | string | boolean;
        max?: bigint | number | string | boolean;
        multipleOf?: bigint | number | string | boolean;
      } = {}
): bigint;
```

### Examples

ts

```
faker.number.bigInt() // 55422n
faker.number.bigInt(100n) // 52n
faker.number.bigInt({ min: 1000000n }) // 431433n
faker.number.bigInt({ max: 100n }) // 42n
faker.number.bigInt({ multipleOf: 7n }) // 35n
faker.number.bigInt({ min: 10n, max: 100n }) // 36n
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/number/index.ts#L390)

## binary [​](https://v9.fakerjs.dev/api/number\#binary)

Returns a [binary](https://en.wikipedia.org/wiki/Binary_number) number.
The bounds are inclusive.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Maximum value or options object. |
| options.max? | number | `1` | Upper bound for generated number. |
| options.min? | number | `0` | Lower bound for generated number. |

**Returns:** string

**Throws:** When `min` is greater than `max`.
When there are no integers between `min` and `max`.

ts

```
function binary(
  options:
    | number
    | {
        min?: number;
        max?: number;
      } = {}
): string;
```

### Examples

ts

```
faker.number.binary() // '1'
faker.number.binary(255) // '110101'
faker.number.binary({ min: 0, max: 65535 }) // '10110101'
```

### See Also

- [faker.string.binary(): For generating a `binary string` with a given length (range).](https://v9.fakerjs.dev/api/string#binary)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/number/index.ts#L239)

## float [​](https://v9.fakerjs.dev/api/number\#float)

Returns a single random floating-point number, by default between `0.0` and `1.0`. To change the range, pass a `min` and `max` value. To limit the number of decimal places, pass a `multipleOf` or `fractionDigits` parameter.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Upper bound or options object. |
| options.fractionDigits? | number |  | The maximum number of digits to appear after the decimal point, for example `2` will round to 2 decimal points. Only one of `multipleOf` or `fractionDigits` should be passed. |
| options.max? | number | `1.0` | Upper bound for generated number, exclusive, unless `multipleOf` or `fractionDigits` are passed. |
| options.min? | number | `0.0` | Lower bound for generated number, inclusive. |
| options.multipleOf? | number |  | The generated number will be a multiple of this parameter. Only one of `multipleOf` or `fractionDigits` should be passed. |

**Returns:** number

**Throws:** When `min` is greater than `max`.
When `multipleOf` is not a positive number.
When `fractionDigits` is negative.
When `fractionDigits` and `multipleOf` is passed in the same options object.

ts

```
function float(
  options:
    | number
    | {
        min?: number;
        max?: number;
        fractionDigits?: number;
        multipleOf?: number;
      } = {}
): number;
```

### Examples

ts

```
faker.number.float() // 0.5688541042618454
faker.number.float(3) // 2.367973240558058
faker.number.float({ max: 100 }) // 17.3687307164073
faker.number.float({ min: 20, max: 30 }) // 23.94764115102589
faker.number.float({ multipleOf: 0.25, min: 0, max:10 }) // 7.75
faker.number.float({ fractionDigits: 1 }) // 0.9
faker.number.float({ min: 10, max: 100, multipleOf: 0.02 }) // 35.42
faker.number.float({ min: 10, max: 100, fractionDigits: 3 }) // 65.716
faker.number.float({ min: 10, max: 100, multipleOf: 0.001 }) // 65.716 - same as above
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/number/index.ts#L133)

## hex [​](https://v9.fakerjs.dev/api/number\#hex)

Returns a lowercase [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) number.
The bounds are inclusive.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Maximum value or options object. |
| options.max? | number | `15` | Upper bound for generated number. |
| options.min? | number | `0` | Lower bound for generated number. |

**Returns:** string

**Throws:** When `min` is greater than `max`.
When there are no integers between `min` and `max`.

ts

```
function hex(
  options:
    | number
    | {
        min?: number;
        max?: number;
      } = {}
): string;
```

### Examples

ts

```
faker.number.hex() // 'b'
faker.number.hex(255) // '9d'
faker.number.hex({ min: 0, max: 65535 }) // 'af17'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/number/index.ts#L337)

## int [​](https://v9.fakerjs.dev/api/number\#int)

Returns a single random integer between zero and the given max value or the given range.
The bounds are inclusive.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Maximum value or options object. |
| options.max? | number | `Number.MAX_SAFE_INTEGER` | Upper bound for generated number. |
| options.min? | number | `0` | Lower bound for generated number. |
| options.multipleOf? | number | `1` | Generated number will be a multiple of the given integer. |

**Returns:** number

**Throws:** When `min` is greater than `max`.
When there are no suitable integers between `min` and `max`.
When `multipleOf` is not a positive integer.

ts

```
function int(
  options:
    | number
    | {
        min?: number;
        max?: number;
        multipleOf?: number;
      } = {}
): number;
```

### Examples

ts

```
faker.number.int() // 2900970162509863
faker.number.int(100) // 52
faker.number.int({ min: 1000000 }) // 2900970162509863
faker.number.int({ max: 100 }) // 42
faker.number.int({ min: 10, max: 100 }) // 57
faker.number.int({ min: 10, max: 100, multipleOf: 10 }) // 50
```

### See Also

- [faker.string.numeric(): For generating a `string` of digits with a given length (range).](https://v9.fakerjs.dev/api/string#numeric)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/number/index.ts#L44)

## octal [​](https://v9.fakerjs.dev/api/number\#octal)

Returns an [octal](https://en.wikipedia.org/wiki/Octal) number.
The bounds are inclusive.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Maximum value or options object. |
| options.max? | number | `7` | Upper bound for generated number. |
| options.min? | number | `0` | Lower bound for generated number. |

**Returns:** string

**Throws:** When `min` is greater than `max`.
When there are no integers between `min` and `max`.

ts

```
function octal(
  options:
    | number
    | {
        min?: number;
        max?: number;
      } = {}
): string;
```

### Examples

ts

```
faker.number.octal() // '5'
faker.number.octal(255) // '377'
faker.number.octal({ min: 0, max: 65535 }) // '4766'
```

### See Also

- [faker.string.octal(): For generating an `octal string` with a given length (range).](https://v9.fakerjs.dev/api/string#octal)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/number/index.ts#L289)

## romanNumeral [​](https://v9.fakerjs.dev/api/number\#romannumeral)

Returns a roman numeral in String format.
The bounds are inclusive.

_Available since v9.2.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Maximum value or options object. |
| options.max? | number | `3999` | Upper bound for generated number. |
| options.min? | number | `1` | Lower bound for generated number. |

**Returns:** string

**Throws:** When `min` is greater than `max`.
When `min`, `max` is not a number.
When `min` is less than `1`.
When `max` is greater than `3999`.

ts

```
function romanNumeral(
  options:
    | number
    | {
        min?: number;
        max?: number;
      } = {}
): string;
```

### Examples

ts

```
faker.number.romanNumeral() // "CMXCIII"
faker.number.romanNumeral(5) // "III"
faker.number.romanNumeral({ min: 10 }) // "XCIX"
faker.number.romanNumeral({ max: 20 }) // "XVII"
faker.number.romanNumeral({ min: 5, max: 10 }) // "VII"
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/number/index.ts#L486)