function ubrania(){

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

            img.src = url;
            h2.innerText = cena;
            p.innerText = opis;

            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p);

            document.getElementById("mid").appendChild(article);
        }

}
ubrania();
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

    document.getElementById("hours").textContent = hours + ":";
    document.getElementById("minutes").textContent = minutes + ":";
    document.getElementById("seconds").textContent = seconds;

}

setInterval(updateclock,1000)
updateclock();



}


ubrania();

setInterval(updateclock,1000)
updateclock();

WCAG();
    function small(){
        document.getElementById("posts").style.fontSize = 1 + "rem";
    }
    function medium(){
        document.getElementById("posts").style.fontSize = 1.5 + "rem";
    }
    function big(){
        document.getElementById("posts").style.fontSize = 2 + "rem";
    }
    function white(){
        document.getElementById("posts").style.backgroundColor = "white";
        document.getElementById("posts").style.color = "black";
    }
    function black(){
        document.getElementById("posts").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("posts").style.color = "white";
    }
    function yellow(){
        document.getElementById("posts").style.backgroundColor = "yellow";
        document.getElementById("posts").style.color = "black";
    }
    function cyan(){
        document.getElementById("posts").style.backgroundColor = "cyan";
        document.getElementById("posts").style.color = "black";
    }

