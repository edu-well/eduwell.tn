const educationalResources = [
    {
        id: 1,
        title: "Mathématiques: Nombres Complexes",
        description: "Cours complet sur les nombres complexes avec exercices corrigés. Ce chapitre couvre les bases des nombres complexes, leur représentation géométrique et leurs applications en physique.",
        type: "course",
        subject: "Mathématiques",
        author: "Prof. Jean Dupont",
        date: "2023-05-15",
        keywords: ["complexes", "maths", "algèbre", "géométrie"],
        pdfs: [
            {
                title: "Chapitre 1: Introduction aux nombres complexes",
                url: "https://drive.google.com/file/d/1d9z3x8P2m7b0c1v2f3g4h5j6k7l8m9n0/preview"
            },
            {
                title: "Chapitre 2: Forme algébrique et géométrique",
                url: "https://drive.google.com/file/d/2e8y7x6P5m4b3c2v1f0g9h8j7k6l5m4n3/preview"
            }
        ],
        videos: [
            {
                title: "Vidéo explicative: Nombres complexes",
                url: "https://www.youtube.com/embed/VIDEO_ID_1"
            }
        ]
    },
    {
        id: 2,
        title: "Chimie: Acides et Bases",
        description: "Guide complet sur les réactions acide-base et calculs de pH. Ce manuel explique les théories de Brønsted-Lowry et d'Arrhenius, avec des exemples pratiques de calculs de pH.",
        type: "textbook",
        subject: "Chimie",
        author: "Dr. Marie Lambert",
        date: "2022-11-30",
        keywords: ["chimie", "acide", "base", "pH", "réaction"],
        pdfs: [
            {
                title: "Partie 1: Théorie des acides et bases",
                url: "https://drive.google.com/file/d/4g8y7x6P5m4b3c2v1f0g9h8j7k6l5m4n3/preview"
            }
        ],
        videos: [
            {
                title: "Cours vidéo: Les acides et bases",
                url: "https://www.youtube.com/embed/VIDEO_ID_2"
            }
        ]
    },
    {
        id: 3,
        title: "Calcul Intégral",
        description: "Méthodes et applications du calcul intégral avec exemples. Ce cours couvre les intégrales définies et indéfinies, le théorème fondamental du calcul et des applications en sciences.",
        type: "course",
        subject: "Mathématiques",
        author: "Prof. Sophie Martin",
        date: "2023-01-10",
        keywords: ["calcul", "intégral", "maths", "analyse"],
        pdfs: [
            {
                title: "Fiche de synthèse: Calcul intégral",
                url: "https://drive.google.com/file/d/6i0x9y8P7m6b5c4v3f2g1h0j9k8l7m6n5/preview"
            }
        ],
        videos: [
            {
                title: "Tutoriel: Calcul intégral",
                url: "https://www.youtube.com/embed/VIDEO_ID_3"
            }
        ]
    },
    {
        id: 5,
        title: "Physique: Mécanique Newtonienne",
        description: "Principes fondamentaux de la mécanique newtonienne avec exercices. Ce cours couvre les lois du mouvement de Newton, l'énergie et la quantité de mouvement.",
        type: "course",
        subject: "Physique",
        author: "Prof. Alain Newton",
        date: "2023-02-18",
        keywords: ["physique", "mécanique", "Newton", "cinématique"],
        pdfs: [
            {
                title: "Lois du mouvement de Newton",
                url: "https://drive.google.com/file/d/9l2x3y0P9m8b7c6v5f4g3h2j1k0l9m8n7/preview"
            }
        ],
        videos: [
            {
                title: "Démonstration: Lois de Newton",
                url: "https://www.youtube.com/embed/ts8H1-WLdiM?si=715wXYuRadYOLw6o"
            }
        ]
    },
    {
        id: 6,
        title: "Philosophie: Les Grands Courants",
        description: "Panorama des principaux courants philosophiques pour le Bac. Ce document couvre le rationalisme, l'empirisme, l'existentialisme et d'autres mouvements majeurs.",
        type: "guide",
        subject: "Philosophie",
        author: "Dr. Simone Philosophe",
        date: "2023-04-05",
        keywords: ["philosophie", "courants", "bac", "pensée"],
        pdfs: [
            {
                title: "Fiche de révision: Courants philosophiques",
                url: "https://drive.google.com/file/d/0m1x2y9P8n7b6c5v4f3g2h1j0k9l8m7n6/preview"
            }
        ]
    },
    {
        id: 7,
        title: "Physique : Devoir de contrôle 1 avec Correction",
        description: "Devoirs de controle en physique avec corrections pour les années 2012 à 2021. Couvre les principaux sujets du programme de physique.",
        type: "devoir contrôle",
        subject: "Physique",
        author: "Direction régionale de Ben Arous",
        date: "2025-05-15",
        keywords: ["physique", "devoir", "controle", "correction", "bac"],
        pdfs: [
            {
                title: "Physique Devoir de controle 1- 2012 (Enonce)",
                url: "https://drive.google.com/file/d/1KVDD17gomxMD20w_NtaD0B7MP-a880Oq/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2012 (Correction)",
                url: "https://drive.google.com/file/d/1JAi-qrHN6aZnughOZt7GM9V-4A0JDtAO/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2014 (Enonce)",
                url: "https://drive.google.com/file/d/1XJqZZV6XCGzu7mEa4r4wtarnJhR579yc/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2014 (Correction)",
                url: "https://drive.google.com/file/d/1-Xzf-BZ2Ec_bvGp2SBU6AcfU_4XexjgP/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2015 (Enonce)",
                url: "https://drive.google.com/file/d/13t2dXMP08jtqF-GJWu1-IfbE7sZQVsRM/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2015 (Correction)",
                url: "https://drive.google.com/file/d/1n6KQ35ZAVip2uf3GDVOAt6uq3GaeFVgH/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2016 (Enonce)",
                url: "https://drive.google.com/file/d/1-jXEXFwntDvKswrTgPfYfG30iJIcXLwC/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2016 (Correction)",
                url: "https://drive.google.com/file/d/1xmoiMmJ424gFLy4Q7B6CJDHVjWdM2eEp/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2017 (Enonce)",
                url: "https://drive.google.com/file/d/177NpDsNZHbjSDYejTMEtxGLYHOWqWJvj/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2017 (Correction)",
                url: "https://drive.google.com/file/d/1jmY9iBETiDBapr7mhAvNjdG_JutftqF2/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2018 (Enonce)",
                url: "https://drive.google.com/file/d/1bUCHUEqiYBRogDE5DBiHxVhJe5mKBlId/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2018 (Correction)",
                url: "https://drive.google.com/file/d/1B-yokSZ_OP_kdemFz3nh1-wKcTHZvxNJ/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2019 (Enonce)",
                url: "https://drive.google.com/file/d/1RUIEahG0yigKUsZXQ2U8ojJFneuQdnx0/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2019 (Correction)",
                url: "https://drive.google.com/file/d/11Rj2rvcX7_rt2XlfOE4QNGa1mpwzf69M/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2020 (Enonce)",
                url: "https://drive.google.com/file/d/1KVDD17gomxMD20w_NtaD0B7MP-a880Oq/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2020 (Correction)",
                url: "https://drive.google.com/file/d/1lP-JLkHzXxOiTQezoBjb-eYe01m1VIQ/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2021 (Enonce)",
                url: "https://drive.google.com/file/d/1LL2ilCD2zezZcEec5eeOLFb1f7K1RBT6/preview"
            },
            {
                title: "Physique Devoir de controle 1- 2021 (Correction)",
                url: "https://drive.google.com/file/d/1x8XJWJqaNMhlhQKZqLjqXZCeZa0sXNis/preview"
            }
        ]
    },
    {
        id: 14,
        title: "Reproduction masculine: cours + exercices",
        description: "Chapitre 1: Reproduction humaine - Reproduction chez l'homme",
        type: "cours + exercices",
        subject: "SVT",
        author: "Drive Unknown",
        date: "2025-05-15",
        keywords: ["svt", "bac", "cours", "homme", "scientifique", "reproduction"],
        pdfs: [
            {
                title: "Cours: Reproduction masculine",
                url: "https://drive.google.com/file/d/1i0w_xrMaDMcrLq9T0Dv5y1rR-ad2IbTZ/preview"
            },
            {
                title: "Série d'exercices: Analyse N1",
                url: "https://drive.google.com/file/d/1mbBOIsSl8neiFws2pDHCJ6J9FiR-52OR/preview"
            },
            {
                title: "QCM: Reproduction masculine",
                url: "https://drive.google.com/file/d/1fHN3xxc4vpehh_-VPAW_M3ZmFGaRtABH/preview"
            }
        ]
    },
    {
        id: 20,
        title: "COURS GÉNÉTIQUE HUMAINE Avec Exercices",
        description: "Cours approfondi sur la génétique humaine et les maladies héréditaires. Ce document couvre les lois de Mendel, les chromosomes et les maladies génétiques courantes. Transmission des maladies héréditaires et diagnostic prénatal",
        type: "cours + exercices",
        subject: "SVT",
        author: "Lycée Pilote",
        date: "2025-05-15",
        keywords: ["genetique humaine", "svt", "diagnostic prénatal", "bac", "bac svt", "genetique"],
        pdfs: [
            {
                title: "Cours: Génétique humaine",
                url: "https://drive.google.com/file/d/1mPj7tgMVH6EWxNrlYbgPgTK7QQLtOM4o/preview"
            },
            {
                title: "Exercice d'analyse: Génétique humaine",
                url: "https://drive.google.com/file/d/10L3rHtvMSXK9fvDvvgONNiafnoRZGhUU/preview"
            }
        ]
    },
    {
        id: 27,
        title: "Neurophysiologie: Exercices message nerveux",
        description: "Séries standard avec correction",
        type: "exercices",
        subject: "SVT",
        author: "Taki",
        date: "2025-05-15",
        keywords: ["neuro", "neurophysiologie", "svt", "bac sc", "message nerveux"],
        pdfs: [
            {
                title: "Série 1: Message nerveux",
                url: "https://drive.google.com/file/d/1QZvwRyvi1_-QdM_ONq_FR_EpniLz9cYH/preview"
            },
            {
                title: "Correction Série 1",
                url: "https://drive.google.com/file/d/18Jr6Uh1ap4H72R_QrCxuzkzgPHaE7P8x/preview"
            },
            {
                title: "Série 2: Message nerveux",
                url: "https://drive.google.com/file/d/1W91fXK4QBYWwLt_-56DC7nNeN3WApHKr/preview"
            },
            {
                title: "Correction Série 2",
                url: "https://drive.google.com/file/d/1A7iW2V8Jq8I0SRV-sQjywI7LF9jhKbmz/preview"
            },
            {
                title: "Série 3: Message nerveux",
                url: "https://drive.google.com/file/d/1PrVWIx03Ks0SldbmNmyGYCUgkYtZ_I8R/preview"
            },
            {
                title: "Correction Série 3",
                url: "https://drive.google.com/file/d/1NXxoCyzqNxiACgKjhw0J2z_zfVSj689U/preview"
            },
            {
                title: "Série 4: Message nerveux",
                url: "https://drive.google.com/file/d/1YKPmwXde3uX6IUfURArz2iTsHi9cQvLL/preview"
            },
            {
                title: "Correction Série 4",
                url: "https://drive.google.com/file/d/1zSksbk9iIVCliWhbuNWkckVn8bSXpjmU/preview"
            },
            {
                title: "Série 5: Message nerveux",
                url: "https://drive.google.com/file/d/1GkLFm85fzhhovvl-8kQ0Am_eYR-3B38z/preview"
            },
            {
                title: "Correction Série 5",
                url: "https://drive.google.com/file/d/1KbCbxMpbtC5Wkua7zvT3em50M1-taMxu/preview"
            },
            {
                title: "Série 6: Message nerveux",
                url: "https://drive.google.com/file/d/1DXcPw-F-Bpjy5Fqcs1K9yPx5qXyFz9py/preview"
            },
            {
                title: "Correction Série 6",
                url: "https://drive.google.com/file/d/1380Vm1cvqLQQNmbLZyFYIRO0Fd62jR4l/preview"
            }
        ]
    },
    {
        id: 41,
        title: "Limites et Continuité",
        description: "Chapitre fondamental en analyse mathématique couvrant les concepts de limites et de continuité des fonctions. Ce module propose des exercices progressifs avec corrections détaillées pour maîtriser les techniques de calcul de limites, l'étude de la continuité, et les applications aux problèmes réels. Idéal pour la préparation au Baccalauréat.",
        type: "exercises",
        subject: "Mathématiques",
        author: "Taki",
        date: "2023-06-20",
        keywords: ["math", "bac", "limites", "continuité", "analyse"],
        pdfs: [
            {
                title: "Série 1: Limites et Continuité",
                url: "https://drive.google.com/file/d/1WmNDqH9KfUF21TpwIBy7VXgwWTmiuBeY/preview"
            },
            {
                title: "Correction Série 1 - Partie 1",
                url: "https://drive.google.com/file/d/1YuY8WBMvl-WKbGya9Nn30ry28jEZKyRi/preview"
            },
            {
                title: "Correction Série 1 - Partie 2",
                url: "https://drive.google.com/file/d/19F4k1Z6Jlqdrv3Ut69rxuQih2k67QRlg/preview"
            },
            {
                title: "Série 2: Limites et Continuité",
                url: "https://drive.google.com/file/d/1RXOimkTEgwE0sNz9DYwf5H8RHY-Xd4D9/preview"
            },
            {
                title: "Correction Série 2 - Partie 1",
                url: "https://drive.google.com/file/d/1pgcErZ3BmBWtpAwbSiCfZu0mgqt7xzoK/preview"
            },
            {
                title: "Méthodes de Correction",
                url: "https://drive.google.com/file/d/1attGtl3YN2k01LpHKUkV-QNqzFgGY-Pu/preview"
            }
        ]
    },
    {
        id: 42,
        title: "Dérivabilité",
        description: "Série d'exercices complets sur la dérivation des fonctions, couvrant les techniques de base et les cas complexes. Ce chapitre aborde la dérivabilité en un point, les fonctions dérivées, et les applications pratiques. Parfait pour la préparation aux examens du Baccalauréat.",
        type: "exercises",
        subject: "Mathématiques",
        author: "Taki",
        date: "2023-07-15",
        keywords: ["math", "bac", "derivee", "derivabilite", "analyse"],
        pdfs: [
            {
                title: "Série 1: Dérivabilité",
                url: "https://drive.google.com/file/d/1qE051wdnTmDjCVwpSB0w1Ud0vAuKuMUp/preview"
            },
            {
                title: "Correction Partie 1",
                url: "https://drive.google.com/file/d/1AHAXN4wMt_VzpExcQXIiDKNflNFJQ-me/preview"
            },
            {
                title: "Correction Partie 2",
                url: "https://drive.google.com/file/d/10jXeQ0v75oUTGZx7PZ1952GuUynwOj80/preview"
            }
        ]
    },
    {
    "id": 43,
    "title": "Bijection",
    "description": "Série d'exercices approfondis sur les fonctions bijectives, couvrant les définitions, propriétés et applications en analyse. Ce chapitre inclut des problèmes variés pour maîtriser les bijections et leurs utilisations dans les équations. Idéal pour la préparation aux examens du Baccalauréat et concours.",
    "type": "exercises",
    "subject": "Mathématiques",
    "author": "Taki",
    "date": "2023-07-15",  // Default date (adjust if needed)
    "keywords": ["math", "bac", "bijection", "analyse"],
    "pdfs": [
        {
            "title": "Série 1: Bijection",
            "url": "https://drive.google.com/file/d/1a8dwPu-A5i88TPeh-vkshQy0rASMTApt/preview"
        },
        {
            "title": "Correction Série 1 - Partie 1",
            "url": "https://drive.google.com/file/d/1KmK_8aSsg7qUe85H1vtiL5_4ZQIMmT6N/preview"
        }
    ]
},
    {
        id: 15,
        title: "Reproduction féminine: cours + exercices",
        description: "Chapitre 2: Reproduction humaine - Reproduction chez la femme",
        type: "cours + exercices",
        subject: "SVT",
        author: "Drive Unknown",
        date: "2025-05-15",
        keywords: ["svt", "bac", "cours", "femme", "scientifique", "reproduction"],
        pdfs: [
            {
                title: "Cours: Reproduction féminine",
                url: "https://drive.google.com/file/d/1_OIANt2ZS1DP_SUCM8BhbJvaFWzSzy3r/preview"
            },
            {
                title: "Série d'exercices: Reproduction féminine",
                url: "https://drive.google.com/file/d/1o_4Ru8osl5ApRLMWNb43wIwMqjXqkWB4/preview"
            },
            {
                title: "QCM: Reproduction féminine",
                url: "https://drive.google.com/file/d/1QqdtVGAJCjEDaPMw_Gt6VFfYvFu0H26N/preview"
            }
        ]
    }
];
