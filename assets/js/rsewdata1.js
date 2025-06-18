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
        resources: [
            {
                type: "pdf",
                title: "Chapitre 1: Introduction aux nombres complexes",
                url: "https://drive.google.com/file/d/1d9z3x8P2m7b0c1v2f3g4h5j6k7l8m9n0/preview"
            },
            {
                type: "pdf",
                title: "Chapitre 2: Forme algébrique et géométrique",
                url: "https://drive.google.com/file/d/2e8y7x6P5m4b3c2v1f0g9h8j7k6l5m4n3/preview"
            },
            {
                type: "video",
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
        resources: [
            {
                type: "pdf",
                title: "Partie 1: Théorie des acides et bases",
                url: "https://drive.google.com/file/d/4g8y7x6P5m4b3c2v1f0g9h8j7k6l5m4n3/preview"
            },
            {
                type: "video",
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
        resources: [
            {
                type: "pdf",
                title: "Fiche de synthèse: Calcul intégral",
                url: "https://drive.google.com/file/d/6i0x9y8P7m6b5c4v3f2g1h0j9k8l7m6n5/preview"
            },
            {
                type: "video",
                title: "Tutoriel: Calcul intégral",
                url: "https://www.youtube.com/embed/VIDEO_ID_3"
            }
        ]
    },
    {
        id: 4,
        title: "Génétique Humaine",
        description: "Cours approfondi sur la génétique humaine et les maladies héréditaires. Ce document couvre les lois de Mendel, les chromosomes et les maladies génétiques courantes.",
        type: "course",
        subject: "Biologie",
        author: "Dr. Pierre Genet",
        date: "2023-03-22",
        keywords: ["génétique", "biologie", "ADN", "chromosomes", "Mendel"],
        resources: [
            {
                type: "pdf",
                title: "Chapitre 1: Bases de la génétique",
                url: "https://drive.google.com/file/d/7j1x2y9P8m7b6c5v4f3g2h1j0k9l8m7n6/preview"
            },
            {
                type: "pdf",
                title: "Chapitre 2: Transmission des caractères",
                url: "https://drive.google.com/file/d/8k2x3y0P9m8b7c6v5f4g3h2j1k0l9m8n7/preview"
            },
            {
                type: "video",
                title: "Conférence: Génétique humaine",
                url: "https://www.youtube.com/embed/VIDEO_ID_4"
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
        resources: [
            {
                type: "pdf",
                title: "Lois du mouvement de Newton",
                url: "https://drive.google.com/file/d/9l2x3y0P9m8b7c6v5f4g3h2j1k0l9m8n7/preview"
            },
            {
                type: "video",
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
        resources: [
            {
                type: "pdf",
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
        resources: [
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2012 (Enonce)",
                url: "https://drive.google.com/file/d/1KVDD17gomxMD20w_NtaD0B7MP-a880Oq/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2012 (Correction)",
                url: "https://drive.google.com/file/d/1JAi-qrHN6aZnughOZt7GM9V-4A0JDtAO/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2014 (Enonce)",
                url: "https://drive.google.com/file/d/1XJqZZV6XCGzu7mEa4r4wtarnJhR579yc/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2014 (Correction)",
                url: "https://drive.google.com/file/d/1-Xzf-BZ2Ec_bvGp2SBU6AcfU_4XexjgP/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2015 (Enonce)",
                url: "https://drive.google.com/file/d/13t2dXMP08jtqF-GJWu1-IfbE7sZQVsRM/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2015 (Correction)",
                url: "https://drive.google.com/file/d/1n6KQ35ZAVip2uf3GDVOAt6uq3GaeFVgH/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2016 (Enonce)",
                url: "https://drive.google.com/file/d/1-jXEXFwntDvKswrTgPfYfG30iJIcXLwC/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2016 (Correction)",
                url: "https://drive.google.com/file/d/1xmoiMmJ424gFLy4Q7B6CJDHVjWdM2eEp/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2017 (Enonce)",
                url: "https://drive.google.com/file/d/177NpDsNZHbjSDYejTMEtxGLYHOWqWJvj/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2017 (Correction)",
                url: "https://drive.google.com/file/d/1jmY9iBETiDBapr7mhAvNjdG_JutftqF2/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2018 (Enonce)",
                url: "https://drive.google.com/file/d/1bUCHUEqiYBRogDE5DBiHxVhJe5mKBlId/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2018 (Correction)",
                url: "https://drive.google.com/file/d/1B-yokSZ_OP_kdemFz3nh1-wKcTHZvxNJ/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2019 (Enonce)",
                url: "https://drive.google.com/file/d/1RUIEahG0yigKUsZXQ2U8ojJFneuQdnx0/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2019 (Correction)",
                url: "https://drive.google.com/file/d/11Rj2rvcX7_rt2XlfOE4QNGa1mpwzf69M/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2020 (Enonce)",
                url: "https://drive.google.com/file/d/1KVDD17gomxMD20w_NtaD0B7MP-a880Oq/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2020 (Correction)",
                url: "https://drive.google.com/file/d/1lP-JLkHzXxOiTQezoBjb-eYe01m1VIQ/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2021 (Enonce)",
                url: "https://drive.google.com/file/d/1LL2ilCD2zezZcEec5eeOLFb1f7K1RBT6/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 1- 2021 (Correction)",
                url: "https://drive.google.com/file/d/1x8XJWJqaNMhlhQKZqLjqXZCeZa0sXNis/preview"
            }
        ]
    },
    {
        id: 8,
        title: "Physique : Devoir de synthese 1 avec Correction",
        description: "Devoirs de synthese en physique avec corrections pour les années 2012 à 2021. Couvre les principaux sujets du programme de physique.",
        type: "devoir synthese",
        subject: "Physique",
        author: "Direction régionale de Ben Arous",
        date: "2025-05-15",
        keywords: ["physique", "devoir", "synthese", "correction", "bac"],
        resources: [
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2012 (Enonce)",
                url: "https://drive.google.com/file/d/15GLpeiQQU9SemH4oZ6rFtwTbo7LOHIJj/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2012 (Correction)",
                url: "https://drive.google.com/file/d/1FyrOqIVZrqq2clPSMqcRBQscSmC3zt9L/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2014 (Enonce)",
                url: "https://drive.google.com/file/d/1Q5Br4jGQb1T2drQwWQ37Bp0-GeifJoOA/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2014 (Correction)",
                url: "https://drive.google.com/file/d/167zpIWdoNOcOALbFB7v5eVk7yL9NmpPl/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2015 (Enonce)",
                url: "https://drive.google.com/file/d/17_OvMxT-yYAsXhPQK_n1N94aItOf38xc/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2015 (Correction)",
                url: "https://drive.google.com/file/d/1pq48xKUgDAlDTmUV2p-EADZbkcmkHm7B/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2020 (Enonce)",
                url: "https://drive.google.com/file/d/13gX-wa71RN5U4wDYQvf38omC-2zAO4Bt/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2020 (Correction)",
                url: "https://drive.google.com/file/d/1YiyAYu2oy_ZJXvrGGIvJZ87k6YJpSjPt/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2021 (Enonce)",
                url: "https://drive.google.com/file/d/17kCSdRD2dS8ZZfqDkzsGeqKDefDi92Pb/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 1- 2021 (Correction)",
                url: "https://drive.google.com/file/d/1mlAphNpgpbweaBDVFmyavoPB-intlRsr/preview"
            }
        ]
    },
    {
        id: 9,
        title: "Physique : Devoir de contrôle 2 avec Correction",
        description: "Devoirs de controle 2 en physique avec corrections pour les années 2012 à 2021. Couvre les principaux sujets du programme de physique.",
        type: "devoir contrôle",
        subject: "Physique",
        author: "Direction régionale de Ben Arous",
        date: "2025-05-15",
        keywords: ["physique", "devoir", "controle 2", "correction", "bac"],
        resources: [
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2013 (Enonce)",
                url: "https://drive.google.com/file/d/1SBQhJ8_xQIA64RgAon5Fdm1VeBfGrRKJ/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2013 (Correction)",
                url: "https://drive.google.com/file/d/1RXIOBy4Z8jUMiC9RWWdY7AxnkEVJBfS8/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2014 (Enonce)",
                url: "https://drive.google.com/file/d/1JM-1BEf-Yvy5VBg_bEgwyPtfwRrA2Vm4/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2014 (Correction)",
                url: "https://drive.google.com/file/d/189G2nCKHMrWd8XtPgFVIkzW5wtz8MBjJ/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2015 (Enonce)",
                url: "https://drive.google.com/file/d/1HRzHyOw6RNZ8AkaGZvgCtsIu8MVuWFue/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2015 (Correction)",
                url: "https://drive.google.com/file/d/1qmXCw098GMkTZL3tTrGHq--GlDy3impg/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2016 (Enonce)",
                url: "https://drive.google.com/file/d/1UY4niX9RO-0WrTYBCv6ofRItRZRXoy3E/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2016 (Correction)",
                url: "https://drive.google.com/file/d/1D29LRS92Eo3P_yIZxibnHCeKwsSDurzc/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2020 (Enonce)",
                url: "https://drive.google.com/file/d/1P--nuQq1yDDWSq889FUai_LazJwAiKWi/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2020 (Correction)",
                url: "https://drive.google.com/file/d/1lXWxp_fItM5oIznmN_GvEonaq5HpL7BU/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2021 (Enonce)",
                url: "https://drive.google.com/file/d/1JlFhm5EAS80b8hhkQgiAH0OIENnxZbN6/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2021 (Correction)",
                url: "https://drive.google.com/file/d/1f3ESSFIUictkxAHDwiQ7u2ZbY5yS_6I6/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2022 (Enonce)",
                url: "https://drive.google.com/file/d/1Cbe-LS6-XE35FkHLsbKKp-upoUkaBziX/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 2- 2022 (Correction)",
                url: "https://drive.google.com/file/d/1XX9TNmaBqA2tDbd3uL8VSD5DQ2dr3dLE/preview"
            }
        ]
    },
    {
        id: 10,
        title: "Physique : Devoir de synthese 2 avec Correction",
        description: "Devoirs de synthese 2 en physique avec corrections pour les années 2012 à 2021. Couvre les principaux sujets du programme de physique.",
        type: "devoir synthese",
        subject: "Physique",
        author: "Direction régionale de Ben Arous",
        date: "2025-05-15",
        keywords: ["physique", "devoir", "synthese 2", "correction", "bac"],
        resources: [
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2014 (Enonce)",
                url: "https://drive.google.com/file/d/1H3TfCE93Hx7WkMEvWd-yyXTQj1Cbk5Go/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2014 (Correction)",
                url: "https://drive.google.com/file/d/1HX41PzCx5KD6-0Gb9CrsBWdbqAeOT8HY/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2019 (Enonce)",
                url: "https://drive.google.com/file/d/1HBZ6tHZ3qq3v0N2GF-r4G8q5kgquvhXh/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2019 (Correction)",
                url: "https://drive.google.com/file/d/1HeZPKGx8yPDOa3STnge-J6_has-1kifI/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2020 (Enonce)",
                url: "https://drive.google.com/file/d/1HCYjBcLklzeaQD_ntRSR2799sVLm5uE8/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2020 (Correction)",
                url: "https://drive.google.com/file/d/1Hh_YaXi_Ma-f2srSWYMdfy4ubgrdxT0U/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2022 (Enonce)",
                url: "https://drive.google.com/file/d/1HKcmE8SxdPsq1ZdVQwBHEydW6o9IT5mu/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2022 (Correction)",
                url: "https://drive.google.com/file/d/1HjA_kt0kzUg_BBObucqUrn0_9jVfHdzw/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2023 (Enonce)",
                url: "https://drive.google.com/file/d/1HPYJtL4ixEzkNUaU-GAC97-IB7-VyYIs/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 2- 2024 (Correction)",
                url: "https://drive.google.com/file/d/1HksYx5zV-UO5cRhL56rFl8p7qpSaxR9b/preview"
            }
        ]
    },
    {
        id: 11,
        title: "Physique : Devoir de contrôle 3 avec Correction",
        description: "Devoirs de controle 3 en physique avec corrections pour les années 2012 à 2021. Couvre les principaux sujets du programme de physique.",
        type: "devoir contrôle",
        subject: "Physique",
        author: "Direction régionale de Ben Arous",
        date: "2025-05-15",
        keywords: ["physique", "devoir", "controle 3", "correction", "bac"],
        resources: [
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2013 (Enonce)",
                url: "https://drive.google.com/file/d/1HvErHezJ0vULfbs8rvH9jCbGM9W3x_cD/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2013 (Correction)",
                url: "https://drive.google.com/file/d/1IZtMQVWpxEOpPLWi5PTGd3vhX9H-2fVa/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2014 (Enonce)",
                url: "https://drive.google.com/file/d/1I2_cGo4iIma6TslLm56ccbnUuwiHLTnC/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2014 (Correction)",
                url: "https://drive.google.com/file/d/1I_e99AKk4lqeaF435TBqGVc9fTa4Bgbe/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2016 (Enonce)",
                url: "https://drive.google.com/file/d/1I80oy02KiZ4nV_bCXc2FWBVVDuWOcLh6/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2016 (Correction)",
                url: "https://drive.google.com/file/d/1IaND1Hk_6RPY38azfnYCSW9XeZJXkIpb/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2017 (Enonce)",
                url: "https://drive.google.com/file/d/1IDCoCO5gl17WwOEEfQqmoSQWvZcZsYXj/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2017 (Correction)",
                url: "https://drive.google.com/file/d/1IbO4l2KvUa-ss6idMCUtEXYy_EY8MWVm/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2018 (Enonce)",
                url: "https://drive.google.com/file/d/1IMRI3V9ZgyKGjLpw4AqBEsmrzM8Oc-r6/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2018 (Correction)",
                url: "https://drive.google.com/file/d/1IlvlpobHvoe-d62I8ZgQo6zJB0rv9l7p/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2019 (Enonce)",
                url: "https://drive.google.com/file/d/1IOOj3RyiL-taDCiDv458V7I_wBxovKkr/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2019 (Correction)",
                url: "https://drive.google.com/file/d/1IokuVIrgHpHOLeWqsYGK_kkt1w0wS6II/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2022 (Enonce)",
                url: "https://drive.google.com/file/d/1IRXSY3rf3aVmAUE382KpAR-Z427vHSuL/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2022 (Correction)",
                url: "https://drive.google.com/file/d/1IpiY6QifRJqi5Z5QWNs2BAzrTPCfq0F6/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2023 (Enonce)",
                url: "https://drive.google.com/file/d/1IXgHIVkpKiKSMCTb2oA5OXDGuN42z4qr/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de controle 3- 2023 (Correction)",
                url: "https://drive.google.com/file/d/1ItzCQwyHgxzisg8XeoMkDbB4sLgqCUlS/preview"
            }
        ]
    },
    {
        id: 12,
        title: "Physique : Devoir de synthese 3 avec Correction",
        description: "Devoirs de synthese 3 en physique avec corrections pour les années 2012 à 2021. Couvre les principaux sujets du programme de physique.",
        type: "devoir synthese",
        subject: "Physique",
        author: "Direction régionale de Ben Arous",
        date: "2025-05-15",
        keywords: ["physique", "devoir", "synthese 3", "correction", "bac"],
        resources: [
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2018 (Enonce)",
                url: "https://drive.google.com/file/d/1JMHz9_mR0ABUTgyHHvZ7AJlq0g796czz/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2018 (Correction)",
                url: "https://drive.google.com/file/d/1Jp5NquXTYppaRGEmCLeeX3bny7q33P6k/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2019 (Enonce)",
                url: "https://drive.google.com/file/d/1JSL155ADW9rayaPJ-dw-yXrlHBh1qPHm/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2019 (Correction)",
                url: "https://drive.google.com/file/d/1KCPta8rF7hQzFoNNiI6P5ffo1a3RjSiK/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2021 (Enonce)",
                url: "https://drive.google.com/file/d/1Jb6KxQqB_5-m69mb75fBTMKVL5qndUw2/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2021 (Correction)",
                url: "https://drive.google.com/file/d/1KHbuVHF9GwkhaN-f730MA-FujjEcIspU/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2022 (Enonce)",
                url: "https://drive.google.com/file/d/1JfD6Zwl_P_2A7FMf5xHcPF5bLmGDKb3D/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2022 (Correction)",
                url: "https://drive.google.com/file/d/1KIHD2Z-US75Mmafh0LhtWV0Tt8lGnHov/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2023 (Enonce)",
                url: "https://drive.google.com/file/d/1Jo-aFO0DxXu1at3RIQjrRzbLdoZTIHJ7/preview"
            },
            {
                type: "pdf",
                title: "Physique Devoir de synthese 3- 2023 (Correction)",
                url: "https://drive.google.com/file/d/1KKElH4Hwu-cpGIZhFK5S9B_gZxA5e-I6/preview"
            }
        ]
    },
    {
        id: 13,
        title: "Mathématiques : Géométrie dans l'espace",
        description: "Série d'exercices mathématiques géométrie dans l'espace bac scientifique Lycée Pilote Sfex",
        type: "série d'exercices",
        subject: "Mathématiques",
        author: "Lycée Pilote Sfex",
        date: "2025-05-15",
        keywords: ["math", "espace", "bac", "série", "exercices"],
        resources: [
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 1",
                url: "https://drive.google.com/file/d/18cSQi0Yjco-GUE-vy7XIVgJ8wRgWGi7r/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 2",
                url: "https://drive.google.com/file/d/1u_KLMuOZZSUMk9i3p-tAriGecu4opMG9/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 3",
                url: "https://drive.google.com/file/d/1xMgG1Ro_8ahI3S3RAjcU1ytWubDe2DKc/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 4",
                url: "https://drive.google.com/file/d/1cNpaw_t3CbSj86rFPkwlQwgXn8_XdMvJ/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 5",
                url: "https://drive.google.com/file/d/1ErrToglsbXsp4GKKrcNRdl04tb647265/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 6",
                url: "https://drive.google.com/file/d/1ivTF6sERuHLW4SwWuCKJCN5OBZmNYzje/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 7",
                url: "https://drive.google.com/file/d/11fSnc-UUYlqXPK5CP7iYn43qIatVYmtY/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 8",
                url: "https://drive.google.com/file/d/1iIaZs7eRNMVadCLf8LijuapbaAzvTmsM/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 9",
                url: "https://drive.google.com/file/d/1BLEYgrp28apG_YYJaxeQTBCIVNVCusVo/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 10",
                url: "https://drive.google.com/file/d/1Z0D9mjQrMPjbb8nY-FffiSLowg3apacC/preview"
            },
            {
                type: "pdf",
                title: "Géométrie dans l'espace Exercice 11",
                url: "https://drive.google.com/file/d/1Djuh0_LzLANQR-wbmhzVZ6THUxlePEqL/preview"
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
        resources: [
            {
                type: "pdf",
                title: "Cours: Reproduction masculine",
                url: "https://drive.google.com/file/d/1i0w_xrMaDMcrLq9T0Dv5y1rR-ad2IbTZ/preview"
            },
            {
                type: "pdf",
                title: "Série d'exercices: Analyse N1",
                url: "https://drive.google.com/file/d/1mbBOIsSl8neiFws2pDHCJ6J9FiR-52OR/preview"
            },
            {
                type: "pdf",
                title: "QCM: Reproduction masculine",
                url: "https://drive.google.com/file/d/1fHN3xxc4vpehh_-VPAW_M3ZmFGaRtABH/preview"
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
        resources: [
            {
                type: "pdf",
                title: "Cours: Reproduction féminine",
                url: "https://drive.google.com/file/d/1_OIANt2ZS1DP_SUCM8BhbJvaFWzSzy3r/preview"
            },
            {
                type: "pdf",
                title: "Série d'exercices: Reproduction féminine",
                url: "https://drive.google.com/file/d/1o_4Ru8osl5ApRLMWNb43wIwMqjXqkWB4/preview"
            },
            {
                type: "pdf",
                title: "QCM: Reproduction féminine",
                url: "https://drive.google.com/file/d/1QqdtVGAJCjEDaPMw_Gt6VFfYvFu0H26N/preview"
            }
        ]
    }
];