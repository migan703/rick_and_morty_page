/* Defino constantes */
const rand_page = 'https://rickandmortyapi.com/api/character/?page=' + parseInt(Math.random()*10);
const first_row = document.getElementById('first_row');
const section_string = '<section class="col-xs-12 col-sm-12 col-md-6 col-lg-4">';
const a_string = '<a href="./detail-page.html';
const h3_string = '<h3>';
const img_string = '><img src="';
const end_img = '/></a>';
const end_sec = '</section>';
const end_h3 = '</h3>';

fetch(rand_page).then((value) =>{
    return value.json();
}).then((value) => { 
  let structure = '';
  /* Obtiene un elemento aleatorio del arreglo */  
  let pos = parseInt(Math.random()*10);
  for (i = 0; i < 3; i++) {
    let result = value.results[pos+i];  
    structure += section_string + a_string +'?' + result.url + '"' + img_string 
    + result.image + '"' + end_img + h3_string + result.name + end_h3 + end_sec;  
  }
  first_row.insertAdjacentHTML('afterbegin', structure);
}
)