# CLASES

## Clase 1: Por qué usar TypeScript

- Es uno de los lenguajes de programación más queridos por la comunidad.
- Alta adopción.
- Podemos prevenir muchos errores de JS.
- Mejor experiencia de desarrollo.
- Menor cantidad de bugs.

## Clase 2: TypeScript vs JavaScript

En JavaScript te das cuenta de los errores del código una vez que lo estés ejecutando. En TypeScript con el análisis estático de código nos damos cuenta de los errores en el editor o a la hora de transpilar, por lo que evitamos que los errores lleguen a la ejecución.

Un programador de TS es distinto a uno de JS. El programador de TypeScript añade una capa de análisis de código estático a Javascript.

#### ¿Cómo encontrar errores?

##### Static analysis (Acá es donde TS cumple su rol)

- Corre en el editor.
- Puede encontrar typos, llamados incorrectos a funciones.
- Nos permite autocompletar código.

##### Unit Tests

- En pocos segundos nos permiten verificar si nuestro código hace lo que pensamos que hace.

##### Integration tests

- Toma unos minutos validar si nuestro sistema funciona.
- Podemos encontrar distintos casos límite.

##### Code review

- Toma algunas horas validar que estamos siguiendo las prácticas y normas de nuestro equipo.

## Clase 3: Configurando nuestro proyecto

Iniciamos el proyecto como cualquier otro:

```bash
git init
npm init
```

Agregamos TS para el proyecto:

```bash
npm install typescript -D
npx tsc --version //Para comprobar que se ha instalado correctamente.
```

Configuramos archivos extra como el .gitignore y el .editorconfig:

