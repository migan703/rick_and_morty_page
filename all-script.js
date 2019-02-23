/* Defino constantes */
const first_page = 'https://rickandmortyapi.com/api/character/';
const first_row = document.getElementById('first_row');
const prev_link = document.getElementById('prev_page');
const next_link = document.getElementById('next_page');
const row_string = '<div class="main row">';
const section_string = '<section class="col-xs-12 col-sm-12 col-md-6 col-lg-3">';
const a_string = '<a href="./detail-page.html';
const img_string = '><img src="';
const end_img = '/></a>';
const end_row = '</div>';
const end_sec = '</section>';
/* Defino variables */
let current_page = localStorage.getItem('curr_page');
/* Obtiene la pagina inicial */
if(current_page==null){
  obtain_all_characters(first_page);
}
else{
  obtain_all_characters(current_page);  
}
/* Obtiene todos los personajes de la página inicada */
function obtain_all_characters(page){
  /* Elimina nodos hijos si existen */
  if (first_row.hasChildNodes()){
    while (first_row.childNodes.length >= 1){
      first_row.removeChild(first_row.firstChild);
    }
  }
  /* Realiza fetch */
  fetch(page).then((value) =>{
   return value.json();
  }).then((value) => { 
  /* Asigno la página siguiente y previa al localStorage */
  localStorage.setItem('next_page', value.info.next);
  localStorage.setItem('curr_page', page);
  localStorage.setItem('pre_page', value.info.prev);
  let structure = '';
  structure += row_string;
  for (i = 0; i < value.results.length; i++) {
    if(i!= 0 & i%4==0){
      structure += end_row+ row_string;
    }
    structure += section_string + a_string +'?' + value.results[i].url + '"' + img_string 
    + value.results[i].image + '"' + end_img + end_sec;
  }
  structure += end_row; 
  first_row.insertAdjacentHTML('afterbegin', structure);
  }
  )  
};
prev_link.addEventListener('click', function (e) {
  /* Obtengo página anterior */
  current_page = localStorage.getItem('pre_page');
  if(current_page==''){
    current_page = first_page;  
  }
  obtain_all_characters(current_page);
});
next_link.addEventListener('click', function (e) {
  /* Obtengo página siguiente */
  current_page = localStorage.getItem('next_page');
  if(current_page==''){
    current_page = first_page;  
  }
  obtain_all_characters(current_page);
});