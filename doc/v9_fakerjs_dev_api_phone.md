[Skip to content](https://v9.fakerjs.dev/api/phone#VPContent)

On this page

# Phone [​](https://v9.fakerjs.dev/api/phone\#phone)

Module to generate phone-related data.

### Overview [​](https://v9.fakerjs.dev/api/phone\#overview)

For a phone number, use [`number()`](https://v9.fakerjs.dev/api/phone#number). Many locales provide country-specific formats.

## imei [​](https://v9.fakerjs.dev/api/phone\#imei)

Generates IMEI number.

_Available since v6.2.0_

**Returns:** string

ts

```
function imei(): string;
```

### Examples

ts

```
faker.phone.imei() // '13-850175-913761-7'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/phone/index.ts#L62)

## number [​](https://v9.fakerjs.dev/api/phone\#number)

Generates a random phone number.

_Available since v7.3.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | Options object |
| options.style? | 'human' \| 'national' \| 'international' | `'human'` | Style of the generated phone number:<br>- `'human'`: (default) A human-input phone number, e.g. `555-770-7727` or `555.770.7727 x1234`<br>- `'national'`: A phone number in a standardized national format, e.g. `(555) 123-4567`.<br>- `'international'`: A phone number in the E.123 international format, e.g. `+15551234567` |

**Returns:** string

ts

```
function number(
  options: {
    style?: 'human' | 'national' | 'international';
  } = {}
): string;
```

### Examples

ts

```
faker.phone.number() // '961-770-7727'
faker.phone.number({ style: 'human' }) // '555.770.7727 x1234'
faker.phone.number({ style: 'national' }) // '(961) 770-7727'
faker.phone.number({ style: 'international' }) // '+15551234567'
```

### See Also

- [faker.string.numeric(): For generating a random string of numbers.](https://v9.fakerjs.dev/api/string#numeric)
- [faker.helpers.fromRegExp(): For generating a phone number matching a regular expression.](https://v9.fakerjs.dev/api/helpers#fromregexp)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/phone/index.ts#L29)