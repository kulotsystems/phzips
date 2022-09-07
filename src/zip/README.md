## phzips
Search for location using Zip Code in the Philippines.

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
<script src="https://www.kulotsystems.tech/cdn/phzips-2.1.2.min.js"></script>
<script>
    const found = phzips.search('4434');

    console.log(found);
    // { type: "Province", area: "Camarines Sur", location: "Nabua", zipCode: "4434", tag: null }
</script>
```

### Demo
Access <https://kulotsystems.github.io/phzips>
