document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://projeto1-codes.firebaseio.com/')


  let params = extract()


  let path = '/' + params['category'] + '/' + params['course']

  db.download(path, function(data) {

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
