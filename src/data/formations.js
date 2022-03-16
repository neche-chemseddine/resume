function Formation(diploma, etablisement, location, duration_from, duration_to, description) {
    this.diploma = diploma;
    this.etablisement = etablisement;
    this.duration_from = duration_from;
    this.duration_to = duration_to;
    this.description = description;
    this.location = location;
}

let formationList = [
    new Formation("Master apprentissage, vision et robotique.",
        "Université de Lorraine - faculté des sciences et technologies",
        "Vandoeuvre-lès-Nancy, France.",
        "2018",
        "2019",
        "Les objectifs du parcours “apprentissage , vision et robotique” se situent dans le contexte de l’informatique moderne orientéen vers l’apprentissage automatique, la vision par ordinateur ainsi que les notions de la robotique et les systèmes complexes."),

    new Formation("Master systèmes informatiques intelligents",
        "Université des sciences et de la technologie HOUARI",
        "Boumediene Alger, Algérie.",
        "2017",
        "2018",
        "La formation permet aux étudiants avant tout d’acquérir des connaissances pointues dans le domaine de l’informatique, plus précisément les systèmes multi-agents, apprentissage automatique, métaheuristiques et traitement de language naturel."),

    new Formation("Licence ingénierie des systèmes d’informations et des logiciels.",
        "Université des sciences et de la technologie HOUARI",
        "Boumediene Alger, Algérie.",
        "2015",
        "2016",
        "Maîtriser les compétences disciplinaires correspondantes à l’ingénierie des logiciels et des systèmes d’information assurant aux diplômés l’aptitude d’être opérationnels dans le milieu professionnel actuel.")

]
export default formationList