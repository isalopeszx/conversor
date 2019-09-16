function fonte(e) {
  var elemento = $(".acessibilidade");
  var fonte = elemento.css("font-size");
  if (e == "a") {
    elemento.css("fontSize", parseInt(fonte) + 1);
  } else if ("d") {
    elemento.css("fontSize", parseInt(fonte) - 1);
  }
}
function date_time(id) {
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outbro",
    "Novembro",
    "Dezembro"
  );
  d = date.getDate();
  day = date.getDay();
  days = new Array(
    "Domingo",
    "Segunda - Feira",
    "Terça - Feira",
    "Quarta - Feira",
    "Quinta - Feira",
    "Sexta - Feira",
    "Sabado"
  );
  h = date.getHours();
  if (h < 10) {
    h = "0" + h;
  }
  m = date.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  s = date.getSeconds();
  if (s < 10) {
    s = "0" + s;
  }
  result =
    "Bem Vindo, Hoje é " +
    days[day] +
    " " +
    d +
    " " +
    months[month] +
    " " +
    year +
    " . Espero que goste";
    var dataH1 = document.createElement('h1');
    dataH1.appendChild(document.createTextNode(result));
    dataH1.setAttribute('id', 'dataAlerta');
  document.querySelector('#corpo').appendChild(dataH1);

  return true;
}


function convertTemp(direction)
{
var fObj = document.convert.ftemp, cObj = document.convert.ctemp, kObj = document.convert.ktemp;
if (direction == "ftoc") 
{
    cObj.value = Math.round((fObj.value - 32) * (5/9));
	kObj.value = Math.round((parseInt(cObj.value) + 459.67) * (5/9));
} 
else if (direction == "ktof") 
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) -  459.67);
	cObj.value = Math.round((fObj.value - 32) * (5/9));
	
 }
else
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) + 32);
	kObj.value = Math.round((parseInt(cObj.value) + 273));
 }
}
function clearAll()
{
document.convert.ftemp.value="";
document.convert.ctemp.value="";
document.convert.ktemp.value="";
}
