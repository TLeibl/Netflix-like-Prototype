function MyViewModel() {

    var self = this;

    //movie infos
    movieName = ko.observable();
    movieRegisseur = ko.observable();
    movieYear = ko.observable();
    movieActor = ko.observable();
    movieDescription = ko.observable();
    movieCoverURL = ko.observable();

    //movie lists (arrays)
    moviesNeueFilme = ko.observableArray([
        {name: 'Fast & Furious 9', regisseur: 'Justin Lin', year: 2021, actor: 'Vin Diesel, Michelle Rodriguez, Tyrese Gibson, uvm.', description: 'Viele Autos, viel bumm bumm.', coverURL: 'https://m.media-amazon.com/images/I/91EzhPM0TML._AC_UY218_.jpg' },
        {name: 'Scary Movie', regisseur: 'Keennen Ivory Wayans', year: 2000, actor: 'Anna Faris, Jon Abrahams, Shannon Elizabeth, uvm.', description: 'Wer ist da am Telefon?', coverURL: 'https://m.media-amazon.com/images/I/71rVynb0NbL._SL1200_.jpg'},
        {name: 'Mein Lehrer, der Krake', regisseur: 'Pippa Ehrlich', year: 2020, actor: 'Craig Foster, Andreas Heil, Tabea Leibl', description: 'Kraken sind tolle Tiere, manchmal sind sie sogar Lehrer oder Dozenten. Vielleicht ist unser Dozent heimlich ein Krake? ', coverURL: 'https://www.filmszene.de/sites/default/files/styles/poster_180x255/public/filme/m/meinlehrer.jpg?itok=qKunFXKa' }
    ]);

    moviesDerzeitBeliebt = ko.observableArray([
        {name: 'Bibi & Tina - Der Film', regisseur: 'Deetlev Buck', year: 2014, actor: 'Lina Larissa Strahl, Lisa-Marie Koroll, Louis Held, uvm.', description: 'Und das sind Bibi und Tina auf Amadeus und Sabrina! Sie jagen im Wind, sie reiten geschwind, weil sie Freunde von WebDev sind.', coverURL: 'https://m.media-amazon.com/images/I/81sxUhaFkML._SL1223_.jpg'},
        {name: 'Das fliegende Klassenzimmer', regisseur: 'Werner Jacobs', year: 1973, actor: 'Joachim Fuchsberger, Heinz Reincke, Wolfgang Jarczyk, uvm.', description: 'Huiii und weg ist es.', coverURL: 'https://i.weltbild.de/p/erich-kaestner-das-fliegende-klassenzimmer-1973-071959884.jpg?v=3&wp=_max' },
        {name: 'Hentai Kamen', regisseur: 'Yuichi Fukuda', year: 2013, actor: 'Ryohei Suzuki, Fumika Shimizu, Tsuyoshi Muro, uvm.', description: 'Eines Tages wird Unterwäsche vielleicht die Welt retten.', coverURL: 'https://m.media-amazon.com/images/I/71vZXrPUnqL._SX522_.jpg' }
    ]);

    moviesNochmalAnsehen = ko.observableArray([
        {name: 'Friedhof der Kuscheltiere', regisseur: 'Mary Lambert', year: 1989, actor: 'Dale Midkiff, Fred Gwynne, Denise Crosby, uvm.', description: 'War das deine Katze da hinten?', coverURL: 'https://de.web.img2.acsta.net/medias/nmedia/18/79/15/17/19491453.jpg' },
        {name: 'Hackers - Im Netz des FBI', regisseur: 'Ian Softley', year: 1995, actor: 'Jonny Lee Miller, Angelina Jolie, Fisher Stevens, uvm.', description: 'Informatiker sind gefährliche Artgenossen.', coverURL: 'https://m.media-amazon.com/images/I/71pjWyx0sxL._SY445_.jpg' },
        {name: 'Superhero Movie', regisseur: 'Crig Mazin', year: 2008, actor: 'Drake Bell, Sara Paxton, Batman, uvm.', description: 'Jeder kann ein Superheld sein!', coverURL: 'https://images-na.ssl-images-amazon.com/images/I/81tHCv0RoUL._RI_.jpg' }
    ]);

    //Details on mouse click
    self.logMouseOverNeueFilme = function(movie) {
        movieName(movie.name);
        movieRegisseur(movie.regisseur);
        movieYear(movie.year);
        movieActor(movie.actor);
        movieDescription(movie.description);
        movieCoverURL(movie.coverURL);

        var detailsNF = document.getElementsByClassName("detailsNeueFilme")[0];
        var detailsDB = document.getElementsByClassName("detailsDerzeitBeliebt")[0];
        var detailsNA = document.getElementsByClassName("detailsNochmalAnsehen")[0];

            detailsNF.style.display = "block";
            detailsDB.style.display = "none"; //others invisible
            detailsNA.style.display = "none";
    }
    self.logMouseOverDerzeitBeliebt = function(movie) {
        movieName(movie.name);
        movieRegisseur(movie.regisseur);
        movieYear(movie.year);
        movieActor(movie.actor);
        movieDescription(movie.description);
        movieCoverURL(movie.coverURL);

        var detailsNF = document.getElementsByClassName("detailsNeueFilme")[0];
        var detailsDB = document.getElementsByClassName("detailsDerzeitBeliebt")[0];
        var detailsNA = document.getElementsByClassName("detailsNochmalAnsehen")[0];

        detailsNF.style.display = "none";
        detailsDB.style.display = "block"; 
        detailsNA.style.display = "none";
    }
    self.logMouseOverNochmalAnsehen = function(movie) {
        movieName(movie.name);
        movieRegisseur(movie.regisseur);
        movieYear(movie.year);
        movieActor(movie.actor);
        movieDescription(movie.description);
        movieCoverURL(movie.coverURL);

        var detailsNF = document.getElementsByClassName("detailsNeueFilme")[0];
        var detailsDB = document.getElementsByClassName("detailsDerzeitBeliebt")[0];
        var detailsNA = document.getElementsByClassName("detailsNochmalAnsehen")[0];

        detailsNF.style.display = "none";
        detailsDB.style.display = "none"; 
        detailsNA.style.display = "block";
    }

//add movie to list
    self.addMovieNF = function () {

        if (moviesNeueFilme().length < 7) {
            
            moviesNeueFilme.push({ name: movieName(), regisseur: movieRegisseur(), year: movieYear(), actor: movieActor(), description: movieDescription(), coverURL: movieCoverURL() });

            document.getElementById("inputForm0").style.display = "none";
            document.getElementById("addNewBtn0").style.display = "flex";
        } else {
            alert("Maximalanzahl der hinzugefügten Filme erreicht!");
        }
    }
    self.addMovieDB = function () {

        if (moviesDerzeitBeliebt().length < 7) {
            
            moviesDerzeitBeliebt.push({ name: movieName(), regisseur: movieRegisseur(), year: movieYear(), actor: movieActor(), description: movieDescription(), coverURL: movieCoverURL() });

            document.getElementById("inputForm1").style.display = "none";
            document.getElementById("addNewBtn1").style.display = "flex";
        } else {
            alert("Maximalanzahl der hinzugefügten Filme erreicht!");
        }
    }
    self.addMovieNA = function () {

        if (moviesNochmalAnsehen().length < 7) {
            
            moviesNochmalAnsehen.push({ name: movieName(), regisseur: movieRegisseur(), year: movieYear(), actor: movieActor(), description: movieDescription(), coverURL: movieCoverURL() });

            document.getElementById("inputForm2").style.display = "none";
            document.getElementById("addNewBtn2").style.display = "flex";
        } else {
            alert("Maximalanzahl der hinzugefügten Filme erreicht!");
        }
    }

}
ko.applyBindings(new MyViewModel());

//Funktion des "Neuen Film hinzufügen"-Buttons
document.getElementById("addNewBtn0").addEventListener("click", function () {
    document.getElementById("inputForm0").style.display = "block";
    document.getElementById("addNewBtn0").style.display = "none";

});
document.getElementById("addNewBtn1").addEventListener("click", function () {
    document.getElementById("inputForm1").style.display = "block";
    document.getElementById("addNewBtn1").style.display = "none";

});
document.getElementById("addNewBtn2").addEventListener("click", function () {
    document.getElementById("inputForm2").style.display = "block";
    document.getElementById("addNewBtn2").style.display = "none";

});