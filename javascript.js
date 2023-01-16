// Les questions qui seront posées:
const Questions = [{
    id: 0,
    q: "Q1.Que retourne typeof(1>2)?",
    a: [{ text: "True", isCorrect: false },
    { text: "False", isCorrect: false },
    { text: "Boolean", isCorrect: true }
    ]

},
{
    id: 1,
    q: "Q2.Quelle fonction permet de temporiser l'exécution d'une commande?",
    a: [{ text: "wait()", isCorrect: false, isSelected: false },
    { text: "setTimeout()", isCorrect: true },
    { text: "setTime()", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Q3.Que fait T1.push(3) sur le tableau T1?",
    a: [{ text: "retire les trois derniers éléments", isCorrect: false },
    { text: "décale tous les indices de 3 positions", isCorrect: false },
    { text: "ajoute l'élément 3", isCorrect: true }
    ]

},
{
    id: 3,
    q: "Q4.Math.floor(-3.4) affiche",
    a: [{ text: "-4", isCorrect: true },
    { text: "-3", isCorrect: false },
    { text: "erreur", isCorrect: false }
    ]

},
{
    id: 4,
    q: "Q5.pareInt('101dalamtiens');renvoie",
    a: [{ text: "18", isCorrect: false },
    { text: "NaN(Not a Number)", isCorrect: false },
    { text: "101", isCorrect: true }
    ]

},
{
    id: 5,
    q: "Q6.Que retourne Math.min(Math.E,Math.SQRT1_2,0.5)?",
    a: [{ text: "0.5", isCorrect: true },
    { text: "erreur", isCorrect: false },
    { text: "Math.E", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Q7.Dans la hiérarchie des objets,quel est le parent direct de l\'objet 'form'?",
    a: [{ text: "body", isCorrect: false },
    { text: "document", isCorrect: true },
    { text: "head", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Q8.Comment sortir d'une boucle for() ou while()?",
    a: [{ text: "continue", isCorrect: false },
    { text: "exit", isCorrect: false },
    { text: "break", isCorrect: true }
    ]

},
{
    id: 8,
    q: "Q9.alert(!(1&&0)?'VRAI':'FAUX';affiche",
    a: [{ text: "une erreur", isCorrect: false },
    { text: "VRAI", isCorrect: true },
    { text: "VRAI:FAUX", isCorrect: false }
    ]

},
{
    id: 9,
    q: "Q10.Quel language se prete le mieux à l\'exécution d\'une requete MySQL?",
    a: [{ text: "css", isCorrect: false },
    { text: "HTML", isCorrect: false },
    { text: "PHP", isCorrect: true }
    ]

},



]


var start = true;
function iterate(id) {
    // Obtenir la section d'affichage des résultats
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Obtenir la question
    const question = document.getElementById("question");

    // Définition du texte de la question
    question.innerText = Questions[id].q;

    // Obtenir les options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');

    // Fournir un texte d'option
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;

    // Fournir la valeur true ou false aux options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    var selected = "";

    // Afficher la sélection pour op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Afficher la sélection pour op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Afficher la sélection pour op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        selected = op3.value;
    })




    // Saisir le bouton d'évaluation
    const evaluate = document.getElementsByClassName("evaluate");

    // Méthode d'évaluation
    var nb = 0;
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            nb++;
        }
        else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Bouton  Suivant
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 9) {
        id++;
        iterate(id);
        console.log(id);
    }else{
        prompt('Vous avez:'+nb+'/10');
    }
})