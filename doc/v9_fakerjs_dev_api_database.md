[Skip to content](https://v9.fakerjs.dev/api/database#VPContent)

On this page

# Database [​](https://v9.fakerjs.dev/api/database\#database)

Module to generate database related entries.

### Overview [​](https://v9.fakerjs.dev/api/database\#overview)

Traditional relational database tables have data organized in columns with specific types - [`column()`](https://v9.fakerjs.dev/api/database#column), [`type()`](https://v9.fakerjs.dev/api/database#type). The database usually has an [`engine()`](https://v9.fakerjs.dev/api/database#engine) and a default [`collation()`](https://v9.fakerjs.dev/api/database#collation) for sorting.

For the NoSQL database MongoDB, [`mongodbObjectId()`](https://v9.fakerjs.dev/api/database#mongodbobjectid) provides a random ID.

## collation [​](https://v9.fakerjs.dev/api/database\#collation)

Returns a random database collation.

_Available since v4.0.0_

**Returns:** string

ts

```
function collation(): string;
```

### Examples

ts

```
faker.database.collation() // 'utf8_unicode_ci'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/database/index.ts#L49)

## column [​](https://v9.fakerjs.dev/api/database\#column)

Returns a random database column name.

_Available since v4.0.0_

**Returns:** string

ts

```
function column(): string;
```

### Examples

ts

```
faker.database.column() // 'createdAt'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/database/index.ts#L21)

## engine [​](https://v9.fakerjs.dev/api/database\#engine)

Returns a random database engine.

_Available since v4.0.0_

**Returns:** string

ts

```
function engine(): string;
```

### Examples

ts

```
faker.database.engine() // 'ARCHIVE'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/database/index.ts#L63)

## mongodbObjectId [​](https://v9.fakerjs.dev/api/database\#mongodbobjectid)

Returns a MongoDB [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/) string.

_Available since v6.2.0_

**Returns:** string

ts

```
function mongodbObjectId(): string;
```

### Examples

ts

```
faker.database.mongodbObjectId() // 'e175cac316a79afdd0ad3afb'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/database/index.ts#L77)

## type [​](https://v9.fakerjs.dev/api/database\#type)

Returns a random database column type.

_Available since v4.0.0_

**Returns:** string

ts

```
function type(): string;
```

### Examples

ts

```
faker.database.type() // 'timestamp'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/database/index.ts#L35)