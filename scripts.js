function updateclock(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }else{
        hours = hours;
    }
    
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;


}
setInterval(updateclock,1000)
updateclock();
    function big(){
        document.getElementById("info").style.fontSize = 2 + "rem";
    }
    function white(){
        document.getElementById("posts").style.backgroundColor = "black";
        document.getElementById("posts").style.color = "white";
    }

function zgloszenie() {
    alert("zgłoszenie przyjete, odezwiemy się do pana/pani w przeciągu 24h!");
}
function zgloszenieEng() {
    alert("Report accepted, expect a reply within the next 24 hours!");
}
function ziobro() {
    //menuWCAG
     document.getElementById("menuWCAG").style.position = "absolute";
     document.getElementById("menuWCAG").style.height = 100 + "%";
     document.getElementById("menuWCAG").style.width = 100 + "%";
    //WCAGwrapper
     document.getElementById("WCAGwrapper").style.position = "sticky";
     document.getElementById("WCAGwrapper").style.top = 0;
     document.getElementById("WCAGwrapper").style.bottom = 0;
     document.getElementById("WCAGwrapper").style.paddingTop = 15 + "px";
    //wrocWrapper
     document.getElementById("wrocWrapper").style.width = 90 + "vh";
     document.getElementById("wrocWrapper").style.height = 85 + "vh";
     document.getElementById("wrocWrapper").style.backgroundColor= "rgb(197, 197, 197)";
     document.getElementById("wrocWrapper").style.border = 1 + "px solid rgb(119, 119, 119)";
     document.getElementById("wrocWrapper").style.borderRadius = 8 + "%";
     document.getElementById("wrocWrapper").style.margin = "auto";
    //wroc
     document.getElementById("wroc").style.height = 50 + "px";
     document.getElementById("wroc").style.width = 100 + "px";
     document.getElementById("wroc").style.opacity = 100 + "%";
     document.getElementById("wroc").style.fontSize = 24 + "px";
     document.getElementById("wroc").style.MarginLeft = 800 + "px";
     document.getElementById("wroc").style.MarginTop = 400 + "px";
    //opcje w WCAG
    document.getElementById("cyan").style.opacity = 100 + "%";
    document.getElementById("yellow").style.opacity = 100+ "%";
    document.getElementById("APLusPlus").style.opacity = 100 + "%";
    document.getElementById("APlus").style.opacity = 100 + "%";
    document.getElementById("small").style.opacity = 100 + "%";
    //dl. animacji 
    document.getElementById("wrocWrapper").style.transitionDuration = 2 + "s";
    document.getElementById("WCAGwrapper").style.transitionDuration = 2 + "s";
    document.getElementById("wroc").style.transitionDelay = 1.5 + "s";
    document.getElementById("wroc").style.transitionDuration = 1 + "s";
    document.getElementById("small").style.transitionDelay = 1.5 + "s";
    document.getElementById("small").style.transitionDuration = 1 + "s"
    document.getElementById("APlus").style.transitionDelay = 1.5 + "s";
    document.getElementById("APlus").style.transitionDuration = 1 + "s";
    document.getElementById("APLusPlus").style.transitionDelay = 1.5 + "s";
    document.getElementById("APLusPlus").style.transitionDuration = 1 + "s";
    document.getElementById("yellow").style.transitionDelay = 1.5 + "s";
    document.getElementById("yellow").style.transitionDuration = 1 + "s";
    document.getElementById("cyan").style.transitionDelay = 1.5 + "s";
    document.getElementById("cyan").style.transitionDuration = 1 + "s";
}
function znaki() {
    document.getElementById("cyan").style.opacity = 0 + "%";
    document.getElementById("yellow").style.opacity = 0 + "%";
    document.getElementById("APLusPlus").style.opacity = 0 + "%";
    document.getElementById("APlus").style.opacity = 0 + "%";
    document.getElementById("small").style.opacity = 0 + "%";
    document.getElementById("cyan").style.transitionDelay = 0 + "s";
    document.getElementById("yellow").style.transitionDelay = 0 + "s";
    document.getElementById("APLusPlus").style.transitionDelay = 0 + "s";
    document.getElementById("APlus").style.transitionDelay = 0 + "s";
    document.getElementById("small").style.transitionDelay = 0 + "s";
    document.getElementById("cyan").style.transitionDuration = 0 + "s";
    document.getElementById("yellow").style.transitionDuration = 0 + "s";
    document.getElementById("APLusPlus").style.transitionDuration = 0 + "s";
    document.getElementById("APlus").style.transitionDuration = 0 + "s";
    document.getElementById("small").style.transitionDuration = 0 + "s";
}
function wroc() {
    znaki();
    document.getElementById("menuWCAG").style.height = 0 + "px";
    document.getElementById("menuWCAG").style.width = 0 + "px";
    document.getElementById("wroc").style.opacity = 0 + "%";
    document.getElementById("wroc").style.transitionDelay = 0 + "s";
    document.getElementById("wroc").style.transitionDuration = 0.5 + "s";
    document.getElementById("wrocWrapper").style.margin = "auto";
    document.getElementById("wrocWrapper").style.transitionDuration = 0.5 + "s";

    document.getElementById("wrocWrapper").style.width = 0 + "px";
    document.getElementById("wrocWrapper").style.height = 0 + "px";

}
function lightmode() {
    document.getElementById("navBottom").style.backgroundColor = "white";
    document.getElementById("ziobro").style.backgroundColor = "white";
    document.getElementById("menu").style.backgroundColor = "white";
    document.getElementById("menu").style.borderColor = "lightgrey";
    document.getElementById("menu1").style.borderColor = "lightgrey";
    document.getElementById("menu2").style.borderColor = "lightgrey";
    document.getElementById("menu3").style.borderColor = "lightgrey";
    if(document.getElementById("formularz")){
        document.getElementById("formularz").style.backgroundColor = "white" ;
    }
    if(document.getElementById("mid")) {
        document.getElementById("mid").style.backgroundColor = "rgba(0, 0, 0, 0.226)";
        document.getElementById("mid").style.padding = "rgba(0, 0, 0, 0.226)";
    }
    if(document.getElementById("text")) {
    document.getElementById("text").style.backgroundColor = "whitesmoke";
    document.getElementById("main_small").style.backgroundColor = "whitesmoke";
    document.getElementById("h1").style.backgroundColor = "whitesmoke";
    document.getElementById("h1").style.color = "black";
    document.getElementById("paragraf").style.color = "black";
    }
    if(document.getElementById("formularz")) {

    }
}
znaki();
function darkmode() { 
    document.getElementById("navBottom").style.backgroundColor = "rgb(90, 90, 90)";
    document.getElementById("navBottom").style.borderTopColor = "rgb(50, 50, 50)";
    document.getElementById("navBottom").style.borderBottomColor = "rgb(50, 50, 50)";
    document.getElementById("ziobro").style.backgroundColor = "rgb(90, 90, 90)";
    document.getElementById("menu").style.backgroundColor = "rgb(90, 90, 90)";
    document.getElementById("menu").style.borderColor = "rgb(50, 50, 50)";
    document.getElementById("menu1").style.borderColor = "rgb(50, 50, 50)";
    document.getElementById("menu2").style.borderColor = "rgb(50, 50, 50)";
    document.getElementById("menu3").style.borderColor = "rgb(50, 50, 50)";
    document.getElementById("ziobro").style.borderColor = "rgb(50, 50, 50)";
    if(document.getElementById("formularz")){
        document.getElementById("formularz").style.backgroundColor = "rgb(50, 50, 50)" ;
    }
    if(document.getElementById("mid")) {
        document.getElementById("mid").style.backgroundColor = "rgb(50, 50, 50)";
        document.getElementById("mid").style.padding = "rgb(50, 50, 50)";
    }
    if(document.getElementById("text")) {
    document.getElementById("text").style.backgroundColor = "rgb(50, 50, 50)";
    document.getElementById("main_small").style.backgroundColor = "rgb(50, 50, 50)";
    document.getElementById("h1").style.backgroundColor = "rgb(50, 50, 50)";
    document.getElementById("h1").style.color = "rgb(180, 180, 180)";
    document.getElementById("paragraf").style.color = "rgb(180, 180, 180)";
    }
    if(document.getElementById("formularz")) {

    }
}
function small() {
    document.getElementById("h1").style.fontSize = 34  + "px";
    document.getElementById("paragraf").style.fontSize = 1 + "rem";
    document.getElementById("main_small").style.height = 462 + "px";
}
function APlus() {
    document.getElementById("h1").style.fontSize = 2.9 + "rem";
    document.getElementById("paragraf").style.fontSize = 2.3 + "rem";
    document.getElementById("main_small").style.height = 1150 + "px";
}
function APlusPlus() {
    document.getElementById("h1").style.fontSize = 4.2 + "rem";
    document.getElementById("paragraf").style.fontSize = 3.6 + "rem";
    document.getElementById("main_small").style.height = 2200 + "px";

}
function cyan() {
    if(document.getElementById("main_small")) {
    document.getElementById("main_small").style.backgroundColor = "cyan";
    }
}
function yellow() {
    if (document.getElementById("main_small")){ 
    document.getElementById("main_small").style.color = "yellow";
    }
}
function ubrania(){
  if(document.getElementById("mid")) {
    let ubrania = [
        {
            url: "https://admor.co/media/catalog/product/cache/7af54c596c9583b1b3d45b2de6b91dc3/h/o/horse-hoodie-black.webp",
            cena: "399 zł",
            opis: "HORSE HEAVY HOODIE (BLACK)"
        },
        {
            url: "https://admor.co/media/catalog/product/cache/7af54c596c9583b1b3d45b2de6b91dc3/0/0/001_2_.webp",
            cena: "379 zł",
            opis: "INK CRYSTALS HOODIE (BROWN)"
        },
        {
            url: "https://admor.co/media/catalog/product/cache/7af54c596c9583b1b3d45b2de6b91dc3/p/l/plummet.webp",
            cena: "349 zł",
            opis: "PLUMMET HOODIE (GREY)"
        },
        {
            url: "https://www.datocms-assets.com/24293/1659422552-off-white-nike-air-force-1-low-grey-release-date-mock-kopie.png?fm=jpg&max-h=420&max-w=645",
            cena: "660 zł",
            opis: "AIR FORCE 1 GRAY "
        },
        {
            url: "https://www.nicekicks.com/files/2023/12/air-jordan-4-white-thunder-fq8138-001-1.jpeg",
            cena: "1379 zł",
            opis: "AIR JORDAN 4 WHITE THUNDER"
        },
        {
            url: "https://sneakersdepot.pl/cdn/shop/products/Air-Jordan-5-Gore-Tex-Off-Noir-W.png?v=1673619115&width=533",
            cena: "2399zł",
            opis: "AIR JORDAN 5 GORE TEX"
        },
    ]

        for(i=0; i<ubrania.length; i++){
            let url = ubrania[i].url;
            let cena = ubrania[i].cena;
            let opis = ubrania[i].opis;

            let article = document.createElement("article");
            let img = document.createElement("img");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            article.id = "artykul"

            img.src = url;
            h2.innerText = cena;
            p.innerText = opis;

            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p);

            document.getElementById("mid").appendChild(article);
        }
    }
}
ubrania();