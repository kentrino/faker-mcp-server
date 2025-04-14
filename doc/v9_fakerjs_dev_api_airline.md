[Skip to content](https://v9.fakerjs.dev/api/airline#VPContent)

On this page

# Airline [​](https://v9.fakerjs.dev/api/airline\#airline)

Module to generate airline and airport related data.

### Overview [​](https://v9.fakerjs.dev/api/airline\#overview)

Several methods in this module return objects rather than strings. For example, you can use `faker.airline.airport().iataCode` to pick out the specific property you need.

For a random airport, use [`airport()`](https://v9.fakerjs.dev/api/airline#airport).

For a random airline, use [`airline()`](https://v9.fakerjs.dev/api/airline#airline).

For a dummy booking, a passenger will generally book a flight on a specific [`flightNumber()`](https://v9.fakerjs.dev/api/airline#flightnumber), [`airplane()`](https://v9.fakerjs.dev/api/airline#airplane), be allocated a [`seat()`](https://v9.fakerjs.dev/api/airline#seat), and [`recordLocator()`](https://v9.fakerjs.dev/api/airline#recordlocator).

### Related Modules [​](https://v9.fakerjs.dev/api/airline\#related-modules)

- To generate sample passenger data, you can use the methods of the [`faker.person`](https://v9.fakerjs.dev/api/person) module.

## aircraftType [​](https://v9.fakerjs.dev/api/airline\#aircrafttype)

Returns a random aircraft type.

_Available since v8.0.0_

**Returns:** 'narrowbody' \| 'regional' \| 'widebody'

ts

```
function aircraftType(): AircraftType;
```

### Examples

ts

```
faker.airline.aircraftType() // 'narrowbody'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/airline/index.ts#L213)

## airline [​](https://v9.fakerjs.dev/api/airline\#airline-1)

Generates a random airline.

_Available since v8.0.0_

**Returns:** Airline

ts

```
function airline(): Airline;
```

### Examples

ts

```
faker.airline.airline() // { name: 'American Airlines', iataCode: 'AA' }
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/airline/index.ts#L103)

## airplane [​](https://v9.fakerjs.dev/api/airline\#airplane)

Generates a random airplane.

_Available since v8.0.0_

**Returns:** Airplane

ts

```
function airplane(): Airplane;
```

### Examples

ts

```
faker.airline.airplane() // { name: 'Airbus A321neo', iataTypeCode: '32Q' }
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/airline/index.ts#L117)

## airport [​](https://v9.fakerjs.dev/api/airline\#airport)

Generates a random airport.

_Available since v8.0.0_

**Returns:** Airport

ts

```
function airport(): Airport;
```

### Examples

ts

```
faker.airline.airport() // { name: 'Dallas Fort Worth International Airport', iataCode: 'DFW' }
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/airline/index.ts#L89)

## flightNumber [​](https://v9.fakerjs.dev/api/airline\#flightnumber)

Returns a random flight number. Flight numbers are always 1 to 4 digits long. Sometimes they are
used without leading zeros (e.g.: `American Airlines flight 425`) and sometimes with leading
zeros, often with the airline code prepended (e.g.: `AA0425`).

To generate a flight number prepended with an airline code, combine this function with the
`airline()` function and use template literals:

```
`${faker.airline.airline().iataCode}${faker.airline.flightNumber({ addLeadingZeros: true })}` // 'AA0798'
```

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.addLeadingZeros? | boolean | `false` | Whether to pad the flight number up to 4 digits with leading zeros. |
| options.length? | number \| { min: number; max: number; } | `{ min: 1, max: 4 }` | The number or range of digits to generate. |

**Returns:** string

ts

```
function flightNumber(
  options: {
    length?:
      | number
      | {
          min: number;
          max: number;
        };
    addLeadingZeros?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.airline.flightNumber() // '2405'
faker.airline.flightNumber({ addLeadingZeros: true }) // '0249'
faker.airline.flightNumber({ addLeadingZeros: true, length: 2 }) // '0042'
faker.airline.flightNumber({ addLeadingZeros: true, length: { min: 2, max: 3 } }) // '0624'
faker.airline.flightNumber({ length: 3 }) // '425'
faker.airline.flightNumber({ length: { min: 2, max: 3 } }) // '84'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/airline/index.ts#L242)

## recordLocator [​](https://v9.fakerjs.dev/api/airline\#recordlocator)

Generates a random [record locator](https://en.wikipedia.org/wiki/Record_locator). Record locators
are used by airlines to identify reservations. They're also known as booking reference numbers,
locator codes, confirmation codes, or reservation codes.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.allowNumerics? | boolean | `false` | Whether to allow numeric characters. |
| options.allowVisuallySimilarCharacters? | boolean | `false` | Whether to allow visually similar characters such as '1' and 'I'. |

**Returns:** string

ts

```
function recordLocator(
  options: {
    allowNumerics?: boolean;
    allowVisuallySimilarCharacters?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.airline.recordLocator() // 'KIFRWE'
faker.airline.recordLocator({ allowNumerics: true }) // 'E5TYEM'
faker.airline.recordLocator({ allowVisuallySimilarCharacters: true }) // 'ANZNEI'
faker.airline.recordLocator({ allowNumerics: true, allowVisuallySimilarCharacters: true }) // '1Z2Z3E'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/airline/index.ts#L140)

## seat [​](https://v9.fakerjs.dev/api/airline\#seat)

Generates a random seat.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.aircraftType? | 'narrowbody' \| 'regional' \| 'widebody' | `'narrowbody'` | The aircraft type. Can be one of `narrowbody`, `regional`, `widebody`. |

**Returns:** string

ts

```
function seat(
  options: {
    aircraftType?: AircraftType;
  } = {}
): string;
```

### Examples

ts

```
faker.airline.seat() // '22C'
faker.airline.seat({ aircraftType: 'regional' }) // '7A'
faker.airline.seat({ aircraftType: 'widebody' }) // '42K'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/airline/index.ts#L187)