[Skip to content](https://v9.fakerjs.dev/api/system#VPContent)

On this page

# System [​](https://v9.fakerjs.dev/api/system\#system)

Generates fake data for many computer systems properties.

## commonFileExt [​](https://v9.fakerjs.dev/api/system\#commonfileext)

Returns a commonly used file extension.

_Available since v3.1.0_

**Returns:** string

ts

```
function commonFileExt(): string;
```

### Examples

ts

```
faker.system.commonFileExt() // 'gif'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L142)

## commonFileName [​](https://v9.fakerjs.dev/api/system\#commonfilename)

Returns a random file name with a given extension or a commonly used extension.

_Available since v3.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| extension? | string |  | The file extension to use. Empty string is considered to be not set. |

**Returns:** string

ts

```
function commonFileName(extension?: string): string;
```

### Examples

ts

```
faker.system.commonFileName() // 'dollar.jpg'
faker.system.commonFileName('txt') // 'global_borders_wyoming.txt'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L102)

## commonFileType [​](https://v9.fakerjs.dev/api/system\#commonfiletype)

Returns a commonly used file type.

_Available since v3.1.0_

**Returns:** string

ts

```
function commonFileType(): string;
```

### Examples

ts

```
faker.system.commonFileType() // 'audio'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L130)

## cron [​](https://v9.fakerjs.dev/api/system\#cron)

Returns a random cron expression.

_Available since v7.5.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The optional options to use. |
| options.includeNonStandard? | boolean | `false` | Whether to include a `@yearly`, `@monthly`, `@daily`, etc text labels in the generated expression. |
| options.includeYear? | boolean | `false` | Whether to include a year in the generated expression. |

**Returns:** string

ts

```
function cron(
  options: {
    includeYear?: boolean;
    includeNonStandard?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.system.cron() // '45 23 * * 6'
faker.system.cron({ includeYear: true }) // '45 23 * * 6 2067'
faker.system.cron({ includeYear: false }) // '45 23 * * 6'
faker.system.cron({ includeNonStandard: false }) // '45 23 * * 6'
faker.system.cron({ includeNonStandard: true }) // '@yearly'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L316)

## directoryPath [​](https://v9.fakerjs.dev/api/system\#directorypath)

Returns a directory path.

_Available since v3.1.0_

**Returns:** string

ts

```
function directoryPath(): string;
```

### Examples

ts

```
faker.system.directoryPath() // '/etc/mail'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L195)

## fileExt [​](https://v9.fakerjs.dev/api/system\#fileext)

Returns a file extension.

_Available since v3.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| mimeType? | string |  | Valid [mime-type](https://github.com/jshttp/mime-db/blob/master/db.json) |

**Returns:** string

ts

```
function fileExt(mimeType?: string): string;
```

### Examples

ts

```
faker.system.fileExt() // 'emf'
faker.system.fileExt('application/json') // 'json'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L174)

## fileName [​](https://v9.fakerjs.dev/api/system\#filename)

Returns a random file name with extension.

_Available since v3.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.extensionCount? | number \| { min: number; max: number; } | `1` | Define how many extensions the file name should have. |

**Returns:** string

ts

```
function fileName(
  options: {
    extensionCount?:
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
faker.system.fileName() // 'faithfully_calculating.u8mdn'
faker.system.fileName({ extensionCount: 2 }) // 'times_after.swf.ntf'
faker.system.fileName({ extensionCount: { min: 1, max: 2 } }) // 'jaywalk_like_ill.osfpvg'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L52)

## filePath [​](https://v9.fakerjs.dev/api/system\#filepath)

Returns a file path.

_Available since v3.1.0_

**Returns:** string

ts

```
function filePath(): string;
```

### Examples

ts

```
faker.system.filePath() // '/usr/local/src/money.dotx'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L208)

## fileType [​](https://v9.fakerjs.dev/api/system\#filetype)

Returns a file type.

_Available since v3.1.0_

**Returns:** string

ts

```
function fileType(): string;
```

### Examples

ts

```
faker.system.fileType() // 'message'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L154)

## mimeType [​](https://v9.fakerjs.dev/api/system\#mimetype)

Returns a mime-type.

_Available since v3.1.0_

**Returns:** string

ts

```
function mimeType(): string;
```

### Examples

ts

```
faker.system.mimeType() // 'video/vnd.vivo'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L116)

## networkInterface [​](https://v9.fakerjs.dev/api/system\#networkinterface)

Returns a random [network interface](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/networking_guide/sec-understanding_the_predictable_network_interface_device_names).

_Available since v7.4.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | The options to use. |
| options.interfaceSchema? | 'index' \| 'slot' \| 'mac' \| 'pci' | `faker.helpers.objectKey(['index' | 'slot' | 'mac' | 'pci'])` | The interface schema. Can be one of `index`, `slot`, `mac`, `pci`. |
| options.interfaceType? | 'en' \| 'wl' \| 'ww' | `faker.helpers.arrayElement(['en', 'wl', 'ww'])` | The interface type. Can be one of `en`, `wl`, `ww`. |

**Returns:** string

ts

```
function networkInterface(
  options: {
    interfaceType?: (typeof commonInterfaceTypes)[number];
    interfaceSchema?: keyof typeof commonInterfaceSchemas;
  } = {}
): string;
```

### Examples

ts

```
faker.system.networkInterface() // 'enp0s3'
faker.system.networkInterface({ interfaceType: 'wl' }) // 'wlo1'
faker.system.networkInterface({ interfaceSchema: 'mac' }) // 'enx000c29c00000'
faker.system.networkInterface({ interfaceType: 'en', interfaceSchema: 'pci' }) // 'enp5s0f1d0'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L243)

## semver [​](https://v9.fakerjs.dev/api/system\#semver)

Returns a [semantic version](https://semver.org/).

_Available since v3.1.0_

**Returns:** string

ts

```
function semver(): string;
```

### Examples

ts

```
faker.system.semver() // '1.15.2'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/system/index.ts#L220)