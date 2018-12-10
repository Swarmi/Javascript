
var res;
        var tab1 = [19, 72, 33, 5, 66, 2, 14, 9, 10];
        var tab2 = [19, 72, 33, 15, 16, 8, 17, 39, 50];
        var tab3 = [19, 72, 33, 15, 16, 8, 39, 50, 50];
        var tab4 = [19, 72, 33, 5, 66, 2, 14, 9, 10];










        function tri(tab1)
        {
            document.write("avant le tri" + tab1 + "<br>");
            tab1.sort();
            document.write("apres le tri" + tab1 + "<br>");
        }

        function tri2 (a, b)

        {
            if (a < b )
            {
                alert("b supérieur à a");
                //return a - b
                return -1;
            }

            if ( b < a)
            {   //return a + b
                alert("a supérieur à b");
                return 1;
            }

            if (a == b)
            {   //return a
                alert("b égal à a");
                return 0;
            }
        }

















































// res = compare(tab1, tab2);
// document.write("resultat = " + res + "<br>")


// res = compare(tab1, tab3);
// document.write("resultat = " + res + "<br>")

// res = compare(tab1, tab4);
// document.write("resultat = " + res + "<br>")


// function compare(t1, t2)
// {   // Si les longueurs ne sont pas égales
//     //Alors les tableaux ne sont pas identiques.
//     if (t1.length != t2.length)
//     {
//         return false;
//     }
//     //Pour chaque element de l'array, on compare la position de i.
//     {
//         for (let i = 0; i < t1.length; i++)
//         {
//             //Si la valeur que contient la position de l'element des deux tableaux est différente, on return false.
//             if(t1[i] != t2[i]){
//                 return false;
//             }
//         }
//         return true;
//     }
// }
