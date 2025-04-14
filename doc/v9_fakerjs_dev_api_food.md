[Skip to content](https://v9.fakerjs.dev/api/food#VPContent)

On this page

# Food [​](https://v9.fakerjs.dev/api/food\#food)

Module for generating food-related data.

### Overview [​](https://v9.fakerjs.dev/api/food\#overview)

This module provides methods to generate various food-related information, such as items on a menu. To generate the name of a dish, use [`dish()`](https://v9.fakerjs.dev/api/food#dish) and to generate a long description for a dish use [`description()`](https://v9.fakerjs.dev/api/food#description). Note that these will not correspond with each other. You can also generate individual components of a dish such as [spices](https://v9.fakerjs.dev/api/food#spice), [vegetables](https://v9.fakerjs.dev/api/food#vegetable), [meats](https://v9.fakerjs.dev/api/food#meat), [fruits](https://v9.fakerjs.dev/api/food#fruit), or generic [ingredients](https://v9.fakerjs.dev/api/food#ingredient).

## adjective [​](https://v9.fakerjs.dev/api/food\#adjective)

Generates a random dish adjective.

_Available since v9.0.0_

**Returns:** string

ts

```
function adjective(): string;
```

### Examples

ts

```
faker.food.adjective() // 'crispy'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L33)

## description [​](https://v9.fakerjs.dev/api/food\#description)

Generates a random dish description.

_Available since v9.0.0_

**Returns:** string

ts

```
function description(): string;
```

### Examples

ts

```
faker.food.description() // 'An exquisite ostrich roast, infused with the essence of longan, slow-roasted to bring out its natural flavors and served with a side of creamy red cabbage'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L47)

## dish [​](https://v9.fakerjs.dev/api/food\#dish)

Generates a random dish name.

_Available since v9.0.0_

**Returns:** string

ts

```
function dish(): string;
```

### Examples

ts

```
faker.food.dish() // 'Tagine-Rubbed Venison Salad'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L61)

## ethnicCategory [​](https://v9.fakerjs.dev/api/food\#ethniccategory)

Generates a random food's ethnic category.

_Available since v9.0.0_

**Returns:** string

ts

```
function ethnicCategory(): string;
```

### Examples

ts

```
faker.food.ethnicCategory() // 'Italian'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L82)

## fruit [​](https://v9.fakerjs.dev/api/food\#fruit)

Generates a random fruit name.

_Available since v9.0.0_

**Returns:** string

ts

```
function fruit(): string;
```

### Examples

ts

```
faker.food.fruit() // 'lemon'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L96)

## ingredient [​](https://v9.fakerjs.dev/api/food\#ingredient)

Generates a random ingredient name.

_Available since v9.0.0_

**Returns:** string

ts

```
function ingredient(): string;
```

### Examples

ts

```
faker.food.ingredient() // 'butter'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L108)

## meat [​](https://v9.fakerjs.dev/api/food\#meat)

Generates a random meat

_Available since v9.0.0_

**Returns:** string

ts

```
function meat(): string;
```

### Examples

ts

```
faker.food.meat() // 'venison'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L122)

## spice [​](https://v9.fakerjs.dev/api/food\#spice)

Generates a random spice name.

_Available since v9.0.0_

**Returns:** string

ts

```
function spice(): string;
```

### Examples

ts

```
faker.food.spice() // 'chilli'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L134)

## vegetable [​](https://v9.fakerjs.dev/api/food\#vegetable)

Generates a random vegetable name.

_Available since v9.0.0_

**Returns:** string

ts

```
function vegetable(): string;
```

### Examples

ts

```
faker.food.vegetable() // 'broccoli'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/food/index.ts#L146)