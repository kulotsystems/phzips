## phzips
Search for City, Province using Zip Code in the Philippines.


| Source              | Demo                        |
|---------------------|-----------------------------|
| [/src/zip](src/zip) | [/src/main.js](src/main.js) |

### Installation
```shell
npm install phpzips
```

### Usage
```javascript
import phzips from 'phzips';
const found = phzips.search('4434');

console.log(found);
// { city: "Nabua", province: "Camarines Sur", zipCode: "4434" }
```

### Demo
Access <https://kulotsystems.github.io/phzips>

### Dev Setup
#### Install dependencies
```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```