Archivo .gitignore usado: (Creado con [**gitignore.io**](https://www.toptal.com/developers/gitignore)). Al .gitignore de abajo se le sacaron los comentario. Puedes ver la **[versión completa](https://www.toptal.com/developers/gitignore/api/windows,macos,linux,node)** del archivo o el **[generador](https://www.toptal.com/developers/gitignore?templates=windows,macos,linux,node)** con esa configuración.

```bash
<*~
.fuse_hidden*
.directory
.Trash-*
.nfs*
.DS_Store
.AppleDouble
.LSOverride
Icon
._*
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json
pids
*.pid
*.seed
*.pid.lock
lib-cov
coverage
*.lcov
.nyc_output
.grunt
bower_components
.lock-wscript
build/Release
node_modules/
jspm_packages/
web_modules/
*.tsbuildinfo
.npm
.eslintcache
.stylelintcache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/
.node_repl_history
*.tgz
.yarn-integrity
.env
.env.development.local
.env.test.local
.env.production.local
.env.local
.cache
.parcel-cache
.next
out
.nuxt
dist
.cache/
.vuepress/dist
.temp
.docusaurus
.serverless/
.fusebox/
.dynamodb/
.tern-port
.vscode-test
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
.webpack/
.svelte-kit
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
*.stackdump
[Dd]esktop.ini
$RECYCLE.BI
*.cab
*.msi
*.msix
*.msm
*.msp
*.lnk>
```

Archivo .editorconfig usado:

```bash
<# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false>
```

Para que funcione el .editorconfig, en VSC hay que instalar esta extensión:

[EditorConfig for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

---

La pagina de [gitignore.io](http://gitignore.io) nos ofrece un CLI y una extensión para VSC que nos permite usar su API para generar archivos .gitignore.

[gi - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=rubbersheep.gi)

El uso se hace con Control + Shift + P `>gi` y elegimos en que plataforma vamos a trabajar, después elegimos si queremos sobrescribir o agregar (en caso de una nueva configuración) y listo.

**[Información de la CLI de gitignore.io](https://docs.gitignore.io/install/command-line)**


## Clase 4: Atrapando bugs

Un archivo de Javascript, a simple vista, puede pasar desapercibido los errores que tiene, pero cuando lo analizamos con Typescript salen a la luz y permite que los detectemos al inicio.

Primero esta el archivo JS inicial, luego el corregido. Puedes intentarlo tu mismo agregando en la primera línea del archivo **//@ts-check** (Esta es una función de VSCode → **[Mas información](https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript)**)y vas a poder observar los errores que van apareciendo. A la derecha esta el archivo ya corregido. Terminamos corrigiendo más de 10 errores que sin esto no los hubiéramos visto hasta la ejecución. Para sacarle mas provecho, podes usar [**ErrorLens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)** que nos da detalles de cual es el error y no solo lo subraya.

JavaScript
```
(()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      mehtod: 'GET'
    });
    const data = await rta.parseJson();
    products.concat(data);
  }
  function getTotal() {
    const total = 0;
    for (const i = 0; i < products.length(); i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
});
```
TypeScript:
```
//@ts-check

(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = `${person} ${limit}`;
  console.log(rta);
});
```

## Clase 5: El compilador de TypeScript

Nuestro navegador y Node no reconocen nativamente archivos TypeScript, lo que hace el transpilador es traducir el código de .ts a .js.

En nuestros archivos .ts vamos a tener las clases, interfaces, módulos, tipos. El transpilador nos va a convertir el código en .js que va a poder correr en cualquier lugar. Además el transpilador nos permite elegir a que version de ECMAScript vamos a traducir nuestro código.

Para compilar un fichero, ejecutamos

```jsx
npx tsc ruta/archivo.ts
```

Al archivo que ya corregimos en clases anteriores, lo vamos a renombrar a .ts para poder traspilarlo y ver cual es el output de nuestro archivo y que cambios nos genera el transpilador de typescript.

**Por defecto TypeScript transpila el código para la versión de ECMAScript 3, por lo que muchas funciones no van a correr y nos va a dar un error.**
Para cambiar esto:

```bash
#npx tsc ruta/archivo.ts --target <target>
npx tsc src/demo.ts --target es6
```

A la hora de hacer deploy, no vamos a querer subir también nuestros archivos .ts, por lo que lo ideal, sería que al transpilar estos archivos, lo hagamos en una carpeta distinta. En este caso, la carpeta ./dist

```bash
#npx tsc ruta/archivo.ts --target <target>
npx tsc src/demo.ts --target es6
```

```bash
#npx tsc ruta/*.ts --target <target> --outDir <directory>
#Con el asterisco, seleccionamos todos los archivos .ts del directorio elegido.

npx tsc src/*.ts --target es6 --outDir dist
```

Al ejecutar esto, podemos tener el siguiente error:

```bash
error TS6053: File 'src/*.ts' not found.
  The file is in the program because:
    Root file specified for compilation
```

Se resuelve creando un archivo tsconfig.json.

### Pasos:

1. Posicionate en el directorio raíz de tu proyecto.
2. Ejecutar el comando `npx tsc --init`.Esto creará el archivo **tsconfig.json.**
3. Ejecutar el comando `npx tsc -p ./ -w`
    1. Esto compilará en el mismo directorio todos tus archivos .ts
    2. Para modificar el target o el destino de los archivos compilados, en el archivo tsconfig.json busca el flag “outDir” y modificala para que quede así: `"outDir": "./dist",`**.**

Listo, ya tienes configurado lo necesario para seguir el curso tal cual (hasta el momento).

**Nota:** El tsconfig ya viene configurado para compilar a ES6, en caso de que quieras cambiar, busca la línea “target” y modifícala con el valor que necesites.

## Clase 6: Veamos el TSConfig.json

Para generarlo, ejecutamos `npx tsc --init`

La mayoría de opciones por defecto están comentadas. Para darle uso, simplemente las des-comentamos y la configuramos a nuestro gusto.

Si además del outDir que configuramos antes, configuramos el `"rootDir: "./src",` de ahora en mas vamos a poder compilar todos nuestros archivos a TypeScript con el siguiente comando:

```bash
npx tsc
```

Los errores que aparecen ahora son debido a que no le estamos dando tipos a nuestro código. TypeScript de igual forma, aunque encuentre errores va a compilar el archivo.

El flag `--watch`  a la hora de ejecutar `npx tsc --watch` hace que TypeScript se quede escuchando a los archivos para que una vez que realicemos cambios en los archivos, los va a ir compilando automáticamente.


## Clase 7: Qué es el tipado en TypeScript

Si bien Javascript tiene tipos, es un lenguaje débilmente tipado, por lo que no se realiza una comprobación de los tipos.

Al hacerlo tipado con TypeScript, evitamos errores ya que el analizador comprueba que no cambiemos los tipos a lo largo del tiempo

A la hora de declarar variables en javascript lo hacemos de la siguiente forma:



```jsx
const productPrice = 12;
```

Mientras que en TypeScript tenemos que especificar los tipos:

```tsx
const productPrice:number = 12;
```

La parte del tipado, la llamamos **Type Annotation.**


## Clase 8: Tipos inferidos

El motor de TypeScript nos permite tanto darle el tipo de datos de forma explícita o los puede inferir por si mismo sin que lo tengamos que hacer de forma explicita.

```tsx
let myProductName = 'Product'; //Nos dice que el tipo es string
let myProductPrice = 123; //Nos dice que el tipo es number
```

En caso de querer cambiar los tipos, nos va a advertir que estamos cambiando de tipos y lo va a marcar como un error.

A su vez, al usar TS tenemos los métodos usados para cada tipo de datos, así en el caso de una variable de tipo string podemos acceder al método `.toLowerCase` de manera mas rapida, ya que el editor solo nos va a mostrar los métodos del tipo que estemos usando.

Al declarar una constante, el tipo lo infiere como constante, ya que no se puede cambiar.

---

Al no tener el entorno de TypeScript configurado ni delimitado el alcance de las funciones, al hacer una declaración en un archivo distinto con el mismo nombre, nos va a arrojar error. Para delimitarlo, podemos hacer una función anónima autoejecutada y encerrar nuestro código ahí y que su scope este limitado a esa función.

```tsx
(() => {
	let myProductName = 'Product';
	let myProductPrice = 123;
})();
```

# Tipos de Datos

## Clase 9: Numbers


Para utilizar el primitivo number de forma explicita, lo podemos tipar con `:number`

```tsx
let productPrice: number = 100
productPrice = productPrice + 1
productPrice = productPrice + '1' // Esto nos lo alerta, ya que JS lo transformaria a string.
```

También podemos declarar una variable pero sin inicializarla. En estos casos nosotros debemos asignarle a la variable el tipo ya que TS no lo puede inferir.

```tsx
let productInStock: number;
console.log(productInStock) // TS nos alerta que no inicializamos nuestra variable.
```

`parseInt` nos convierte el string a number, por lo que typescript nos va a inferir que el tipo de dato es number:

```tsx
let discount = parseInt('123') // TS infiere que discount es number.
```

Dentro de el conjunto number, TS nos permite utilizar otro tipo de números como hexadecimal, binario, etcétera.

```tsx
let hex = 0xFFF //Utilizamos 0x para denominar a los hexadecimales.
let bin = 0b1010 //Utilizamos 0b para demnominar a los binarios.

console.log(hex) //4095
console.log(bin) //10
```

<aside>
❗ A la hora de tipar nuestras variables number es importante hacerlo con `number` y no con `Number` ya que este último se refiere al prototipo Number.

</aside>

<aside>
💡 `NaN` es considerado dentro del conjunto `number`.

</aside>

## Clase 10: Booleans

Nos permite utilizar los booleanos `true` y `false`

```tsx
let isEnabled = true;
//isEnabled = "hello" //Da error, ya que TS infirio que el dato es de tipo boolean

let isNew : boolean = false;
console.log(isNew) //false
isNew = true;
console.log(isNew) //true
```

```tsx
let isNew: boolean;
const random = Math.random();
//isNew = random >= 0.5 ? "true" : "false" Esto da error ya que se le asignaria un string, tampoco podemos asignar 1 y 0 para ture y false ya que son tipo number
isNew = random >= 0.5 ? true : false
```

Los únicos valores que podemos usar en boolean son true o false.

<aside>
❗ Al igual que en `number` a la hora de tipar nuestra variable, esta tiene que estar en minúsculas como `boolean` y no `Boolean`.

</aside>

## Clase 6: Strings

Al igual que en los anteriores, lo podemos hacer de forma explicita con `:string` o también de forma implícita.

```tsx
let productTitle = 'My amazing product';
// productTitle = null;
// productTitle = () => {}
// productTitle = 123;
productTitle = 'Newest amazing product'

let productDescription: string = 'Awesome description'
productDescription = "I'm a description (?"
```

También podemos utilizar los template literals para los strings

```tsx
let productTitle:string = 'Newest amazing product';
let productDescription: string = 'Awesome description';
let productPrice: number = 123;

let summary:string = `
title: ${productTitle}
description: ${productDescription}
price: ${productPrice}`
```

## Clase 11: Arrays

En los arrays podemos a su vez definirlos de forma implícita como explicita, y limitamos el tipo de datos que podemos insertar en el array.

```tsx
let prices = [123,312,643,124,12,75] //Aca infiere que el tipo de dato dentro del array es number
//prices.push('asd')
//prices.push(true)
//prices.push({12})
prices.push(111)

let myArr = [123,523,15,'Hola', true] // Aca infiere que los tipos son boolean, number y string
```

Para hacerlo de forma explicita lo hago de la siguiente manera

```tsx
let mixed: (number | string | boolean)[] = ['Hola', true];
mixed.push(123)
mixed.push('mundo')
mixed.push(true)
// mixed.push({})
// mixed.push([])

let numbers = [1,2,3,4,5,6] //Si cambiaria el tipo, automaticamente me mostraria que no puedo multiplicar unalgo que no sea un numero..
numbers.map(number => number * 2)

let arrOfObj: object[] = [{a: 1, b : 2}, {c: 3}]
arrOfObj.push([1,2,3]) // Esto es posible ya que el typeof array es object
```

## Clase 13: Any

- Este tipo de dato desactiva el tipado de TS y nos permite reasignar el tipo de dato de una variable.
- No esta recomendado utilizar `any`, debido a que perdemos la posibilidad de atrapar cualquier error y básicamente estamos utilizando javascript. Sin embargo, si estamos migrando codigo de JS a TS puede ser útil, pero una vez que tengamos un proyecto consolidado con TypeScript, no deberíamos utilizar nunca `any`.

```tsx
let myDinamicVar : any;
myDynamicVar = 100;
myDynamicVar = "Hola";
myDynamicVar = null;
myDynamicVar = {};
```

- Podemos convertir el tipo de `any` a cualquier otro tipo de dato haciendo un **cast** con el `as` operator o utilizando genéricos `<type>`. Para usarlo lo podemos hacer de la siguiente forma:

```tsx
myDynamicVar = 'Hola';
const rta = (myDynamicVar as string);
console.log(rta);

myDynamicVar2 = 1212;
const rta2 = (<number>myDynamicVar2);
console.log(rta2);
```

## Clase 14: Union Types

Union types nos permite mayor flexibilidad en nuestro código, ya que nos permite asignar varios tipos a una variable.

```tsx
let userID: string | number;
userID = 1212;
userID = 'FC45';

function greeting(myText: string | number) {
  if (typeof myText === 'string') {
    `Hola ${myText.toLowerCase()}`;
  } else if (typeof myText === 'number') {
    `Sos el usuario Nº${myText}`;
  }
}
/**Cuando pasa los if, nos habilita el autocompletado por tipos**/
userID = 1212;
greeting(userID);
userID = 'FC45';
greeting(userID);
```

## Clase 15: Alias y tipos literales

Los **alias** nos permiten agrupar varios tipos dentro de un prototipo.

```tsx
type UserID = string | number;

let userID: UserID;
userID = 1212;
userID = 'FC45';

function greeting(myText: UserID) {
  if (typeof myText === 'string') {
    `Hola ${myText.toLowerCase()}`;
  } else if (typeof myText === 'number') {
    `Sos el usuario Nº${myText}`;
  }
}
```

Los **literal types** nos permiten limitar dentro de una variable los valores.

```tsx
type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
let shirtSize: ShirtSizes;
shirtSize = 'M'
```

##
