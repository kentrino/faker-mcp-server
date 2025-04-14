[Skip to content](https://v9.fakerjs.dev/api/internet#VPContent)

On this page

# Internet [​](https://v9.fakerjs.dev/api/internet\#internet)

Module to generate internet related entries.

### Overview [​](https://v9.fakerjs.dev/api/internet\#overview)

For user accounts, you may need an [`email()`](https://v9.fakerjs.dev/api/internet#email) and a [`password()`](https://v9.fakerjs.dev/api/internet#password), as well as a ASCII [`username()`](https://v9.fakerjs.dev/api/internet#username) or Unicode [`displayName()`](https://v9.fakerjs.dev/api/internet#displayname). Since the emails generated could coincidentally be real email addresses, you should not use these for sending real email addresses. If this is a concern, use [`exampleEmail()`](https://v9.fakerjs.dev/api/internet#exampleemail) instead.

For websites, you can generate a [`domainName()`](https://v9.fakerjs.dev/api/internet#domainname) or a full [`url()`](https://v9.fakerjs.dev/api/internet#url).

To make your data more 🔥, you can use [`emoji()`](https://v9.fakerjs.dev/api/internet#emoji).

You also have access to a number of the more technical elements of web requests, such as [`httpMethod`](https://v9.fakerjs.dev/api/internet#httpmethod), [`httpStatusCode`](https://v9.fakerjs.dev/api/internet#httpstatuscode), [`ip`](https://v9.fakerjs.dev/api/internet#ip), [`mac`](https://v9.fakerjs.dev/api/internet#mac), [`userAgent`](https://v9.fakerjs.dev/api/internet#useragent), and [`port`](https://v9.fakerjs.dev/api/internet#port).

## color [​](https://v9.fakerjs.dev/api/internet\#color)

Deprecated

This method is deprecated and will be removed in a future version.

Please use faker.color.rgb() or any of the other color methods instead.

Generates a random css hex color code in aesthetically pleasing color palette.

Based on
[http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette](http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette)

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.blueBase? | number | `0` | The optional base blue in range between `0` and `255`. |
| options.greenBase? | number | `0` | The optional base green in range between `0` and `255`. |
| options.redBase? | number | `0` | The optional base red in range between `0` and `255`. |

**Returns:** string

ts

```
function color(
  options: {
    redBase?: number;
    greenBase?: number;
    blueBase?: number;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.color() // '#30686e'
faker.internet.color({ redBase: 100, greenBase: 100, blueBase: 100 }) // '#4e5f8b'
```

### See Also

- [faker.color.rgb(): For generating a random RGB color.](https://v9.fakerjs.dev/api/color#rgb)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L830)

## displayName [​](https://v9.fakerjs.dev/api/internet\#displayname)

Generates a display name using the given person's name as base.
The resulting display name may use one or both of the provided names.
If the input names include Unicode characters, the resulting display name will contain Unicode characters.
It will not contain spaces.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.firstName? | string | `faker.person.firstName()` | The optional first name to use. |
| options.lastName? | string | `faker.person.lastName()` | The optional last name to use. |

**Returns:** string

ts

```
function displayName(
  options: {
    firstName?: string;
    lastName?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.displayName() // 'Nettie_Zboncak40'
faker.internet.displayName({ firstName: 'Jeanne', lastName: 'Doe' }) // 'Jeanne98' - note surname not used.
faker.internet.displayName({ firstName: 'John', lastName: 'Doe' }) // 'John.Doe'
faker.internet.displayName({ firstName: 'Hélene', lastName: 'Müller' }) // 'Hélene_Müller11'
faker.internet.displayName({ firstName: 'Фёдор', lastName: 'Достоевский' }) // 'Фёдор.Достоевский50'
faker.internet.displayName({ firstName: '大羽', lastName: '陳' }) // '大羽.陳'
```

### See Also

- [faker.internet.username(): For generating a plain ASCII username.](https://v9.fakerjs.dev/api/internet#username)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L461)

## domainName [​](https://v9.fakerjs.dev/api/internet\#domainname)

Generates a random domain name.

_Available since v2.0.1_

**Returns:** string

ts

```
function domainName(): string;
```

### Examples

ts

```
faker.internet.domainName() // 'slow-timer.info'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L612)

## domainSuffix [​](https://v9.fakerjs.dev/api/internet\#domainsuffix)

Returns a random domain suffix.

_Available since v2.0.1_

**Returns:** string

ts

```
function domainSuffix(): string;
```

### Examples

ts

```
faker.internet.domainSuffix() // 'com'
faker.internet.domainSuffix() // 'name'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L625)

## domainWord [​](https://v9.fakerjs.dev/api/internet\#domainword)

Generates a random domain word.

_Available since v2.0.1_

**Returns:** string

ts

```
function domainWord(): string;
```

### Examples

ts

```
faker.internet.domainWord() // 'close-reality'
faker.internet.domainWord() // 'weird-cytoplasm'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L640)

## email [​](https://v9.fakerjs.dev/api/internet\#email)

Generates an email address using the given person's name as base.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.allowSpecialCharacters? | boolean | `false` | Whether special characters such as ``.!#$%&'*+-/=?^_`{|}~`` should be included in the email address. |
| options.firstName? | string | `faker.person.firstName()` | The optional first name to use. |
| options.lastName? | string | `faker.person.lastName()` | The optional last name to use. |
| options.provider? | string |  | The mail provider domain to use. If not specified, a random free mail provider will be chosen. |

**Returns:** string

ts

```
function email(
  options: {
    firstName?: string;
    lastName?: string;
    provider?: string;
    allowSpecialCharacters?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.email() // 'Kassandra4@hotmail.com'
faker.internet.email({ firstName: 'Jeanne'}) // 'Jeanne63@yahoo.com'
faker.internet.email({ firstName: 'Jeanne'}) // 'Jeanne_Smith63@yahoo.com'
faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe' }) // 'Jeanne.Doe63@yahoo.com'
faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev' }) // 'Jeanne_Doe88@example.fakerjs.dev'
faker.internet.email({ firstName: 'Jeanne', lastName: 'Doe', provider: 'example.fakerjs.dev', allowSpecialCharacters: true }) // 'Jeanne%Doe88@example.fakerjs.dev'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L183)

## emoji [​](https://v9.fakerjs.dev/api/internet\#emoji)

Generates a random emoji.

_Available since v6.2.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | Options object. |
| options.types? | EmojiType\[\] | `Object.keys(faker.definitions.internet.emoji)` | A list of the emoji types that should be used. |

**Returns:** string

ts

```
function emoji(
  options: {
    types?: ReadonlyArray<EmojiType>;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.emoji() // '🥰'
faker.internet.emoji({ types: ['food', 'nature'] }) // '🥐'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L1062)

## exampleEmail [​](https://v9.fakerjs.dev/api/internet\#exampleemail)

Generates an email address using an example mail provider using the given person's name as base.

_Available since v3.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.allowSpecialCharacters? | boolean | `false` | Whether special characters such as ``.!#$%&'*+-/=?^_`{|}~`` should be included in the email address. |
| options.firstName? | string | `faker.person.firstName()` | The optional first name to use. |
| options.lastName? | string | `faker.person.lastName()` | The optional last name to use. |

**Returns:** string

ts

```
function exampleEmail(
  options: {
    firstName?: string;
    lastName?: string;
    allowSpecialCharacters?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.exampleEmail() // 'Helmer.Graham23@example.com'
faker.internet.exampleEmail({ firstName: 'Jeanne' }) // 'Jeanne96@example.net'
faker.internet.exampleEmail({ firstName: 'Jeanne' }) // 'Jeanne.Smith96@example.net'
faker.internet.exampleEmail({ firstName: 'Jeanne', lastName: 'Doe' }) // 'Jeanne_Doe96@example.net'
faker.internet.exampleEmail({ firstName: 'Jeanne', lastName: 'Doe', allowSpecialCharacters: true }) // 'Jeanne%Doe88@example.com'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L263)

## httpMethod [​](https://v9.fakerjs.dev/api/internet\#httpmethod)

Returns a random http method.

Can be either of the following:

- `GET`
- `POST`
- `PUT`
- `DELETE`
- `PATCH`

_Available since v5.4.0_

**Returns:** 'GET' \| 'POST' \| 'PUT' \| 'DELETE' \| 'PATCH'

ts

```
function httpMethod(): 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
```

### Examples

ts

```
faker.internet.httpMethod() // 'PATCH'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L525)

## httpStatusCode [​](https://v9.fakerjs.dev/api/internet\#httpstatuscode)

Generates a random HTTP status code.

_Available since v7.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | Options object. |
| options.types? | HTTPStatusCodeType\[\] | `Object.keys(faker.definitions.internet.http_status_code)` | A list of the HTTP status code types that should be used. |

**Returns:** number

ts

```
function httpStatusCode(
  options: {
    types?: ReadonlyArray<HTTPStatusCodeType>;
  } = {}
): number;
```

### Examples

ts

```
faker.internet.httpStatusCode() // 200
faker.internet.httpStatusCode({ types: ['success', 'serverError'] }) // 500
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L548)

## ip [​](https://v9.fakerjs.dev/api/internet\#ip)

Generates a random IPv4 or IPv6 address.

_Available since v2.0.1_

**Returns:** string

ts

```
function ip(): string;
```

### Examples

ts

```
faker.internet.ip() // '245.108.222.0'
faker.internet.ip() // '4e5:f9c5:4337:abfd:9caf:1135:41ad:d8d3'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L661)

## ipv4 [​](https://v9.fakerjs.dev/api/internet\#ipv4)

Generates a random IPv4 address.

_Available since v6.1.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | { ... } \| { ... } | `{}` | The optional options object. |
| options.cidrBlock? | string | `'0.0.0.0/0'` | The optional CIDR block to use. Must be in the format `x.x.x.x/y`. |
| options.network? | 'any' \| 'loopback' \| 'private-a' \| 'private-b' \| 'private-c' \| 'test-net-1' \| 'test-net-2' \| 'test-net-3' \| 'link-local' \| 'multicast' | `'any'` | The optional network to use. This is intended as an alias for well-known `cidrBlock` s. |

**Returns:** string

ts

```
function ipv4(
  options?:
    | {
        cidrBlock?: string;
      }
    | {
        network?: IPv4NetworkType;
      }
): string;
```

### Examples

ts

```
faker.internet.ipv4() // '245.108.222.0'
faker.internet.ipv4({ cidrBlock: '192.168.0.0/16' }) // '192.168.215.224'
faker.internet.ipv4({ network: 'private-a' }) // '10.199.154.205'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L738)

## ipv6 [​](https://v9.fakerjs.dev/api/internet\#ipv6)

Generates a random IPv6 address.

_Available since v4.0.0_

**Returns:** string

ts

```
function ipv6(): string;
```

### Examples

ts

```
faker.internet.ipv6() // '269f:1230:73e3:318d:842b:daab:326d:897b'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L772)

## jwt [​](https://v9.fakerjs.dev/api/internet\#jwt)

Generates a random JWT (JSON Web Token).

Please note that this method generates a random signature instead of a valid one.

_Available since v9.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options object. |
| options.header? | Record<string, unknown> | `{<br>  alg: faker.internet.jwtAlgorithm(),<br>  typ: 'JWT'<br>}` | The header to use for the token. If present, it will replace any default values. |
| options.payload? | Record<string, unknown> | `{<br>  iat: faker.date.recent(),<br>  exp: faker.date.soon(),<br>  nbf: faker.date.anytime(),<br>  iss: faker.company.name(),<br>  sub: faker.string.uuid(),<br>  aud: faker.string.uuid(),<br>  jti: faker.string.uuid()<br>}` | The payload to use for the token. If present, it will replace any default values. |
| options.refDate? | string \| number \| Date | `faker.defaultRefDate()` | The date to use as reference point for the newly generated date. |

**Returns:** string

ts

```
function jwt(
  options: {
    header?: Record<string, unknown>;
    payload?: Record<string, unknown>;
    refDate?: string | Date | number;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.jwt() // 'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzI2MzgxMDYsImV4cCI6MTczMjY5MjUwOSwibmJmIjoxNzA1MDgxNjQ4LCJpc3MiOiJHdXRrb3dza2kgYW5kIFNvbnMiLCJzdWIiOiJlMzQxZjMwNS0yM2I2LTRkYmQtOTY2ZC1iNDRiZmM0ZGIzMGUiLCJhdWQiOiI0YzMwZGE3Yi0zZDUzLTQ4OGUtYTAyZC0zOWI2MDZiZmYxMTciLCJqdGkiOiJiMGZmOTMzOC04ODMwLTRmNDgtYjA3Ny1kNDNmMjU2OGZlYzAifQ.oDLVR73M0u5SjMPlc1aruxbdK7l2titXSeo9J5M1JUd65a1X9MhCz7FOobtX8eaj'
faker.internet.jwt({ header: { alg: 'HS256' }}) // 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTg2MTM3MTIsImV4cCI6MTcxODYzMzY3OSwibmJmIjoxNjk3MjYzNjMwLCJpc3MiOiJEb3lsZSBhbmQgU29ucyIsInN1YiI6IjYxYWRkYWFmLWY4MjktNDkzZS1iNTI1LTJjMGJkNjkzOTdjNyIsImF1ZCI6IjczNjcyMjVjLWIwMWMtNGE1My1hYzQyLTYwOWJkZmI1MzBiOCIsImp0aSI6IjU2Y2ZkZjAxLWRhMzMtNGUxNi04MzJiLTFlYTk3ZGY1MTQ2YSJ9.5iUgaCaFVPZ8d1QD0xMjoeJbmPVyUfKfoRQ6Njzm5MLp5F4UMh5REbPCrW70fAkr'
faker.internet.jwt({ payload: { iss: 'Acme' }}) // 'eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBY21lIn0.syUt0GBukNac8Cn1AGKFq2SWAXWy1YIfl0uOYiwg6TZ3omAW0c7FGWY6bC7ZOFSt'
faker.internet.jwt({ refDate: '2020-01-01T00:00:00.000Z' }) // 'eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzc4MDY4NDUsImV4cCI6MTU3Nzg0NjI4MCwibmJmIjoxNTgxNTQyMDYwLCJpc3MiOiJLcmVpZ2VyLCBBbHRlbndlcnRoIGFuZCBQYXVjZWsiLCJzdWIiOiI5NzVjMjMyOS02MDlhLTRjYTYtYjBkZi05ZmY4MGZiNDUwN2QiLCJhdWQiOiI0ODQxZWYwNi01OWYwLTQzMWEtYmFmZi0xMjkxZmRhZDdhNjgiLCJqdGkiOiJmNDBjZTJiYi00ZWYyLTQ1MjMtOGIxMy1kN2Q4NTA5N2M2ZTUifQ.cuClEZQ0CyPIMVS5uxrMwWXz0wcqFFdt0oNne3PMryyly0jghkxVurss2TapMC3C'
```

### See Also

- [https://datatracker.ietf.org/doc/html/rfc7519](https://datatracker.ietf.org/doc/html/rfc7519)

- [faker.internet.jwtAlgorithm(): For generating random JWT (JSON Web Token) Algorithm.](https://v9.fakerjs.dev/api/internet#jwtalgorithm)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L1119)

## jwtAlgorithm [​](https://v9.fakerjs.dev/api/internet\#jwtalgorithm)

Generates a random JWT (JSON Web Token) Algorithm.

_Available since v9.1.0_

**Returns:** string

ts

```
function jwtAlgorithm(): string;
```

### Examples

ts

```
faker.internet.jwtAlgorithm() // 'HS256'
faker.internet.jwtAlgorithm() // 'RS512'
```

### See Also

- [faker.internet.jwt(): For generating random JWT (JSON Web Token).](https://v9.fakerjs.dev/api/internet#jwt)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L1092)

## mac [​](https://v9.fakerjs.dev/api/internet\#mac)

Generates a random mac address.

_Available since v3.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | string \| { ... } | `{}` | The optional separator or an options object. |
| options.separator? | string | `':'` | The optional separator to use. Can be either `':'`, `'-'` or `''`. |

**Returns:** string

ts

```
function mac(
  options?:
    | string
    | {
        separator?: string;
      }
): string;
```

### Examples

ts

```
faker.internet.mac() // '32:8e:2e:09:c6:05'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L921)

## password [​](https://v9.fakerjs.dev/api/internet\#password)

Generates a random password-like string. Do not use this method for generating actual passwords for users.
Since the source of the randomness is not cryptographically secure, neither is this generator.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.length? | number | `15` | The length of the password to generate. |
| options.memorable? | boolean | `false` | Whether the generated password should be memorable. |
| options.pattern? | RegExp | `/\w/` | The pattern that all chars should match.<br>This option will be ignored, if `memorable` is `true`. |
| options.prefix? | string | `''` | The prefix to use. |

**Returns:** string

ts

```
function password(
  options: {
    length?: number;
    memorable?: boolean;
    pattern?: RegExp;
    prefix?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.password() // '89G1wJuBLbGziIs'
faker.internet.password({ length: 20 }) // 'aF55c_8O9kZaPOrysFB_'
faker.internet.password({ length: 20, memorable: true }) // 'lawetimufozujosodedi'
faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/ }) // 'HMAQDFFYLDDUTBKVNFVS'
faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' }) // 'Hello IREOXTDWPERQSB'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L977)

## port [​](https://v9.fakerjs.dev/api/internet\#port)

Generates a random port number.

_Available since v5.4.0_

**Returns:** number

ts

```
function port(): number;
```

### Examples

ts

```
faker.internet.port() // 9414
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L790)

## protocol [​](https://v9.fakerjs.dev/api/internet\#protocol)

Returns a random web protocol. Either `http` or `https`.

_Available since v2.1.5_

**Returns:** 'http' \| 'https'

ts

```
function protocol(): 'http' | 'https';
```

### Examples

ts

```
faker.internet.protocol() // 'http'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L504)

## url [​](https://v9.fakerjs.dev/api/internet\#url)

Generates a random http(s) url.

_Available since v2.1.5_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | Optional options object. |
| options.appendSlash? | boolean | `faker.datatype.boolean()` | Whether to append a slash to the end of the url (path). |
| options.protocol? | HTTPProtocolType | `'https'` | The protocol to use. |

**Returns:** string

ts

```
function url(
  options: {
    appendSlash?: boolean;
    protocol?: HTTPProtocolType;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.url() // 'https://remarkable-hackwork.info'
faker.internet.url({ appendSlash: true }) // 'https://slow-timer.info/'
faker.internet.url({ protocol: 'http', appendSlash: false }) // 'http://www.terrible-idea.com'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L583)

## userAgent [​](https://v9.fakerjs.dev/api/internet\#useragent)

Generates a random user agent string.

_Available since v2.0.1_

**Returns:** string

ts

```
function userAgent(): string;
```

### Examples

ts

```
faker.internet.userAgent()
// 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_1 like Mac OS X) AppleWebKit/537.19.86 (KHTML, like Gecko) Version/18_3 Mobile/15E148 Safari/598.43'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L803)

## username [​](https://v9.fakerjs.dev/api/internet\#username)

Generates a username using the given person's name as base.
The resulting username may use neither, one or both of the names provided.
This will always return a plain ASCII string.
Some basic stripping of accents and transliteration of characters will be done.

_Available since v9.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.firstName? | string | `faker.person.firstName()` | The optional first name to use. |
| options.lastName? | string | `faker.person.lastName()` | The optional last name to use. |

**Returns:** string

ts

```
function username(
  options: {
    firstName?: string;
    lastName?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.username() // 'Nettie_Zboncak40'
faker.internet.username({ firstName: 'Jeanne' }) // 'Jeanne98'
faker.internet.username({ firstName: 'Jeanne' }) // 'Jeanne.Smith98'
faker.internet.username({ firstName: 'Jeanne', lastName: 'Doe'}) // 'Jeanne_Doe98'
faker.internet.username({ firstName: 'John', lastName: 'Doe' }) // 'John.Doe'
faker.internet.username({ firstName: 'Hélene', lastName: 'Müller' }) // 'Helene_Muller11'
faker.internet.username({ firstName: 'Фёдор', lastName: 'Достоевский' }) // 'Fedor.Dostoevskii50'
faker.internet.username({ firstName: '大羽', lastName: '陳' }) // 'hlzp8d.tpv45' - note neither name is used
```

### See Also

- [faker.internet.displayName(): For generating an Unicode display name.](https://v9.fakerjs.dev/api/internet#displayname)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L375)

## userName [​](https://v9.fakerjs.dev/api/internet\#username-1)

Deprecated

This method is deprecated and will be removed in a future version.

Use `faker.internet.username()` instead.

Generates a username using the given person's name as base.
The resulting username may use neither, one or both of the names provided.
This will always return a plain ASCII string.
Some basic stripping of accents and transliteration of characters will be done.

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.firstName? | string | `faker.person.firstName()` | The optional first name to use. |
| options.lastName? | string | `faker.person.lastName()` | The optional last name to use. |

**Returns:** string

ts

```
function userName(
  options: {
    firstName?: string;
    lastName?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.internet.userName() // 'Nettie_Zboncak40'
faker.internet.userName({ firstName: 'Jeanne' }) // 'Jeanne98'
faker.internet.userName({ firstName: 'Jeanne' }) // 'Jeanne.Smith98'
faker.internet.userName({ firstName: 'Jeanne', lastName: 'Doe'}) // 'Jeanne_Doe98'
faker.internet.userName({ firstName: 'John', lastName: 'Doe' }) // 'John.Doe'
faker.internet.userName({ firstName: 'Hélene', lastName: 'Müller' }) // 'Helene_Muller11'
faker.internet.userName({ firstName: 'Фёдор', lastName: 'Достоевский' }) // 'Fedor.Dostoevskii50'
faker.internet.userName({ firstName: '大羽', lastName: '陳' }) // 'hlzp8d.tpv45' - note neither name is used
```

### See Also

- [faker.internet.displayName(): For generating an Unicode display name.](https://v9.fakerjs.dev/api/internet#displayname)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/internet/index.ts#L325)