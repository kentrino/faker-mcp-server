[Skip to content](https://v9.fakerjs.dev/api/faker#VPContent)

On this page

# Faker [​](https://v9.fakerjs.dev/api/faker\#faker)

This is Faker's main class containing all modules that can be used to generate data.

Please have a look at the individual modules and methods for more information and examples.

ts

```
import { faker } from '@faker-js/faker';
// const { faker } = require('@faker-js/faker');

// faker.seed(1234);

faker.person.firstName(); // 'John'
faker.person.lastName(); // 'Doe'
import { Faker, es } from '@faker-js/faker';
// const { Faker, es } = require('@faker-js/faker');

// create a Faker instance with only es data and no en fallback (=> smaller bundle size)
const customFaker = new Faker({ locale: [es] });

customFaker.person.firstName(); // 'Javier'
customFaker.person.lastName(); // 'Ocampo Corrales'

customFaker.music.genre(); // throws Error as this data is not available in `es`
```

## constructor [​](https://v9.fakerjs.dev/api/faker\#constructor)

Creates a new instance of Faker.

In most cases you should use one of the prebuilt Faker instances instead of the constructor, for example `fakerDE`, `fakerFR`, ...

You only need to use the constructor if you need custom fallback logic or a custom locale.

For more information see our [Localization Guide](https://v9.fakerjs.dev/guide/localization).

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } |  | The options to use. |
| options.locale | LocaleDefinition \| LocaleDefinition\[\] |  | The locale data to use for this instance.<br>If an array is provided, the first locale that has a definition for a given property will be used.<br>Please make sure that all required locales and their parent locales are present, e.g. `[de_AT, de, en, base]`. |
| options.randomizer? | Randomizer | `generateMersenne53Randomizer()` | The Randomizer to use.<br>Specify this only if you want to use it to achieve a specific goal,<br>such as sharing the same random generator with other instances/tools. |
| options.seed? | number |  | The initial seed to use.<br>The seed can be used to generate reproducible values.<br>Refer to the `seed()` method for more information.<br>Defaults to a random seed. |

**Returns:** Faker

ts

```
function constructor(options: {
  locale: LocaleDefinition | LocaleDefinition[];
  randomizer?: Randomizer;
  seed?: number;
});
```

### Examples

ts

```
import { Faker, es } from '@faker-js/faker';
// const { Faker, es } = require('@faker-js/faker');

// create a Faker instance with only es data and no en fallback (=> smaller bundle size)
const customFaker = new Faker({ locale: [es] });

customFaker.person.firstName(); // 'Javier'
customFaker.person.lastName(); // 'Ocampo Corrales'

customFaker.music.genre(); // throws Error as this data is not available in `es`
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/faker.ts#L149)

## getMetadata [​](https://v9.fakerjs.dev/api/faker\#getmetadata)

Returns an object with metadata about the current locale.

_Available since v8.1.0_

**Returns:** MetadataDefinition

ts

```
function getMetadata(): MetadataDefinition;
```

### Examples

ts

```
import { faker, fakerES_MX } from '@faker-js/faker';
// const { faker, fakerES_MX } = require("@faker-js/faker")
faker.getMetadata(); // { title: 'English', code: 'en', language: 'en', endonym: 'English', dir: 'ltr', script: 'Latn' }
fakerES_MX.getMetadata(); // { title: 'Spanish (Mexico)', code: 'es_MX', language: 'es', endonym: 'Español (México)', dir: 'ltr', script: 'Latn', country: 'MX' }
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/faker.ts#L207)

## seed [​](https://v9.fakerjs.dev/api/faker\#seed)

Sets the seed or generates a new one.

Please note that generated values are dependent on both the seed and the
number of calls that have been made since it was set.

This method is intended to allow for consistent values in a tests, so you
might want to use hardcoded values as the seed.

In addition to that it can be used for creating truly random tests
(by passing no arguments), that still can be reproduced if needed,
by logging the result and explicitly setting it if needed.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| seed? | number \| number\[\] | `randomSeed()` | The seed or seed array to use. |

**Returns:** number \| number\[\]

ts

```
function seed(seed?: number | number[]): number | number[];
```

### Examples

ts

```
// Consistent values for tests (using a number):
faker.seed(42)
faker.number.int(10); // 4
faker.number.int(10); // 10

faker.seed(42)
faker.number.int(10); // 4
faker.number.int(10); // 10

// Consistent values for tests (using an array):
faker.seed([42, 13, 17])
faker.number.int(10); // 3
faker.number.int(10); // 10

faker.seed([42, 13, 17])
faker.number.int(10); // 3
faker.number.int(10); // 10

// Random but reproducible tests:
// Simply log the seed, and if you need to reproduce it, insert the seed here
console.log('Running test with seed:', faker.seed());
```

### See Also

- [Reproducible Results](https://v9.fakerjs.dev/guide/usage#reproducible-results)

- [faker.setDefaultRefDate(): For generating reproducible dates.](https://v9.fakerjs.dev/api/faker#setdefaultrefdate)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/simple-faker.ts#L269)

## setDefaultRefDate [​](https://v9.fakerjs.dev/api/faker\#setdefaultrefdate)

Sets the `refDate` source to use if no `refDate` date is passed to the date methods.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| dateOrSource | string \| number \| Date \| (() => Date) | `() => new Date()` | The function or the static value used to generate the `refDate` date instance.<br>The function must return a new valid `Date` instance for every call. |

**Returns:** void

ts

```
function setDefaultRefDate(
  dateOrSource: string | Date | number | (() => Date) = () => new Date()
): void;
```

### Examples

ts

```
faker.seed(1234);

// Default behavior
// faker.setDefaultRefDate();
faker.date.past(); // Changes based on the current date/time

// Use a static ref date
faker.setDefaultRefDate(new Date('2020-01-01'));
faker.date.past(); // Reproducible '2019-07-03T08:27:58.118Z'

// Use a ref date that changes every time it is used
let clock = new Date("2020-01-01").getTime();
faker.setDefaultRefDate(() => {
  clock += 1000; // +1s
  return new Date(clock);
});

faker.defaultRefDate() // 2020-01-01T00:00:01Z
faker.defaultRefDate() // 2020-01-01T00:00:02Z
```

### See Also

- [Reproducible Results](https://v9.fakerjs.dev/guide/usage#reproducible-results)

- [faker.seed(): For generating reproducible values.](https://v9.fakerjs.dev/api/faker#seed)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/simple-faker.ts#L72)