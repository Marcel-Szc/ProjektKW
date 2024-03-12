function ubrania(){

    let ubrania = [
        {
            url: "https://admor.co/media/catalog/product/cache/7af54c596c9583b1b3d45b2de6b91dc3/h/o/horse-hoodie-black.webp",
            cena: "sdsd",
            opis: "sdsd"
        },
        {
            url: "https://admor.co/media/catalog/product/cache/7af54c596c9583b1b3d45b2de6b91dc3/0/0/001_2_.webp",
            cena: "",
            opis: ""
        },
        {
            url: "https://admor.co/media/catalog/product/cache/7af54c596c9583b1b3d45b2de6b91dc3/p/l/plummet.webp",
            cena: "",
            opis: ""
        },
        {
            url: "",
            cena: "",
            opis: ""
        },
        {
            url: "",
            cena: "",
            opis: ""
        },
        {
            url: "",
            cena: "",
            opis: ""
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

            document.body.appendChild(article);
        }


}

ubrania();