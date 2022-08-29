import zip from './zip.js';

const formSearch = document.querySelector('#formSearch');
const result     = document.querySelector('#result');

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    const zipCode = formSearch.zipCode.value;
    const found   = zip.search(zipCode);

    console.log(found);
    result.innerHTML = found ? `${found.city}, ${found.province}` : `<b>${zipCode}</b> Not Found`;
});



