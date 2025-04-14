[Skip to content](https://v9.fakerjs.dev/api/date#VPContent)

On this page

# Date [​](https://v9.fakerjs.dev/api/date\#date)

Module to generate dates.

### Overview [​](https://v9.fakerjs.dev/api/date\#overview)

To quickly generate a date in the past, use [`recent()`](https://v9.fakerjs.dev/api/date#recent) (last day) or [`past()`](https://v9.fakerjs.dev/api/date#past) (last year). To quickly generate a date in the future, use [`soon()`](https://v9.fakerjs.dev/api/date#soon) (next day) or [`future()`](https://v9.fakerjs.dev/api/date#future) (next year). For a realistic birthdate for an adult, use [`birthdate()`](https://v9.fakerjs.dev/api/date#birthdate).

For more control, any of these methods can be customized with further options, or use [`between()`](https://v9.fakerjs.dev/api/date#between) to generate a single date between two dates, or [`betweens()`](https://v9.fakerjs.dev/api/date#betweens) for multiple dates.

If you need to generate a date range (start-end), you can do so using either of these two methods:

- `const start = faker.date.soon(); const end = faker.date.soon({ refDate: start });`
- `const [start, end] = faker.date.betweens({ from, to, count: 2 });` // does not work with tsconfig's `noUncheckedIndexedAccess: true`

Dates can be specified as Javascript Date objects, strings or UNIX timestamps. For example to generate a date between 1st January 2000 and now, use:

ts

```
faker.date.between({ from: '2000-01-01', to: Date.now() });
```

You can generate random localized month and weekday names using [`month()`](https://v9.fakerjs.dev/api/date#month) and [`weekday()`](https://v9.fakerjs.dev/api/date#weekday).

These methods have additional concerns about reproducibility, see [Reproducible Results](https://v9.fakerjs.dev/guide/usage#reproducible-results).

## anytime [​](https://v9.fakerjs.dev/api/date\#anytime)

Generates a random date that can be either in the past or in the future.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date. |

**Returns:** Date

ts

```
function anytime(
  options: {
    refDate?: string | Date | number;
  } = {}
): Date;
```

### Examples

ts

```
faker.date.anytime() // '2022-07-31T01:33:29.567Z'
```

### See Also

- [faker.date.between(): For generating dates in a specific range.](https://v9.fakerjs.dev/api/date#between)
- [faker.date.past(): For generating dates explicitly in the past.](https://v9.fakerjs.dev/api/date#past)
- [faker.date.future(): For generating dates explicitly in the future.](https://v9.fakerjs.dev/api/date#future)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L27)

## between [​](https://v9.fakerjs.dev/api/date\#between)

Generates a random date between the given boundaries.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } |  | The options object. |
| options.from | string \| number \| Date |  | The early date boundary. |
| options.to | string \| number \| Date |  | The late date boundary. |

**Returns:** Date

**Throws:** If `from` or `to` are not provided.
If `from` is after `to`.

ts

```
function between(options: {
  from: string | Date | number;
  to: string | Date | number;
}): Date;
```

### Examples

ts

```
faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }) // '2026-05-16T02:22:53.002Z'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L153)

## betweens [​](https://v9.fakerjs.dev/api/date\#betweens)

Generates random dates between the given boundaries. The dates will be returned in an array sorted in chronological order.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } |  | The options object. |
| options.count? | number \| { min: number; max: number; } | `3` | The number of dates to generate. |
| options.from | string \| number \| Date |  | The early date boundary. |
| options.to | string \| number \| Date |  | The late date boundary. |

**Returns:** Date\[\]

**Throws:** If `from` or `to` are not provided.
If `from` is after `to`.

ts

```
function betweens(options: {
  from: string | Date | number;
  to: string | Date | number;
  count?:
    | number
    | {
        min: number;
        max: number;
      };
}): Date[];
```

### Examples

ts

```
faker.date.betweens({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' })
// [\
//   '2022-07-02T06:00:00.000Z',\
//   '2024-12-31T12:00:00.000Z',\
//   '2027-07-02T18:00:00.000Z'\
// ]
faker.date.betweens({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z', count: 2 })
// [ '2023-05-02T16:00:00.000Z', '2026-09-01T08:00:00.000Z' ]
faker.date.betweens({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z', count: { min: 2, max: 5 }})
// [\
//   2021-12-19T06:35:40.191Z,\
//   2022-09-10T08:03:51.351Z,\
//   2023-04-19T11:41:17.501Z\
// ]
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L210)

## birthdate [​](https://v9.fakerjs.dev/api/date\#birthdate)

Returns a random birthdate. By default, the birthdate is generated for an adult between 18 and 80 years old.
But you can customize the `'age'` range or the `'year'` range to generate a more specific birthdate.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } \| { ... } | `{}` | The options to use to generate the birthdate. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date. |
| options.max | number |  | The maximum age/year to generate a birthdate for/in. |
| options.min | number |  | The minimum age/year to generate a birthdate for/in. |
| options.mode | 'age' \| 'year' |  | Either `'age'` or `'year'` to generate a birthdate based on the age or year range. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date.<br>Only used when `mode` is `'age'`. |

**Returns:** Date

ts

```
function birthdate(
  options?:
    | {
        refDate?: string | Date | number;
      }
    | {
        mode: 'age' | 'year';
        min: number;
        max: number;
        refDate?: string | Date | number;
      }
): Date;
```

### Examples

ts

```
faker.date.birthdate() // '1977-07-10T01:37:30.719Z'
faker.date.birthdate({ mode: 'age', min: 18, max: 65 }) // '2003-11-02T20:03:20.116Z'
faker.date.birthdate({ mode: 'year', min: 1900, max: 2000 }) // '1940-08-20T08:53:07.538Z'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L476)

## future [​](https://v9.fakerjs.dev/api/date\#future)

Generates a random date in the future.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date. |
| options.years? | number | `1` | The range of years the date may be in the future. |

**Returns:** Date

ts

```
function future(
  options: {
    years?: number;
    refDate?: string | Date | number;
  } = {}
): Date;
```

### Examples

ts

```
faker.date.future() // '2022-11-19T05:52:49.100Z'
faker.date.future({ years: 10 }) // '2030-11-23T09:38:28.710Z'
faker.date.future({ years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2020-12-13T22:45:10.252Z'
```

### See Also

- [faker.date.soon(): For generating dates in the near future (days instead of years).](https://v9.fakerjs.dev/api/date#soon)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L108)

## month [​](https://v9.fakerjs.dev/api/date\#month)

Returns a random name of a month.

_Available since v3.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options to use. |
| options.abbreviated? | boolean | `false` | Whether to return an abbreviation. |
| options.context? | boolean | `false` | Whether to return the name of a month in the context of a date.<br>In the default `en` locale this has no effect,<br>however, in other locales like `fr` or `ru`, this may affect grammar or capitalization,<br>for example `'январь'` with `{ context: false }` and `'января'` with `{ context: true }` in `ru`. |

**Returns:** string

ts

```
function month(
  options: {
    abbreviated?: boolean;
    context?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.date.month() // 'October'
faker.date.month({ abbreviated: true }) // 'Feb'
faker.date.month({ context: true }) // 'June'
faker.date.month({ abbreviated: true, context: true }) // 'Sep'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L588)

## past [​](https://v9.fakerjs.dev/api/date\#past)

Generates a random date in the past.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date. |
| options.years? | number | `1` | The range of years the date may be in the past. |

**Returns:** Date

ts

```
function past(
  options: {
    years?: number;
    refDate?: string | Date | number;
  } = {}
): Date;
```

### Examples

ts

```
faker.date.past() // '2021-12-03T05:40:44.408Z'
faker.date.past({ years: 10 }) // '2017-10-25T21:34:19.488Z'
faker.date.past({ years: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2017-08-18T02:59:12.350Z'
```

### See Also

- [faker.date.recent(): For generating dates in the recent past (days instead of years).](https://v9.fakerjs.dev/api/date#recent)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L62)

## recent [​](https://v9.fakerjs.dev/api/date\#recent)

Generates a random date in the recent past.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.days? | number | `1` | The range of days the date may be in the past. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date. |

**Returns:** Date

ts

```
function recent(
  options: {
    days?: number;
    refDate?: string | Date | number;
  } = {}
): Date;
```

### Examples

ts

```
faker.date.recent() // '2022-02-04T02:09:35.077Z'
faker.date.recent({ days: 10 }) // '2022-01-29T06:12:12.829Z'
faker.date.recent({ days: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2019-12-27T18:11:19.117Z'
```

### See Also

- [faker.date.past(): For generating dates further back in time (years instead of days).](https://v9.fakerjs.dev/api/date#past)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L266)

## soon [​](https://v9.fakerjs.dev/api/date\#soon)

Generates a random date in the near future.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.days? | number | `1` | The range of days the date may be in the future. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date. |

**Returns:** Date

ts

```
function soon(
  options: {
    days?: number;
    refDate?: string | Date | number;
  } = {}
): Date;
```

### Examples

ts

```
faker.date.soon() // '2022-02-05T09:55:39.216Z'
faker.date.soon({ days: 10 }) // '2022-02-11T05:14:39.138Z'
faker.date.soon({ days: 10, refDate: '2020-01-01T00:00:00.000Z' }) // '2020-01-01T02:40:44.990Z'
```

### See Also

- [faker.date.future(): For generating dates further in the future (years instead of days).](https://v9.fakerjs.dev/api/date#future)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L312)

## timeZone [​](https://v9.fakerjs.dev/api/date\#timezone)

Returns a random IANA time zone name.

The returned time zone is not tied to the current locale.

_Available since v9.0.0_

**Returns:** string

ts

```
function timeZone(): string;
```

### Examples

ts

```
faker.location.timeZone() // 'Pacific/Guam'
```

### See Also

- [IANA Time Zone Database](https://www.iana.org/time-zones)

- [faker.location.timeZone(): For generating a timezone based on the current locale.](https://v9.fakerjs.dev/api/location#timezone)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L690)

## weekday [​](https://v9.fakerjs.dev/api/date\#weekday)

Returns a random day of the week.

_Available since v3.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options to use. |
| options.abbreviated? | boolean | `false` | Whether to return an abbreviation. |
| options.context? | boolean | `false` | Whether to return the day of the week in the context of a date.<br>In the default `en` locale this has no effect,<br>however, in other locales like `fr` or `ru`, this may affect grammar or capitalization,<br>for example `'Lundi'` with `{ context: false }` and `'lundi'` with `{ context: true }` in `fr`. |

**Returns:** string

ts

```
function weekday(
  options: {
    abbreviated?: boolean;
    context?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.date.weekday() // 'Monday'
faker.date.weekday({ abbreviated: true }) // 'Thu'
faker.date.weekday({ context: true }) // 'Thursday'
faker.date.weekday({ abbreviated: true, context: true }) // 'Fri'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/date/index.ts#L640)