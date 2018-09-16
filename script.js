/*
  Se não sabe o que é isto, volte para os vídeos de JavaScript.
*/
document.addEventListener('DOMContentLoaded', function() {
  /*
    Se não sabe o que é isto, volte ao ingrediente 2.
  */
  let db = connect('https://projeto1-codes.firebaseio.com/')

  /*
    Uma query string é uma maneira de colocar um dicionário
    no próprio endereço da página. O início dela é marcado
    por um "?" e ela consiste em um número indeterminado de
    pares "chave=valor" separados por "&".

    A função extract lê a query string da página atual e
    transforma ela em um dicionário JavaScript usual.
  */
  let params = extract()

  /*
    Se não sabe o que é isto, volte ao ingrediente 3.
  */

  let path = '/' + params['category'] + '/' + params['course']

  db.download(path, function(data) {
    /*
      Se não sabe o que é isto, volte ao ingrediente 3.
    */
    replace('body', {
        'titulo': data['titulo'],
        'materia': data['materia'],
        'descricao': data['descricao'],
        'professores': data['professores'],
        'conhecimentos': data['conhecimentos'],
        'objetivos': data['objetivos'],
    })
  })
})
