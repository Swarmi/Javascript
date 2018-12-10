var res;
        var tab1 = [19, 72, 33, 5, 66, 2, 14, 9, 10];
        var tab2 = [19, 72, 33, 15, 16, 8, 17, 39, 50];
        var tab3 = [19, 72, 33, 15, 16, 8, 39, 50, 50];
        var tab4 = [19, 72, 33, 5, 66, 2, 14, 9, 10];

 res = compare(tab1, tab2);
 document.write("resultat = " + res + "<br>")


 res = compare(tab1, tab3);
 document.write("resultat = " + res + "<br>")

 res = compare(tab1, tab4);
 document.write("resultat = " + res + "<br>")


function compare(t1, t2)
 {   // Si les longueurs ne sont pas égales
     //Alors les tableaux ne sont pas identiques.
     if (t1.length != t2.length)
    {
        return false;
     }
     //Pour chaque element de l'array, on compare la position de i.
     {
         for (let i = 0; i < t1.length; i++)
        {
               if(t1[i] != t2[i]){
                 return false;
             }
         }
         return true;
     }
 }
