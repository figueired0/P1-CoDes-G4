document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://guia-para-um-engenheiro.firebaseio.com/')

  var url_str= window.location.href;
  

  var url=new URL(url_str);
  var c = url.searchParams.get("key");
  var p = url.searchParams.get("pr");

  // alert(c);
  // alert(p);
  db.download('/', function(data) {
    context = data
    console.log(context)
    coDesReplace('.submenu', context)
    // coDesReplace('.categoria', data["portfolio"][c])
    // coDesReplace('.quadrado', data["portfolio"][c])
    coDesReplace('.item', data["portfolio"][c]["projetos"][p])
    coDesReplace('.container-pai', data["portfolio"][c]["projetos"][p])
    




  })


})
