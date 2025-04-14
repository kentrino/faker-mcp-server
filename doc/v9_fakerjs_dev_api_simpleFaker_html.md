[Skip to content](https://v9.fakerjs.dev/api/simpleFaker.html#VPContent)

On this page

# SimpleFaker [​](https://v9.fakerjs.dev/api/simpleFaker.html\#simplefaker)

This is a simplified Faker class that doesn't need any localized data to generate its output.

It only includes methods from:

- `datatype`
- `date` (without `month` and `weekday`)
- `helpers` (without `fake`)
- `number`
- `string`

ts

```
import { simpleFaker } from '@faker-js/faker';
// const { simpleFaker } = require('@faker-js/faker');

// simpleFaker.seed(1234);

simpleFaker.number.int(10); // 4
simpleFaker.string.uuid(); // 'c50e1f5c-86e8-4aa9-888e-168e0a182519'
```

## constructor [​](https://v9.fakerjs.dev/api/simpleFaker.html\#constructor)

Creates a new instance of SimpleFaker.

In nearly any case you should use the prebuilt `simpleFaker` instances instead of the constructor.

_Available since v8.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.randomizer? | Randomizer | `generateMersenne53Randomizer()` | The Randomizer to use.<br>Specify this only if you want to use it to achieve a specific goal,<br>such as sharing the same random generator with other instances/tools. |
| options.seed? | number |  | The initial seed to use.<br>The seed can be used to generate reproducible values.<br>Refer to the `seed()` method for more information.<br>Defaults to a random seed. |

**Returns:** SimpleFaker

ts

```
function constructor(
  options: {
    randomizer?: Randomizer;
    seed?: number;
  } = {}
);
```

### Examples

ts

```
import { SimpleFaker } from '@faker-js/faker';
// const { SimpleFaker } = require('@faker-js/faker');

// create a SimpleFaker without any locale data
const customSimpleFaker = new SimpleFaker();

customSimpleFaker.helpers.arrayElement(['red', 'green', 'blue']); // 'green'
customSimpleFaker.number.int(10); // 4
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/simple-faker.ts#L118)

## seed [​](https://v9.fakerjs.dev/api/simpleFaker.html\#seed)

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

## setDefaultRefDate [​](https://v9.fakerjs.dev/api/simpleFaker.html\#setdefaultrefdate)

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