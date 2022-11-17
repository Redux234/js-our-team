//MILESTONE 0

let membri = [
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "img/scott-estrada-developer.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Wayne Barnett",
        ruolo: "Founder CEO",
        immagine: "img/wayne-barnett-founder-ceo.jpg"
    }
]

console.log(membri)

let i = 0

//MILESTONE 1
/*
membri.forEach((Element) =>{
    let i=0
while(i<membri.length){
    document.getElementById("ul").innerHTML +="<li>"+"Il nostro membro del team" + Element.nome + " è " + Element.ruolo + " e la sua immagine è " +  Element.immagine + "</li>";
    i++;
}
    console.log(
        `
-----------------------Membro------------------------
        Il nostro membro del team ${Element.nome} è ${Element.ruolo} e la sua immagine è ${Element.immagine}
        `
        )
    
})
*/
membri.forEach((Element) => {
    document.getElementById("ul").innerHTML += "<li>" + "Il nostro membro del team " + Element.nome + " è " + Element.ruolo + " e la sua immagine è " + "<img src=" + Element.immagine + " alt=foto"+"></img>" + "</li>";
})



