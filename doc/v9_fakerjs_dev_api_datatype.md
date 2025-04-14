[Skip to content](https://v9.fakerjs.dev/api/datatype#VPContent)

On this page

# Datatype [​](https://v9.fakerjs.dev/api/datatype\#datatype)

Module to generate boolean values.

### Overview [​](https://v9.fakerjs.dev/api/datatype\#overview)

For a simple random true or false value, use [`boolean()`](https://v9.fakerjs.dev/api/datatype#boolean).

## boolean [​](https://v9.fakerjs.dev/api/datatype\#boolean)

Returns the boolean value true or false.

**Note:**
A probability of `0.75` results in `true` being returned `75%` of the calls; likewise `0.3` =\> `30%`.
If the probability is `<= 0.0`, it will always return `false`.
If the probability is `>= 1.0`, it will always return `true`.
The probability is limited to two decimal places.

_Available since v5.5.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The optional options object or the probability ( `[0.00, 1.00]`) of returning `true`. |
| options.probability? | number | `0.5` | The probability ( `[0.00, 1.00]`) of returning `true`. |

**Returns:** boolean

ts

```
function boolean(
  options:
    | number
    | {
        probability?: number;
      } = {}
): boolean;
```

### Examples

ts

```
faker.datatype.boolean() // false
faker.datatype.boolean(0.9) // true
faker.datatype.boolean({ probability: 0.1 }) // false
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/datatype/index.ts#L30)