let xmlhttp = new XMLHttpRequest();
    function loadXMLDoc() {
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                fetchData();
            }
        };
        xmlhttp.open("GET", "../data/xml.xml", true);
        xmlhttp.send();
    }
    function fetchData() {
        let i;
        let xmlDoc = xmlhttp.responseXML;
        let table = "<tr><th>Nom</th><th>Prenom</th></tr>";
        let x = xmlDoc.getElementsByTagName("adherent");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
            x[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("prenom")[0].childNodes[0].nodeValue +
            "</td>" +
            "<td><button type=\"button\" onclick=\"editBook(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Edit</button></td>" +
            "<td><button type=\"button\" onclick=\"deleteBook(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Delete</button></td>" +                
            "</tr>";

        }
        document.getElementById("data").innerHTML = table;
    }   

        function editBook(id) {
        let tblBook = document.getElementById("tblBook");
        let txtTitle = document.getElementById("txtTitle");
        let txtAuthor = document.getElementById("txtAuthor");
        let hId = document.getElementById("hId");
    
        let xmlDoc = xmlhttp.responseXML;
        let books = xmlDoc.getElementsByTagName("adherent");
        let book;
    
        for (i = 0; i < books.length; i++) {
            if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
                book = books[i];
            }
        }
    
        tblBook.style.display = "block";
        hId.value = book.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
        txtTitle.value = book.getElementsByTagName("nom")[0].childNodes[0].nodeValue;
        txtAuthor.value = book.getElementsByTagName("prenom")[0].childNodes[0].nodeValue;
    }

    function updateBook() {
        let xmlDoc = xmlhttp.responseXML;
        let id = document.getElementById("hId").value;
        let books = xmlDoc.getElementsByTagName("adherent");
        let book;
    
        for (i = 0; i < books.length; i++) {
            if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
                book = books[i];
            }
        }
    
        let txtTitle = document.getElementById("txtTitle");
        let txtAuthor = document.getElementById("txtAuthor");
    
        book.getElementsByTagName("nom")[0].childNodes[0].nodeValue = txtTitle.value;
        book.getElementsByTagName("prenom")[0].childNodes[0].nodeValue = txtAuthor.value;
    
        fetchData();
    }

    function makeTextFile (text) {
        let textFile = null;
        let data = new Blob([text], { type: 'text/plain' });

        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
    };

    function saveBook() {                
        let create = document.getElementById('btnSave');

        let link = document.createElement('a');
        link.setAttribute('download', 'dwc_bdd.xml');
        
        const s = new XMLSerializer();

        link.href = makeTextFile(s.serializeToString(xmlhttp.responseXML));
        document.body.appendChild(link);

        window.requestAnimationFrame(function () {
            let event = new MouseEvent('click');
            link.dispatchEvent(event);
            document.body.removeChild(link);
        });
    }

function addBook() {
    let tblBook = document.getElementById("tblBook");
    tblBook.style.display = "block";
}

function add(){
    let xmlDoc = xmlhttp.responseXML;
    let books = xmlDoc.getElementsByTagName("adherent");
    let tblBook = document.getElementById("tblBook")
    let book = xmlDoc.createElement("adherent");    
    let id = xmlDoc.createElement("ID");
    let title = xmlDoc.createElement("nom");
    let author = xmlDoc.createElement("prenom");
    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");

    let id_Text = xmlDoc.createTextNode(books.length+1);
    id.appendChild(id_Text);
    let NewTitle = txtTitle.value;}