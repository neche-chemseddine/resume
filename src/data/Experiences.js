function Experience(post, etablisement, duration_from, duration_to, location, description, techs) {
    this.post = post;
    this.etablisement = etablisement;
    this.duration_from = duration_from;
    this.duration_to = duration_to;
    this.description = description;
    this.techs = techs;
    this.location = location;

}

let experienceList = [
    new Experience("Stagiaire",
        "Laboratoire LORIA",
        "De mars 2019",
        " à août 2019",
        "Vandoeuvre-lès-Nancy,Nancy, France.",
        "Conception et implémentation d’un modèle de Segmentation de flux de documents administratifs en utilisant des techniques d'apprentissage automatique.",
        "Python, Keras, Deep learning, CNN, LSTM."),

    new Experience("Stagiaire",
        "Sense conseil",
        "De février 2018 ",
        " à juin 2018",
        "Hydra, Algérie.",
        "Conception et implémentation d’un système de prediction de la performance d’une publication Facebook basée sur le contenu visuel et textuel.",
        "Python, Keras, Deep learning, CNN, Facebook graphe API, pandas."),

    new Experience("Stagiaire",
        "Laboratoire LRIA  ",
        "De janvier 2016 ",
        "à juin 2016",
        "Alger, Algérie.",
        "Conception et implémentation d’un système de recherche d’images par le contenu.",
        "C++, Qt."),

]
export default experienceList