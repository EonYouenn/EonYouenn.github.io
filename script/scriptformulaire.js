function formulaire() {
    let nom=document.getElementById('nom').value;
    let prenom=document.getElementById('prenom').value;
    let numetu=document.getElementById('numetu').value;
    let mail=document.getElementById('mail').value;
    alert("Nom : "+ nom +" ,prenom : "+ prenom +" ,numéro étudiant : e"+ numetu +" ,adresse mail : "+ mail);
}

function prix() {
    let prix=3;
    let annales=document.getElementById('annales').checked;
    let event=document.getElementById('event').checked;
    if(annales){prix+=3};
    if(event){prix+=20};
    document.getElementById('prix').value=prix;
}