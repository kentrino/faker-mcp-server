[Skip to content](https://v9.fakerjs.dev/api/person#VPContent)

On this page

# Person [​](https://v9.fakerjs.dev/api/person\#person)

Module to generate people's personal information such as names and job titles. Prior to Faker 8.0.0, this module was known as `faker.name`.

### Overview [​](https://v9.fakerjs.dev/api/person\#overview)

To generate a full name, use [`fullName`](https://v9.fakerjs.dev/api/person#fullname). Note that this is not the same as simply concatenating [`firstName`](https://v9.fakerjs.dev/api/person#firstname) and [`lastName`](https://v9.fakerjs.dev/api/person#lastname), as the full name may contain a prefix, suffix, or both. Additionally, different supported locales will have differing name patterns. For example, the last name may appear before the first name, or there may be a double or hyphenated first or last name.

You can also generate the parts of a name separately, using [`prefix`](https://v9.fakerjs.dev/api/person#prefix), [`firstName`](https://v9.fakerjs.dev/api/person#firstname), [`middleName`](https://v9.fakerjs.dev/api/person#middlename), [`lastName`](https://v9.fakerjs.dev/api/person#lastname), and [`suffix`](https://v9.fakerjs.dev/api/person#suffix). Not all locales support all of these parts.

Many of the methods in this module can optionally choose either female, male or mixed names.

Job-related data is also available. To generate a job title, use [`jobTitle`](https://v9.fakerjs.dev/api/person#jobtitle).

This module can also generate other personal information which might appear in user profiles, such as [`gender`](https://v9.fakerjs.dev/api/person#gender), [`zodiacSign`](https://v9.fakerjs.dev/api/person#zodiacsign), and [`bio`](https://v9.fakerjs.dev/api/person#bio).

### Related modules [​](https://v9.fakerjs.dev/api/person\#related-modules)

For personal contact information like phone numbers and email addresses, see the [`faker.phone`](https://v9.fakerjs.dev/api/phone) and [`faker.internet`](https://v9.fakerjs.dev/api/internet) modules.

## bio [​](https://v9.fakerjs.dev/api/person\#bio)

Returns a random short biography

_Available since v8.0.0_

**Returns:** string

ts

```
function bio(): string;
```

### Examples

ts

```
faker.person.bio() // 'oatmeal advocate, veteran 🐠'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L261)

## firstName [​](https://v9.fakerjs.dev/api/person\#firstname)

Returns a random first name.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sex? | 'female' \| 'male' |  | The optional sex to use.<br>Can be either `'female'` or `'male'`. |

**Returns:** string

ts

```
function firstName(sex?: SexType): string;
```

### Examples

ts

```
faker.person.firstName() // 'Antwan'
faker.person.firstName('female') // 'Victoria'
faker.person.firstName('male') // 'Tom'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L82)

## fullName [​](https://v9.fakerjs.dev/api/person\#fullname)

Generates a random full name.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.firstName? | string | `faker.person.firstName(sex)` | The optional first name to use. If not specified a random one will be chosen. |
| options.lastName? | string | `faker.person.lastName(sex)` | The optional last name to use. If not specified a random one will be chosen. |
| options.sex? | 'female' \| 'male' | `faker.helpers.arrayElement(['female', 'male'])` | The optional sex to use. Can be either `'female'` or `'male'`. |

**Returns:** string

ts

```
function fullName(
  options: {
    firstName?: string;
    lastName?: string;
    sex?: SexType;
  } = {}
): string;
```

### Examples

ts

```
faker.person.fullName() // 'Allen Brown'
faker.person.fullName({ firstName: 'Joann' }) // 'Joann Osinski'
faker.person.fullName({ firstName: 'Marcella', sex: 'female' }) // 'Mrs. Marcella Huels'
faker.person.fullName({ lastName: 'Beer' }) // 'Mr. Alfonso Beer'
faker.person.fullName({ sex: 'male' }) // 'Fernando Schaefer'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L162)

## gender [​](https://v9.fakerjs.dev/api/person\#gender)

Returns a random gender.

_Available since v8.0.0_

**Returns:** string

ts

```
function gender(): string;
```

### Examples

ts

```
faker.person.gender() // 'Trans*Man'
```

### See Also

- [faker.person.sex(): For generating a binary-gender value.](https://v9.fakerjs.dev/api/person#sex)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L214)

## jobArea [​](https://v9.fakerjs.dev/api/person\#jobarea)

Generates a random job area.

_Available since v8.0.0_

**Returns:** string

ts

```
function jobArea(): string;
```

### Examples

ts

```
faker.person.jobArea() // 'Brand'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L336)

## jobDescriptor [​](https://v9.fakerjs.dev/api/person\#jobdescriptor)

Generates a random job descriptor.

_Available since v8.0.0_

**Returns:** string

ts

```
function jobDescriptor(): string;
```

### Examples

ts

```
faker.person.jobDescriptor() // 'Customer'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L322)

## jobTitle [​](https://v9.fakerjs.dev/api/person\#jobtitle)

Generates a random job title.

_Available since v8.0.0_

**Returns:** string

ts

```
function jobTitle(): string;
```

### Examples

ts

```
faker.person.jobTitle() // 'Global Accounts Engineer'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L308)

## jobType [​](https://v9.fakerjs.dev/api/person\#jobtype)

Generates a random job type.

_Available since v8.0.0_

**Returns:** string

ts

```
function jobType(): string;
```

### Examples

ts

```
faker.person.jobType() // 'Assistant'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L350)

## lastName [​](https://v9.fakerjs.dev/api/person\#lastname)

Returns a random last name.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sex? | 'female' \| 'male' |  | The optional sex to use.<br>Can be either `'female'` or `'male'`. |

**Returns:** string

ts

```
function lastName(sex?: SexType): string;
```

### Examples

ts

```
faker.person.lastName() // 'Hauck'
faker.person.lastName('female') // 'Grady'
faker.person.lastName('male') // 'Barton'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L105)

## middleName [​](https://v9.fakerjs.dev/api/person\#middlename)

Returns a random middle name.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sex? | 'female' \| 'male' |  | The optional sex to use.<br>Can be either `'female'` or `'male'`. |

**Returns:** string

ts

```
function middleName(sex?: SexType): string;
```

### Examples

ts

```
faker.person.middleName() // 'James'
faker.person.middleName('female') // 'Eloise'
faker.person.middleName('male') // 'Asher'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L135)

## prefix [​](https://v9.fakerjs.dev/api/person\#prefix)

Returns a random person prefix.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| sex? | 'female' \| 'male' |  | The optional sex to use. Can be either `'female'` or `'male'`. |

**Returns:** string

ts

```
function prefix(sex?: SexType): string;
```

### Examples

ts

```
faker.person.prefix() // 'Miss'
faker.person.prefix('female') // 'Ms.'
faker.person.prefix('male') // 'Mr.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L279)

## sex [​](https://v9.fakerjs.dev/api/person\#sex)

Returns a random sex.

Output of this method is localised, so it should not be used to fill the parameter `sex`
available in some other modules for example `faker.person.firstName()`.

_Available since v8.0.0_

**Returns:** string

ts

```
function sex(): string;
```

### Examples

ts

```
faker.person.sex() // 'female'
```

### See Also

- [faker.person.gender(): For generating a gender related value.](https://v9.fakerjs.dev/api/person#gender)
- [faker.person.sexType(): For generating a sex value to be used as a parameter.](https://v9.fakerjs.dev/api/person#sextype)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L234)

## sexType [​](https://v9.fakerjs.dev/api/person\#sextype)

Returns a random sex type. The `SexType` is intended to be used in parameters and conditions.

_Available since v8.0.0_

**Returns:** 'female' \| 'male'

ts

```
function sexType(): SexType;
```

### Examples

ts

```
faker.person.sexType() // Sex.Female
```

### See Also

- [faker.person.gender(): For generating a gender related value in forms.](https://v9.fakerjs.dev/api/person#gender)
- [faker.person.sex(): For generating a binary-gender value in forms.](https://v9.fakerjs.dev/api/person#sex)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L249)

## suffix [​](https://v9.fakerjs.dev/api/person\#suffix)

Returns a random person suffix.

_Available since v8.0.0_

**Returns:** string

ts

```
function suffix(): string;
```

### Examples

ts

```
faker.person.suffix() // 'DDS'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L293)

## zodiacSign [​](https://v9.fakerjs.dev/api/person\#zodiacsign)

Returns a random zodiac sign.

_Available since v8.0.0_

**Returns:** string

ts

```
function zodiacSign(): string;
```

### Examples

ts

```
faker.person.zodiacSign() // 'Pisces'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/person/index.ts#L364)