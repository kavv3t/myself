function loca (number) {
  let page = '';
  switch (number) {
    case 0:
      page = '../index.html';
      break;
  
    case 1:
      page = '../html/error.html';
      break;

    case 2:
      page = '../html/error.html';
      break;

    case 3:
      page = '../html/contact.html';
      break;

    default:
      if (!number) {
        console.log('Aucun nombre accompagnant la fonction.');
      } else {
        console.log(`La valeur de la variable (${number}) ne correspond pas à l'une des possibilités.`);
      }
      break;
  }

  error(page);
}

function error(page) {
  fetch(page, { method: 'HEAD' })
  .then(response => {
    if (!response.ok) {
      window.location.replace("../html/error.html");
    } else {
      window.location.href = page;
    }
  })
  .catch(error => {
    console.error('Erreur lors de la vérification de la page:', error);
    window.location.replace("../html/error.html");
  });
}