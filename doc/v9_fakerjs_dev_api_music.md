[Skip to content](https://v9.fakerjs.dev/api/music#VPContent)

On this page

# Music [​](https://v9.fakerjs.dev/api/music\#music)

Module to generate music related entries.

### Overview [​](https://v9.fakerjs.dev/api/music\#overview)

Generate random music content.

For a random album name, use [`album()`](https://v9.fakerjs.dev/api/music#album).

For a random artist, use [`artist()`](https://v9.fakerjs.dev/api/music#artist).

For a random genre, use [`genre()`](https://v9.fakerjs.dev/api/music#genre).

For a random song name, [`songName()`](https://v9.fakerjs.dev/api/music#songname).

All data types may be localized.

## album [​](https://v9.fakerjs.dev/api/music\#album)

Returns a random album name.

_Available since v9.0.0_

**Returns:** string

ts

```
function album(): string;
```

### Examples

ts

```
faker.music.album() // '1989'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/music/index.ts#L29)

## artist [​](https://v9.fakerjs.dev/api/music\#artist)

Returns a random artist name.

_Available since v9.0.0_

**Returns:** string

ts

```
function artist(): string;
```

### Examples

ts

```
faker.music.artist() // 'The Beatles'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/music/index.ts#L41)

## genre [​](https://v9.fakerjs.dev/api/music\#genre)

Returns a random music genre.

_Available since v5.2.0_

**Returns:** string

ts

```
function genre(): string;
```

### Examples

ts

```
faker.music.genre() // 'Reggae'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/music/index.ts#L53)

## songName [​](https://v9.fakerjs.dev/api/music\#songname)

Returns a random song name.

_Available since v7.1.0_

**Returns:** string

ts

```
function songName(): string;
```

### Examples

ts

```
faker.music.songName() // 'White Christmas'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/music/index.ts#L65)