import { Unit } from '../types';

export const UNITS_DATA: Unit[] = [
  // ==========================================
  // UNIT 01: FAMILY LIFE & INTERPERSONAL DYNAMICS
  // ==========================================
  {
    id: 1,
    number: '01',
    title: 'Family Life & Social Dynamics',
    frenchTitle: 'La vie de famille et relations intergénérationnelles',
    businessTheme: 'Interpersonal Dynamics, Team Conflict Resolution & Work-Life Balance',
    executiveSummary: 'Maîtrisez le lexique des structures familiales et sociales à Madagascar face à la modernité, l\'expression de l\'habitude, les quantificateurs avec OF, le refus catégorique (WON\'T) et la méthode managériale 3H (Head, Heart, Hands) pour arbitrer les conflits.',
    competenceVisee: 'Décrire les changements au sein du foyer/organisation et exprimer un point de vue constructif sur l\'éducation et la négociation.',
    methodiqueSpeciale: {
      name: 'La Méthode 3H (Head, Heart, Hands)',
      description: 'Technique officielle du MEN pour désamorcer et résoudre les conflits relationnels et managériaux de manière mature :',
      steps: [
        { name: 'HEAD (La Raison)', description: 'Analyser rationnellement la situation, les faits objectifs et les conséquences logiques.' },
        { name: 'HEART (L\'Empathie)', description: 'Exprimer ses sentiments sans agressivité, écouter activement et instaurer un dialogue bienveillant.' },
        { name: 'HANDS (L\'Action)', description: 'Proposer des actions concrètes, des compromis mesurables et des solutions pratiques.' }
      ]
    },
    keyVocabulary: [
      { term: 'Extended family', french: 'Famille élargie', example: 'In Madagascar, the extended family often acts as a mutual business support network.', businessApplication: 'Réseau de solidarité essentiel dans l\'entrepreneuriat communautaire malgache.' },
      { term: 'Nuclear family', french: 'Famille nucléaire', example: 'Modern urban lifestyles encourage more nuclear family setups in Antananarivo.', businessApplication: 'Sociologie des consommateurs et cibles marketing urbaines.' },
      { term: 'Open-minded', french: 'Esprit ouvert', example: 'An open-minded executive readily welcomes cross-generational innovation.', businessApplication: 'Compétence clé du leadership moderne et de l\'intelligence émotionnelle.' },
      { term: 'Narrow-minded', french: 'Esprit fermé / rétrograde', example: 'A narrow-minded manager resists flexible working arrangements.', businessApplication: 'Comportement bloquant dans la transformation organisationnelle.' },
      { term: 'Household chores', french: 'Corvées ménagères / tâches domestiques', example: 'Balancing household chores and remote work requires strict time management.', businessApplication: 'Enjeu de la productivité et de l\'équilibre vie pro / vie perso.' },
      { term: 'Curfew', french: 'Heure de rentrée / couvre-feu', example: 'Setting a fair curfew helps build trust between parents and teenagers.', businessApplication: 'Cadre de règles et délimitations claires.' }
    ],
    grammarPoints: [
      {
        title: 'Quantificateurs avec « OF »',
        formula: 'Quantifier + OF + Determinant (the / my / these) + Plural Noun',
        frenchSummary: 'Utilisé devant un déterminant et un nom pluriel pour isoler une fraction d\'un groupe.',
        officialBacRule: '« Three of my brothers... », « Most of the employees... », « None of the proposals... »',
        examples: [
          { english: 'Two of our senior partners endorsed the agreement.', french: 'Deux de nos associés seniors ont approuvé l\'accord.' },
          { english: 'All of my cousins respect traditional Malagasy values.', french: 'Tous mes cousins respectent les valeurs traditionnelles malgaches.' }
        ],
        commonTrap: 'Ne pas oublier le déterminant après "OF" (ne dites pas "three of brothers", dites "three of my brothers").'
      },
      {
        title: '« WON\'T » pour exprimer le refus catégorique',
        formula: 'Subject + WON\'T (will not) + Base Verb',
        frenchSummary: 'Exprime un refus obstiné ou catégorique au présent (et non pas une simple prédiction future).',
        officialBacRule: '« He won\'t listen to me » = Il refuse obstinément de m\'écouter.',
        examples: [
          { english: 'The client won\'t accept our payment terms.', french: 'Le client refuse catégoriquement d\'accepter nos conditions de paiement.' },
          { english: 'My younger brother won\'t clean his room.', french: 'Mon petit frère refuse obstinément de ranger sa chambre.' }
        ],
        commonTrap: 'Confondre won\'t (refus au présent) et un simple futur de probabilité.'
      },
      {
        title: '« ALWAYS / NEVER » + Forme en -ING (Agacement)',
        formula: 'Subject + BE + ALWAYS + V-ing',
        frenchSummary: 'Pour exprimer l\'agacement face à une habitude répétée jugée pénible.',
        officialBacRule: '« He is always complaining about his workload! »',
        examples: [
          { english: 'They are always interrupting during budget presentations.', french: 'Ils n\'arrêtent pas d\'interrompre pendant les présentations budgétaires.' },
          { english: 'You are always forgetting your security badge.', french: 'Tu oublies constamment ton badge de sécurité.' }
        ],
        commonTrap: 'N\'utilisez pas le Present Simple si vous voulez marquer l\'exaspération.'
      },
      {
        title: 'Structure Causative « MAKE + Adjectif »',
        formula: 'Subject + MAKE + Object + Adjective',
        frenchSummary: 'Rendre quelqu\'un ou quelque chose + adjectif.',
        officialBacRule: '« His academic success makes his parents proud. »',
        examples: [
          { english: 'Clear corporate guidelines make our workflow efficient.', french: 'Des directives claires rendent notre flux de travail efficace.' }
        ],
        commonTrap: 'Ne pas ajouter "to" après make dans ce cas.'
      }
    ],
    examPractice: [
      {
        type: 'Grammar Check — Quantificateurs',
        instruction: 'Choisissez la structure correcte :',
        prompt: '_______ my colleagues agreed to participate in the mentoring session.',
        correctAnswer: 'Four of',
        detailedExplanation: 'Devant un déterminant possessif ("my"), on emploie le quantificateur suivi de "of" : Four of my colleagues.'
      },
      {
        type: 'Transformation de Phrase — Refus',
        instruction: 'Réécrivez en utilisant « won\'t » pour exprimer le refus :',
        prompt: 'He stubbornly refuses to discuss the new family budget.',
        correctAnswer: 'He won\'t discuss the new family budget.',
        detailedExplanation: 'Au présent, « refuses to + V » se remplace par « won\'t + base verbale » pour signifier le refus catégorique.'
      }
    ],
    lessons: [
      {
        id: 'u1-l1',
        unitId: 1,
        title: 'Vocabulaire : Structures & Valeurs',
        description: 'Maîtriser les typologies familiales et les adjectifs de tempérament en contexte professionnel.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u1-e1',
            type: 'multiple_choice',
            question: 'How do you call a family unit comprising grandparents, aunts, uncles and cousins living closely?',
            options: ['Nuclear family', 'Extended family', 'Single-parent family', 'Blended family'],
            correctAnswer: 'Extended family',
            explanation: 'Dans le référentiel officiel, "Extended family" désigne la famille élargie très répandue à Madagascar.',
            audioText: 'In Madagascar, the extended family plays a crucial socioeconomic role.'
          },
          {
            id: 'u1-e2',
            type: 'sentence_builder',
            question: 'Reconstituez la phrase sur l\'ouverture d\'esprit d\'un dirigeant :',
            initialWords: ['An', 'open-minded', 'manager', 'welcomes', 'innovative', 'ideas'],
            correctAnswer: 'An open-minded manager welcomes innovative ideas',
            explanation: '"Open-minded" est l\'adjectif valorisé par le programme pour désigner l\'esprit ouvert et réceptif.',
            audioText: 'An open-minded manager welcomes innovative ideas.'
          },
          {
            id: 'u1-e3',
            type: 'fill_blank',
            question: 'Complete with the right term for household tasks: "Balancing career goals and household ________ requires strict discipline."',
            options: ['chores', 'curfews', 'debates', 'manners'],
            correctAnswer: 'chores',
            explanation: '« Household chores » correspond aux corvées ménagères au programme.',
            audioText: 'Balancing career goals and household chores requires strict discipline.'
          }
        ]
      },
      {
        id: 'u1-l2',
        unitId: 1,
        title: 'Grammaire : Refus catégorique & Quantificateurs',
        description: 'Exprimer le refus catégorique avec WON\'T et quantifier avec OF.',
        xpReward: 30,
        category: 'grammar',
        exercises: [
          {
            id: 'u1-e4',
            type: 'multiple_choice',
            question: 'Choose the correct sentence to express an obstinate refusal:',
            options: [
              'He won\'t sign the amended contract.',
              'He isn\'t signing usually.',
              'He shouldn\'t have sign.',
              'He had sign.'
            ],
            correctAnswer: 'He won\'t sign the amended contract.',
            explanation: '« WON\'T + base verbale » traduit le refus catégorique au présent conforme au référentiel (« He won\'t listen to me »).',
            audioText: 'He won\'t sign the amended contract.'
          },
          {
            id: 'u1-e5',
            type: 'fill_blank',
            question: 'Complete with the rule: "Two ________ my closest associates supported the initiative."',
            options: ['of', 'from', 'with', 'about'],
            correctAnswer: 'of',
            explanation: 'Règle du MEN : Quantificateur + OF + déterminant + nom pluriel (« Two of my... »).',
            audioText: 'Two of my closest associates supported the initiative.'
          },
          {
            id: 'u1-e6',
            type: 'error_hunter',
            question: 'Identify the irritated habit formulation: "He is always ________ about project deadlines."',
            options: ['complained', 'complaining', 'complain', 'to complain'],
            correctAnswer: 'complaining',
            explanation: 'La structure « BE + ALWAYS + V-ing » exprime l\'agacement face à une habitude pénible.',
            audioText: 'He is always complaining about project deadlines.'
          }
        ]
      },
      {
        id: 'u1-l3',
        unitId: 1,
        title: 'Cas Business & Bac : La Méthode 3H',
        description: 'Résolution de conflit d\'équipe selon la méthode Head, Heart, Hands.',
        xpReward: 35,
        category: 'business_case',
        exercises: [
          {
            id: 'u1-e7',
            type: 'multiple_choice',
            question: 'According to the official 3H method, what does "HEAD" represent when resolving a dispute?',
            options: [
              'Analyzing the facts rationally and looking at logical consequences',
              'Giving orders strictly without listening',
              'Agreeing to everything emotionally',
              'Working with your bare hands immediately'
            ],
            correctAnswer: 'Analyzing the facts rationally and looking at logical consequences',
            explanation: 'HEAD = Analyser rationnellement la situation et les conséquences logiques.',
            audioText: 'The Head phase focuses on rational analysis and objective facts.'
          },
          {
            id: 'u1-e8',
            type: 'sentence_builder',
            question: 'Reconstituez l\'étape "HANDS" (action concrète) :',
            initialWords: ['We', 'must', 'propose', 'concrete', 'and', 'actionable', 'solutions'],
            correctAnswer: 'We must propose concrete and actionable solutions',
            explanation: 'HANDS = Proposer des actions concrètes et des solutions pratiques.',
            audioText: 'We must propose concrete and actionable solutions.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 02: SCHOOL LIFE & EDUCATIONAL REALITIES
  // ==========================================
  {
    id: 2,
    number: '02',
    title: 'School Life & Professional Training',
    frenchTitle: 'La vie scolaire et formation d\'excellence',
    businessTheme: 'Corporate Onboarding, Academic Rigor & Contrast Structures',
    executiveSummary: 'Comparez les cycles scolaires malgaches (CEPE, BEPC, Bac L/S/OSE) et internationaux. Maîtrisez les superlatifs complexes, les structures suivies du gérondif (spend time, have a hard time), TO BE vs TO GET, WHO vs THAT, et les connecteurs de contraste indispensables au Bac (Both... and, Neither... nor, Unlike).',
    competenceVisee: 'Participer à un débat sur le règlement intérieur, structurer une argumentation comparative et gérer son temps professionnellement.',
    keyVocabulary: [
      { term: 'Academic achievement', french: 'Réussite scolaire / académique', example: 'Academic achievement paves the way for corporate leadership.', businessApplication: 'Indicateur de compétence et rigueur intellectuelle.' },
      { term: 'Respect of common goods', french: 'Respect des biens communs', example: 'Respect of common goods is essential in shared office environments.', businessApplication: 'Éthique professionnelle et responsabilité sociétale (RSE).' },
      { term: 'Relieved', french: 'Soulagé', example: 'The executive felt relieved after presenting the audit successfully.', businessApplication: 'Gestion du stress lors des jalons cruciaux.' },
      { term: 'Confused', french: 'Perdu / désorienté', example: 'New recruits might feel confused without an onboarding checklist.', businessApplication: 'Nécessité de clarté dans la délégation des tâches.' }
    ],
    grammarPoints: [
      {
        title: 'Structures suivies du Gérondif (-ING)',
        formula: 'have fun / spend time / have a hard time + V-ing',
        frenchSummary: 'Certaines expressions exigent obligatoirement le verbe en -ing (et non l\'infinitif).',
        officialBacRule: '« to spend a lot of time + V-ing », « to have a hard time / difficulty + V-ing »',
        examples: [
          { english: 'I spend a lot of time studying for the scientific exams.', french: 'Je passe beaucoup de temps à réviser pour les examens scientifiques.' },
          { english: 'He has a hard time understanding complex balance sheets.', french: 'Il a beaucoup de mal à comprendre les bilans comptables complexes.' }
        ],
        commonTrap: 'Ne jamais utiliser "to + infinitif" après "have a hard time" (Dites "have a hard time understanding", PAS "to understand").'
      },
      {
        title: '« TO BE » vs « TO GET » + Adjectif',
        formula: 'TO BE + Adj (état statique) vs TO GET + Adj (transition dynamique)',
        frenchSummary: 'TO BE décrit un état à un instant T ; TO GET traduit un changement d\'état causé par une situation.',
        officialBacRule: '« I am tired » (Je suis fatigué) vs « I get tired after 3 hours » (Je deviens fatigué).',
        examples: [
          { english: 'The trainees get bored when the lecture lacks interactive exercises.', french: 'Les stagiaires s\'ennuient quand le cours manque d\'exercices interactifs.' }
        ],
        commonTrap: 'Utiliser "to be" quand on veut insister sur la transformation ou l\'évolution.'
      },
      {
        title: 'Connecteurs de Contraste (Bac Focus)',
        formula: 'Both... and... | Neither... nor... | Unlike + Noun',
        frenchSummary: 'Structures indispensables pour comparer des systèmes éducatifs ou des offres d\'entreprises.',
        officialBacRule: '« Unlike private schools, public lycées... », « Neither the manager nor the director... »',
        examples: [
          { english: 'Both rigorous discipline and modern tools are needed.', french: 'À la fois une discipline rigoureuse et des outils modernes sont nécessaires.' },
          { english: 'Unlike traditional training, digital platforms offer 24/7 access.', french: 'Contrairement à la formation traditionnelle, les plateformes numériques offrent un accès 24/7.' }
        ],
        commonTrap: 'L\'accord du verbe avec "Neither... nor" se fait avec le sujet le plus proche.'
      },
      {
        title: 'Gestion du temps (Bell Schedule)',
        formula: 'AT (heure exacte) | IN (durée avant un événement) | ON TIME (à l\'heure)',
        frenchSummary: 'AT 8:00 AM, IN 10 minutes, TO BE ON TIME.',
        officialBacRule: '« My class starts at 8:00 am. The bell rings in 10 minutes. »',
        examples: [
          { english: 'The executive board meets at 9:00 AM sharp.', french: 'Le conseil de direction se réunit à 9h00 précises.' }
        ],
        commonTrap: 'Confondre "in time" (juste à temps avec de la marge) et "on time" (ponctuel, à l\'heure exacte prévue).'
      }
    ],
    examPractice: [
      {
        type: 'Grammar Check — Gérondif vs Infinitif (Bac 2026)',
        instruction: 'Complétez avec la bonne forme du verbe :',
        prompt: 'In my lycée, I spend a lot of time (study) ________ for the scientific exams.',
        correctAnswer: 'studying',
        detailedExplanation: 'La structure « to spend time + V-ing » exige systématiquement le gérondif.'
      },
      {
        type: 'Grammar Check — Compréhension',
        instruction: 'Complétez avec le verbe :',
        prompt: 'Honestly, I have a very hard time (understand) ________ this mathematics lesson.',
        correctAnswer: 'understanding',
        detailedExplanation: '« to have a hard time + V-ing » demande la forme en -ing.'
      }
    ],
    lessons: [
      {
        id: 'u2-l1',
        unitId: 2,
        title: 'Vocabulaire : Système éducatif & Valeurs',
        description: 'Les cycles malgaches, les matières et les valeurs institutionnelles.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u2-e1',
            type: 'multiple_choice',
            question: 'What is the Malagasy diploma obtained at the end of Secondary School (Collège / CEG)?',
            options: ['BEPC', 'CEPE', 'Baccalaureate', 'Licence'],
            correctAnswer: 'BEPC',
            explanation: 'Selon le document officiel MEN : Primary school = CEPE, Secondary school (Collège) = BEPC, Lycée = Baccalauréat.',
            audioText: 'In Madagascar, secondary school leads to the BEPC certificate.'
          },
          {
            id: 'u2-e2',
            type: 'sentence_builder',
            question: 'Reconstituez la phrase sur le respect des biens collectifs :',
            initialWords: ['Students', 'must', 'ensure', 'respect', 'of', 'common', 'goods'],
            correctAnswer: 'Students must ensure respect of common goods',
            explanation: '« Respect of common goods » est une valeur civique clé inscrite au curriculum.',
            audioText: 'Students must ensure respect of common goods.'
          }
        ]
      },
      {
        id: 'u2-l2',
        unitId: 2,
        title: 'Grammaire : Gérondif, Superlatifs & Contraste',
        description: 'Maîtriser "spend time V-ing", superlatifs et les paires "Both/Neither".',
        xpReward: 30,
        category: 'grammar',
        exercises: [
          {
            id: 'u2-e3',
            type: 'fill_blank',
            question: 'Complete: "He spent three hours (prepare) ________ the executive presentation."',
            options: ['preparing', 'to prepare', 'prepared', 'prepare'],
            correctAnswer: 'preparing',
            explanation: 'Règle stricte du MEN : spend time + V-ing.',
            audioText: 'He spent three hours preparing the executive presentation.'
          },
          {
            id: 'u2-e4',
            type: 'multiple_choice',
            question: 'Select the sentence with proper contrast connector:',
            options: [
              'Unlike traditional methods, modern digital courses allow self-paced study.',
              'Unlike of traditional methods, modern courses allow self-paced study.',
              'Dislike traditional methods, modern courses allow self-paced study.',
              'Without unlike traditional methods, modern courses allow self-paced study.'
            ],
            correctAnswer: 'Unlike traditional methods, modern digital courses allow self-paced study.',
            explanation: '« Unlike + Nom » permet de marquer un contraste élégant ("Contrairement à...").',
            audioText: 'Unlike traditional methods, modern digital courses allow self-paced study.'
          },
          {
            id: 'u2-e5',
            type: 'multiple_choice',
            question: 'Choose between TO BE and TO GET: "When the conference is too long, the attendees ________ exhausted."',
            options: ['get', 'are being always', 'to be', 'were getting static'],
            correctAnswer: 'get',
            explanation: 'TO GET traduit le changement d\'état provoqué par une cause externe (la longueur de la conférence).',
            audioText: 'When the conference is too long, the attendees get exhausted.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 03: SPORTS AND LEISURE
  // ==========================================
  {
    id: 3,
    number: '03',
    title: 'Sports, Leisure & Executive Wellness',
    frenchTitle: 'Sports, loisirs et bien-être physique et mental',
    businessTheme: 'Corporate Wellness, Work-Life Balance & Team Sportsmanship',
    executiveSummary: 'Enrichissez votre lexique pour dépasser le basique "I like / I don\'t like" avec "keen on" et "fond of". Maîtrisez le piège majeur du Bac : adjectifs en -ED vs -ING, les gérondifs comme sujets, et les formulations de suggestions exécutives (Why don\'t we / Let\'s).',
    competenceVisee: 'Rédiger le profil d\'un athlète ou argumenter avec aisance sur les bienfaits de l\'activité sportive en entreprise et à l\'école.',
    keyVocabulary: [
      { term: 'To be keen on + V-ing', french: 'Être passionné / très intéressé par', example: 'Our CEO is keen on sponsoring local athletic youth tournaments.', businessApplication: 'Expression de haut niveau pour décrire des centres d\'intérêt professionnels.' },
      { term: 'To be fond of + V-ing', french: 'Aimer beaucoup / avoir de l\'affection pour', example: 'She is fond of hiking across Madagascar\'s national parks.', businessApplication: 'Description authentique et naturelle des activités récréatives.' },
      { term: 'Rewarding', french: 'Gratifiant / enrichissant', example: 'Mentoring younger colleagues is a deeply rewarding experience.', businessApplication: 'Qualification des projets à forte valeur humaine.' },
      { term: 'Fair-play', french: 'Esprit sportif / équité', example: 'Fair-play in competition reflects business integrity.', businessApplication: 'Fondement de l\'éthique des affaires et du respect des concurrents.' }
    ],
    grammarPoints: [
      {
        title: 'Piège du Bac : Adjectifs en -ED vs -ING',
        formula: '-ED (ce que la personne ressent) vs -ING (la nature / cause externe)',
        frenchSummary: '-ED décrit l\'état émotionnel interne. -ING qualifie la source externe qui produit ce sentiment.',
        officialBacRule: '« I am bored / tired / interested » VS « This match is boring / tiring / interesting »',
        examples: [
          { english: 'The athletes feel completely tired after the marathon.', french: 'Les athlètes se sentent complètement épuisés après le marathon.' },
          { english: 'Running across the hills is very tiring.', french: 'Courir à travers les collines est très fatigant.' }
        ],
        commonTrap: 'Dire "I am boring" (signifie "Je suis ennuyeux/assommant") au lieu de "I am bored" ("Je m\'ennuie").'
      },
      {
        title: 'Gérondif Sujet vs Structure Impersonnelle « IT »',
        formula: 'V-ing + IS + Adj   <=>   IT IS + Adj + TO + Verb',
        frenchSummary: 'Deux manières rigoureusement équivalentes d\'exprimer une vérité générale.',
        officialBacRule: '« Playing chess is difficult » <=> « It is difficult to play chess. »',
        examples: [
          { english: 'Managing international teams is rewarding.', french: 'Gérer des équipes internationales est enrichissant.' },
          { english: 'It is rewarding to manage international teams.', french: 'Il est enrichissant de gérer des équipes internationales.' }
        ],
        commonTrap: 'Exercice récurrent au Baccalauréat : transformation d\'une structure impersonnelle en gérondif sujet.'
      },
      {
        title: 'Faire des Suggestions Professionnelles',
        formula: 'Why don\'t we + Base Verb ?  |  Let\'s + Base Verb',
        frenchSummary: 'Pour proposer une initiative ou une session d\'équipe de manière proactive.',
        officialBacRule: '« Why don\'t we meet up after class? Let\'s play rugby together! »',
        examples: [
          { english: 'Why don\'t we organize a wellness workshop next Friday?', french: 'Pourquoi n\'organiserions-nous pas un atelier bien-être vendredi prochain ?' }
        ],
        commonTrap: 'Ne pas mettre de "-ing" ou de "to" après "Why don\'t we" ou "Let\'s".'
      }
    ],
    examPractice: [
      {
        type: 'Grammar Check — Adjectifs -ed / -ing (Bac 2026)',
        instruction: 'Choisissez le bon adjectif :',
        prompt: 'Watching basketball on TV is very (interested / interesting), but I am (bored / boring) because my favorite team is losing.',
        correctAnswer: 'interesting — bored',
        detailedExplanation: 'Watching basketball est la cause du sentiment (-ing -> interesting), tandis que le spectateur ressent l\'ennui (-ed -> bored).'
      },
      {
        type: 'Transformation de Phrase — Sujet Gérondif',
        instruction: 'Réécrivez sans changer le sens en utilisant un gérondif comme sujet :',
        prompt: 'It is very relaxing to go fishing at the weekend.',
        correctAnswer: 'Going fishing at the weekend is very relaxing.',
        detailedExplanation: 'Le verbe de l\'infinitif (to go) se place en tête de phrase sous forme de gérondif (Going fishing...).'
      }
    ],
    lessons: [
      {
        id: 'u3-l1',
        unitId: 3,
        title: 'Vocabulaire : Hobbies & Nuances d\'intérêt',
        description: 'Keen on, fond of, et adjectifs de qualification de loisirs.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u3-e1',
            type: 'multiple_choice',
            question: 'How do you say "Elle est passionnée de randonnée" with a professional prepositional idiom?',
            options: [
              'She is keen on hiking.',
              'She is keen for hike.',
              'She likes to the hiking.',
              'She keens to hike.'
            ],
            correctAnswer: 'She is keen on hiking.',
            explanation: '« To be keen on + Nom / Gérondif » est l\'expression formelle privilégiée au Bac.',
            audioText: 'She is keen on hiking in Ranomafana national park.'
          },
          {
            id: 'u3-e2',
            type: 'sentence_builder',
            question: 'Reconstituez la phrase sur l\'affection pour la nature :',
            initialWords: ['He', 'is', 'very', 'fond', 'of', 'playing', 'chess'],
            correctAnswer: 'He is very fond of playing chess',
            explanation: '« To be fond of + V-ing » exprime l\'attachement ou le goût pour une activité.',
            audioText: 'He is very fond of playing chess.'
          }
        ]
      },
      {
        id: 'u3-l2',
        unitId: 3,
        title: 'Grammaire : Le Duel -ED vs -ING & Suggestions',
        description: 'Maîtriser sans faute la distinction participiale et la transformation de phrase.',
        xpReward: 30,
        category: 'grammar',
        exercises: [
          {
            id: 'u3-e3',
            type: 'multiple_choice',
            question: 'Choose the correct form: "The athletes ran ten kilometers, so they feel completely ________."',
            options: ['tired', 'tiring', 'tire', 'tiresome'],
            correctAnswer: 'tired',
            explanation: 'Les athlètes ressentent la fatigue intérieurement -> adjectif en -ED (tired).',
            audioText: 'The athletes ran ten kilometers, so they feel completely tired.'
          },
          {
            id: 'u3-e4',
            type: 'sentence_builder',
            question: 'Transformez avec un gérondif sujet : "It is difficult to master business English."',
            initialWords: ['Mastering', 'business', 'English', 'is', 'difficult'],
            correctAnswer: 'Mastering business English is difficult',
            explanation: 'La structure impersonnelle "It is... to..." devient "Mastering business English is..."',
            audioText: 'Mastering business English is difficult.'
          },
          {
            id: 'u3-e5',
            type: 'fill_blank',
            question: 'Suggest a collaborative break: "Why ________ we take a fifteen-minute coffee break?"',
            options: ['don\'t', 'aren\'t', 'won\'t', 'not'],
            correctAnswer: 'don\'t',
            explanation: 'Formule officielle de suggestion : « Why don\'t we + base verbale ? »',
            audioText: 'Why don\'t we take a fifteen-minute coffee break?'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 04: WORK AND EMPLOYMENT
  // ==========================================
  {
    id: 4,
    number: '04',
    title: 'Work, Employment & Corporate Law',
    frenchTitle: 'Le travail, l\'emploi et les droits professionnels',
    businessTheme: 'Corporate Recruitment, Labor Rights (ILO) & Causative Structures',
    executiveSummary: 'Plongez au cœur du marché de l\'emploi à Madagascar : statuts, syndicats (ILO/OIT), conditions de travail et négociation salariale. Maîtrisez le pivot grammatical central du Bac : les 4 structures causatives (MAKE, HAVE active, HAVE passive, GET).',
    competenceVisee: 'Simuler un entretien d\'embauche professionnel (Job interview) en anglais, déléguer des tâches et négocier des contrats.',
    keyVocabulary: [
      { term: 'To be hired / fired', french: 'Être embauché / être licencié', example: 'The accountant was hired for her analytical precision.', businessApplication: 'Terminologie RH standard pour les entrées et sorties de personnel.' },
      { term: 'To be laid off', french: 'Être mis au chômage technique / économique', example: 'During the economic slump, several factory workers were laid off.', businessApplication: 'Procédure légale de suspension collective pour motif économique.' },
      { term: 'Produce', french: 'Produits agricoles frais / denrées locales', example: 'Local markets sell fresh agricultural produce directly from farmers.', businessApplication: 'Terme clé mis en avant par le MEN pour ancrer l\'économie rurale dans le commerce.' },
      { term: 'To ask for a pay raise', french: 'Demander une augmentation de salaire', example: 'An employee can ask for a pay raise during the annual appraisal.', businessApplication: 'Négociation salariale basée sur la performance.' },
      { term: 'To go on strike', french: 'Faire la grève', example: 'Workers decided to go on strike to demand safer factory equipment.', businessApplication: 'Droit syndical encadré par les normes de l\'OIT (ILO).' },
      { term: 'Nepotism / Favoritism', french: 'Népotisme / favoritisme', example: 'Transparent hiring rules combat corruption and nepotism.', businessApplication: 'Gouvernance d\'entreprise et conformité éthique.' }
    ],
    grammarPoints: [
      {
        title: 'Causative 1 : MAKE (Contrainte / Obligation stricte)',
        formula: 'Sujet + MAKE + Personne + Base Verbale (sans TO)',
        frenchSummary: 'Forcer ou obliger quelqu\'un à faire une action.',
        officialBacRule: '« The manager made all the employees stay after 6 pm. »',
        examples: [
          { english: 'The supervisor made the team work overtime to meet the deadline.', french: 'Le superviseur a obligé l\'équipe à faire des heures supplémentaires.' }
        ],
        commonTrap: 'Ne JAMAIS mettre "to" après make : "He made me work" (et non "He made me to work").'
      },
      {
        title: 'Causative 2 : HAVE actif (Hiérarchie & Délégation formelle)',
        formula: 'Sujet + HAVE + Personne + Base Verbale (sans TO)',
        frenchSummary: 'Donner une instruction hiérarchique normale ou déléguer une responsabilité.',
        officialBacRule: '« The boss had John arrive early. »',
        examples: [
          { english: 'The director had the secretary prepare the financial dossier.', french: 'Le directeur a demandé à la secrétaire de préparer le dossier financier.' }
        ],
        commonTrap: 'Ne pas confondre le sens de "have" ici avec la possession ou l\'auxiliaire.'
      },
      {
        title: 'Causative 3 : HAVE passif (Prestation de service payante)',
        formula: 'Sujet + HAVE + Objet + Participe Passé',
        frenchSummary: 'Faire faire quelque chose par un professionnel ou un prestataire tiers.',
        officialBacRule: '« I had my hair cut » / « Noro had a beautiful dress made by a local tailor »',
        examples: [
          { english: 'Tomorrow, I will have my car repaired at the garage.', french: 'Demain, je ferai réparer ma voiture au garage.' }
        ],
        commonTrap: 'Mettre l\'objet AVANT le participe passé (« have my car repaired », et non « have repaired my car »).'
      },
      {
        title: 'Causative 4 : GET (Persuasion ou tâche menée à terme)',
        formula: 'Actif: GET + Personne + TO + Verbe   |   Passif: GET + Objet + Participe Passé',
        frenchSummary: 'Convaincre quelqu\'un de faire quelque chose (avec TO !), ou réussir à finaliser une tâche.',
        officialBacRule: '« The teacher finally got the students to understand the lesson. » / « I got the report finished. »',
        examples: [
          { english: 'We got the client to sign the five-year agreement.', french: 'Nous avons convaincu le client de signer le contrat de cinq ans.' }
        ],
        commonTrap: 'Contrairement à MAKE et HAVE, GET à la forme active PREND "TO" !'
      },
      {
        title: 'Prépositions figées en droit du travail',
        formula: 'protect FROM | discriminate AGAINST | worried ABOUT | exhausted FROM',
        frenchSummary: 'Associer les bons adjectifs et verbes à leurs prépositions obligatoires.',
        officialBacRule: '« Workers must be protected from exploitation, and never discriminate against workers. »',
        examples: [
          { english: 'The law protects employees from unfair dismissal.', french: 'La loi protège les salariés contre le licenciement abusif.' }
        ],
        commonTrap: 'Écrire "discriminate workers" sans "against".'
      }
    ],
    examPractice: [
      {
        type: 'Grammar Check — Causatives (Bac 2026)',
        instruction: 'Complétez en conjuguant les verbes entre parenthèses :',
        prompt: '1. The manager was very strict, he made all the employees (stay) ______ after 6 pm.\n2. Tomorrow, I will go to the garage to have my car (repair) ______.\n3. After hours of explanation, the teacher finally got the students (understand) ______ the lesson.',
        correctAnswer: '1. stay — 2. repaired — 3. to understand',
        detailedExplanation: '1. MAKE + base verbale sans to (stay).\n2. HAVE + objet + participe passé (repaired).\n3. GET + personne + TO + verbe (to understand).'
      },
      {
        type: 'Transformation au style professionnel',
        instruction: 'Réécrivez la phrase en utilisant la structure causative imposée avec « HAVE » :',
        prompt: 'Phrase A : A local tailor made a beautiful dress for Noro last week.\nNoro ___________________________________',
        correctAnswer: 'Noro had a beautiful dress made by a local tailor last week.',
        detailedExplanation: 'Sujet + had + objet (a beautiful dress) + participe passé (made) + complément d\'agent (by a local tailor).'
      }
    ],
    lessons: [
      {
        id: 'u4-l1',
        unitId: 4,
        title: 'Vocabulaire : Emploi, RH & Économie locale',
        description: 'Vocabulaire du recrutement, droits des travailleurs (ILO) et marché du travail.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u4-e1',
            type: 'multiple_choice',
            question: 'What special economic term is emphasized by the MEN curriculum for local fresh agricultural products in Madagascar?',
            options: ['Produce', 'Harbor', 'Stipend', 'Overtime'],
            correctAnswer: 'Produce',
            explanation: 'Le MEN met en avant le terme "Produce" (produits agricoles frais) pour ancrer les cours dans l\'économie locale.',
            audioText: 'Malagasy farmers sell high quality agricultural produce to urban markets.'
          },
          {
            id: 'u4-e2',
            type: 'fill_blank',
            question: 'Fill in the right preposition: "International labor laws state that employees must be protected ________ exploitation."',
            options: ['from', 'against', 'about', 'to'],
            correctAnswer: 'from',
            explanation: 'La structure officielle est « to be protected from » (+ danger / exploitation).',
            audioText: 'Employees must be protected from unfair exploitation.'
          },
          {
            id: 'u4-e3',
            type: 'multiple_choice',
            question: 'Which preposition follows "discriminate"? "A modern company should never discriminate ________ any worker."',
            options: ['against', 'with', 'towards', 'for'],
            correctAnswer: 'against',
            explanation: 'On dit « to discriminate against someone ».',
            audioText: 'A modern company should never discriminate against any worker.'
          }
        ]
      },
      {
        id: 'u4-l2',
        unitId: 4,
        title: 'Grammaire : Le Grand Quatuor Causatif (MAKE / HAVE / GET)',
        description: 'La nuance fondamentale entre contrainte, délégation, prestation payante et persuasion.',
        xpReward: 35,
        category: 'grammar',
        exercises: [
          {
            id: 'u4-e4',
            type: 'multiple_choice',
            question: 'Choose the correct form for strict managerial obligation: "The auditor made the accountant ________ all invoices."',
            options: ['verify', 'to verify', 'verifying', 'verified'],
            correctAnswer: 'verify',
            explanation: 'MAKE + personne + Base Verbale directe (sans to).',
            audioText: 'The auditor made the accountant verify all invoices.'
          },
          {
            id: 'u4-e5',
            type: 'fill_blank',
            question: 'Choose the correct form for persuasion with GET: "The sales manager finally got the prospective buyer ________ the terms."',
            options: ['to accept', 'accept', 'accepted', 'accepting'],
            correctAnswer: 'to accept',
            explanation: 'GET requiert « TO + Verbe » à la voix active (« got the buyer to accept »).',
            audioText: 'The sales manager finally got the prospective buyer to accept the terms.'
          },
          {
            id: 'u4-e6',
            type: 'sentence_builder',
            question: 'Transformez au causatif passif : "Noro had a dress made by a tailor"',
            initialWords: ['Noro', 'had', 'a', 'beautiful', 'dress', 'made', 'last', 'week'],
            correctAnswer: 'Noro had a beautiful dress made last week',
            explanation: 'Structure HAVE + Objet + Participe passé pour un service exécuté par un artisan.',
            audioText: 'Noro had a beautiful dress made last week.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 05: WISHES AND REGRETS
  // ==========================================
  {
    id: 5,
    number: '05',
    title: 'Wishes, Regrets & Risk Management',
    frenchTitle: 'Souhaits, regrets et gestion des choix passés',
    businessTheme: 'Corporate Risk Assessment, Post-Mortem Analysis & Ecological Resilience',
    executiveSummary: 'Maîtrisez la mécanique du décalage temporel (Backshift) pour formuler des souhaits au présent (Wish + Past Simple), des plaintes (Wish + Would), et des regrets passés (Wish + Past Perfect / Should have + PP / Regret + -ing). Couvre aussi les défis environnementaux malgaches (Tavy, déforestation, charbon de bois).',
    competenceVisee: 'Rédiger une analyse d\'impact, exprimer des espoirs stratégiques futurs et tirer les leçons constructives d\'erreurs passées.',
    keyVocabulary: [
      { term: 'Slash-and-burn / « Tavy »', french: 'Culture sur brûlis', example: 'Slash-and-burn agriculture endangers primary rainforests in eastern Madagascar.', businessApplication: 'Enjeu critique de développement durable et d\'agritech responsable.' },
      { term: 'Charcoal production', french: 'Production de charbon de bois', example: 'Transitioning away from charcoal production requires sustainable energy investments.', businessApplication: 'Opportunités dans la transition énergétique et l\'économie verte.' },
      { term: 'To lose one\'s temper', french: 'Perdre son sang-froid / s\'emporter', example: 'An executive must never lose his temper during high-stakes negotiations.', businessApplication: 'Maîtrise de soi et posture managériale sous pression.' },
      { term: 'To bribe / Bribery', french: 'Payer un pot-de-vin / corruption', example: 'Bribery strictly violates international corporate governance standards.', businessApplication: 'Conformité anti-corruption et devoir de vigilance.' }
    ],
    grammarPoints: [
      {
        title: 'Souhait au PRÉSENT (Hypothèse irréelle)',
        formula: 'Sujet + WISH + Sujet + Past Simple (avec BE -> WERE à toutes les personnes)',
        frenchSummary: 'Exprimer le regret d\'une réalité actuelle qu\'on aimerait voir différente.',
        officialBacRule: '« I don\'t have money » -> « I wish I had some money » | « I am short » -> « If only I were taller »',
        examples: [
          { english: 'Our lycée doesn\'t have computers -> I wish our lycée had computers.', french: 'Notre lycée n\'a pas d\'ordinateurs -> Je regrette/Je souhaiterais que notre lycée ait des ordinateurs.' },
          { english: 'If only our company were located closer to the international port.', french: 'Si seulement notre entreprise était située plus près du port international.' }
        ],
        commonTrap: 'Ne pas employer le présent après wish : "I wish I have" est une faute éliminatoire au Bac.'
      },
      {
        title: 'Plainte sur le comportement d\'autrui',
        formula: 'WISH + Sujet + WOULD + Base Verbale',
        frenchSummary: 'Pour exprimer le désir qu\'une autre personne cesse une attitude pénible.',
        officialBacRule: '« I wish you would be quiet. »',
        examples: [
          { english: 'The director wishes the supplier would deliver on time.', french: 'Le directeur souhaiterait que le fournisseur livre à l\'heure.' }
        ],
        commonTrap: 'On n\'utilise pas "I wish I would" pour soi-même, seulement pour une autre personne ou entité.'
      },
      {
        title: 'Regret face au PASSÉ (Action déjà achevée)',
        formula: 'Structure 1: WISH / IF ONLY + Sujet + HAD (NOT) + Participe Passé\nStructure 2: Sujet + SHOULD (NOT) HAVE + Participe Passé',
        frenchSummary: 'Exprimer le regret d\'une action ou erreur passée irrémédiable.',
        officialBacRule: '« Marie failed her exam because she didn\'t study » -> « Marie wishes she had studied » / « Marie should have studied »',
        examples: [
          { english: 'We didn\'t back up the database -> We wish we had backed up the database.', french: 'Nous n\'avions pas sauvegardé la base -> Nous aurions aimé l\'avoir sauvegardée.' },
          { english: 'We should have backed up the database.', french: 'Nous aurions dû sauvegarder la base de données.' }
        ],
        commonTrap: 'Confondre le souhait présent (Past simple) et le regret passé (Past perfect : had + pp).'
      },
      {
        title: 'Le verbe « REGRET » + V-ING',
        formula: 'Sujet + REGRET + V-ing',
        frenchSummary: 'Regretter d\'avoir fait quelque chose.',
        officialBacRule: '« Lanto regrets eating so many sweets. »',
        examples: [
          { english: 'The company regrets investing in obsolete technology.', french: 'L\'entreprise regrette d\'avoir investi dans une technologie obsolète.' }
        ],
        commonTrap: 'Mettre "to + verbe" au lieu du gérondif après le verbe regret.'
      }
    ],
    examPractice: [
      {
        type: 'Grammar Check — Transformation au Présent (Bac 2026)',
        instruction: 'Transformez la réalité présente en un souhait :',
        prompt: '1. My lycée doesn\'t have enough computers. -> I wish my lycée ____________ enough computers.\n2. I am bad at sports. -> I wish I ____________ better at sports.',
        correctAnswer: '1. had — 2. were',
        detailedExplanation: '1. doesn\'t have devient had (Past Simple).\n2. am devient were (subjonctif irréel avec BE au présent).'
      },
      {
        type: 'Sentence Transformation — Regret face au Passé',
        instruction: 'Complétez les deux phrases de regret à partir de la situation :',
        prompt: 'Situation : The manager did not check the legal contract, and now the firm is penalized.\nPhrase 1 : The manager wishes he ________________ the contract.\nPhrase 2 : The manager should ________________ the contract.',
        correctAnswer: '1. had checked — 2. have checked',
        detailedExplanation: 'Phrase 1 : wish + past perfect (had checked).\nPhrase 2 : should + have + participe passé (have checked).'
      }
    ],
    lessons: [
      {
        id: 'u5-l1',
        unitId: 5,
        title: 'Vocabulaire : Erreurs, Société & Écologie Malgache',
        description: 'Terminologie des regrets, du tavy et de la gestion de crise.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u5-e1',
            type: 'multiple_choice',
            question: 'What is the traditional Malagasy slash-and-burn agricultural method called in the national curriculum?',
            options: ['Tavy', 'Famadihana', 'Kabary', 'Valiha'],
            correctAnswer: 'Tavy',
            explanation: 'Le terme officiel dans le programme du MEN est « Slash-and-burn / Tavy ».',
            audioText: 'Slash-and-burn, locally known as Tavy, contributes heavily to deforestation.'
          },
          {
            id: 'u5-e2',
            type: 'fill_blank',
            question: 'Complete the sentence: "To prevent corruption, business leaders should never accept or offer a ________."',
            options: ['bribe', 'tavy', 'curfew', 'produce'],
            correctAnswer: 'bribe',
            explanation: '« Bribe » (pot-de-vin) / « Bribery » (corruption active) est le lexique officiel de l\'unité.',
            audioText: 'Business leaders should never accept or offer a bribe.'
          }
        ]
      },
      {
        id: 'u5-l2',
        unitId: 5,
        title: 'Grammaire : L\'Algorithme du Backshift (Présent vs Passé)',
        description: 'Wish + Past Simple, Wish + Past Perfect et Should have + PP.',
        xpReward: 35,
        category: 'grammar',
        exercises: [
          {
            id: 'u5-e3',
            type: 'multiple_choice',
            question: 'Transform the present reality into a wish: "Our startup has no international partners."',
            options: [
              'I wish our startup had international partners.',
              'I wish our startup has international partners.',
              'I wish our startup will have international partners.',
              'I wish our startup would had international partners.'
            ],
            correctAnswer: 'I wish our startup had international partners.',
            explanation: 'Règle du MEN : Wish au présent -> verbe au Past Simple (« had »).',
            audioText: 'I wish our startup had international partners.'
          },
          {
            id: 'u5-e4',
            type: 'sentence_builder',
            question: 'Formulez le regret passé avec should have : "We should have verified the budget"',
            initialWords: ['We', 'should', 'have', 'verified', 'the', 'project', 'budget'],
            correctAnswer: 'We should have verified the project budget',
            explanation: 'Should + have + Participe passé exprime le reproche ou le regret passé.',
            audioText: 'We should have verified the project budget.'
          },
          {
            id: 'u5-e5',
            type: 'fill_blank',
            question: 'Complete with the verb REGRET: "The board members regret (delay) ________ the software deployment."',
            options: ['delaying', 'to delay', 'delayed', 'delay'],
            correctAnswer: 'delaying',
            explanation: 'Le verbe REGRET se construit avec le gérondif en -ing : « regret + V-ing ».',
            audioText: 'The board members regret delaying the software deployment.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 06: TOURISM AND HOSPITALITY
  // ==========================================
  {
    id: 6,
    number: '06',
    title: 'Tourism, Hospitality & Eco-Business',
    frenchTitle: 'Tourisme, hôtellerie et valorisation de la biodiversité',
    businessTheme: 'Sustainable Tourism Management, Local Craft Economy & Cause-and-Effect Logic',
    executiveSummary: 'Découvrez les formes de tourisme à Madagascar : écotourisme, tourisme culinaire, communautaire (Homestay) et observation de la faune unique (lémuriens, baobabs). Maîtrisez le pivot linguistique de l\'unité : l\'expression de la CAUSE (Because of, As a result of, Due to, Thanks to) et de l\'EFFET (Therefore, Consequently, That is why).',
    competenceVisee: 'Concevoir une brochure ou un pitch d\'affaires pour promouvoir une destination ou un service éco-responsable (« Tell a Tourist »).',
    keyVocabulary: [
      { term: 'Eco-tourism', french: 'Écotourisme', example: 'Eco-tourism creates sustainable revenue streams for local communities around protected parks.', businessApplication: 'Modèle économique durable conciliant rentabilité et conservation.' },
      { term: 'Homestay', french: 'Hébergement chez l\'habitant', example: 'Homestay tourism empowers rural families by decentralizing hotel revenue.', businessApplication: 'Tourisme communautaire et impact social direct.' },
      { term: 'Endangered animals', french: 'Espèces / animaux menacés d\'extinction', example: 'Madagascar\'s lemurs are internationally renowned endangered animals.', businessApplication: 'Patrimoine naturel d\'une valeur inestimable pour l\'image de marque.' },
      { term: 'Craftspeople', french: 'Artisans', example: 'Direct sales to travelers increase the fair income of local craftspeople.', businessApplication: 'Micro-entreprises artisanales et commerce équitable.' }
    ],
    grammarPoints: [
      {
        title: 'Exprimer la CAUSE (Neutre / Négatif vs Positif)',
        formula: 'Because of / As a result of / Due to + Groupe Nominal  |  Thanks to + Groupe Nominal (positif)',
        frenchSummary: 'Relier un événement à sa cause nominale.',
        officialBacRule: '« Because of / Due to our nice beaches... » VS « Thanks to ecotourism, local hosts earn more. »',
        examples: [
          { english: 'Due to mass tourism, some fragile coral reefs are endangered.', french: 'En raison du tourisme de masse, certains récifs coralliens fragiles sont menacés.' },
          { english: 'Thanks to digital booking platforms, reservations increased by 40%.', french: 'Grâce aux plateformes de réservation en ligne, les réservations ont augmenté de 40%.' }
        ],
        commonTrap: 'N\'utilisez JAMAIS "Thanks to" pour une cause négative (ex: ne dites pas "Thanks to the storm, flights were canceled"). Utilisez "Due to" ou "Because of".'
      },
      {
        title: 'Exprimer la CONSÉQUENCE / L\'EFFET',
        formula: 'Proposition A. Therefore / Consequently / For this reason, Proposition B.  |  That is why...',
        frenchSummary: 'Introduire le résultat logique d\'un premier énoncé.',
        officialBacRule: '« Madagascar has unique flora. Therefore, it is necessary to protect it. »',
        examples: [
          { english: 'Madagascar possesses unique biodiversity. That is why travelers from across the globe visit.', french: 'Madagascar possède une biodiversité unique. C\'est pourquoi les voyageurs du monde entier la visitent.' }
        ],
        commonTrap: 'Attention à la ponctuation : Therefore et Consequently sont généralement précédés d\'un point ou point-virgule et suivis d\'une virgule.'
      }
    ],
    examPractice: [
      {
        type: 'Grammar Check — Connecteur logique (Bac 2026)',
        instruction: 'Complétez avec le connecteur approprié :',
        prompt: '1. Madagascar has a rich cultural heritage. ____________, we should learn about our customs.\n2. ____________ the creation of local tourism businesses, the incomes of craftspeople are improved.\n3. ____________ flight transportation, large numbers of visitors can travel very quickly to Antananarivo.',
        correctAnswer: '1. Therefore — 2. Thanks to — 3. Because of',
        detailedExplanation: '1. Effet logique déduit -> Therefore.\n2. Cause positive bénéfique -> Thanks to.\n3. Cause de moyen / fait général -> Because of.'
      },
      {
        type: 'Transformation de phrases — Inversion de rapport',
        instruction: 'Inversez le rapport logique (cause -> effet) sans changer le sens :',
        prompt: 'Because Madagascar has endangered animals in its national parks, hunting should be prohibited.',
        correctAnswer: 'Madagascar has endangered animals in its national parks. Consequently / Therefore, hunting should be prohibited.',
        detailedExplanation: 'On place d\'abord le fait ("Madagascar has..."), puis le connecteur d\'effet ("Therefore / Consequently,"), puis la conséquence.'
      }
    ],
    lessons: [
      {
        id: 'u6-l1',
        unitId: 6,
        title: 'Vocabulaire : Écotourisme, Faune & Accueil',
        description: 'Typologies touristiques, biodiversité unique (lémuriens, baobabs) et acteurs locaux.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u6-e1',
            type: 'multiple_choice',
            question: 'What is the definition of eco-tourism according to the official curriculum?',
            options: [
              'Responsible travel to protected areas that educates travelers and generates local income',
              'Building giant luxury resorts on virgin coastlines',
              'Buying wildlife souvenirs made of animal bones or teeth',
              'Fast-food restaurant chains for international tourists'
            ],
            correctAnswer: 'Responsible travel to protected areas that educates travelers and generates local income',
            explanation: 'Définition officielle du MEN : tourisme responsable qui éduque le voyageur et soutient les populations locales.',
            audioText: 'Eco-tourism promotes environmental conservation and sustainable local livelihoods.'
          },
          {
            id: 'u6-e2',
            type: 'fill_blank',
            question: 'Complete: "Staying with a local family in a rural village is known as a ________."',
            options: ['homestay', 'nightclub', 'headquarters', 'supermarket'],
            correctAnswer: 'homestay',
            explanation: '« Homestay » (hébergement chez l\'habitant) est l\'un des concepts clés de l\'unité 6.',
            audioText: 'Homestay tourism fosters authentic cultural exchange.'
          }
        ]
      },
      {
        id: 'u6-l2',
        unitId: 6,
        title: 'Grammaire : L\'Art de la Cause & de la Conséquence',
        description: 'Because of, Due to, Thanks to, Therefore, Consequently, That is why.',
        xpReward: 35,
        category: 'grammar',
        exercises: [
          {
            id: 'u6-e3',
            type: 'multiple_choice',
            question: 'Which connector is ONLY used for positive, beneficial causes?',
            options: ['Thanks to', 'Because of', 'Due to', 'In spite of'],
            correctAnswer: 'Thanks to',
            explanation: 'Règle stricte du MEN : « Thanks to + Groupe Nominal » s\'emploie uniquement pour une cause positive.',
            audioText: 'Thanks to new flight connections, tourist arrivals surged.'
          },
          {
            id: 'u6-e4',
            type: 'sentence_builder',
            question: 'Reconstituez la phrase de conséquence : "Madagascar has unique flora. Therefore, we must protect it."',
            initialWords: ['Madagascar', 'has', 'unique', 'flora.', 'Therefore,', 'we', 'must', 'protect', 'it'],
            correctAnswer: 'Madagascar has unique flora. Therefore, we must protect it',
            explanation: 'Therefore introduit la conséquence logique majeure.',
            audioText: 'Madagascar has unique flora. Therefore, we must protect it.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 07: SCIENCE AND TECHNOLOGY
  // ==========================================
  {
    id: 7,
    number: '07',
    title: 'Science, Technology & Digital Transformation',
    frenchTitle: 'Sciences, technologies et transition numérique',
    businessTheme: 'Digital Transformation, Cyber Resilience & Rhetorical Parallelism',
    executiveSummary: 'Explorez l\'impact des technologies : IA, smartphones, risques cybernétiques et la fracture numérique rurale. Maîtrisez le secret d\'un style rédactionnel professionnel : les structures parallèles (parallélisme des noms, verbes et gérondifs) et la ponctuation formelle (virgule d\'Oxford).',
    competenceVisee: 'Argumenter avec rigueur sur les atouts et les risques d\'une innovation technologique lors d\'un comité exécutif ou d\'un débat.',
    keyVocabulary: [
      { term: 'Digital divide', french: 'Fracture numérique', example: 'Bridging the digital divide between urban Antananarivo and rural villages is vital.', businessApplication: 'Enjeu d\'inclusion technologique et d\'infrastructure télécom.' },
      { term: 'Cyberbullying', french: 'Cyberharcèlement', example: 'Corporate policies now mandate clear guidelines against online harassment and cyberbullying.', businessApplication: 'Gestion des risques psychosociaux et conformité digitale.' },
      { term: 'Flash drive', french: 'Clé USB', example: 'Store sensitive audit reports on an encrypted flash drive.', businessApplication: 'Sécurité du stockage amovible des données d\'affaires.' },
      { term: 'To hack into', french: 'Pirater / s\'infiltrer dans un système', example: 'Cybercriminals attempted to hack into the central banking server.', businessApplication: 'Cybersécurité et résilience des systèmes d\'information.' }
    ],
    grammarPoints: [
      {
        title: 'Règle de Parallélisme 1 : Les Noms',
        formula: 'Nom + Nom + and + Nom',
        frenchSummary: 'Si le premier élément énuméré est un nom, tous les suivants doivent être des noms.',
        officialBacRule: '« Today, people use cell phones, laptops and iPads to communicate. »',
        examples: [
          { english: 'The company invested in servers, fiber connections, and cloud storage.', french: 'L\'entreprise a investi dans des serveurs, des liaisons fibre et du stockage cloud.' }
        ],
        commonTrap: 'Mélanger un nom avec une proposition verbale (ex: "phones, laptops and they communicate" -> INCORRECT).'
      },
      {
        title: 'Règle de Parallélisme 2 : Les Verbes (Base Verbale)',
        formula: 'To + Verb 1, Verb 2, and Verb 3',
        frenchSummary: 'Tous les verbes de la coordination doivent conserver la même forme verbale.',
        officialBacRule: '« People use phones to send text messages, take pictures and play games. »',
        examples: [
          { english: 'Our app enables clients to track orders, download invoices and contact support.', french: 'Notre application permet aux clients de suivre leurs commandes, télécharger des factures et contacter le support.' }
        ],
        commonTrap: 'Passer de l\'infinitif au gérondif en cours d\'énumération (« to send messages, taking pictures and play » -> FAUTE).'
      },
      {
        title: 'Règle de Parallélisme 3 : Les Gérondifs (-ING)',
        formula: 'V1-ing, V2-ing, and V3-ing',
        frenchSummary: 'Si l\'activité démarre par un gérondif, tous les éléments suivants doivent être en -ing.',
        officialBacRule: '« Smartphones are great for texting, chatting and playing. »',
        examples: [
          { english: 'Executive work requires analyzing data, negotiating contracts and leading teams.', french: 'Le travail de direction exige d\'analyser les données, négocier les contrats et diriger les équipes.' }
        ],
        commonTrap: 'Rompre la série avec une proposition (« analyzing data, negotiating and they lead »).'
      },
      {
        title: 'La Virgule d\'Oxford (Oxford Comma)',
        formula: 'Item 1, Item 2, and Item 3',
        frenchSummary: 'Dans une série de 3 éléments ou plus, la virgule avant "and" élimine toute ambiguïté.',
        officialBacRule: '« Pas de virgule pour deux éléments liés par and ; virgule entre chaque élément d\'une liste de 3+. »',
        examples: [
          { english: 'We hired an accountant, an engineer, and a software developer.', french: 'Nous avons recruté un comptable, un ingénieur et un développeur de logiciels.' }
        ],
        commonTrap: 'Omettre la clarté dans les énumérations contractuelles complexes.'
      }
    ],
    examPractice: [
      {
        type: 'Correction d\'erreurs de parallélisme (Bac 2026)',
        instruction: 'Corrigez l\'erreur de structure parallèle :',
        prompt: 'Phrase incorrecte : Some Malagasy teenagers spend too much time on the internet watching videos, playing online games and they look at social networks.',
        correctAnswer: '...watching videos, playing online games and looking at social networks.',
        detailedExplanation: 'Puisque les deux premiers éléments sont en -ing (watching, playing), le troisième doit obligatoirement être un gérondif (looking at...).'
      },
      {
        type: 'Compléter en respectant le parallélisme',
        instruction: 'Mettez le verbe sous la bonne forme parallèle :',
        prompt: 'To do research for my school results, I like using my laptop to search for text, watch educational videos and (download) ____________ documents.',
        correctAnswer: 'download',
        detailedExplanation: 'Les verbes coordonnés après « to » sont à la base verbale : search, watch and download.'
      }
    ],
    lessons: [
      {
        id: 'u7-l1',
        unitId: 7,
        title: 'Vocabulaire : Outils informatiques & Cyber-risques',
        description: 'Matériel, composants d\'interface, logiciels et fracture numérique.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u7-e1',
            type: 'multiple_choice',
            question: 'What term describes the socioeconomic gap in internet and technology access between rural and urban populations?',
            options: ['Digital divide', 'Cyberbullying', 'Flash drive', 'Toolbar'],
            correctAnswer: 'Digital divide',
            explanation: 'Le terme exact du MEN est « Digital divide » (la fracture numérique).',
            audioText: 'The digital divide remains a significant hurdle for rural education in Madagascar.'
          },
          {
            id: 'u7-e2',
            type: 'fill_blank',
            question: 'Complete the computer shortcut action: "In office software, you can cut, copy and ________ text with ease."',
            options: ['paste', 'hack', 'divide', 'scroll'],
            correctAnswer: 'paste',
            explanation: '« Cut, copy and paste » est la triade bureautique standard du programme.',
            audioText: 'You can cut, copy and paste text easily.'
          }
        ]
      },
      {
        id: 'u7-l2',
        unitId: 7,
        title: 'Grammaire : Maîtriser le Parallélisme Stylistique',
        description: 'Harmoniser les séries de noms, de verbes et de gérondifs pour une écriture fluide et professionnelle.',
        xpReward: 35,
        category: 'grammar',
        exercises: [
          {
            id: 'u7-e3',
            type: 'error_hunter',
            question: 'Spot and fix the parallelism error: "Smartphones are great for texting, browsing and (to play) ________ games."',
            options: ['playing', 'to playing', 'played', 'play'],
            correctAnswer: 'playing',
            explanation: 'Série de gérondifs coordonnés : texting, browsing and PLAYING.',
            audioText: 'Smartphones are great for texting, browsing and playing games.'
          },
          {
            id: 'u7-e4',
            type: 'sentence_builder',
            question: 'Alignez la série verbale parallèle : "We use our laptops to search, write and share reports"',
            initialWords: ['We', 'use', 'laptops', 'to', 'search,', 'write', 'and', 'share', 'reports'],
            correctAnswer: 'We use laptops to search, write and share reports',
            explanation: 'Trois bases verbales coordonnées après "to" : search, write, share.',
            audioText: 'We use laptops to search, write and share reports.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 08: MASS MEDIA AND INFORMATION
  // ==========================================
  {
    id: 8,
    number: '08',
    title: 'Mass Media, Information & Public Relations',
    frenchTitle: 'Les médias de masse, journalisme et désinformation',
    businessTheme: 'Corporate PR, Fact-Checking & Reported Speech Precision',
    executiveSummary: 'Analysez les canaux d\'information et la lutte contre les fake news. Maîtrisez le pilier grammatical majeur de l\'épreuve de Terminale : le discours rapporté (Reported Speech), la concordance des temps (Backshift), la transformation des questions ouvertes/fermées et les verbes introducteurs professionnels (suggested, apologized, warned).',
    competenceVisee: 'Rapporter fidèlement des propos de réunion, résumer un article de presse économique ou rédiger un communiqué officiel.',
    keyVocabulary: [
      { term: 'Breaking news', french: 'Flash spécial / dernière minute', example: 'Breaking news announced the merger between the two telecommunication giants.', businessApplication: 'Communication de crise et veille stratégique immédiate.' },
      { term: 'Reliable information', french: 'Information fiable / vérifiée', example: 'Financial analysts rely strictly on reliable information before making investments.', businessApplication: 'Prise de décision basée sur des données vérifiées (Due Diligence).' },
      { term: 'Fake news', french: 'Fausses nouvelles / désinformation', example: 'Corporate PR teams actively counter damaging fake news on social networks.', businessApplication: 'Protection de la réputation de marque.' },
      { term: 'Miscellaneous', french: 'Faits divers / rubriques diverses', example: 'Local newspapers reserve the back pages for miscellaneous events.', businessApplication: 'Typologie de la presse écrite au programme.' }
    ],
    grammarPoints: [
      {
        title: 'La Concordance des Temps (Backshift) au Passé',
        formula: 'Présent Simple -> Past Simple | Will -> Would | Can -> Could | Present Perfect/Past Simple -> Past Perfect',
        frenchSummary: 'Lorsqu\'un verbe introducteur est au passé (He said, she announced), tous les temps de la subordonnée reculent d\'un cran dans le passé.',
        officialBacRule: '« I listen to the radio every day » -> He said he listened to the radio every day. « I saw the accident » -> He said he had seen the accident.',
        examples: [
          { english: '« The contract will be signed tomorrow » -> The director said that the contract would be signed the day after.', french: '« Le contrat sera signé demain » -> Le directeur a dit que le contrat serait signé le lendemain.' },
          { english: '« I have found new proof » -> The journalist announced that he had found new proof.', french: '« J\'ai trouvé de nouvelles preuves » -> Le journaliste a annoncé qu\'il avait trouvé de nouvelles preuves.' }
        ],
        commonTrap: 'Ne pas oublier de transformer les marqueurs de temps : tomorrow -> the day after / next day ; yesterday -> the day before.'
      },
      {
        title: 'Questions au Discours Rapporté (WH- vs Yes/No)',
        formula: 'Questions WH- : WH- + Sujet + Verbe  |  Questions Oui/Non : IF + Sujet + Verbe',
        frenchSummary: 'Au style indirect, l\'inversion sujet-verbe disparaît et devient une phrase affirmative.',
        officialBacRule: '« Where were you? » -> The teacher asked where I had been. « Did you hear the news? » -> He asked me if I had heard the news.',
        examples: [
          { english: 'The auditor asked if we had verified the accounts.', french: 'L\'auditeur a demandé si nous avions vérifié les comptes.' },
          { english: 'The recruiter asked where I had worked previously.', french: 'Le recruteur a demandé où j\'avais travaillé auparavant.' }
        ],
        commonTrap: 'Remettre l\'auxiliaire "did" ou faire l\'inversion ("He asked me did I hear" est une faute grave).'
      },
      {
        title: 'Ordres, Conseils & Verbes Introducteurs Avancés',
        formula: 'Told / Warned / Advised + Personne + TO (ou NOT TO) + Verbe',
        frenchSummary: 'Pour rapporter un ordre, une interdiction ou un conseil sans alourdir la phrase.',
        officialBacRule: '« Don\'t touch my phone! » -> She told me not to touch her phone.',
        examples: [
          { english: 'The CEO warned the team not to disclose confidential metrics.', french: 'Le PDG a prévenu l\'équipe de ne pas divulguer les indicateurs confidentiels.' },
          { english: 'Paul suggested that we listen to the breaking news together.', french: 'Paul a suggéré que nous écoutions les informations de dernière minute ensemble.' }
        ],
        commonTrap: 'Mettre "that" au lieu de "to" pour un ordre ("He told me that I don\'t touch" -> INCORRECT).'
      }
    ],
    examPractice: [
      {
        type: 'Style direct -> indirect (Bac 2026)',
        instruction: 'Transformez au discours rapporté :',
        prompt: '1. The journalist announced: « I found new proof about the financial scandal yesterday. »\n-> The journalist announced that __________________________________________________\n2. Rabe asked his friend: « Will you buy a newspaper for me tomorrow? »\n-> Rabe asked his friend if _______________________________________________',
        correctAnswer: '1. he had found new proof about the financial scandal the day before — 2. he would buy a newspaper for him the day after',
        detailedExplanation: '1. found (Past simple) -> had found (Past Perfect), yesterday -> the day before.\n2. Will -> would, tomorrow -> the day after, pronom me -> him.'
      },
      {
        type: 'Choix du verbe introducteur (Grammar Check)',
        instruction: 'Complétez avec le verbe qui convient (suggested, apologized) :',
        prompt: '1. « Let\'s listen to the breaking news together, » Paul said. -> Paul _____________ that we listen to the breaking news.\n2. « I am sorry for broadcasting this false information, » the presenter said. -> The presenter _____________ for broadcasting false information.',
        correctAnswer: '1. suggested — 2. apologized',
        detailedExplanation: '1. « Let\'s » est une suggestion -> suggested.\n2. « I am sorry for » est une excuse -> apologized for + -ing.'
      }
    ],
    lessons: [
      {
        id: 'u8-l1',
        unitId: 8,
        title: 'Vocabulaire : Journalisme, Médias & Esprit critique',
        description: 'Canaux de diffusion, fausses nouvelles et vérification des sources.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u8-e1',
            type: 'multiple_choice',
            question: 'Which term denotes urgent newly received information about an unfolding event?',
            options: ['Breaking news', 'Gossip news', 'Miscellaneous', 'Burglary'],
            correctAnswer: 'Breaking news',
            explanation: 'Breaking news = les flashs d\'information urgente au programme.',
            audioText: 'Breaking news interrupted the regular broadcast.'
          },
          {
            id: 'u8-e2',
            type: 'fill_blank',
            question: 'Complete: "Before publishing an article, journalists must rely on ________ sources rather than unverified rumors."',
            options: ['reliable', 'shocking', 'disturbing', 'fake'],
            correctAnswer: 'reliable',
            explanation: '« Reliable information » = information digne de confiance.',
            audioText: 'Journalists must verify facts using reliable sources.'
          }
        ]
      },
      {
        id: 'u8-l2',
        unitId: 8,
        title: 'Grammaire : L\'Art du Discours Rapporté (Reported Speech)',
        description: 'La concordance des temps (Backshift), questions avec IF et commandes avec NOT TO.',
        xpReward: 35,
        category: 'grammar',
        exercises: [
          {
            id: 'u8-e3',
            type: 'multiple_choice',
            question: 'Report the sentence: « The storm will arrive tomorrow » -> The news reported that the storm ________.',
            options: [
              'would arrive the day after',
              'will arrive tomorrow',
              'would have arrived yesterday',
              'arrived the next day'
            ],
            correctAnswer: 'would arrive the day after',
            explanation: 'Will devient Would, et tomorrow devient the day after.',
            audioText: 'The news reported that the storm would arrive the day after.'
          },
          {
            id: 'u8-e4',
            type: 'sentence_builder',
            question: 'Rapportez l\'ordre : "She told me not to touch the files"',
            initialWords: ['She', 'told', 'me', 'not', 'to', 'touch', 'the', 'files'],
            correctAnswer: 'She told me not to touch the files',
            explanation: 'Ordre négatif : Told + Personne + NOT TO + Base Verbale.',
            audioText: 'She told me not to touch the files.'
          },
          {
            id: 'u8-e5',
            type: 'fill_blank',
            question: 'Report a Yes/No question: "He asked me ________ I had read the quarterly report."',
            options: ['if', 'that', 'what', 'did'],
            correctAnswer: 'if',
            explanation: 'Pour les questions fermées, on introduit « IF » (ou whether).',
            audioText: 'He asked me if I had read the quarterly report.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 09: INTERNATIONAL ORGANIZATIONS
  // ==========================================
  {
    id: 9,
    number: '09',
    title: 'International Organizations & Global CSR',
    frenchTitle: 'Les organisations internationales et développement durable',
    businessTheme: 'Global Governance, NGO Partnerships, Relief Aid & Passive Voice Reports',
    executiveSummary: 'Maîtrisez les missions de l\'ONU, USAID, UNICEF, OMS/WHO, PAM/WFP, FAO, OIT/ILO et PNUD/UNDP à Madagascar (notamment dans le Sud face au Kere). Maîtrisez la voix passive avancée pour rédiger des rapports d\'audit impartiaux, et la structure de résolution : « Solution + is/are needed most to + Verbe ».',
    competenceVisee: 'Comprendre et synthétiser les données d\'un document officiel d\'agence internationale et formuler des plans d\'action humanitaires ou RSE.',
    keyVocabulary: [
      { term: 'To alleviate / eradicate poverty', french: 'Atténuer / éradiquer la pauvreté', example: 'Microfinance programs aim to eradicate poverty across vulnerable rural districts.', businessApplication: 'Objectif de Développement Durable (ODD 1) et investissement à impact.' },
      { term: 'To empower women', french: 'Autonomiser les femmes / renforcer leur pouvoir d\'action', example: 'Empowering women through vocational education boosts national economic growth.', businessApplication: 'Diversité, équité et inclusion (DEI) dans les affaires.' },
      { term: 'Kere', french: 'Famine récurrente dans le Sud de Madagascar', example: 'The World Food Program mobilizes emergency food aid to combat the Kere.', businessApplication: 'Gestion des crises humanitaires et sécurité alimentaire.' },
      { term: 'Sanitation problems', french: 'Problèmes d\'assainissement / hygiène', example: 'Proper sanitation is needed most to prevent contagious waterborne diseases.', businessApplication: 'Santé publique et infrastructures de base.' },
      { term: 'USAID / UNICEF / WHO / WFP', french: 'Grandes agences internationales partenaires', example: 'UNICEF protects children\'s rights and builds resilient school infrastructure.', businessApplication: 'Acteurs institutionnels de premier plan dans l\'aide au développement.' }
    ],
    grammarPoints: [
      {
        title: 'La Voix Passive Avancée pour les Rapports Factuels',
        formula: 'Objet + BE (conjugué au temps de la phrase active) + Participe Passé (+ BY + Agent)',
        frenchSummary: 'Utilisée dans les rapports diplomatiques et d\'entreprise pour mettre l\'accent sur l\'action et le bénéficiaire plutôt que sur l\'acteur.',
        officialBacRule: '« UNICEF builds new schools » -> « New schools are built by UNICEF. » | « USAID provided food » -> « Food was provided by USAID. »',
        examples: [
          { english: 'Stricter environmental regulations are implemented by the government.', french: 'Des réglementations environnementales plus strictes sont mises en œuvre par le gouvernement.' },
          { english: 'A modern medical dispensary was constructed in the village last year.', french: 'Un dispensaire médical moderne a été construit dans le village l\'an dernier.' }
        ],
        commonTrap: 'Oublier d\'accorder l\'auxiliaire BE avec le nouveau sujet singulier ou pluriel (schools ARE built / school IS built).'
      },
      {
        title: 'Formuler des Résolutions Officielles',
        formula: 'Solution + IS / ARE needed most + TO + Verbe d\'action',
        frenchSummary: 'Structure reine au Bac pour exprimer la priorité absolue d\'une mesure face à une crise.',
        officialBacRule: '« Education is needed most to prevent early pregnancies. » | « Jobs are needed most to end unemployment. »',
        examples: [
          { english: 'Proper sanitation is needed most to prevent waterborne diseases.', french: 'Un assainissement adéquat est le plus nécessaire pour prévenir les maladies.' },
          { english: 'Renewable energy investments are needed most to cut emissions.', french: 'Les investissements en énergies renouvelables sont les plus nécessaires pour réduire les émissions.' }
        ],
        commonTrap: 'Attention à l\'accord : "sanitation" est indénombrable (IS needed), tandis que "jobs" est pluriel (ARE needed).'
      }
    ],
    examPractice: [
      {
        type: 'Voix active -> passive (Bac 2026)',
        instruction: 'Transformez à la voix passive :',
        prompt: '1. The World Food Program defeated hunger in this village.\n-> Hunger ________________________________ in this village by the WFP.\n2. The local government implements stricter laws to protect the environment.\n-> Stricter laws ________________________________ by the local government to protect the environment.',
        correctAnswer: '1. was defeated — 2. are implemented',
        detailedExplanation: '1. defeated (Past Simple) -> was defeated.\n2. implements (Present Simple) -> are implemented (accord avec le pluriel "laws").'
      },
      {
        type: 'Structuration de solutions (Grammar Check)',
        instruction: 'Reliez les éléments pour former une phrase correcte selon la règle du MEN :',
        prompt: 'Éléments : (Proper sanitation) / (are/is needed most) / (to prevent) / (diseases).',
        correctAnswer: 'Proper sanitation is needed most to prevent diseases.',
        detailedExplanation: 'Sanitation est un nom indénombrable singulier, donc on utilise "is needed most" et non "are".'
      }
    ],
    lessons: [
      {
        id: 'u9-l1',
        unitId: 9,
        title: 'Vocabulaire : Agences de l\'ONU, Crises & ODD',
        description: 'UNICEF, USAID, WHO, WFP, pauvreté, Kere et verbes d\'action à fort impact.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u9-e1',
            type: 'multiple_choice',
            question: 'Which United Nations body focuses specifically on fighting hunger and delivering food assistance (including during the Kere)?',
            options: ['WFP (PAM)', 'UNESCO', 'ILO (OIT)', 'WTO'],
            correctAnswer: 'WFP (PAM)',
            explanation: 'WFP (World Food Program / Programme Alimentaire Mondial) lutte contre la faim et le Kere dans le Sud de Madagascar.',
            audioText: 'The World Food Program coordinates emergency relief in drought-stricken areas.'
          },
          {
            id: 'u9-e2',
            type: 'sentence_builder',
            question: 'Reconstituez l\'objectif de développement durable : "We must eradicate poverty and empower women"',
            initialWords: ['We', 'must', 'eradicate', 'poverty', 'and', 'empower', 'women'],
            correctAnswer: 'We must eradicate poverty and empower women',
            explanation: '« To eradicate poverty » et « To empower women » sont les deux verbes d\'action clés du programme.',
            audioText: 'We must eradicate poverty and empower women.'
          }
        ]
      },
      {
        id: 'u9-l2',
        unitId: 9,
        title: 'Grammaire : Voix Passive de Rapport & Résolutions Clés',
        description: 'Maîtrisez la voix passive diplomatique et la formule "is/are needed most to".',
        xpReward: 35,
        category: 'grammar',
        exercises: [
          {
            id: 'u9-e3',
            type: 'multiple_choice',
            question: 'Convert to passive voice: "USAID provided medical supplies to the rural clinic."',
            options: [
              'Medical supplies were provided to the rural clinic by USAID.',
              'Medical supplies was provided to the clinic.',
              'Medical supplies are providing by USAID.',
              'Medical supplies had provided.'
            ],
            correctAnswer: 'Medical supplies were provided to the rural clinic by USAID.',
            explanation: 'Supplies est pluriel au prétérit -> were provided.',
            audioText: 'Medical supplies were provided to the rural clinic by USAID.'
          },
          {
            id: 'u9-e4',
            type: 'fill_blank',
            question: 'Complete the priority solution formula: "New jobs ________ needed most to end rural poverty."',
            options: ['are', 'is', 'have', 'were being'],
            correctAnswer: 'are',
            explanation: 'Jobs est un nom pluriel dénombrable, donc accord avec « ARE needed most ».',
            audioText: 'New jobs are needed most to end rural poverty.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // UNIT 10: LEADERSHIP AND YOUTH EMPOWERMENT
  // ==========================================
  {
    id: 10,
    number: '10',
    title: 'Leadership, Governance & Youth Empowerment',
    frenchTitle: 'Le leadership des jeunes, gouvernance et engagement citoyen',
    businessTheme: 'Executive Leadership, Civic Engagement & Persuasive Rhetoric',
    executiveSummary: 'Abordez les modèles politiques (démocratie, monarchie avec Andrianampoinimerina et Ranavalona I), les élections, l\'éthique publique (lutte contre le détournement de fonds) et la prise de parole. Maîtrisez les structures rhétoriques de haut vol : le Conditionnel Passé (Type 3), l\'inversion emphatique ("Only if we... will we..."), la restriction ("Unless we...") et les connecteurs de concession (Although, Despite, In spite of).',
    competenceVisee: 'Rédiger et prononcer un discours de campagne ou une plaidoirie pour défendre une cause d\'intérêt public ou un projet d\'entreprise.',
    keyVocabulary: [
      { term: 'Youth empowerment', french: 'Autonomisation et responsabilisation des jeunes', example: 'Youth empowerment programs develop future entrepreneurial leaders.', businessApplication: 'Investissement dans les talents émergents et la relève managériale.' },
      { term: 'Public speaking', french: 'Prise de parole en public / art oratoire', example: 'Mastering public speaking is essential to inspire teams and rally investors.', businessApplication: 'Compétence fondamentale pour les cadres et fondateurs.' },
      { term: 'Embezzlement', french: 'Détournement de fonds', example: 'Strict digital accounting prevents fraud and embezzlement.', businessApplication: 'Criminalité financière et contrôle interne d\'audit.' },
      { term: 'Polling station / Voting booth', french: 'Bureau de vote / isoloir', example: 'Citizens gather peacefully at their local polling station to elect representatives.', businessApplication: 'Processus démocratique et civisme.' }
    ],
    grammarPoints: [
      {
        title: 'Conditionnel Passé / Type 3 (Hypothèse non réalisée)',
        formula: 'IF + Past Perfect (had + PP), WOULD HAVE + Participe Passé',
        frenchSummary: 'Pour imaginer ce qui se serait produit si une condition passée avait été différente.',
        officialBacRule: '« If Madagascar had not gained independence in 1960, its history would have been different. »',
        examples: [
          { english: 'If the citizens had voted for the right candidate in 2018, the country would not have experienced this crisis.', french: 'Si les citoyens avaient voté pour le bon candidat en 2018, le pays n\'aurait pas connu cette crise.' },
          { english: 'If our firm had invested earlier, we would have secured a dominant market share.', french: 'Si notre cabinet avait investi plus tôt, nous aurions conquis une part de marché dominante.' }
        ],
        commonTrap: 'Ne JAMAIS mettre "would" dans la proposition introduite par IF (dites "If I had known", et non "If I would have known").'
      },
      {
        title: 'L\'Inversion Emphatique de Promesse (Style Oratoire)',
        formula: 'ONLY IF we [Verbe], WILL WE [Base Verbale]',
        frenchSummary: 'Structure rhétorique noble pour marquer une condition exclusive dans un discours.',
        officialBacRule: '« Only if we fight against corruption, will we develop our nation. »',
        examples: [
          { english: 'Only if we innovate continuously, will we maintain our market leadership.', french: 'Ce n\'est que si nous innovons continuellement que nous maintiendrons notre leadership.' },
          { english: 'Only if the government creates jobs, will we eradicate poverty.', french: 'Ce n\'est que si le gouvernement crée des emplois que nous éradiquerons la pauvreté.' }
        ],
        commonTrap: 'Bien inverser le sujet et l\'auxiliaire dans la deuxième proposition ("will we" et non "we will").'
      },
      {
        title: 'Structure Restrictive avec « UNLESS »',
        formula: 'UNLESS we [Verbe au présent], we will [not]...',
        frenchSummary: 'Unless = « À moins que / Si nous ne... pas ».',
        officialBacRule: '« Unless we empower the youth, our country will not prosper. »',
        examples: [
          { english: 'Unless we meet the regulatory standards, the board will cancel the merger.', french: 'À moins que nous ne respections les normes réglementaires, le conseil annulera la fusion.' }
        ],
        commonTrap: 'Ne pas mettre de négation dans la subordonnée après unless (Unless contient déjà "if... not").'
      },
      {
        title: 'Connecteurs de Concession (Although vs Despite)',
        formula: 'Although / Even though + Sujet + Verbe   VS   Despite / In spite of + Nom / V-ing',
        frenchSummary: 'Marquer une contradiction ou concession dans l\'argumentation.',
        officialBacRule: '« Although challenges exist, we remain confident. » VS « Despite the economic challenges... »',
        examples: [
          { english: 'Although budget constraints were tight, the campaign reached record audiences.', french: 'Bien que les contraintes budgétaires fussent serrées, la campagne a touché une audience record.' },
          { english: 'Despite severe logistical delays, the deliverables were completed.', french: 'Malgré de graves retards logistiques, les livrables ont été achevés.' }
        ],
        commonTrap: 'Ne jamais dire "Despite of" (on dit "Despite" ou "In spite of").'
      }
    ],
    examPractice: [
      {
        type: 'Inversion emphatique de promesse (Bac 2026)',
        instruction: 'Réécrivez en inversant la structure pour le style oratoire :',
        prompt: 'Phrase A : We will eradicate poverty only if the government creates new jobs.\nPhrase B : Only if the government creates new jobs, __________________________________',
        correctAnswer: 'will we eradicate poverty.',
        detailedExplanation: 'L\'adverbe restrictif "Only if..." placé en tête entraîne l\'inversion sujet-auxiliaire : "...will we eradicate poverty".'
      },
      {
        type: 'Conditionnel Type 3 (Grammar Check)',
        instruction: 'Conjuguez les verbes au conditionnel passé :',
        prompt: '« If the citizens (vote) ______________ for the right candidate in 2018, the country (not experience) ____________________________ this political crisis. »',
        correctAnswer: 'had voted — would not have experienced',
        detailedExplanation: 'Hypothèse passée irréelle : If + Past Perfect (had voted), would not have + participe passé (would not have experienced).'
      }
    ],
    lessons: [
      {
        id: 'u10-l1',
        unitId: 10,
        title: 'Vocabulaire : Gouvernance, Élections & Prise de parole',
        description: 'Modèles politiques, souverains historiques de Madagascar, processus de vote et intégrité.',
        xpReward: 25,
        category: 'vocabulary',
        exercises: [
          {
            id: 'u10-e1',
            type: 'multiple_choice',
            question: 'What historical figures of Malagasy leadership are explicitly cited in the official MEN curriculum?',
            options: [
              'King Andrianampoinimerina and Queen Ranavalona I',
              'George Washington and Abraham Lincoln',
              'Nelson Mandela and Desmond Tutu',
              'Julius Caesar and Augustus'
            ],
            correctAnswer: 'King Andrianampoinimerina and Queen Ranavalona I',
            explanation: 'Le MEN cite explicitement les souverains historiques malgaches (Andrianampoinimerina, Ranavalona I) dans l\'analyse des régimes monarchiques.',
            audioText: 'Monarchy in Madagascar is exemplified by rulers such as Andrianampoinimerina and Ranavalona the First.'
          },
          {
            id: 'u10-e2',
            type: 'fill_blank',
            question: 'Complete: "The illegal misappropriation of corporate or public funds is termed ________."',
            options: ['embezzlement', 'fair-play', 'produce', 'curfew'],
            correctAnswer: 'embezzlement',
            explanation: '« Embezzlement » = détournement de fonds publics ou d\'entreprise.',
            audioText: 'Strict financial audits prevent fraudulent embezzlement.'
          }
        ]
      },
      {
        id: 'u10-l2',
        unitId: 10,
        title: 'Grammaire Oratoire : Conditionnel Type 3 & Inversion',
        description: 'L\'inversion "Only if... will we...", Type 3 (If + had + pp, would have + pp) et concession.',
        xpReward: 35,
        category: 'grammar',
        exercises: [
          {
            id: 'u10-e3',
            type: 'sentence_builder',
            question: 'Reconstituez l\'inversion oratoire de promesse :',
            initialWords: ['Only', 'if', 'we', 'fight', 'corruption,', 'will', 'we', 'develop', 'our', 'nation'],
            correctAnswer: 'Only if we fight corruption, will we develop our nation',
            explanation: 'Structure officielle du MEN : « Only if we [Verbe], will we [Verbe] ».',
            audioText: 'Only if we fight corruption, will we develop our nation.'
          },
          {
            id: 'u10-e4',
            type: 'multiple_choice',
            question: 'Complete the restrictive sentence: "________ we empower the youth, our country will not prosper."',
            options: ['Unless', 'Although', 'Because', 'Despite'],
            correctAnswer: 'Unless',
            explanation: '« Unless » signifie « À moins que » et exprime une condition sine qua non.',
            audioText: 'Unless we empower the youth, our country will not prosper.'
          },
          {
            id: 'u10-e5',
            type: 'fill_blank',
            question: 'Form the unreal past conditional: "If he had prepared his campaign speech, he ________ have won the election."',
            options: ['would', 'will', 'did', 'had'],
            correctAnswer: 'would',
            explanation: 'Conditionnel Type 3 : If + had + PP, WOULD have + PP.',
            audioText: 'If he had prepared his campaign speech, he would have won the election.'
          }
        ]
      }
    ]
  }
];

export const INITIAL_USER_PROFILE = {
  name: 'Cadre Dirigeant / Candidat Bac',
  avatar: '👨‍💼',
  goal: 'business_executive' as const,
  dailyGoalMinutes: 15,
  dailyStreak: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  xp: 140,
  executiveLevel: 2,
  executiveRank: 'Senior Analyst / Mention Bien',
  hearts: 5,
  completedLessons: ['u1-l1'],
  completedUnits: [],
  unitProgress: {
    1: 33,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0
  },
  mistakesBank: [],
  soundEnabled: true,
  audioSpeechEnabled: true
};
