import zip from './zip/index.js';

const formSearch = document.querySelector('#formSearch');
const result     = document.querySelector('#result');

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const zipCode = formSearch.zipCode.value.trim();
    result.innerHTML = '';
    if(zipCode !== '') {
        const found = zip.search(zipCode);
        result.innerHTML = found ? `<code>{ <br/>&nbsp;&nbsp;type&nbsp;&nbsp;&nbsp;&nbsp;: "${found.type}", <br/>&nbsp;&nbsp;area&nbsp;&nbsp;&nbsp;&nbsp;: "${found.area}", <br/>&nbsp;&nbsp;location: "${found.location}", <br/>&nbsp;&nbsp;zipCode&nbsp;: "${found.zipCode}", <br/>&nbsp;&nbsp;tag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${found.tag ? '"'+found.tag+'"' : null} <br/>}</code>` : `<b>${zipCode}</b> Not Found`;
        console.log(found);
    }
    formSearch.zipCode.focus();
});



