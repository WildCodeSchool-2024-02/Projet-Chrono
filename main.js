(function () {

    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const $slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function slideTo(index) {
        currentSlide = index >= 5 || index < 1 ? 0 : index;
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
    }

    prev.addEventListener('click', () => slideTo(--currentSlide));
    next.addEventListener('click', () => slideTo(++currentSlide));
})();

function card(img, title, desc, quote, startcolor, endcolor) {
    const newCard = `
    <article class="card-container"style="background: linear-gradient(73deg, ${startcolor}, ${endcolor});">
        <img src="${img}" class="card-img" alt="${title}">
        <h2>${title}</h2>
        <div class="description"> 
            <p>
               ${desc}
            </p>
            <blockquote class="quote">
                ${quote}
            </blockquote>
        </div>
    </article>
    `

    return newCard;
}

const cards = document.querySelector(".cards");

// tableau+fonction creéation de carte
const arrayCard = [

    /*card1*prehistoire*/
    {
        src: "/assets/imageCard/prehistoricmen.jpg",
        title: "l'Homme préhistorique",
        desc: "Les hommes préhistoriques étaient les premiers membres de la lignée humaine, vivant avant l'avènement de l'écriture. Leur mode de vie était principalement nomade, cherchant constamment de la nourriture, de l'eau et un abri. Ils ont développé des compétences de chasse, de cueillette et de fabrication d'outils en pierre. Ces ancêtres ont également maîtrisé le feu, un tournant majeur dans leur évolution. Leur culture artistique, illustrée par des peintures rupestres et des sculptures, témoigne de leur créativité et de leur capacité à communiquer. Les hommes préhistoriques ont coexisté avec d'autres espèces humaines, telles que les Néandertaliens et les Homo erectus. Leurs découvertes archéologiques révèlent une adaptabilité remarquable à divers environnements. La génétique et l'anthropologie nous aident à reconstruire leur histoire et leur évolution. Ces premiers humains ont pavé la voie à notre développement en tant qu'espèce moderne. Nous continuons à apprendre de leur passé pour mieux comprendre notre présent et notre avenir.",
        quote: "Les premiers hommes qui ont habité la terre étaient bien à plaindre; ils étaient presque nus, ils n'avaient pas d'outils et ils devaient se défendre contre les bêtes féroces. - Voltaire",
        startcolor: "rgba(240,120,0,1) 0%",
        endcolor: "rgba(227,156,27,1) 100%"
    },
    /*card2 age du bronze*/
    {
        src: "/assets/imageCard/homme du bronze.jpg",
        title: "Homme du bronze",
        desc: "L'homme de l'âge du bronze, un véritable bricoleur avant l'heure, maniait le métal avec autant d'adresse qu'un enfant manipulant de la pâte à modeler. Armé de ses ustensiles en bronze, il se lançait dans des batailles épiques contre la rouille et les ennemis du métal. Son quotidien était ponctué de chants métalliques, tels des concerts improvisés avec ses instruments de forge. Son ambition ? Transformer tout ce qui croisait son chemin en une œuvre d'art métallique, que ce soit une épée ou une simple cuiller. Il était l'artisan de son temps, démontrant que même l'âge du bronze pouvait briller d'humour et de créativité.",
        quote: "Entre la dureté du fer et la douceur de l'âge du bronze, réside la beauté de l'histoire forgée dans les flammes de l'innovation.",
        startcolor: "rgba(227,156,27,1) 0%", endcolor: " rgba(224,179,29,1)"
    },
    /*card3* age du fer*/
    {
        src: "/assets/imageCard/agedufer.jpg",
        title: "L'âge du fer",
        desc: "À l'âge du fer, les coiffeurs étaient aussi rares que les rasoirs. Se réveiller avec une coupe de cheveux sauvage était la norme. Les fêtes étaient éclairées par des torches, mais les gens se plaignaient toujours de la mode flammes vacillantes. Les métaux précieux n'étaient que des cailloux brillants, jusqu'à ce que quelqu'un découvre le fer. Les pannes de courant étaient un mythe, à moins qu'une tribu rivale ne coupe vos fils électriques. Les repas étaient simples : viande grillée et racines, avec une garniture de sarcasmes. On disait souvent que quelqu'un avait un caractère en fer, surtout après une nuit de fête. Les armes étaient si lourdes que les batailles se transformaient parfois en concours de haltérophilie. Et pourtant, malgré les défis, c'était l'âge où tout semblait être possible, même si cela impliquait de traîner un chariot sur des routes cahoteuses.",
        quote: "À l'âge du fer, on n'avait pas besoin de régime, la chasse aux mammouths était notre salle de sport !",
        startcolor: "rgba(224,179,29,1)0%",
        endcolor: "rgba(224,194,94,1) 100%"
    },
    /*card4 antiquité */
    {
        src: "/assets/imageCard/antiquité.jpg",
        title: "L'Antiquité",
        desc: "L'Antiquité, c'était un peu comme la première saison d'une série à succès : des dieux en toge qui régnaient depuis l'Olympe, des empereurs qui se prenaient pour des divinités, et des guerres pour conquérir des territoires qui faisaient plus de bruit qu'une dispute de voisins pour une haie mal taillée. Les gens s'entassaient dans des arènes pour regarder des gladiateurs se battre en espérant que ça finisse mieux que leurs propres querelles de famille. Les philosophes se prenaient tellement au sérieux qu'ils passaient plus de temps à réfléchir à la signification de la vie qu'à la vivre. Et n'oublions pas les Romains, qui ont construit des routes si droites qu'elles rendaient jaloux même les conducteurs les plus pointilleux de nos jours. En bref, l'Antiquité était un mix entre Game of Thrones et The Real Housewives, avec une dose de sagesse et beaucoup de vin.",
        quote: "Quand on voit le nombre de statues érigées à leur gloire, on se demande si les empereurs romains n étaient pas les premiers à inventer le selfie en marbre.",
        startcolor: "rgba(224,194,94,1)0%",
        endcolor: "rgba(224,203,29,1) 100%"
    },

    /*card5 moyenage */
    {
        src: "/assets/imageCard/moyenage.jpg",
        title: "Le Moyen age",
        desc: "L'homme du Moyen Âge, tel un chevalier sans son destrier, naviguait entre des châteaux aussi nombreux que les boulangeries de nos jours. Avec ses armures épaisses, il se préparait pour des batailles qui semblaient parfois plus proches de tournois de pelote que de guerres. Son quotidien était rythmé par les claquements de sabots sur les pavés, les troubadours en quête d'auditoire et les odeurs envoûtantes de fumée et de boue. Entre deux affrontements, il trouvait refuge dans des tavernes aux noms aussi colorés que leurs boissons, échangeant des histoires aussi exagérées que ses épées. Dans ce monde de seigneurs et de serfs, l'homme médiéval jonglait entre honneur et humour, souvent avec un clin d'œil malicieux.",
        quote: "Dans les ombres du Moyen Âge, l'homme tisse sa destinée entre les fils de l'épée et les fils du savoir, jonglant entre les tourments de la guerre et les lueurs de la connaissance.",
        startcolor: " rgba(224,203,29,1) 0%", endcolor: "rgba(223,230,37,1) 100%"
    },
    /*card6 l'homme moderne*/
    {
        src: "/assets/imageCard/modernmen.jpg",
        title: "L'homme moderne",
        desc: "L'homme moderne, habillé de ses jeans et de son café à emporter, jongle entre les notifications de son smartphone et les réunions ennuyeuses. Son habitat, un sanctuaire high-tech, ressemble plus à une salle de contrôle spatiale qu'à un simple foyer. Il se déplace dans des machines rugissantes, naviguant habilement entre les embouteillages urbains comme un pilote de course. Son régime alimentaire est un équilibre délicat entre fast-food et salades superfood, tentant de concilier plaisir et santé. Il communique davantage avec des emojis qu'avec des mots, réduisant parfois les conversations complexes à des LOLs et des GIFs. Malgré tout, l'homme moderne trouve toujours le temps de rire de lui-même et de ses péripéties dans ce monde numérique déconcertant.",
        quote: "L'homme moderne : capable de commander une pizza avec son téléphone, mais incapable de trouver la télécommande pour changer de chaîne.",
        startcolor: "rgba(223,230,37,1) 0%", endcolor: "  rgba(241,242,0,1) 100%"
    },
    /*card7 l'homme 2.0*/
    {
        src: "/assets/imageCard/l'homme2.0t.png",
        title: "L'homme 2.0",
        desc: "L'homme du futur, aussi connecté qu'un réseau Wi-Fi, jongle entre réalité virtuelle et intelligence artificielle, comme un danseur de tango avec des robots. Sa maison ressemble plus à un vaisseau spatial qu'à un domicile terrestre, avec des gadgets futuristes à chaque coin. Sa nourriture est fabriquée en laboratoire, mais il rêve toujours de hamburgers volants et de pizzas téléportées. Ses conversations avec les drones et les androïdes sont ponctuées de blagues algorithmiques et de mèmes holographiques. Malgré le règne des machines, l'homme 2.0 reste maître de son destin, jonglant avec des lignes de code et des circuits électriques. Il a survécu à l'attaque des machines grâce à sa compréhension et maîtrise des langages informatiques. La première phrase qu'il apprit au robot fut :",
        quote: "caaavvvaaaa, t'inquiète frérot.",
        startcolor: " rgba(241,242,0,1) 0%", endcolor: " rgba(157,255,0,1) 100%"
    }]


