[Skip to content](https://v9.fakerjs.dev/api/finance#VPContent)

On this page

# Finance [​](https://v9.fakerjs.dev/api/finance\#finance)

Module to generate finance and money related entries.

### Overview [​](https://v9.fakerjs.dev/api/finance\#overview)

For a random amount, use [`amount()`](https://v9.fakerjs.dev/api/finance#amount).

For traditional bank accounts, use: [`accountNumber()`](https://v9.fakerjs.dev/api/finance#accountnumber), [`accountName()`](https://v9.fakerjs.dev/api/finance#accountname), [`bic()`](https://v9.fakerjs.dev/api/finance#bic), [`iban()`](https://v9.fakerjs.dev/api/finance#iban), [`pin()`](https://v9.fakerjs.dev/api/finance#pin) and [`routingNumber()`](https://v9.fakerjs.dev/api/finance#routingnumber).

For credit card related methods, use: [`creditCardNumber()`](https://v9.fakerjs.dev/api/finance#creditcardnumber), [`creditCardCVV()`](https://v9.fakerjs.dev/api/finance#creditcardcvv), [`creditCardIssuer()`](https://v9.fakerjs.dev/api/finance#creditcardissuer), [`transactionDescription()`](https://v9.fakerjs.dev/api/finance#transactiondescription) and [`transactionType()`](https://v9.fakerjs.dev/api/finance#transactiontype).

For blockchain related methods, use: [`bitcoinAddress()`](https://v9.fakerjs.dev/api/finance#bitcoinaddress), [`ethereumAddress()`](https://v9.fakerjs.dev/api/finance#ethereumaddress) and [`litecoinAddress()`](https://v9.fakerjs.dev/api/finance#litecoinaddress).

## accountName [​](https://v9.fakerjs.dev/api/finance\#accountname)

Generates a random account name.

_Available since v2.0.1_

**Returns:** string

ts

```
function accountName(): string;
```

### Examples

ts

```
faker.finance.accountName() // 'Personal Loan Account'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L174)

## accountNumber [​](https://v9.fakerjs.dev/api/finance\#accountnumber)

Generates a random account number.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| optionsOrLength? | number \| { ... } |  | An options object or the length of the account number. |
| optionsOrLength.length? | number | `8` | The length of the account number. |

**Returns:** string

ts

```
function accountNumber(
  optionsOrLength?:
    | number
    | {
        length?: number;
      }
): string;
```

### Examples

ts

```
faker.finance.accountNumber() // '92842238'
faker.finance.accountNumber(5) // '28736'
faker.finance.accountNumber({ length: 5 }) // '32564'
```

### See Also

- [faker.string.numeric(): For generating the number with greater control.](https://v9.fakerjs.dev/api/string#numeric)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L145)

## amount [​](https://v9.fakerjs.dev/api/finance\#amount)

Generates a random amount between the given bounds (inclusive).

_Available since v2.0.1_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.autoFormat? | boolean | `false` | If true this method will use `Number.toLocaleString()`. Otherwise it will use `Number.toFixed()`. |
| options.dec? | number | `2` | The number of decimal places for the amount. |
| options.max? | number | `1000` | The upper bound for the amount. |
| options.min? | number | `0` | The lower bound for the amount. |
| options.symbol? | string | `''` | The symbol used to prefix the amount. |

**Returns:** string

ts

```
function amount(
  options: {
    min?: number;
    max?: number;
    dec?: number;
    symbol?: string;
    autoFormat?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.finance.amount() // '617.87'
faker.finance.amount({ min: 5, max: 10 }) // '5.53'
faker.finance.amount({ min: 5, max: 10, dec: 0 }) // '8'
faker.finance.amount({ min: 5, max: 10, dec: 2, symbol: '$' }) // '$5.85'
faker.finance.amount({ min: 5, max: 10, dec: 5, symbol: '', autoFormat: true }) // '9,75067'
```

### See Also

- [faker.number.float(): For generating the amount with greater control.](https://v9.fakerjs.dev/api/number#float)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L395)

## bic [​](https://v9.fakerjs.dev/api/finance\#bic)

Generates a random SWIFT/BIC code based on the [ISO-9362](https://en.wikipedia.org/wiki/ISO_9362) format.

_Available since v4.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | Options object. |
| options.includeBranchCode? | boolean | `faker.datatype.boolean()` | Whether to include a three-digit branch code at the end of the generated code. |

**Returns:** string

ts

```
function bic(
  options: {
    includeBranchCode?: boolean;
  } = {}
): string;
```

### Examples

ts

```
faker.finance.bic() // 'WYAUPGX1'
faker.finance.bic({ includeBranchCode: true }) // 'KCAUPGR1432'
faker.finance.bic({ includeBranchCode: false }) // 'XDAFQGT7'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L974)

## bitcoinAddress [​](https://v9.fakerjs.dev/api/finance\#bitcoinaddress)

Generates a random Bitcoin address.

_Available since v3.1.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An optional options object. |
| options.network? | 'mainnet' \| 'testnet' | `'mainnet'` | The bitcoin network ( `'mainnet'` or `'testnet'`). |
| options.type? | 'legacy' \| 'segwit' \| 'bech32' \| 'taproot' | `faker.helpers.arrayElement(['legacy','sewgit','bech32','taproot'])` | The bitcoin address type ( `'legacy'`, `'sewgit'`, `'bech32'` or `'taproot'`). |

**Returns:** string

ts

```
function bitcoinAddress(
  options: {
    type?: BitcoinAddressFamilyType;
    network?: BitcoinNetworkType;
  } = {}
): string;
```

### Examples

ts

```
faker.finance.bitcoinAddress() // '1TeZEFLmGPLEQrSRdAcnZLoWwYeiHwmRog'
faker.finance.bitcoinAddress({ type: 'bech32' }) // 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4'
faker.finance.bitcoinAddress({ type: 'bech32', network: 'testnet' }) // 'tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L552)

## creditCardCVV [​](https://v9.fakerjs.dev/api/finance\#creditcardcvv)

Generates a random credit card CVV.

_Available since v5.0.0_

**Returns:** string

ts

```
function creditCardCVV(): string;
```

### Examples

ts

```
faker.finance.creditCardCVV() // '506'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L725)

## creditCardIssuer [​](https://v9.fakerjs.dev/api/finance\#creditcardissuer)

Returns a random credit card issuer.

_Available since v6.3.0_

**Returns:** string

ts

```
function creditCardIssuer(): string;
```

### Examples

ts

```
faker.finance.creditCardIssuer() // 'discover'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L737)

## creditCardNumber [​](https://v9.fakerjs.dev/api/finance\#creditcardnumber)

Generates a random credit card number.

_Available since v5.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | string \| { ... } | `{}` | An options object, the issuer or a custom format. |
| options.issuer? | string | `''` | The name of the issuer (case-insensitive) or the format used to generate one. |

**Returns:** string

ts

```
function creditCardNumber(
  options?:
    | string
    | {
        issuer?: string;
      }
): string;
```

### Examples

ts

```
faker.finance.creditCardNumber() // '4427163488662'
faker.finance.creditCardNumber({ issuer: 'visa' }) // '4882664999007'
faker.finance.creditCardNumber({ issuer: '63[7-9]#-####-####-###L' }) // '6375-3265-4676-6646'
faker.finance.creditCardNumber('visa') // '1226423499765'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L680)

## currency [​](https://v9.fakerjs.dev/api/finance\#currency)

Returns a random currency object, containing `code`, `name`, `symbol`, and `numericCode` properties.

_Available since v8.0.0_

**Returns:** Currency

ts

```
function currency(): Currency;
```

### Examples

ts

```
faker.finance.currency() // { code: 'USD', name: 'US Dollar', symbol: '$', numericCode: '840' }
```

### See Also

- [faker.finance.currencyCode(): For generating specifically the currency code.](https://v9.fakerjs.dev/api/finance#currencycode)
- [faker.finance.currencyName(): For generating specifically the currency name.](https://v9.fakerjs.dev/api/finance#currencyname)
- [faker.finance.currencySymbol(): For generating specifically the currency symbol.](https://v9.fakerjs.dev/api/finance#currencysymbol)
- [faker.finance.currencyNumericCode(): For generating specifically the currency numeric code.](https://v9.fakerjs.dev/api/finance#currencynumericcode)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L477)

## currencyCode [​](https://v9.fakerjs.dev/api/finance\#currencycode)

Returns a random currency code.
(The short text/abbreviation for the currency (e.g. `US Dollar` -\> `USD`))

_Available since v2.0.1_

**Returns:** string

ts

```
function currencyCode(): string;
```

### Examples

ts

```
faker.finance.currencyCode() // 'USD'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L492)

## currencyName [​](https://v9.fakerjs.dev/api/finance\#currencyname)

Returns a random currency name.

_Available since v2.0.1_

**Returns:** string

ts

```
function currencyName(): string;
```

### Examples

ts

```
faker.finance.currencyName() // 'US Dollar'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L504)

## currencyNumericCode [​](https://v9.fakerjs.dev/api/finance\#currencynumericcode)

Returns a random currency numeric code.
(The ISO 4217 numerical code for a currency (e.g. `US Dollar` -\> `840` ))

_Available since v9.6.0_

**Returns:** string

ts

```
function currencyNumericCode(): string;
```

### Examples

ts

```
faker.finance.currencyNumericCode() // '840'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L534)

## currencySymbol [​](https://v9.fakerjs.dev/api/finance\#currencysymbol)

Returns a random currency symbol.

_Available since v2.0.1_

**Returns:** string

ts

```
function currencySymbol(): string;
```

### Examples

ts

```
faker.finance.currencySymbol() // '$'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L516)

## ethereumAddress [​](https://v9.fakerjs.dev/api/finance\#ethereumaddress)

Creates a random, non-checksum Ethereum address.

To generate a checksummed Ethereum address (with specific per character casing), wrap this method in a custom method and use third-party libraries to transform the result.

_Available since v5.0.0_

**Returns:** string

ts

```
function ethereumAddress(): string;
```

### Examples

ts

```
faker.finance.ethereumAddress() // '0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L864)

## iban [​](https://v9.fakerjs.dev/api/finance\#iban)

Generates a random IBAN.

Please note that the generated IBAN might be invalid due to randomly generated bank codes/other country specific validation rules.

_Available since v4.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | { ... } | `{}` | An options object. |
| options.countryCode? | string |  | The country code from which you want to generate an IBAN,<br>if none is provided a random country will be used. |
| options.formatted? | boolean | `false` | Return a formatted version of the generated IBAN. |

**Returns:** string

**Throws:** Will throw an error if the passed country code is not supported.

ts

```
function iban(
  options: {
    formatted?: boolean;
    countryCode?: string;
  } = {}
): string;
```

### Examples

ts

```
faker.finance.iban() // 'TR736918640040966092800056'
faker.finance.iban({ formatted: true }) // 'FR20 8008 2330 8984 74S3 Z620 224'
faker.finance.iban({ formatted: true, countryCode: 'DE' }) // 'DE84 1022 7075 0900 1170 01'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L890)

## litecoinAddress [​](https://v9.fakerjs.dev/api/finance\#litecoinaddress)

Generates a random Litecoin address.

_Available since v5.0.0_

**Returns:** string

ts

```
function litecoinAddress(): string;
```

### Examples

ts

```
faker.finance.litecoinAddress() // 'MoQaSTGWBRXkWfyxKbNKuPrAWGELzcW'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L593)

## maskedNumber [​](https://v9.fakerjs.dev/api/finance\#maskednumber)

Deprecated

This method is deprecated and will be removed in a future version.

Use `faker.finance.iban().replace(/(?<=.{4})\w(?=.{2})/g, '*')` or a similar approach instead.

Generates a random masked number.

_Available since v8.0.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| optionsOrLength? | number \| { ... } |  | An options object or the length of the unmask number. |
| optionsOrLength.ellipsis? | boolean | `true` | Whether to prefix the numbers with an ellipsis. |
| optionsOrLength.length? | number | `4` | The length of the unmasked number. |
| optionsOrLength.parens? | boolean | `true` | Whether to use surrounding parenthesis. |

**Returns:** string

ts

```
function maskedNumber(
  optionsOrLength?:
    | number
    | {
        length?: number;
        parens?: boolean;
        ellipsis?: boolean;
      }
): string;
```

### Examples

ts

```
faker.finance.maskedNumber() // '(...9711)'
faker.finance.maskedNumber(3) // '(...342)'
faker.finance.maskedNumber({ length: 3 }) // '(...342)'
faker.finance.maskedNumber({ length: 3, parens: false }) // '...236'
faker.finance.maskedNumber({ length: 3, parens: false, ellipsis: false }) // '298'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L323)

## pin [​](https://v9.fakerjs.dev/api/finance\#pin)

Generates a random PIN number.

_Available since v6.2.0_

### Parameters

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options? | number \| { ... } | `{}` | An options object or the length of the PIN. |
| options.length? | number | `4` | The length of the PIN to generate. |

**Returns:** string

**Throws:** Will throw an error if length is less than 1.

ts

```
function pin(
  options?:
    | number
    | {
        length?: number;
      }
): string;
```

### Examples

ts

```
faker.finance.pin() // '5067'
faker.finance.pin({ length: 6 }) // '213789'
faker.finance.pin(6) // '213789'
```

### See Also

- [faker.string.numeric(): For generating the pin with greater control.](https://v9.fakerjs.dev/api/string#numeric)

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L829)

## routingNumber [​](https://v9.fakerjs.dev/api/finance\#routingnumber)

Generates a random routing number.

_Available since v5.0.0_

**Returns:** string

ts

```
function routingNumber(): string;
```

### Examples

ts

```
faker.finance.routingNumber() // '522814402'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L191)

## transactionDescription [​](https://v9.fakerjs.dev/api/finance\#transactiondescription)

Generates a random transaction description.

_Available since v5.1.0_

**Returns:** string

ts

```
function transactionDescription(): string;
```

### Examples

ts

```
faker.finance.transactionDescription()
// 'payment transaction at Emard LLC using card ending with ****9187 for HNL 506.57 in account ***2584.'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L1013)

## transactionType [​](https://v9.fakerjs.dev/api/finance\#transactiontype)

Returns a random transaction type.

_Available since v2.0.1_

**Returns:** string

ts

```
function transactionType(): string;
```

### Examples

ts

```
faker.finance.transactionType() // 'payment'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/finance/index.ts#L458)