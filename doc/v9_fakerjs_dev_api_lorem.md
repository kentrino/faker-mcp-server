[Skip to content](https://v9.fakerjs.dev/api/lorem#VPContent)

On this page

# Lorem [​](https://v9.fakerjs.dev/api/lorem\#lorem)

Module to generate random texts and words.

### Overview [​](https://v9.fakerjs.dev/api/lorem\#overview)

Generate dummy content using traditional faux-Latin [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) (in other locales to `en`, alternative words may be used).

In order of increasing size you can generate a single [`word()`](https://v9.fakerjs.dev/api/lorem#word), multiple [`words()`](https://v9.fakerjs.dev/api/lorem#words), a [`sentence()`](https://v9.fakerjs.dev/api/lorem#sentence), multiple [`sentences()`](https://v9.fakerjs.dev/api/lorem#sentences), [`lines()`](https://v9.fakerjs.dev/api/lorem#lines) separated by newlines, one [`paragraph()`](https://v9.fakerjs.dev/api/lorem#paragraph), or multiple [`paragraphs()`](https://v9.fakerjs.dev/api/lorem#paragraphs).

The generic [`text()`](https://v9.fakerjs.dev/api/lorem#text) method can be used to generate some text between one sentence and multiple paragraphs, while [`slug()`](https://v9.fakerjs.dev/api/lorem#slug) generates an URL-friendly hyphenated string.

## lines [​](https://v9.fakerjs.dev/api/lorem\#lines)

Generates the given number lines of lorem separated by `'\n'`.

_Available since v3.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| lineCount | number \| { ... } | `{ min: 1, max: 5 }` | The number of lines to generate. Defaults to a random number between `1` and `5`. |
| lineCount.max | number |  | The maximum number of lines to generate. |
| lineCount.min | number |  | The minimum number of lines to generate. |

**Returns:** string

ts

```
function lines(
  lineCount:
    | number
    | {
        min: number;
        max: number;
      } = { min: 1, max: 5 }
): string;
```

### Examples

ts

```
faker.lorem.lines()
// 'Rerum quia aliquam pariatur explicabo sint minima eos.
// Voluptatem repellat consequatur deleniti qui quibusdam harum cumque.
// Enim eveniet a qui.
// Consectetur velit eligendi animi nostrum veritatis.'

faker.lorem.lines()
// 'Soluta deserunt eos quam reiciendis libero autem enim nam ut.
// Voluptate aut aut.'

faker.lorem.lines(2)
// 'Quod quas nam quis impedit aut consequuntur.
// Animi dolores aspernatur.'

faker.lorem.lines({ min: 1, max: 3 })
// 'Error dolorem natus quos eum consequatur necessitatibus.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L363)

## paragraph [​](https://v9.fakerjs.dev/api/lorem\#paragraph)

Generates a paragraph with the given number of sentences.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sentenceCount | number \| { ... } | `3` | The number of sentences to generate. |
| sentenceCount.max | number |  | The maximum number of sentences to generate. |
| sentenceCount.min | number |  | The minimum number of sentences to generate. |

**Returns:** string

ts

```
function paragraph(
  sentenceCount:
    | number
    | {
        min: number;
        max: number;
      } = 3
): string;
```

### Examples

ts

```
faker.lorem.paragraph() // 'Non architecto nam unde sint. Ex tenetur dolor facere optio aut consequatur. Ea laudantium reiciendis repellendus.'
faker.lorem.paragraph(2) // 'Animi possimus nemo consequuntur ut ea et tempore unde qui. Quis corporis esse occaecati.'
faker.lorem.paragraph({ min: 1, max: 3 }) // 'Quis doloribus necessitatibus sint. Rerum accusamus impedit corporis porro.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L239)

## paragraphs [​](https://v9.fakerjs.dev/api/lorem\#paragraphs)

Generates the given number of paragraphs.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| paragraphCount | number \| { ... } | `3` | The number of paragraphs to generate. |
| paragraphCount.max | number |  | The maximum number of paragraphs to generate. |
| paragraphCount.min | number |  | The minimum number of paragraphs to generate. |
| separator | string | `'\n'` | The separator to use. |

**Returns:** string

ts

```
function paragraphs(
  paragraphCount:
    | number
    | {
        min: number;
        max: number;
      } = 3,
  separator: string = '\n'
): string;
```

### Examples

ts

```
faker.lorem.paragraphs()
// 'Beatae voluptatem dicta et assumenda fugit eaque quidem consequatur. Fuga unde provident. Id reprehenderit soluta facilis est laborum laborum. Illum aut non ut. Est nulla rem ipsa.
// Voluptatibus quo pariatur est. Temporibus deleniti occaecati pariatur nemo est molestias voluptas. Doloribus commodi et et exercitationem vel et. Omnis inventore cum aut amet.
// Sapiente deleniti et. Ducimus maiores eum. Rem dolorem itaque aliquam.'

faker.lorem.paragraphs(5)
// 'Quia hic sunt ducimus expedita quo impedit soluta. Quam impedit et ipsum optio. Unde dolores nulla nobis vero et aspernatur officiis.
// Aliquam dolorem temporibus dolores voluptatem voluptatem qui nostrum quia. Sit hic facilis rerum eius. Beatae doloribus nesciunt iste ipsum.
// Natus nam eum nulla voluptas molestiae fuga libero nihil voluptatibus. Sed quam numquam eum ipsam temporibus eaque ut et. Enim quas debitis quasi quis. Vitae et vitae.
// Repellat voluptatem est laborum illo harum sed reprehenderit aut. Quo sit et. Exercitationem blanditiis totam velit ad dicta placeat.
// Rerum non eum incidunt amet quo. Eaque laborum ut. Recusandae illo ab distinctio veritatis. Cum quis architecto ad maxime a.'

faker.lorem.paragraphs(2, '<br/>\n')
// 'Eos magnam aut qui accusamus. Sapiente quas culpa totam excepturi. Blanditiis totam distinctio occaecati dignissimos cumque atque qui officiis.<br/>
// Nihil quis vel consequatur. Blanditiis commodi deserunt sunt animi dolorum. A optio porro hic dolorum fugit aut et sint voluptas. Minima ad sed ipsa est non dolores.'

faker.lorem.paragraphs({ min: 1, max: 3 })
// 'Eum nam fugiat laudantium.
// Dignissimos tempore porro necessitatibus commodi nam.
// Veniam at commodi iste perferendis totam dolorum corporis ipsam.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L288)

## sentence [​](https://v9.fakerjs.dev/api/lorem\#sentence)

Generates a space separated list of words beginning with a capital letter and ending with a period.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| wordCount | number \| { ... } | `{ min: 3, max: 10 }` | The number of words, that should be in the sentence. Defaults to a random number between `3` and `10`. |
| wordCount.max | number |  | The maximum number of words to generate. |
| wordCount.min | number |  | The minimum number of words to generate. |

**Returns:** string

ts

```
function sentence(
  wordCount:
    | number
    | {
        min: number;
        max: number;
      } = { min: 3, max: 10 }
): string;
```

### Examples

ts

```
faker.lorem.sentence() // 'Voluptatum cupiditate suscipit autem eveniet aut dolorem aut officiis distinctio.'
faker.lorem.sentence(5) // 'Laborum voluptatem officiis est et.'
faker.lorem.sentence({ min: 3, max: 5 }) // 'Fugiat repellendus nisi.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L137)

## sentences [​](https://v9.fakerjs.dev/api/lorem\#sentences)

Generates the given number of sentences.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sentenceCount | number \| { ... } | `{ min: 2, max: 6 }` | The number of sentences to generate. Defaults to a random number between `2` and `6`. |
| sentenceCount.max | number |  | The maximum number of sentences to generate. |
| sentenceCount.min | number |  | The minimum number of sentences to generate. |
| separator | string | `' '` | The separator to add between sentences. |

**Returns:** string

ts

```
function sentences(
  sentenceCount:
    | number
    | {
        min: number;
        max: number;
      } = { min: 2, max: 6 },
  separator: string = ' '
): string;
```

### Examples

ts

```
faker.lorem.sentences() // 'Iste molestiae incidunt aliquam possimus reprehenderit eum corrupti. Deleniti modi voluptatem nostrum ut esse.'
faker.lorem.sentences(2) // 'Maxime vel numquam quibusdam. Dignissimos ex molestias quos aut molestiae quam nihil occaecati maiores.'
faker.lorem.sentences(2, '\n')
// 'Et rerum a unde tempora magnam sit nisi.
// Et perspiciatis ipsam omnis.'
faker.lorem.sentences({ min: 1, max: 3 }) // 'Placeat ex natus tenetur repellendus repellendus iste. Optio nostrum veritatis.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L205)

## slug [​](https://v9.fakerjs.dev/api/lorem\#slug)

Generates a slugified text consisting of the given number of hyphen separated words.

_Available since v4.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| wordCount | number \| { ... } | `3` | The number of words to generate. |
| wordCount.max | number |  | The maximum number of words to generate. |
| wordCount.min | number |  | The minimum number of words to generate. |

**Returns:** string

ts

```
function slug(
  wordCount:
    | number
    | {
        min: number;
        max: number;
      } = 3
): string;
```

### Examples

ts

```
faker.lorem.slug() // 'dolores-illo-est'
faker.lorem.slug(5) // 'delectus-totam-iusto-itaque-placeat'
faker.lorem.slug({ min: 1, max: 3 }) // 'illo-ratione'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L169)

## text [​](https://v9.fakerjs.dev/api/lorem\#text)

Generates a random text based on a random lorem method.

_Available since v3.1.0_

**Returns:** string

ts

```
function text(): string;
```

### Examples

ts

```
faker.lorem.text() // 'Doloribus autem non quis vero quia.'
faker.lorem.text()
// 'Rerum eum reiciendis id ipsa hic dolore aut laborum provident.
// Quis beatae quis corporis veritatis corrupti ratione delectus sapiente ut.
// Quis ut dolor dolores facilis possimus tempore voluptates.
// Iure nam officia optio cumque.
// Dolor tempora iusto.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L322)

## word [​](https://v9.fakerjs.dev/api/lorem\#word)

Generates a word of a specified length.

_Available since v3.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | number \| { ... } | `{}` | The expected length of the word or the options to use. |
| options.length? | number \| { min: number; max: number; } | `1` | The expected length of the word. |
| options.strategy? | 'fail' \| 'closest' \| 'shortest' \| 'longest' \| 'any-length' | `'any-length'` | The strategy to apply when no words with a matching length are found.<br>Available error handling strategies:<br>- `fail`: Throws an error if no words with the given length are found.<br>- `shortest`: Returns any of the shortest words.<br>- `closest`: Returns any of the words closest to the given length.<br>- `longest`: Returns any of the longest words.<br>- `any-length`: Returns a word with any length. |

**Returns:** string

ts

```
function word(
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
faker.lorem.word() // 'temporibus'
faker.lorem.word(5) // 'velit'
faker.lorem.word({ strategy: 'shortest' }) // 'a'
faker.lorem.word({ length: { min: 5, max: 7 }, strategy: 'fail' }) // 'quaerat'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L41)

## words [​](https://v9.fakerjs.dev/api/lorem\#words)

Generates a space separated list of words.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| wordCount | number \| { ... } | `3` | The number of words to generate. |
| wordCount.max | number |  | The maximum number of words to generate. |
| wordCount.min | number |  | The minimum number of words to generate. |

**Returns:** string

ts

```
function words(
  wordCount:
    | number
    | {
        min: number;
        max: number;
      } = 3
): string;
```

### Examples

ts

```
faker.lorem.words() // 'qui praesentium pariatur'
faker.lorem.words(10) // 'debitis consectetur voluptatem non doloremque ipsum autem totam eum ratione'
faker.lorem.words({ min: 1, max: 3 }) // 'tenetur error cum'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/lorem/index.ts#L104)