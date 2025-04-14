[Skip to content](https://v9.fakerjs.dev/api/word#VPContent)

On this page

# Word [​](https://v9.fakerjs.dev/api/word\#word)

Module to return various types of words.

## adjective [​](https://v9.fakerjs.dev/api/word\#adjective)

Returns a random adjective.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function adjective(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.adjective() // 'pungent'
faker.word.adjective(5) // 'slimy'
faker.word.adjective(100) // 'complete'
faker.word.adjective({ strategy: 'shortest' }) // 'icy'
faker.word.adjective({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'distant'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L35)

## adverb [​](https://v9.fakerjs.dev/api/word\#adverb)

Returns a random adverb.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function adverb(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.adverb() // 'quarrelsomely'
faker.word.adverb(5) // 'madly'
faker.word.adverb(100) // 'sadly'
faker.word.adverb({ strategy: 'shortest' }) // 'too'
faker.word.adverb({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'sweetly'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L108)

## conjunction [​](https://v9.fakerjs.dev/api/word\#conjunction)

Returns a random conjunction.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function conjunction(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.conjunction() // 'in order that'
faker.word.conjunction(5) // 'since'
faker.word.conjunction(100) // 'as long as'
faker.word.conjunction({ strategy: 'shortest' }) // 'or'
faker.word.conjunction({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'hence'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L181)

## interjection [​](https://v9.fakerjs.dev/api/word\#interjection)

Returns a random interjection.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function interjection(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.interjection() // 'gah'
faker.word.interjection(5) // 'fooey'
faker.word.interjection(100) // 'yowza'
faker.word.interjection({ strategy: 'shortest' }) // 'hm'
faker.word.interjection({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'boohoo'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L254)

## noun [​](https://v9.fakerjs.dev/api/word\#noun)

Returns a random noun.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function noun(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.noun() // 'external'
faker.word.noun(5) // 'front'
faker.word.noun(100) // 'care'
faker.word.noun({ strategy: 'shortest' }) // 'ad'
faker.word.noun({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'average'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L327)

## preposition [​](https://v9.fakerjs.dev/api/word\#preposition)

Returns a random preposition.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function preposition(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.preposition() // 'without'
faker.word.preposition(5) // 'abaft'
faker.word.preposition(100) // 'an'
faker.word.preposition({ strategy: 'shortest' }) // 'a'
faker.word.preposition({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'given'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L400)

## sample [​](https://v9.fakerjs.dev/api/word\#sample)

Returns a random word, that can be an adjective, adverb, conjunction, interjection, noun, preposition, or verb.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function sample(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.sample() // 'incidentally'
faker.word.sample(5) // 'fruit'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L543)

## verb [​](https://v9.fakerjs.dev/api/word\#verb)

Returns a random verb.

_Available since v6.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } |  | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function verb(
  options:
    | number
    | {
        length?:
          | number
          | {
              min: number;
              max: number;
            };
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string;
```

### Examples

ts

```
faker.word.verb() // 'act'
faker.word.verb(5) // 'tinge'
faker.word.verb(100) // 'mess'
faker.word.verb({ strategy: 'shortest' }) // 'do'
faker.word.verb({ length: { min: 5, max: 7 }, strategy: "fail" }) // 'vault'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L473)

## words [​](https://v9.fakerjs.dev/api/word\#words)

Returns a random string containing some words separated by spaces.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The optional options object or the number of words to return. |
| options.count? | number \| { min: number; max: number; } | `{ min: 1, max: 3 }` | The number of words to return. |

**Returns:** string

ts

```
function words(
  options:
    | number
    | {
        count?:
          | number
          | {
              min: number;
              max: number;
            };
      } = {}
): string;
```

### Examples

ts

```
faker.word.words() // 'almost'
faker.word.words(5) // 'before hourly patiently dribble equal'
faker.word.words({ count: 5 }) // 'whoever edible um kissingly faraway'
faker.word.words({ count: { min: 5, max: 10 } }) // 'vice buoyant through apropos poised total wary boohoo'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/word/index.ts#L616)