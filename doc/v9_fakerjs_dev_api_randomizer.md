[Skip to content](https://v9.fakerjs.dev/api/randomizer#VPContent)

On this page

# Randomizer [​](https://v9.fakerjs.dev/api/randomizer\#randomizer)

Interface for a random number generator.

**Note:** Normally there is no need to implement this interface directly, unless you want to achieve a specific goal with it.

This interface enables you to use random generators from third party libraries such as [pure-rand](https://github.com/dubzzz/pure-rand).

Instances are expected to be ready for use before being passed to any Faker constructor, this includes being `seed()` ed with either a random or fixed value.

For more information please refer to the [documentation](https://v9.fakerjs.dev/guide/randomizer).

ts

```
import { Faker, Randomizer, SimpleFaker } from '@faker-js/faker';
import { RandomGenerator, xoroshiro128plus } from 'pure-rand';

function generatePureRandRandomizer(
  seed: number | number[] = Date.now() ^ (Math.random() * 0x100000000),
  factory: (seed: number) => RandomGenerator = xoroshiro128plus
): Randomizer {
  const self = {
    next: () => (self.generator.unsafeNext() >>> 0) / 0x100000000,
    seed: (seed: number | number[]) => {
      self.generator = factory(typeof seed === 'number' ? seed : seed[0]);
    },
  } as Randomizer & { generator: RandomGenerator };
  self.seed(seed);
  return self;
}

const randomizer = generatePureRandRandomizer();

const simpleFaker = new SimpleFaker({ randomizer });

const faker = new Faker({
  locale: ...,
  randomizer,
});
```

## next [​](https://v9.fakerjs.dev/api/randomizer\#next)

Generates a random float between 0 (inclusive) and 1 (exclusive).

_Available since v8.2.0_

**Returns:** number

ts

```
function next(): number;
```

### Examples

ts

```
randomizer.next() // 0.3404027920160495
randomizer.next() // 0.929890375900335
randomizer.next() // 0.5866362918861691
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/randomizer.ts#L54)

## seed [​](https://v9.fakerjs.dev/api/randomizer\#seed)

Sets the seed to use.

_Available since v8.2.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| seed | number \| number\[\] |  | The seed to use. |

**Returns:** void

ts

```
function seed(seed: number | number[]): void;
```

### Examples

ts

```
// Random seeds
randomizer.seed(Date.now() ^ (Math.random() * 0x100000000));
// Fixed seeds (for reproducibility)
randomizer.seed(42);
randomizer.seed([42, 13.37]);
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/randomizer.ts#L70)