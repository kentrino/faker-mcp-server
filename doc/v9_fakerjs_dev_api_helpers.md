[Skip to content](https://v9.fakerjs.dev/api/helpers#VPContent)

On this page

# Helpers [​](https://v9.fakerjs.dev/api/helpers\#helpers)

Module with various helper methods providing basic (seed-dependent) operations useful for implementing faker methods.

### Overview [​](https://v9.fakerjs.dev/api/helpers\#overview)

A particularly helpful method is [`arrayElement()`](https://v9.fakerjs.dev/api/helpers#arrayelement) which returns a random element from an array. This is useful when adding custom data that Faker doesn't contain.

There are alternatives of this method for objects ( [`objectKey()`](https://v9.fakerjs.dev/api/helpers#objectkey) and [`objectValue()`](https://v9.fakerjs.dev/api/helpers#objectvalue)) and enums ( [`enumValue()`](https://v9.fakerjs.dev/api/helpers#enumvalue)). You can also return multiple elements ( [`arrayElements()`](https://v9.fakerjs.dev/api/helpers#arrayelements)) or elements according to a weighting ( [`weightedArrayElement()`](https://v9.fakerjs.dev/api/helpers#weightedarrayelement)).

A number of methods can generate strings according to various patterns: [`replaceSymbols()`](https://v9.fakerjs.dev/api/helpers#replacesymbols) and [`fromRegExp()`](https://v9.fakerjs.dev/api/helpers#fromregexp).

## arrayElement [​](https://v9.fakerjs.dev/api/helpers\#arrayelement)

Returns random element from the given array.

_Available since v6.3.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | any |  | The type of the elements to pick from. |
| array | T\[\] |  | The array to pick the value from. |

**Returns:** T

**Throws:** If the given array is empty.

ts

```
function arrayElement<const T>(array: ReadonlyArray<T>): T;
```

### Examples

ts

```
faker.helpers.arrayElement(['cat', 'dog', 'mouse']) // 'dog'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L858)

## arrayElements [​](https://v9.fakerjs.dev/api/helpers\#arrayelements)

Returns a subset with random elements of the given array in random order.

_Available since v6.3.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | any |  | The type of the elements to pick from. |
| array | T\[\] |  | Array to pick the value from. |
| count? | number \| { ... } |  | Number or range of elements to pick.<br>When not provided, random number of elements will be picked.<br>When value exceeds array boundaries, it will be limited to stay inside. |
| count.max | number |  | The maximum number of elements to pick. |
| count.min | number |  | The minimum number of elements to pick. |

**Returns:** T\[\]

ts

```
function arrayElements<const T>(
  array: ReadonlyArray<T>,
  count?:
    | number
    | {
        min: number;
        max: number;
      }
): T[];
```

### Examples

ts

```
faker.helpers.arrayElements(['cat', 'dog', 'mouse']) // ['mouse', 'cat']
faker.helpers.arrayElements([1, 2, 3, 4, 5], 2) // [4, 2]
faker.helpers.arrayElements([1, 2, 3, 4, 5], { min: 2, max: 4 }) // [3, 5, 1]
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L947)

## enumValue [​](https://v9.fakerjs.dev/api/helpers\#enumvalue)

Returns a random value from an Enum object.

This does the same as `objectValue` except that it ignores (the values assigned to) the numeric keys added for TypeScript enums.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | Record<string \| number, string \| number> |  | Type of generic enums, automatically inferred by TypeScript. |
| enumObject | T |  | Enum to pick the value from. |

**Returns:** T\[keyof T\]

ts

```
function enumValue<T extends Record<string | number, string | number>>(
  enumObject: T
): T[keyof T];
```

### Examples

ts

```
enum Color { Red, Green, Blue }
faker.helpers.enumValue(Color) // 1 (Green)

enum Direction { North = 'North', South = 'South'}
faker.helpers.enumValue(Direction) // 'South'

enum HttpStatus { Ok = 200, Created = 201, BadRequest = 400, Unauthorized = 401 }
faker.helpers.enumValue(HttpStatus) // 200 (Ok)
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L1015)

## fake [​](https://v9.fakerjs.dev/api/helpers\#fake)

Generator for combining faker methods based on a static string input or an array of static string inputs.

Note: We recommend using string template literals instead of `fake()`,
which are faster and strongly typed (if you are using TypeScript),
e.g. ``const address = `${faker.location.zipCode()} ${faker.location.city()}`;``

This method is useful if you have to build a random string from a static, non-executable source
(e.g. string coming from a user, stored in a database or a file).

It checks the given string for placeholders and replaces them by calling faker methods:

js

```
const hello = faker.helpers.fake('Hi, my name is {{person.firstName}} {{person.lastName}}!');
```

This would use the `faker.person.firstName()` and `faker.person.lastName()` method to resolve the placeholders respectively.

It is also possible to provide parameters. At first, they will be parsed as json,
and if that isn't possible, it will fall back to string:

js

```
const message = faker.helpers.fake('You can call me at {{phone.number(+!# !## #### #####!)}}.');
```

It is also possible to use multiple parameters (comma separated).

js

```
const message = faker.helpers.fake('Your pin is {{string.numeric(4, {"allowLeadingZeros": true})}}.');
```

It is also NOT possible to use any non-faker methods or plain javascript in such patterns.

_Available since v7.4.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pattern | string \| string\[\] |  | The pattern string that will get interpolated. If an array is passed, a random element will be picked and interpolated. |

**Returns:** string

ts

```
function fake(pattern: string | ReadonlyArray<string>): string;
```

### Examples

ts

```
faker.helpers.fake('{{person.lastName}}') // 'Barrows'
faker.helpers.fake('{{person.lastName}}, {{person.firstName}} {{person.suffix}}') // 'Durgan, Noe MD'
faker.helpers.fake('This is static test.') // 'This is static test.'
faker.helpers.fake('Good Morning {{person.firstName}}!') // 'Good Morning Estelle!'
faker.helpers.fake('You can visit me at {{location.streetAddress(true)}}.') // 'You can visit me at 3393 Ronny Way Apt. 742.'
faker.helpers.fake('I flipped the coin and got: {{helpers.arrayElement(["heads", "tails"])}}') // 'I flipped the coin and got: tails'
faker.helpers.fake(['A: {{person.firstName}}', 'B: {{person.lastName}}']) // 'A: Barry'
```

### See Also

- [faker.helpers.mustache(): For using custom functions to resolve templates.](https://v9.fakerjs.dev/api/helpers#mustache)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L1268)

## fromRegExp [​](https://v9.fakerjs.dev/api/helpers\#fromregexp)

Generates a string matching the given regex like expressions.

This function doesn't provide full support of actual `RegExp`.
Features such as grouping, anchors and character classes are not supported.
If you are looking for a library that randomly generates strings based on
`RegExp` s, see [randexp.js](https://github.com/fent/randexp.js)

Supported patterns:

- `x{times}` =\> Repeat the `x` exactly `times` times.
- `x{min,max}` =\> Repeat the `x` `min` to `max` times.
- `[x-y]` =\> Randomly get a character between `x` and `y` (inclusive).
- `[x-y]{times}` =\> Randomly get a character between `x` and `y` (inclusive) and repeat it `times` times.
- `[x-y]{min,max}` =\> Randomly get a character between `x` and `y` (inclusive) and repeat it `min` to `max` times.
- `[^...]` =\> Randomly get an ASCII number or letter character that is not in the given range. (e.g. `[^0-9]` will get a random non-numeric character).
- `[-...]` =\> Include dashes in the range. Must be placed after the negate character `^` and before any character sets if used (e.g. `[^-0-9]` will not get any numeric characters or dashes).
- `/[x-y]/i` =\> Randomly gets an uppercase or lowercase character between `x` and `y` (inclusive).
- `x?` =\> Randomly decide to include or not include `x`.
- `[x-y]?` =\> Randomly decide to include or not include characters between `x` and `y` (inclusive).
- `x*` =\> Repeat `x` 0 or more times.
- `[x-y]*` =\> Repeat characters between `x` and `y` (inclusive) 0 or more times.
- `x+` =\> Repeat `x` 1 or more times.
- `[x-y]+` =\> Repeat characters between `x` and `y` (inclusive) 1 or more times.
- `.` =\> returns a wildcard ASCII character that can be any number, character or symbol. Can be combined with quantifiers as well.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| pattern | string \| RegExp |  | The template string/RegExp to generate a matching string for. |

**Returns:** string

**Throws:** If min value is more than max value in quantifier, e.g. `#{10,5}`.
If an invalid quantifier symbol is passed in.

ts

```
function fromRegExp(pattern: string | RegExp): string;
```

### Examples

ts

```
faker.helpers.fromRegExp('#{5}') // '#####'
faker.helpers.fromRegExp('#{2,9}') // '#######'
faker.helpers.fromRegExp('[1-7]') // '5'
faker.helpers.fromRegExp('#{3}test[1-5]') // '###test3'
faker.helpers.fromRegExp('[0-9a-dmno]') // '5'
faker.helpers.fromRegExp('[^a-zA-Z0-8]') // '9'
faker.helpers.fromRegExp('[a-d0-6]{2,8}') // 'a0dc45b0'
faker.helpers.fromRegExp('[-a-z]{5}') // 'a-zab'
faker.helpers.fromRegExp(/[A-Z0-9]{4}-[A-Z0-9]{4}/) // 'BS4G-485H'
faker.helpers.fromRegExp(/[A-Z]{5}/i) // 'pDKfh'
faker.helpers.fromRegExp(/.{5}/) // '14(#B'
faker.helpers.fromRegExp(/Joh?n/) // 'Jon'
faker.helpers.fromRegExp(/ABC*DE/) // 'ABDE'
faker.helpers.fromRegExp(/bee+p/) // 'beeeeeeeep'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L368)

## maybe [​](https://v9.fakerjs.dev/api/helpers\#maybe)

Returns the result of the callback if the probability check was successful, otherwise `undefined`.

_Available since v6.3.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <TResult> | any |  | The type of result of the given callback. |
| callback | () =\> TResult |  | The callback to that will be invoked if the probability check was successful. |
| options | { ... } | `{}` | The options to use. |
| options.probability? | number | `0.5` | The probability ( `[0.00, 1.00]`) of the callback being invoked. |

**Returns:** undefined \| TResult

ts

```
function maybe<const TResult>(
  callback: () => TResult,
  options: {
    probability?: number;
  } = {}
): TResult | undefined;
```

### Examples

ts

```
faker.helpers.maybe(() => 'Hello World!') // 'Hello World!'
faker.helpers.maybe(() => 'Hello World!', { probability: 0.1 }) // undefined
faker.helpers.maybe(() => 'Hello World!', { probability: 0.9 }) // 'Hello World!'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L767)

## multiple [​](https://v9.fakerjs.dev/api/helpers\#multiple)

Generates an array containing values returned by the given method.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <TResult> | any |  | The type of elements. |
| method | (v: unknown, index: number) => TResult |  | The method used to generate the values.<br>The method will be called with `(_, index)`, to allow using the index in the generated value e.g. as id. |
| options | { ... } | `{}` | The optional options object. |
| options.count? | number \| { min: number; max: number; } | `3` | The number or range of elements to generate. |

**Returns:** TResult\[\]

ts

```
function multiple<const TResult>(
  method: (v: unknown, index: number) => TResult,
  options: {
    count?:
      | number
      | {
          min: number;
          max: number;
        };
  } = {}
): TResult[];
```

### Examples

ts

```
faker.helpers.multiple(() => faker.person.firstName()) // [ 'Aniya', 'Norval', 'Dallin' ]
faker.helpers.multiple(() => faker.person.firstName(), { count: 3 }) // [ 'Santos', 'Lavinia', 'Lavinia' ]
faker.helpers.multiple((_, i) => `${faker.color.human()}-${i + 1}`) // [ 'orange-1', 'orchid-2', 'sky blue-3' ]
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L1077)

## mustache [​](https://v9.fakerjs.dev/api/helpers\#mustache)

Replaces the `{{placeholder}}` patterns in the given string mustache style.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text? | string |  | The template string to parse. |
| data | Record<string, string \| ((substring: string, ...args: any\[\]) => string)> |  | The data used to populate the placeholders.<br>This is a record where the key is the template placeholder,<br>whereas the value is either a string or a function suitable for `String.replace()`. |

**Returns:** string

ts

```
function mustache(
  text: string | undefined,
  data: Record<string, string | Parameters<string['replace']>[1]>
): string;
```

### Examples

ts

```
faker.helpers.mustache('I found {{count}} instances of "{{word}}".', {
  count: () => `${faker.number.int()}`,
  word: "this word",
}) // 'I found 57591 instances of "this word".'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L728)

## objectEntry [​](https://v9.fakerjs.dev/api/helpers\#objectentry)

Returns a random `[key, value]` pair from the given object.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | Record<string, unknown> |  | The type of the object to select from. |
| object | T |  | The object to be used. |

**Returns:** \[keyof T, T\[keyof T\]\]

**Throws:** If the given object is empty.

ts

```
function objectEntry<const T extends Record<string, unknown>>(
  object: T
): [keyof T, T[keyof T]];
```

### Examples

ts

```
faker.helpers.objectEntry({ Cheetah: 120, Falcon: 390, Snail: 0.03 }) // ['Snail', 0.03]
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L837)

## objectKey [​](https://v9.fakerjs.dev/api/helpers\#objectkey)

Returns a random key from the given object.

_Available since v6.3.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | Record<string, unknown> |  | The type of the object to select from. |
| object | T |  | The object to be used. |

**Returns:** keyof T

**Throws:** If the given object is empty.

ts

```
function objectKey<const T extends Record<string, unknown>>(object: T): keyof T;
```

### Examples

ts

```
faker.helpers.objectKey({ Cheetah: 120, Falcon: 390, Snail: 0.03 }) // 'Falcon'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L799)

## objectValue [​](https://v9.fakerjs.dev/api/helpers\#objectvalue)

Returns a random value from the given object.

_Available since v6.3.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | Record<string, unknown> |  | The type of object to select from. |
| object | T |  | The object to be used. |

**Returns:** T\[keyof T\]

**Throws:** If the given object is empty.

ts

```
function objectValue<const T extends Record<string, unknown>>(
  object: T
): T[keyof T];
```

### Examples

ts

```
faker.helpers.objectValue({ Cheetah: 120, Falcon: 390, Snail: 0.03 }) // 390
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L818)

## rangeToNumber [​](https://v9.fakerjs.dev/api/helpers\#rangetonumber)

Helper method that converts the given number or range to a number.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| numberOrRange | number \| { ... } |  | The number or range to convert. |
| numberOrRange.max | number |  | The maximum value for the range. |
| numberOrRange.min | number |  | The minimum value for the range. |

**Returns:** number

ts

```
function rangeToNumber(
  numberOrRange:
    | number
    | {
        min: number;
        max: number;
      }
): number;
```

### Examples

ts

```
faker.helpers.rangeToNumber(1) // 1
faker.helpers.rangeToNumber({ min: 1, max: 10 }) // 5
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L1039)

## replaceCreditCardSymbols [​](https://v9.fakerjs.dev/api/helpers\#replacecreditcardsymbols)

Replaces the symbols and patterns in a credit card schema including Luhn checksum.

This method supports both range patterns `[4-9]` as well as the patterns used by `replaceSymbolWithNumber()`.
`L` will be replaced with the appropriate Luhn checksum.

_Available since v5.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| string | string | `'6453-####-####-####-###L'` | The credit card format pattern. |
| symbol | string | `'#'` | The symbol to replace with a digit. |

**Returns:** string

ts

```
function replaceCreditCardSymbols(
  string: string = '6453-####-####-####-###L',
  symbol: string = '#'
): string;
```

### Examples

ts

```
faker.helpers.replaceCreditCardSymbols() // '6453-4876-8626-8995-3771'
faker.helpers.replaceCreditCardSymbols('1234-[4-9]-##!!-L') // '1234-9-5298-2'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L307)

## replaceSymbols [​](https://v9.fakerjs.dev/api/helpers\#replacesymbols)

Parses the given string symbol by symbols and replaces the placeholder appropriately.

- `#` will be replaced with a digit ( `0` \- `9`).
- `?` will be replaced with an upper letter ('A' - 'Z')
- and `*` will be replaced with either a digit or letter.

_Available since v3.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| string | string | `''` | The template string to parse. |

**Returns:** string

ts

```
function replaceSymbols(string: string = ''): string;
```

### Examples

ts

```
faker.helpers.replaceSymbols() // ''
faker.helpers.replaceSymbols('#####') // '98441'
faker.helpers.replaceSymbols('?????') // 'ZYRQQ'
faker.helpers.replaceSymbols('*****') // '4Z3P7'
faker.helpers.replaceSymbols('Your pin is: #?*#?*') // 'Your pin is: 0T85L1'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L244)

## shuffle [​](https://v9.fakerjs.dev/api/helpers\#shuffle)

Returns a randomized version of the array.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | any |  | The type of the elements to shuffle. |
| list | T\[\] |  | The array to shuffle. |
| options? | { ... } | `{}` | The options to use when shuffling. |
| options.inplace? | boolean | `false` | Whether to shuffle the array in place or return a new array. |

**Returns:** T\[\]

ts

```
function shuffle<const T>(
  list: T[],
  options?: {
    inplace?: boolean;
  }
): T[];
```

### Examples

ts

```
faker.helpers.shuffle(['a', 'b', 'c']) // [ 'b', 'c', 'a' ]
faker.helpers.shuffle(['a', 'b', 'c'], { inplace: true }) // [ 'b', 'c', 'a' ]
faker.helpers.shuffle(['a', 'b', 'c'], { inplace: false }) // [ 'b', 'c', 'a' ]
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L648)

## slugify [​](https://v9.fakerjs.dev/api/helpers\#slugify)

Slugifies the given string.
For that all spaces ( ` `) are replaced by hyphens ( `-`)
and most non word characters except for dots and hyphens will be removed.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| string | string | `''` | The input to slugify. |

**Returns:** string

ts

```
function slugify(string: string = ''): string;
```

### Examples

ts

```
faker.helpers.slugify() // ''
faker.helpers.slugify("Hello world!") // 'Hello-world'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L218)

## uniqueArray [​](https://v9.fakerjs.dev/api/helpers\#uniquearray)

Takes an array of strings or function that returns a string
and outputs a unique array of strings based on that source.
This method does not store the unique state between invocations.

If there are not enough unique values to satisfy the length, if
the source is an array, it will only return as many items as are
in the array. If the source is a function, it will return after
a maximum number of attempts has been reached.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | any |  | The type of the elements. |
| source | T\[\] \| (() => T) |  | The strings to choose from or a function that generates a string. |
| length | number |  | The number of elements to generate. |

**Returns:** T\[\]

ts

```
function uniqueArray<const T>(
  source: ReadonlyArray<T> | (() => T),
  length: number
): T[];
```

### Examples

ts

```
faker.helpers.uniqueArray(faker.word.sample, 3) // ['mob', 'junior', 'ripe']
faker.helpers.uniqueArray(faker.definitions.person.first_name.generic, 6) // ['Silas', 'Montana', 'Lorenzo', 'Alayna', 'Aditya', 'Antone']
faker.helpers.uniqueArray(["Hello", "World", "Goodbye"], 2) // ['World', 'Goodbye']
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L685)

## weightedArrayElement [​](https://v9.fakerjs.dev/api/helpers\#weightedarrayelement)

Returns a weighted random element from the given array. Each element of the array should be an object with two keys `weight` and `value`.

- Each `weight` key should be a number representing the probability of selecting the value, relative to the sum of the weights. Weights can be any positive float or integer.
- Each `value` key should be the corresponding value.

For example, if there are two values A and B, with weights 1 and 2 respectively, then the probability of picking A is 1/3 and the probability of picking B is 2/3.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| <T> | any |  | The type of the elements to pick from. |
| array | Array<{ ... }> |  | Array to pick the value from. |
| array\[\].value | T |  | The value to pick. |
| array\[\].weight | number |  | The weight of the value. |

**Returns:** T

ts

```
function weightedArrayElement<const T>(
  array: ReadonlyArray<{
    weight: number;
    value: T;
  }>
): T;
```

### Examples

ts

```
faker.helpers.weightedArrayElement([{ weight: 5, value: 'sunny' }, { weight: 4, value: 'rainy' }, { weight: 1, value: 'snowy' }]) // 'sunny', 50% of the time, 'rainy' 40% of the time, 'snowy' 10% of the time
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/helpers/index.ts#L888)