arrayCard.forEach(cardInfo => {
    cards.innerHTML += card(cardInfo.src, cardInfo.title, cardInfo.desc, cardInfo.quote, cardInfo.startcolor, cardInfo.endcolor);

});



/*click caroussel-card*/
(function () {
    const prev = document.querySelector('#prev');
    const next = document.querySelector('#next');
    const $slides = document.querySelectorAll('.slide');
    // Initialisation du slide courant à 0
    let currentSlide = 0;
    // Fonction pour afficher un slide spécifique en utilisant un index
    function slideTo(index) {
        // Vérifie si l'index est valide (compris entre 0 et le nombre de slides - 1)
        currentSlide = index >= 5 || index < 1 ? 0 : index;
        // Boucle sur tous les éléments de type "slide" pour les déplacer
        $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
    }
    // Ajout d'un écouteur d'événement "click" sur le bouton "prev" pour afficher le slide précédent
    prev.addEventListener('click', () => slideTo(--currentSlide));
    // Ajout d'un écouteur d'événement "click" sur le bouton "next" pour afficher le slide suivant
    next.addEventListener('click', () => slideTo(++currentSlide));
})();

/*click caroussel-card*/
const carouselItems = document.querySelectorAll('.container .carousel .slide');

// Sélectionnez le premier élément de la carrousel pour l'afficher par défaut
document.querySelector('.card-container').style.display = 'block';

carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        document.querySelectorAll('.card-container').forEach(card => {
            card.style.display = 'none';
        });


        document.querySelectorAll('.card-container')[index].style.display = 'block';
    });
});


document.querySelectorAll('.card-container').forEach(card => {
    card.style.display = 'none';
});