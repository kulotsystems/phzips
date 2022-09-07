## phzips
Search for location using Zip Code in the Philippines.


| Source              | Demo                        |
|---------------------|-----------------------------|
| [/src/zip](src/zip) | [/src/main.js](src/main.js) |

### Installation
```shell
npm install phzips
```

### Usage
```javascript
import phzips from 'phzips';
const found = phzips.search('4434');

console.log(found);
// { type: "Province", area: "Camarines Sur", location: "Nabua", zipCode: "4434", tag: null }
```

### CDN
```html
<script src="https://www.kulotsystems.tech/cdn/phzips-2.0.1.min.js"></script>
<script>
    const found = phzips.search('4434');

    console.log(found);
    // { type: "Province", area: "Camarines Sur", location: "Nabua", zipCode: "4434", tag: null }
</script>
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
