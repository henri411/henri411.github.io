window.onload = function(){
console.log("tämä kirjoitetaan konsoliin");
let myMap;
let address ="Purokatu 6";
let city ="lappeenranta";
let place ="https://www.google.com/maps?q="+ address + city +"&output=embed";

myMap=document.getElementById("map-frame");
//"https://www.google.com/maps?q=Yliopistonkatu36Lappeenranta&output=embed";//=place?
myMap.src= place;
}

function showMap(){
    //document.getelementbyid kaupunkiID osoiteID 
    address=document.getElementById("osoiteID");
    city=document.getElementById("kaupunkiID");
    //myMap.src= place;
    alert("show map now!");
    console.log("show map suoritettu");
}
//js kommentti