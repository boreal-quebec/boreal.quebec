
export const mainMenu = {
    "menu": [
        {
            "text": "Le bottin",
            "url": "/bottin",
            "type": "link"
        },
        {
            "text": "Les appels d’offres",
            "url": "/appels-offre",
            "type": "link"
        },
        {
            "text": "La plateforme",
            "type": "dropdown",
            "subMenu": {
                "à propos": "/a-propos",
                "avantages membres client": "/avantage-membre/client",
                "avantages membres restaurateur": "/avantage-membre/restaurateur",
                "abonnement membre restaurateur+": "",
                /*"verification de profil": "/verification"*/
            },
        },
        {
            "text": "Blog",
            "url": "/blog",
            "type": "link"
        }
    ]
};