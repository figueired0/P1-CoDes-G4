document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://guia-para-um-engenheiro.firebaseio.com/')


  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.submenu', context)
    coDesReplace('.quadrado1', context)


  })


})
