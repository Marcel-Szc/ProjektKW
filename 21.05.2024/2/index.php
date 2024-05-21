<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testowako</title>
</head>
<body>
    <?php 
        //zadanie 1
        $zmienna1 = 1;
        $zmienna2 = 2.4;
        $zmienna3 = "jeden";
        $zmienna4 = true;
        //zadanie 2
        echo ("
        <p>".$zmienna1." " .$zmienna2." " .$zmienna3." " .$zmienna4. " </p>
        ");
        //zadanie 3
        echo ("
        <p>".$zmienna1." </p><p>" .$zmienna2." </p><p>" .$zmienna3." </p><p>" .$zmienna4. " </p>
        ");
        //zadanie 4
        //
        /*  */
        //zadanie 5
        echo ("<div>".$zmienna1."</div>");
        echo $zmienna1. " to nie 2";
        echo $zmienna1. " wiek edging streaku" ;
        echo $zmienna1. " jeden";
        echo "ile piwek można?" .$zmienna1;
        //zadanie 6
        $array = array( "foo", "bar", "hello", "world");
        foreach ($array as $kluczyk)
        echo $kluczyk.", ";
        //zadanie 7
        $cena = array(
            'jogurt' => '2 zł',
            'maslo' => '1.50 zł',
            'zapiekanka' => '4 zł',
            'gazeta'  => '5 zł'
        );
        foreach ($cena as $klucz => $wartosc)
            echo $klucz." -> ".$wartosc."<br>\n";
        //zadanie 8
        $a = 12;
        $b = 21;

        $wynikDod = $a + $b;
        echo "wynik dodawania = ".$wynikDod. "\n";
        $wynikOde = $a - $b;
        echo "wynik odejmowania = ".$wynikOde."\n";
        $wynikMno = $a * $b;
        echo "wynik mnożenia = ".$wynikMno."\n";
        $wynikDzi = $a / $b;
        echo "wynik dzielenia = ".$wynikDzi."\n";
        // zadanie 9
        $bokKwa = 6;
        $poleKwa = $bokKwa * $bokKwa;
        echo ("<div> pole kwadratu: ".$poleKwa."</div>");
        //zadanie 10
        $bokPro1 = 6;
        $bokPro2 = 9;
        $polePro = $bokPro1 * $bokPro2;
        echo ("<div> pole prostokąta: ".$polePro."</div>");
        //zadanie 11
        $srednia = 7;
        $liczbaPi = 
        3.14159265358979323846264;
        $poleKol = $srednia * $liczbaPi ;
        echo ("<div> pole koła: ".$poleKol."</div>");
        //zadanie 12
        $ile = 0;
        $metry = (12 * 5) * 2;
        $ile = $metry * 450;
        echo ("potrzeba: ".$ile."ml farby")
    ?>
    
</body>
</html>