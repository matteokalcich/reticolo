<html>
    <head>
        <script>
            function popola() {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        popolaSelect(xhttp.responseText);
                    }
                };
                xhttp.open("POST", "json.php");
                xhttp.send();
            }
            function popolaSelect(lista) {
                var sel = document.getElementById('lista');
                var rc = JSON.parse(lista);
                for (i = 0; i < rc.elenco.length; i++) {
                    var opt = document.createElement("option");
                    opt.value= rc.elenco[i].id;
                    opt.innerHTML = rc.elenco[i].lettera;
                    sel.appendChild(opt);
                }
            }
        </script>    
</head>
<body>
    <select id="lista">
    </select><br/>
    <input type="button" value="Clicca" onClick="popola()" />
</body>
</html>