[Skip to content](https://v9.fakerjs.dev/api/string#VPContent)

On this page

# String [​](https://v9.fakerjs.dev/api/string\#string)

Module to generate string related entries.

### Overview [​](https://v9.fakerjs.dev/api/string\#overview)

For a string containing just A-Z characters, use [`alpha()`](https://v9.fakerjs.dev/api/string#alpha). To add digits too, use [`alphanumeric()`](https://v9.fakerjs.dev/api/string#alphanumeric). If you only want punctuation marks/symbols, use [`symbol()`](https://v9.fakerjs.dev/api/string). For a full set of ASCII characters, use [`sample()`](https://v9.fakerjs.dev/api/string#sample). For a custom set of characters, use [`fromCharacters()`](https://v9.fakerjs.dev/api/string#fromcharacters).

For strings of base-ten digits, use [`numeric()`](https://v9.fakerjs.dev/api/string#numeric). For other bases, use [`binary()`](https://v9.fakerjs.dev/api/string#binary), [`octal()`](https://v9.fakerjs.dev/api/string#octal), or [`hexadecimal()`](https://v9.fakerjs.dev/api/string#hexadecimal)).

You can generate standard ID strings using [`uuid()`](https://v9.fakerjs.dev/api/string#uuid) or [`nanoid()`](https://v9.fakerjs.dev/api/string#nanoid).

### Related modules [​](https://v9.fakerjs.dev/api/string\#related-modules)

- Emoji can be found at [`faker.internet.emoji()`](https://v9.fakerjs.dev/api/internet#emoji).
- The [`faker.helpers`](https://v9.fakerjs.dev/api/helpers) module includes a number of string related methods.

## alpha [​](https://v9.fakerjs.dev/api/string\#alpha)

Generating a string consisting of letters in the English alphabet.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Either the length of the string to generate or the optional options object. |
| options.casing? | Casing | `'mixed'` | The casing of the characters. |
| options.exclude? | string \| Array<AlphaChar \| string> | `[]` | An array with characters which should be excluded in the generated string. |
| options.length? | number \| { min: number; max: number; } | `1` | The length of the string to generate either as a fixed length or as a length range. |

**Returns:** string

ts

```
function alpha(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        casing?: Casing;
        exclude?: ReadonlyArray<LiteralUnion<AlphaChar>> | string;
      } = {}
): string;
```

### Examples

ts

```
faker.string.alpha() // 'b'
faker.string.alpha(10) // 'fEcAaCVbaR'
faker.string.alpha({ length: { min: 5, max: 10 } }) // 'HcVrCf'
faker.string.alpha({ casing: 'lower' }) // 'r'
faker.string.alpha({ exclude: ['W'] }) // 'Z'
faker.string.alpha({ length: 5, casing: 'upper', exclude: ['A'] }) // 'DTCIC'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L173)

## alphanumeric [​](https://v9.fakerjs.dev/api/string\#alphanumeric)

Generating a string consisting of alpha characters and digits.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Either the length of the string to generate or the optional options object. |
| options.casing? | Casing | `'mixed'` | The casing of the characters. |
| options.exclude? | string \| Array<AlphaNumericChar \| string> | `[]` | An array of characters and digits which should be excluded in the generated string. |
| options.length? | number \| { min: number; max: number; } | `1` | The length of the string to generate either as a fixed length or as a length range. |

**Returns:** string

ts

```
function alphanumeric(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        casing?: Casing;
        exclude?: ReadonlyArray<LiteralUnion<AlphaNumericChar>> | string;
      } = {}
): string;
```

### Examples

ts

```
faker.string.alphanumeric() // '2'
faker.string.alphanumeric(5) // '3e5V7'
faker.string.alphanumeric({ length: { min: 5, max: 10 } }) // 'muaApG'
faker.string.alphanumeric({ casing: 'upper' }) // 'A'
faker.string.alphanumeric({ exclude: ['W'] }) // 'r'
faker.string.alphanumeric({ length: 5, exclude: ["a"] }) // 'x1Z7f'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L267)

## binary [​](https://v9.fakerjs.dev/api/string\#binary)

Returns a [binary](https://en.wikipedia.org/wiki/Binary_number) string.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.length? | number \| { min: number; max: number; } | `1` | The length of the string (excluding the prefix) to generate either as a fixed length or as a length range. |
| options.prefix? | string | `'0b'` | Prefix for the generated number. |

**Returns:** string

ts

```
function binary(
  options: {
    length?:
      | number
      | {
          min: number;
          max: number;
        };
    prefix?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.string.binary() // '0b1'
faker.string.binary({ length: 10 }) // '0b1101011011'
faker.string.binary({ length: { min: 5, max: 10 } }) // '0b11101011'
faker.string.binary({ prefix: '0b' }) // '0b1'
faker.string.binary({ length: 10, prefix: 'bin_' }) // 'bin_1101011011'
```

### See Also

- [faker.number.binary(): For generating a binary number (within a range).](https://v9.fakerjs.dev/api/number#binary)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L362)

## fromCharacters [​](https://v9.fakerjs.dev/api/string\#fromcharacters)

Generates a string from the given characters.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| characters | string \| string\[\] |  | The characters to use for the string. Can be a string or an array of characters.<br>If it is an array, then each element is treated as a single character even if it is a string with multiple characters. |
| length | number \| { ... } | `1` | The length of the string to generate either as a fixed length or as a length range. |
| length.max | number |  | The maximum length of the string to generate. |
| length.min | number |  | The minimum length of the string to generate. |

**Returns:** string

ts

```
function fromCharacters(
  characters: string | ReadonlyArray<string>,
  length:
    | number
    | {
        min: number;
        max: number;
      } = 1
): string;
```

### Examples

ts

```
faker.string.fromCharacters('abc') // 'c'
faker.string.fromCharacters(['a', 'b', 'c']) // 'a'
faker.string.fromCharacters('abc', 10) // 'cbbbacbacb'
faker.string.fromCharacters('abc', { min: 5, max: 10 }) // 'abcaaaba'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L118)

## hexadecimal [​](https://v9.fakerjs.dev/api/string\#hexadecimal)

Returns a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) string.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.casing? | Casing | `'mixed'` | Casing of the generated number. |
| options.length? | number \| { min: number; max: number; } | `1` | The length of the string (excluding the prefix) to generate either as a fixed length or as a length range. |
| options.prefix? | string | `'0x'` | Prefix for the generated number. |

**Returns:** string

ts

```
function hexadecimal(
  options: {
    length?:
      | number
      | {
          min: number;
          max: number;
        };
    casing?: Casing;
    prefix?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.string.hexadecimal() // '0xB'
faker.string.hexadecimal({ length: 10 }) // '0xaE13d044cB'
faker.string.hexadecimal({ length: { min: 5, max: 10 } }) // '0x7dEf7FCD'
faker.string.hexadecimal({ prefix: '0x' }) // '0xE'
faker.string.hexadecimal({ casing: 'lower' }) // '0xf'
faker.string.hexadecimal({ length: 10, prefix: '#' }) // '#f12a974eB1'
faker.string.hexadecimal({ length: 10, casing: 'upper' }) // '0xE3F38014FB'
faker.string.hexadecimal({ casing: 'lower', prefix: '' }) // 'd'
faker.string.hexadecimal({ length: 10, casing: 'mixed', prefix: '0x' }) // '0xAdE330a4D1'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L472)

## nanoid [​](https://v9.fakerjs.dev/api/string\#nanoid)

Generates a [Nano ID](https://github.com/ai/nanoid).

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| length | number \| { ... } | `21` | The length of the string to generate either as a fixed length or as a length range. |
| length.max | number |  | The maximum length of the Nano ID to generate. |
| length.min | number |  | The minimum length of the Nano ID to generate. |

**Returns:** string

ts

```
function nanoid(
  length:
    | number
    | {
        min: number;
        max: number;
      } = 21
): string;
```

### Examples

ts

```
faker.string.nanoid() // ptL0KpX_yRMI98JFr6B3n
faker.string.nanoid(10) // VsvwSdm_Am
faker.string.nanoid({ min: 13, max: 37 }) // KIRsdEL9jxVgqhBDlm
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L754)

## numeric [​](https://v9.fakerjs.dev/api/string\#numeric)

Generates a given length string of digits.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | Either the length of the string to generate or the optional options object. |
| options.allowLeadingZeros? | boolean | `true` | Whether leading zeros are allowed or not. |
| options.exclude? | string \| Array<NumericChar \| string> | `[]` | An array of digits which should be excluded in the generated string. |
| options.length? | number \| { min: number; max: number; } | `1` | The length of the string to generate either as a fixed length or as a length range. |

**Returns:** string

ts

```
function numeric(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        allowLeadingZeros?: boolean;
        exclude?: ReadonlyArray<LiteralUnion<NumericChar>> | string;
      } = {}
): string;
```

### Examples

ts

```
faker.string.numeric() // '2'
faker.string.numeric(5) // '31507'
faker.string.numeric(42) // '06434563150765416546479875435481513188548'
faker.string.numeric({ length: { min: 5, max: 10 } }) // '197089478'
faker.string.numeric({ length: 42, allowLeadingZeros: false }) // '72564846278453876543517840713421451546115'
faker.string.numeric({ length: 6, exclude: ['0'] }) // '943228'
```

### See Also

- [faker.number.int(): For generating a number (within a range).](https://v9.fakerjs.dev/api/number#int)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L568)

## octal [​](https://v9.fakerjs.dev/api/string\#octal)

Returns an [octal](https://en.wikipedia.org/wiki/Octal) string.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.length? | number \| { min: number; max: number; } | `1` | The length of the string (excluding the prefix) to generate either as a fixed length or as a length range. |
| options.prefix? | string | `'0o'` | Prefix for the generated number. |

**Returns:** string

ts

```
function octal(
  options: {
    length?:
      | number
      | {
          min: number;
          max: number;
        };
    prefix?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.string.octal() // '0o3'
faker.string.octal({ length: 10 }) // '0o1526216210'
faker.string.octal({ length: { min: 5, max: 10 } }) // '0o15263214'
faker.string.octal({ prefix: '0o' }) // '0o7'
faker.string.octal({ length: 10, prefix: 'oct_' }) // 'oct_1542153414'
```

### See Also

- [faker.number.octal(): For generating an octal number (within a range).](https://v9.fakerjs.dev/api/number#octal)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L414)

## sample [​](https://v9.fakerjs.dev/api/string\#sample)

Returns a string containing UTF-16 chars between 33 and 125 ( `!` to `}`).

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| length | number \| { ... } | `10` | The length of the string (excluding the prefix) to generate either as a fixed length or as a length range. |
| length.max | number |  | The maximum length of the string to generate. |
| length.min | number |  | The minimum length of the string to generate. |

**Returns:** string

ts

```
function sample(
  length:
    | number
    | {
        min: number;
        max: number;
      } = 10
): string;
```

### Examples

ts

```
faker.string.sample() // 'Zo!.:*e>wR'
faker.string.sample(5) // '6Bye8'
faker.string.sample({ min: 5, max: 10 }) // 'FeKunG'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L663)

## symbol [​](https://v9.fakerjs.dev/api/string\#symbol)

Returns a string containing only special characters from the following list:

txt

```
! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
```

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| length | number \| { ... } | `1` | The length of the string to generate either as a fixed length or as a length range. |
| length.max | number |  | The maximum length of the string to generate. |
| length.min | number |  | The minimum length of the string to generate. |

**Returns:** string

ts

```
function symbol(
  length:
    | number
    | {
        min: number;
        max: number;
      } = 1
): string;
```

### Examples

ts

```
faker.string.symbol() // '$'
faker.string.symbol(5) // '#*!.~'
faker.string.symbol({ min: 5, max: 10 }) // ')|@*>^+'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L813)

## ulid [​](https://v9.fakerjs.dev/api/string\#ulid)

Returns a ULID ( [Universally Unique Lexicographically Sortable Identifier](https://github.com/ulid/spec)).

_Available since v9.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated ULID encoded timestamp.<br>The encoded timestamp is represented by the first 10 characters of the result. |

**Returns:** string

ts

```
function ulid(
  options: {
    refDate?: string | Date | number;
  } = {}
): string;
```

### Examples

ts

```
faker.string.ulid() // '01ARZ3NDEKTSV4RRFFQ69G5FAV'
faker.string.ulid({ refDate: '2020-01-01T00:00:00.000Z' }) // '01DXF6DT00CX9QNNW7PNXQ3YR8'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L723)

## uuid [​](https://v9.fakerjs.dev/api/string\#uuid)

Returns a UUID v4 ( [Universally Unique Identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)).

_Available since v8.0.0_

**Returns:** string

ts

```
function uuid(): string;
```

### Examples

ts

```
faker.string.uuid() // '4136cd0b-d90b-4af7-b485-5d1ded8db252'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/string/index.ts#L703)