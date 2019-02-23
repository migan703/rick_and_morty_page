/* Obtiene la URL actual*/
const cur_url = document.location.href;
/* Cantidad de palabras el lorem ipsum */
const num_lorem = 3;
/* Obtiene una pagina detalle */
const deta_page = cur_url.substr(cur_url.indexOf('?')+1);
fetch(deta_page).then((value) =>{
  return value.json();
}).then((value) => { 
  /* Define constantes y variables */
  const first_row = document.getElementById('detail_row');
  const ima_sec = document.createElement('section');
  const char_img = document.createElement('img');
  const info_sec = document.createElement('section');
  const h_name = document.createElement('h3');
  const h_specie = document.createElement('h3');
  const h_status = document.createElement('h3');
  const h_type = document.createElement('h3');
  let t_name = 'Name: ';
  let t_specie = 'Species: ';
  let t_status = 'Status: ';
  let t_type = 'Type: ';
  /* Adiciona la imágen */
  first_row.appendChild(ima_sec); 
  ima_sec.classList.add('col-xs-12'); 
  ima_sec.classList.add('offset-md-4'); 
  char_img.src = value.image;
  ima_sec.appendChild(char_img);
  /* Adiciona el detalle */
  first_row.appendChild(info_sec); 
  info_sec.classList.add('col-xs-12');
  info_sec.classList.add('offset-md-4'); 
  /* Nombre */
  if(value.name == ''){
    t_name += generate_lorem_ipsum();    
  }
  else{
    t_name += value.name;  
  }
  h_name.innerHTML = t_name;
  info_sec.appendChild(h_name);
  /* Especie */
  if(value.species == ''){
    t_specie += generate_lorem_ipsum();    
  }
  else{
    t_specie += value.species;  
  }
  h_specie.innerHTML = t_specie;
  info_sec.appendChild(h_specie);
  /* Estado */
  if(value.status == ''){
    t_status += generate_lorem_ipsum();    
  }
  else{
    t_status += value.status;  
  }
  h_status.innerHTML = t_status;
  info_sec.appendChild(h_status);
  /* tipo*/
  if(value.type == ''){
    t_type += generate_lorem_ipsum();    
  }
  else{
    t_type += value.type;  
  }
  h_type.innerHTML = t_type;
  info_sec.appendChild(h_type);
})
function generate_lorem_ipsum() {
  let words = ['lorem',
              'ipsum',
              'dolor',
              'sit',
              'amet',
              'consectetur',
              'adipiscing',
              'elit',
              'curabitur',
              'vel',
              'hendrerit',
              'libero',
              'eleifend',
              'blandit',
              'nunc',
              'ornare',
              'odio',
              'ut',
              'orci',
              'gravida',
              'imperdiet',
              'nullam',
              'purus',
              'lacinia',
              'a',
              'pretium',
              'quis',
              'congue',
              'praesent',
              'sagittis',
              'laoreet',
              'auctor',
              'mauris',
              'non',
              'velit',
              'eros',
              'dictum',
              'proin',
              'accumsan',
              'sapien',
              'nec',
              'massa',
              'volutpat',
              'venenatis',
              'sed',
              'eu',
              'molestie',
              'lacus',
              'quisque',
              'porttitor',
              'ligula',
              'dui',
              'mollis',
              'tempus',
              'at',
              'magna',
              'vestibulum',
              'turpis',
              'ac',
              'diam',
              'tincidunt',
              'id',
              'condimentum',
              'enim',
              'sodales',
              'in',
              'hac',
              'habitasse',
              'platea',
              'dictumst',
              'aenean',
              'neque',
              'fusce',
              'augue',
              'leo',
              'eget',
              'semper',
              'mattis',
              'tortor',
              'scelerisque',
              'nulla',
              'interdum',
              'tellus',
              'malesuada',
              'rhoncus',
              'porta',
              'sem',
              'aliquet',
              'et',
              'nam',
              'suspendisse',
              'potenti',
              'vivamus',
              'luctus',
              'fringilla',
              'erat',
              'donec',
              'justo',
              'vehicula',
              'ultricies',
              'varius',
              'ante',
              'primis',
              'faucibus',
              'ultrices',
              'posuere',
              'cubilia',
              'curae',
              'etiam',
              'cursus',
              'aliquam',
              'quam',
              'dapibus',
              'nisl',
              'feugiat',
              'egestas',
              'class',
              'aptent',
              'taciti',
              'sociosqu',
              'ad',
              'litora',
              'torquent',
              'per',
              'conubia',
              'nostra',
              'inceptos',
              'himenaeos',
              'phasellus',
              'nibh',
              'pulvinar',
              'vitae',
              'urna',
              'iaculis',
              'lobortis',
              'nisi',
              'viverra',
              'arcu',
              'morbi',
              'pellentesque',
              'metus',
              'commodo',
              'ut',
              'facilisis',
              'felis',
              'tristique',
              'ullamcorper',
              'placerat',
              'aenean',
              'convallis',
              'sollicitudin',
              'integer',
              'rutrum',
              'duis',
              'est',
              'etiam',
              'bibendum',
              'donec',
              'pharetra',
              'vulputate',
              'maecenas',
              'mi',
              'fermentum',
              'consequat',
              'suscipit',
              'aliquam',
              'habitant',
              'senectus',
              'netus',
              'fames',
              'quisque',
              'euismod',
              'curabitur',
              'lectus',
              'elementum',
              'tempor',
              'risus',
              'cras'
          ];
  let word_count = (num_lorem > words.length) ? (words.length - 1) : num_lorem;
  let extracted = [];
  for (let i = 0; i < word_count; i++) {
      let word = Math.floor(Math.random() * words.length);
      extracted[i] = words[word];
  }
  return extracted.join(' ');
};