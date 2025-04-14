[Skip to content](https://v9.fakerjs.dev/api/vehicle#VPContent)

On this page

# Vehicle [​](https://v9.fakerjs.dev/api/vehicle\#vehicle)

Module to generate vehicle related entries.

### Overview [​](https://v9.fakerjs.dev/api/vehicle\#overview)

Most methods are related to cars/automobiles: a [`vehicle()`](https://v9.fakerjs.dev/api/vehicle#vehicle) name is comprised of a car [`manufacturer()`](https://v9.fakerjs.dev/api/vehicle#manufacturer) and [`model()`](https://v9.fakerjs.dev/api/vehicle#model). You can also generate [`fuel()`](https://v9.fakerjs.dev/api/vehicle#fuel), [`type()`](https://v9.fakerjs.dev/api/vehicle#type), and [`color()`](https://v9.fakerjs.dev/api/vehicle#color), as well as typical car registration IDs [`vin()`](https://v9.fakerjs.dev/api/vehicle#vin) and [`vrm()`](https://v9.fakerjs.dev/api/vehicle#vrm).

If you prefer two wheels, you can generate a [`bicycle()`](https://v9.fakerjs.dev/api/vehicle#bicycle) type instead.

## bicycle [​](https://v9.fakerjs.dev/api/vehicle\#bicycle)

Returns a type of bicycle.

_Available since v5.5.0_

**Returns:** string

ts

```
function bicycle(): string;
```

### Examples

ts

```
faker.vehicle.bicycle() // 'Adventure Road Bicycle'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L143)

## color [​](https://v9.fakerjs.dev/api/vehicle\#color)

Returns a vehicle color.

_Available since v5.0.0_

**Returns:** string

ts

```
function color(): string;
```

### Examples

ts

```
faker.vehicle.color() // 'red'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L110)

## fuel [​](https://v9.fakerjs.dev/api/vehicle\#fuel)

Returns a fuel type.

_Available since v5.0.0_

**Returns:** string

ts

```
function fuel(): string;
```

### Examples

ts

```
faker.vehicle.fuel() // 'Electric'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L73)

## manufacturer [​](https://v9.fakerjs.dev/api/vehicle\#manufacturer)

Returns a manufacturer name.

_Available since v5.0.0_

**Returns:** string

ts

```
function manufacturer(): string;
```

### Examples

ts

```
faker.vehicle.manufacturer() // 'Ford'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L33)

## model [​](https://v9.fakerjs.dev/api/vehicle\#model)

Returns a vehicle model.

_Available since v5.0.0_

**Returns:** string

ts

```
function model(): string;
```

### Examples

ts

```
faker.vehicle.model() // 'Explorer'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L47)

## type [​](https://v9.fakerjs.dev/api/vehicle\#type)

Returns a vehicle type.

_Available since v5.0.0_

**Returns:** string

ts

```
function type(): string;
```

### Examples

ts

```
faker.vehicle.type() // 'Coupe'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L61)

## vehicle [​](https://v9.fakerjs.dev/api/vehicle\#vehicle-1)

Returns a random vehicle.

_Available since v5.0.0_

**Returns:** string

ts

```
function vehicle(): string;
```

### Examples

ts

```
faker.vehicle.vehicle() // 'BMW Explorer'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L21)

## vin [​](https://v9.fakerjs.dev/api/vehicle\#vin)

Returns a vehicle identification number (VIN).

_Available since v5.0.0_

**Returns:** string

ts

```
function vin(): string;
```

### Examples

ts

```
faker.vehicle.vin() // 'YV1MH682762184654'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L85)

## vrm [​](https://v9.fakerjs.dev/api/vehicle\#vrm)

Returns a vehicle registration number (Vehicle Registration Mark - VRM)

_Available since v5.4.0_

**Returns:** string

ts

```
function vrm(): string;
```

### Examples

ts

```
faker.vehicle.vrm() // 'MF56UPA'
```

### Source

- [View Source](https://github.com/faker-js/faker/blob/81c9fbabdb0c5a4a8c7b2558013c933a5d356d25/src/modules/vehicle/index.ts#L122)