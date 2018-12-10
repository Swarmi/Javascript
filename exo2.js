var res;
        var tab1 = [19, 72, 33, 5, 66, 2, 14, 9, 10];
        var tab2 = [19, 72, 33, 15, 16, 8, 17, 39, 50];
        var tab3 = [19, 72, 33, 15, 16, 8, 39, 50, 50];
        var tab4 = [19, 72, 33, 5, 66, 2, 14, 9, 10];


        function tri(tab1)
        {
            document.write("avant le tri  " + tab1 + "<br>");
            //ici on lui dit de trier selon un modele
            tab1.sort(tri2);
            document.write("apres le tri  " + tab1 + "<br>");
        }


        //avec cette fonction, on impose un tri de type numérique.
        //les chiffres seront alors triés naturellement
        function tri2 (a, b)

        {
            if (a < b)
            {
                //return a - b
                return -1;
            }

            if ( b < a)
            {   //return a - b

                return 1;
            }

            if (a == b)
            {   //return a - b

                return 0;
            }
        }