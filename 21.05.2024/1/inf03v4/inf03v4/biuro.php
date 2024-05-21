<?php $conn = new mysqli("localhost", "root", "", "podroze"); ?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Poznaj Europę</title>
    <link rel="stylesheet" href="styl9.css">
</head>
<body>
    <header><h1>BIURO PODRÓŻY</h1></header>
    <section class="main">
        <div class="hero">
            <div class="side">
                <h2><span>P</span>romocje</h2>
                <table>
                    <tr>
                        <td>Warszawa</td>
                        <td>od 600zł</td>
                    </tr>
                    <tr>
                        <td>Wenecja</td>
                        <td>od 1200zł</td>
                    </tr>
                    <tr>
                        <td>Paryż</td>
                        <td>od 1200zł</td>
                    </tr>
                </table>
            </div>
            <div class="middle">
            <h2><span>W </span>tym roku jedziemy do...</h2>
                
                    
                    <?php 
                    $zapytanieZDJ = "SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis;";

                    foreach($conn->query($zapytanieZDJ) as $wiersz) 
                    {
                        echo
                        ("
                           <img src=".$wiersz["nazwaPliku"]." alt=".$wiersz["podpis"].">
                        ");
                    };
                        
                    ?>
                  
            </div>
            <div class="side">
                <h2><span>P</span>romocje</h2>
                <a href="biuro@wycieczki.pl">napisz do nas</a>
                <p>telefon: 444555666</p>
            </div>
        </div>
        <div class="info">
            <h3>W poprzednich latach byliśmy...</h3>
            <ul>
            <?php
                 $zapytanieTXT = "SELECT cel, dataWyjazdu FROM wycieczki WHERE dostepna = 0;";

                 foreach($conn->query($zapytanieTXT) as $wierszyk) 
                 {
                     echo
                     ("
                        <li> Dnia ".$wierszyk["dataWyjazdu"]." pojechaliśmy do ".$wierszyk["cel"]."</li>
                     ");
                 };
            ?>
            </ul>
        </div>
    </section>
    <footer><p>Stronę wykonał: 000000000000</p></footer>
</body>
<?php $conn->close(); ?>
</html>