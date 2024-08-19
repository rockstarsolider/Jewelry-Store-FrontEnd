export function apiUrl(){
    return 'http://127.0.0.1:8000'
}

const searchIcon = document.getElementById('search-icon')

searchIcon.addEventListener('click',() => {
    document.getElementById('search').classList.toggle('invisible')
})

search.addEventListener('input', () => {
    const searchPro = document.getElementById('search-pro')
    searchPro.classList.remove('hidden')
    fetch(`${apiUrl()}/products?search=${search.value}&perpage=5`)
    .then(response => response.json())  
    .then(data => {  
        console.log(data[0])
        searchPro.innerHTML = ''
        data[0].forEach(item => {  
            const div = document.createElement('div');
            div.className =  'flex w-80 justify-between items-center gap-4 bg-white p-1 border-b border-black' 
            div.innerHTML = `  
                <a href="./product.html?id=${item.id}"><img src="${apiUrl()}${item.image}" class='h-14 max-w-14'/></a>
                <a href="./product.html?id=${item.id}"><h3 class=" text-lg font-medium pr-2">${item.name}</h3></a>
            `;  
            searchPro.appendChild(div); 
        }); 
    })  
    .catch(error => console.error('Error fetching data:', error));
})

search.addEventListener('focusout', () => {
    const searchPro = document.getElementById('search-pro')
    searchPro.classList.add('hidden')
})