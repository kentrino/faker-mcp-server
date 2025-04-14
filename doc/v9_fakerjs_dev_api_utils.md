[Skip to content](https://v9.fakerjs.dev/api/utils#VPContent)

On this page

# Utilities [​](https://v9.fakerjs.dev/api/utils\#utilities)

A list of all the utilities available in Faker.js.

## generateMersenne32Randomizer [​](https://v9.fakerjs.dev/api/utils\#generatemersenne32randomizer)

Generates a MersenneTwister19937 randomizer with 32 bits of precision.
This is the default randomizer used by faker prior to v9.0.

_Available since v8.2.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| seed | number | `randomSeed()` | The initial seed to use. Defaults to a random number. |

**Returns:** Randomizer

ts

```
function generateMersenne32Randomizer(seed: number = randomSeed()): Randomizer;
```

### Examples

ts

```
import { de, en, generateMersenne32Randomizer, Faker } from '@faker-js/faker';

const randomizer = generateMersenne32Randomizer();
randomizer.seed(42);
// Share the same randomizer between multiple instances
const customFaker1 = new Faker({ locale: de, randomizer });
const customFaker2 = new Faker({ locale: en, randomizer });
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/utils/mersenne.ts#L22)

## generateMersenne53Randomizer [​](https://v9.fakerjs.dev/api/utils\#generatemersenne53randomizer)

Generates a MersenneTwister19937 randomizer with 53 bits of precision.
This is the default randomizer used by faker starting with v9.0.

_Available since v9.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| seed | number | `randomSeed()` | The initial seed to use. Defaults to a random number. |

**Returns:** Randomizer

ts

```
function generateMersenne53Randomizer(seed: number = randomSeed()): Randomizer;
```

### Examples

ts

```
import { de, en, generateMersenne53Randomizer, Faker } from '@faker-js/faker';

const randomizer = generateMersenne53Randomizer();
randomizer.seed(42);
// Share the same randomizer between multiple instances
const customFaker1 = new Faker({ locale: de, randomizer });
const customFaker2 = new Faker({ locale: en, randomizer });
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/utils/mersenne.ts#L54)

## mergeLocales [​](https://v9.fakerjs.dev/api/utils\#mergelocales)

Merges the given locales into one locale.
The locales are merged in the order they are given.
The first locale that provides an entry for a category will be used for that.
Mutating the category entries in the returned locale will also mutate the entries in the respective source locale.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| locales | LocaleDefinition\[\] |  | The locales to merge. |

**Returns:** LocaleDefinition

ts

```
function mergeLocales(locales: LocaleDefinition[]): LocaleDefinition;
```

### Examples

ts

```
import { de_CH, de, en, mergeLocales } from '@faker-js/faker';

const de_CH_with_fallbacks = mergeLocales([ de_CH, de, en ]);
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/utils/merge-locales.ts#L20)