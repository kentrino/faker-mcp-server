[Skip to content](https://v9.fakerjs.dev/api/location#VPContent)

On this page

# Location [​](https://v9.fakerjs.dev/api/location\#location)

Module to generate addresses and locations. Prior to Faker 8.0.0, this module was known as `faker.address`.

### Overview [​](https://v9.fakerjs.dev/api/location\#overview)

For a typical street address for a locale, use [`streetAddress()`](https://v9.fakerjs.dev/api/location#streetaddress), [`city()`](https://v9.fakerjs.dev/api/location#city), [`state()`](https://v9.fakerjs.dev/api/location#state)), and [`zipCode()`](https://v9.fakerjs.dev/api/location#zipcode). Most locales provide localized versions for a specific country.

If you need latitude and longitude coordinates, use [`latitude()`](https://v9.fakerjs.dev/api/location#latitude) and [`longitude()`](https://v9.fakerjs.dev/api/location#longitude), or [`nearbyGPSCoordinate()`](https://v9.fakerjs.dev/api/location#nearbygpscoordinate) for a latitude/longitude near a given location.

For a random country, you can use [`country()`](https://v9.fakerjs.dev/api/location#country) or [`countryCode()`](https://v9.fakerjs.dev/api/location#countrycode).

## buildingNumber [​](https://v9.fakerjs.dev/api/location\#buildingnumber)

Generates a random building number.

_Available since v8.0.0_

**Returns:** string

ts

```
function buildingNumber(): string;
```

### Examples

ts

```
faker.location.buildingNumber() // '379'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L127)

## cardinalDirection [​](https://v9.fakerjs.dev/api/location\#cardinaldirection)

Returns a random cardinal direction (north, east, south, west).

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.abbreviated? | boolean | `false` | If true this will return abbreviated directions (N, E, etc).<br>Otherwise this will return the long name. |

**Returns:** string

ts

```
function cardinalDirection(
  options: {
    abbreviated?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.location.cardinalDirection() // 'North'
faker.location.cardinalDirection({ abbreviated: true }) // 'W'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L491)

## city [​](https://v9.fakerjs.dev/api/location\#city)

Generates a random localized city name.

_Available since v8.0.0_

**Returns:** string

ts

```
function city(): string;
```

### Examples

ts

```
faker.location.city() // 'East Jarretmouth'
fakerDE.location.city() // 'Bad Lilianadorf'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L113)

## continent [​](https://v9.fakerjs.dev/api/location\#continent)

Returns a random continent name.

_Available since v9.1.0_

**Returns:** string

ts

```
function continent(): string;
```

### Examples

ts

```
faker.location.continent() // 'Asia'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L247)

## country [​](https://v9.fakerjs.dev/api/location\#country)

Returns a random country name.

_Available since v8.0.0_

**Returns:** string

ts

```
function country(): string;
```

### Examples

ts

```
faker.location.country() // 'Greece'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L233)

## countryCode [​](https://v9.fakerjs.dev/api/location\#countrycode)

Returns a random [ISO\_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) country code.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | 'alpha-2' \| 'alpha-3' \| 'numeric' \| { ... } | `{}` | The code to return or an options object. |
| options.variant? | 'alpha-2' \| 'alpha-3' \| 'numeric' | `'alpha-2'` | The code to return.<br>Can be either `'alpha-2'` (two-letter code),<br>`'alpha-3'` (three-letter code)<br>or `'numeric'` (numeric code). |

**Returns:** string

ts

```
function countryCode(
  options:
    | 'alpha-2'
    | 'alpha-3'
    | 'numeric'
    | {
        variant?: 'alpha-2' | 'alpha-3' | 'numeric';
      } = {}
): string;
```

### Examples

ts

```
faker.location.countryCode() // 'SJ'
faker.location.countryCode('alpha-2') // 'GA'
faker.location.countryCode('alpha-3') // 'TJK'
faker.location.countryCode('numeric') // '528'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L273)

## county [​](https://v9.fakerjs.dev/api/location\#county)

Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.

_Available since v8.0.0_

**Returns:** string

ts

```
function county(): string;
```

### Examples

ts

```
fakerEN_GB.location.county() // 'Cambridgeshire'
fakerEN_US.location.county() // 'Monroe County'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L219)

## direction [​](https://v9.fakerjs.dev/api/location\#direction)

Returns a random direction (cardinal and ordinal; northwest, east, etc).

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.abbreviated? | boolean | `false` | If true this will return abbreviated directions (NW, E, etc).<br>Otherwise this will return the long name. |

**Returns:** string

ts

```
function direction(
  options: {
    abbreviated?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.location.direction() // 'Northeast'
faker.location.direction({ abbreviated: true }) // 'SW'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L452)

## language [​](https://v9.fakerjs.dev/api/location\#language)

Returns a random spoken language.

_Available since v9.4.0_

**Returns:** Language

ts

```
function language(): Language;
```

### Examples

ts

```
faker.location.language() // { alpha2: 'de', alpha3: 'deu', name: 'German' }
faker.location.language().name // German
faker.location.language().alpha2 // de
faker.location.language().alpha3 // deu
```

### See Also

- [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)

- [ISO 639-2](https://en.wikipedia.org/wiki/ISO_639-2)

- [ISO 639-2 Language Code List](https://www.loc.gov/standards/iso639-2/php/code_list.php)


### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L667)

## latitude [​](https://v9.fakerjs.dev/api/location\#latitude)

Generates a random latitude.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.max? | number | `90` | The upper bound for the latitude to generate. |
| options.min? | number | `-90` | The lower bound for the latitude to generate. |
| options.precision? | number | `4` | The number of decimal points of precision for the latitude. |

**Returns:** number

ts

```
function latitude(
  options: {
    max?: number;
    min?: number;
    precision?: number;
  } = {}
): number;
```

### Examples

ts

```
faker.location.latitude() // -30.9501
faker.location.latitude({ max: 10 }) // 5.7225
faker.location.latitude({ max: 10, min: -10 }) // -9.6273
faker.location.latitude({ max: 10, min: -10, precision: 5 }) // 2.68452
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L369)

## longitude [​](https://v9.fakerjs.dev/api/location\#longitude)

Generates a random longitude.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.max? | number | `180` | The upper bound for the longitude to generate. |
| options.min? | number | `-180` | The lower bound for the longitude to generate. |
| options.precision? | number | `4` | The number of decimal points of precision for the longitude. |

**Returns:** number

ts

```
function longitude(
  options: {
    max?: number;
    min?: number;
    precision?: number;
  } = {}
): number;
```

### Examples

ts

```
faker.location.longitude() // -30.9501
faker.location.longitude({ max: 10 }) // 5.7225
faker.location.longitude({ max: 10, min: -10 }) // -9.6273
faker.location.longitude({ max: 10, min: -10, precision: 5 }) // 2.68452
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L412)

## nearbyGPSCoordinate [​](https://v9.fakerjs.dev/api/location\#nearbygpscoordinate)

Generates a random GPS coordinate within the specified radius from the given coordinate.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options for generating a GPS coordinate. |
| options.isMetric? | boolean | `false` | If `true` assume the radius to be in kilometers. If `false` for miles. |
| options.origin? | \[latitude: number, longitude: number\] |  | The original coordinate to get a new coordinate close to. |
| options.radius? | number | `10` | The maximum distance from the given coordinate to the new coordinate. |

**Returns:** \[latitude: number, longitude: number\]

ts

```
function nearbyGPSCoordinate(
  options: {
    origin?: [latitude: number, longitude: number];
    radius?: number;
    isMetric?: boolean;
  } = {}
): [latitude: number, longitude: number];
```

### Examples

ts

```
faker.location.nearbyGPSCoordinate() // [ 33.8475, -170.5953 ]
faker.location.nearbyGPSCoordinate({ origin: [33, -170] }) // [ 33.0165, -170.0636 ]
faker.location.nearbyGPSCoordinate({ origin: [33, -170], radius: 1000, isMetric: true }) // [ 37.9163, -179.2408 ]
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L568)

## ordinalDirection [​](https://v9.fakerjs.dev/api/location\#ordinaldirection)

Returns a random ordinal direction (northwest, southeast, etc).

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | Whether to use abbreviated or an options object. |
| options.abbreviated? | boolean | `false` | If true this will return abbreviated directions (NW, SE, etc).<br>Otherwise this will return the long name. |

**Returns:** string

ts

```
function ordinalDirection(
  options: {
    abbreviated?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.location.ordinalDirection() // 'Northeast'
faker.location.ordinalDirection({ abbreviated: true }) // 'SW'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L528)

## secondaryAddress [​](https://v9.fakerjs.dev/api/location\#secondaryaddress)

Generates a random localized secondary address. This refers to a specific location at a given address
such as an apartment or room number.

_Available since v8.0.0_

**Returns:** string

ts

```
function secondaryAddress(): string;
```

### Examples

ts

```
faker.location.secondaryAddress() // 'Apt. 861'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L199)

## state [​](https://v9.fakerjs.dev/api/location\#state)

Returns a random localized state, or other equivalent first-level administrative entity for the locale's country such as a province or region.
Generally, these are the ISO 3166-2 subdivisions for a country.
If a locale doesn't correspond to one specific country, the method may return ISO 3166-2 subdivisions from one or more countries that uses that language. For example, the `ar` locale includes subdivisions from Arabic-speaking countries, such as Tunisia, Algeria, Syria, Lebanon, etc.
For historical compatibility reasons, the default `en` locale only includes states in the United States (identical to `en_US`). However, you can use other English locales, such as `en_IN`, `en_GB`, and `en_AU`, if needed.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.abbreviated? | boolean | `false` | If true this will return abbreviated first-level administrative entity names.<br>Otherwise this will return the long name. |

**Returns:** string

ts

```
function state(
  options: {
    abbreviated?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.location.state() // 'Mississippi'
fakerEN_CA.location.state() // 'Saskatchewan'
fakerDE.location.state() // 'Nordrhein-Westfalen'
faker.location.state({ abbreviated: true }) // 'LA'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L334)

## street [​](https://v9.fakerjs.dev/api/location\#street)

Generates a random localized street name.

_Available since v8.0.0_

**Returns:** string

ts

```
function street(): string;
```

### Examples

ts

```
faker.location.street() // 'Schroeder Isle'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L146)

## streetAddress [​](https://v9.fakerjs.dev/api/location\#streetaddress)

Generates a random localized street address.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | boolean \| { ... } | `{}` | Whether to use a full address or an options object. |
| options.useFullAddress? | boolean |  | When true this will generate a full address.<br>Otherwise it will just generate a street address. |

**Returns:** string

ts

```
function streetAddress(
  options:
    | boolean
    | {
        useFullAddress?: boolean;
      } = {}
): string;
```

### Examples

ts

```
faker.location.streetAddress() // '0917 O'Conner Estates'
faker.location.streetAddress(false) // '34830 Erdman Hollow'
faker.location.streetAddress(true) // '3393 Ronny Way Apt. 742'
faker.location.streetAddress({ useFullAddress: true }) // '7917 Miller Park Apt. 410'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L167)

## timeZone [​](https://v9.fakerjs.dev/api/location\#timezone)

Returns a random IANA time zone relevant to this locale.

The returned time zone is tied to the current locale.

_Available since v8.0.0_

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

- [faker.date.timeZone(): For generating a random time zone from all available time zones.](https://v9.fakerjs.dev/api/date#timezone)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L646)

## zipCode [​](https://v9.fakerjs.dev/api/location\#zipcode)

Generates random zip code from specified format. If format is not specified,
the locale's zip format is used.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | string \| { ... } | `{}` | The format used to generate the zip code or an options object. |
| options.format? | string | `faker.definitions.location.postcode` | The optional format used to generate the zip code.<br>This won't be used if the state option is specified. |
| options.state? | string |  | The state to generate the zip code for.<br>If the current locale does not have a corresponding `postcode_by_state` definition, an error is thrown. |

**Returns:** string

ts

```
function zipCode(
  options:
    | string
    | {
        state?: string;
        format?: string;
      } = {}
): string;
```

### Examples

ts

```
faker.location.zipCode() // '17839'
faker.location.zipCode('####') // '6925'
```

### See Also

- [faker.helpers.replaceSymbols(): For more information about how the pattern is used.](https://v9.fakerjs.dev/api/helpers#replacesymbols)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/location/index.ts#L55)