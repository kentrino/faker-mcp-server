[Skip to content](https://v9.fakerjs.dev/api/hacker#VPContent)

On this page

# Hacker [​](https://v9.fakerjs.dev/api/hacker\#hacker)

Module to generate hacker/IT words and phrases.

### Overview [​](https://v9.fakerjs.dev/api/hacker\#overview)

There are methods for different parts of speech, such as [`abbreviation()`](https://v9.fakerjs.dev/api/hacker#abbreviation), [`adjective()`](https://v9.fakerjs.dev/api/hacker#adjective), [`noun()`](https://v9.fakerjs.dev/api/hacker#noun), [`verb()`](https://v9.fakerjs.dev/api/hacker#verb), and [`ingverb()`](https://v9.fakerjs.dev/api/hacker#ingverb). Alternatively, [`phrase()`](https://v9.fakerjs.dev/api/hacker#phrase) creates a longer phrase combining these words.

### Related modules [​](https://v9.fakerjs.dev/api/hacker\#related-modules)

Various modules allow for generating other types of words and phrases:

- [faker.word](https://v9.fakerjs.dev/api/word) uses general vocabulary rather than hacker-specific terms.
- [faker.lorem](https://v9.fakerjs.dev/api/lorem) uses faux-Latin "lorem ipsum" text.
- [faker.company](https://v9.fakerjs.dev/api/company) includes corporate catchphrases and buzzwords.

## abbreviation [​](https://v9.fakerjs.dev/api/hacker\#abbreviation)

Returns a random hacker/IT abbreviation.

_Available since v2.0.1_

**Returns:** string

ts

```
function abbreviation(): string;
```

### Examples

ts

```
faker.hacker.abbreviation() // 'THX'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/hacker/index.ts#L27)

## adjective [​](https://v9.fakerjs.dev/api/hacker\#adjective)

Returns a random hacker/IT adjective.

_Available since v2.0.1_

**Returns:** string

ts

```
function adjective(): string;
```

### Examples

ts

```
faker.hacker.adjective() // 'cross-platform'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/hacker/index.ts#L41)

## ingverb [​](https://v9.fakerjs.dev/api/hacker\#ingverb)

Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).

_Available since v2.0.1_

**Returns:** string

ts

```
function ingverb(): string;
```

### Examples

ts

```
faker.hacker.ingverb() // 'navigating'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/hacker/index.ts#L79)

## noun [​](https://v9.fakerjs.dev/api/hacker\#noun)

Returns a random hacker/IT noun.

_Available since v2.0.1_

**Returns:** string

ts

```
function noun(): string;
```

### Examples

ts

```
faker.hacker.noun() // 'system'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/hacker/index.ts#L55)

## phrase [​](https://v9.fakerjs.dev/api/hacker\#phrase)

Generates a random hacker/IT phrase.

_Available since v2.0.1_

**Returns:** string

ts

```
function phrase(): string;
```

### Examples

ts

```
faker.hacker.phrase()
// 'If we override the card, we can get to the HDD feed through the back-end HDD sensor!'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/hacker/index.ts#L94)

## verb [​](https://v9.fakerjs.dev/api/hacker\#verb)

Returns a random hacker/IT verb.

_Available since v2.0.1_

**Returns:** string

ts

```
function verb(): string;
```

### Examples

ts

```
faker.hacker.verb() // 'copy'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/hacker/index.ts#L67)