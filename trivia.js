function resultado() {
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;
    
    /*1ª pregunta*/
    if (document.getElementById('p11').checked==true) {p1=1}
    if (p1==1) {document.querySelectorAll('.pregunta1')[0].style.color='#00FF00'}
    else {p1=0}

    /*2ª pregunta*/
    if (document.getElementById('p22').checked==true) {p2=1}
    if (p2==1) {document.querySelectorAll('.pregunta2')[1].style.color='#00FF00'}
    else {p2=0}

    /*3ª pregunta*/
    if (document.getElementById('p33').checked==true) {p3=1}
    if (p3==1) {document.querySelectorAll('.pregunta3')[2].style.color='#00FF00'}
    else {p3=0}

    /*4ª pregunta*/
    if (document.getElementById('p44').checked==true) {p4=1}
    if (p4==1) {document.querySelectorAll('.pregunta4')[3].style.color='#00FF00'}
    else {p4=0}
    
    /*5ª pregunta*/
    if (document.getElementById('p52').checked==true) {p5=1}
    if (p5==1) {document.querySelectorAll('.pregunta5')[1].style.color='#00FF00'}
    else {p5=0}

    /*6ª pregunta*/
    if (document.getElementById('p61').checked==true) {p6=1}
    if (p6==1) {document.querySelectorAll('.pregunta6')[0].style.color='#00FF00'}
    else {p6=0}

    /*7ª pregunta*/
    if (document.getElementById('p71').checked==true) {p7=1}
    if (p7==1) {document.querySelectorAll('.pregunta7')[0].style.color='#00FF00'}
    else {p7=0}

    /*8ª pregunta*/
    if (document.getElementById('p83').checked==true) {p8=1}
    if (p8==1) {document.querySelectorAll('.pregunta8')[2].style.color='#00FF00'}
    else {p8=0}

    /*9ª pregunta*/
    if (document.getElementById('p94').checked==true) {p9=1}
    if (p9==1) {document.querySelectorAll('.pregunta9')[3].style.color='#00FF00'}
    else {p9=0}

    /*10ª pregunta*/
    if (document.getElementById('p102').checked==true) {p10=1}
    if (p10==1) {document.querySelectorAll('.pregunta10')[1].style.color='#00FF00'}
    else {p10=0}

    nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
    document.getElementById('resultado').innerHTML="Aciertos: "+nota;
    rs=confirm("C o n t i n u a r . . .");
    if (rs==false) {document.forms[0].reset();location.reload()}
}

function mostrar1() {
    document.getElementById("pre1").style.display="flex";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar2() {
    document.getElementById("pre2").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar3() {
    document.getElementById("pre3").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar4() {
    document.getElementById("pre4").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar5() {
    document.getElementById("pre5").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar6() {
    document.getElementById("pre6").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar7() {
    document.getElementById("pre7").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar8() {
    document.getElementById("pre8").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre9").style.display="none";
    document.getElementById("pre10").style.display="none";
}
function mostrar9() {
    document.getElementById("pre9").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre10").style.display="none";
}

function mostrar10() {
    document.getElementById("pre10").style.display="flex";
    document.getElementById("pre1").style.display="none";
    document.getElementById("pre2").style.display="none";
    document.getElementById("pre3").style.display="none";
    document.getElementById("pre4").style.display="none";
    document.getElementById("pre5").style.display="none";
    document.getElementById("pre6").style.display="none";
    document.getElementById("pre7").style.display="none";
    document.getElementById("pre8").style.display="none";
    document.getElementById("pre9").style.display="none";
}