var variable_ekainput;
var variable_tokainput;
var laskuri = 0;

window.onload = function(){
     document.getElementById("ekainput").value = getRandomInt(10);
     document.getElementById("tokainput").value = getRandomInt(10);
     variable_ekainput = document.getElementById("ekainput").value;
     variable_tokainput = document.getElementById("tokainput").value;
}
function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function laske(){
    
    laskuri++;
    let operators = document.getElementById("operationSelect");
    console.log("laske nappia painettu");
    let selectedText = operators.options[operators.selectedIndex].text; // +
    console.log(selectedText);
    document.getElementById("laskurifield").value = " laskuja tehty : " +laskuri+ " kpl"
    document.getElementById("vastaus").value= variable_ekainput + selectedText + variable_tokainput +"="+tulos();
    

    //let selectedValue = operators.options[operators.selectedIndex].value; // 1
    vastauslog = document.getElementById("vastauslog").value;
    let logEntry = variable_ekainput + selectedText + variable_tokainput + "=" + tulos() + "\n";
    if (vastauslog !== "") {
        logEntry = "\n" + logEntry;
    }
    document.getElementById("vastauslog").value = vastauslog + logEntry;
    
}
function tulos(){
    variable_ekainput = parseInt(variable_ekainput);
    variable_tokainput = parseInt(variable_tokainput);
    let operators = document.getElementById("operationSelect");
    let selectedText = operators.options[operators.selectedIndex].text; // +
    let vastaus;
    vastaus=variable_ekainput + selectedText + variable_tokainput;
    if(selectedText == "+"){
        vastaus=variable_ekainput + variable_tokainput; 
    }
    if(selectedText == "-"){
        vastaus=variable_ekainput - variable_tokainput; 
    }
    if(selectedText == "*"){
        vastaus=variable_ekainput * variable_tokainput; 
    }   
    if(selectedText == "/"){
        vastaus=variable_ekainput / variable_tokainput; 
    }
    return vastaus;
}

function plus1(){
    variable_ekainput = parseInt(variable_ekainput);
    if (variable_ekainput < 10) {
        variable_ekainput = variable_ekainput + 1;
        document.getElementById("ekainput").value = variable_ekainput;
    }
}
function minus1(){
    variable_ekainput = parseInt(variable_ekainput);
    if (variable_ekainput > 0) {
        variable_ekainput = variable_ekainput - 1;
        document.getElementById("ekainput").value = variable_ekainput;
    }
}
function plus2(){
    variable_tokainput = parseInt(variable_tokainput);
    if (variable_tokainput < 10) {
        variable_tokainput = variable_tokainput + 1;
        document.getElementById("tokainput").value = variable_tokainput
        ;
    }
}
function minus2(){
    variable_tokainput = parseInt(variable_tokainput);
    if (variable_tokainput > 0) {
        variable_tokainput = variable_tokainput - 1;
        document.getElementById("tokainput").value = variable_tokainput;
    }
}