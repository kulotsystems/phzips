import zip from './zip/index.js';

const formSearch = document.querySelector('#formSearch');
const result     = document.querySelector('#result');

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const zipCode = formSearch.zipCode.value.trim();
    result.innerHTML = '';
    if(zipCode !== '') {
        const found = zip.search(zipCode);
        result.innerHTML = found ? `${found.city}, ${found.province}` : `<b>${zipCode}</b> Not Found`;
        console.log(found);
    }
    formSearch.zipCode.focus();
});



