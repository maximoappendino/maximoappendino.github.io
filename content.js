// =============================================================
// CONTENT.JS — Edit all text and images here.
//
// Structure:
//   SITE_CONTENT.en  → English content
//   SITE_CONTENT.es  → Spanish content
//
// To add a new language:
//   1. Copy the entire 'es' block below and rename the key (e.g. 'fr')
//   2. Translate the strings
//   3. In script.js, add the new lang key to the LANGS array at the top.
// =============================================================

const SITE_CONTENT = {

  // Active language — changed at runtime by the language dropdown
  currentLang: 'en',

  // ── ENGLISH ──────────────────────────────────────────────────
  en: {
    name: 'English',

    nav: ['1. CV', '2. Demos', '3. Coding', '4. Personal', '5. Future'],

    buttons: {
      schedule: 'Schedule Interview',
      whatsapp:  'WhatsApp Me',
    },

    // ── CV ───────────────────────────────────────────────────────
    cv: {
      portrait: { src: 'img/pp.jpeg', alt: 'Maximo Appendino' },
      name:     'Maximo Appendino',
      title:    'Salesman, Software Developer, Voice Actor & Medical, Legal, Financial Interpreter',

      contact: {
        heading: 'Contact',
        email:   'maximoappendinopadilla@gmail.com',
        phones:  ['+54 9 351 714-6520', '+44 1217519880'],
      },

      languages: {
        heading: 'Languages',
        items: [
          { flag: '🇦🇷', name: 'Spanish', level: 'Native' },
          { flag: '🇬🇧', name: 'English', level: 'Professional' },
          { flag: '🇮🇹', name: 'Italian', level: 'Conversational' },
        ],
      },

      availability: {
        heading: 'Availability',
        items:   ['Immediate / Full-time', 'Remote & On-site'],
      },

      jobInterests: {
        heading: 'Job Interests',
        text:    'Software Development, Professional Translation, Voice Acting, Sales & Operations.',
      },

      relocation: {
        heading: 'Relocation',
        text:    'Open to international relocation.',
      },

      visas: {
        heading: 'Visas & Access',
        items:   ['USA Visa', 'European Union Access', 'Spain', 'Italy', 'United Kingdom'],
      },

      experience: {
        heading: 'Work Experience (Newest to oldest)',
        items: [
          {
            title:       'Operations & Full Stack Developer @ Papaya',
            location:    'Chicago, US',
            date:        '2025 - 2026',
            description: 'I began my role at Papaya as a tutor in English and Mathematics, applying and further developing the skills I had previously acquired at Like Institute. Over time, I transitioned into an Operations role, taking on greater technical and organizational responsibilities, where I designed and implemented a new system, building its database as well as its back-end and front-end components. I also developed monitoring tools to improve operational efficiency, managed support tickets, and ensured the accuracy of scheduling for both students and tutors. My tenure at Papaya came to an end due to the company\'s financial difficulties, which ultimately led to bankruptcy and widespread staff reductions.',
            logo: { src: 'img/cv-papaya.jpeg', alt: 'Papaya Tutors Logo', url: 'https://papayatutor.com' },
          },
          {
            title:       'Travel Agent @ Reservation Desk, Reservation Counter, Travelpass',
            location:    'Utah, US',
            date:        '2024 - 2026',
            description: 'Successfully completed rigorous sales training and consistently applied a high sense of urgency to drive conversions within a structured sales framework. While adhering to strict corporate protocols, I leveraged the creative flexibility allowed within the process to adapt my persuasive approach to a diverse array of customer personalities and needs. This role served as a dynamic environment for refining advanced sales techniques, particularly through high-volume outbound cold-calling aimed at promoting exclusive travel experiences. Recognized as a top performer, I demonstrated exceptional sales acumen and was awarded a Smart TV for excellence during a high-stakes sales competition. Initially focused on exhaustive consultation, I rapidly evolved my strategy toward a more assertive, fast-paced closing style, significantly reducing average handle time while increasing success rates. I developed robust resilience in managing complex rejections, technical credit card processing issues, and high-pressure negotiations, consistently going above and beyond to secure the optimal arrangements for clients while maintaining a "now or never" closing philosophy.',
            logo: { src: 'img/cv-reservation-desk.svg', alt: 'Reservation Desk Logo', url: 'https://www.reservationdesk.com' },
          },
          {
            title:       'Medical, Legal & Financial Interpreter @ Propio Language Services',
            location:    'Kansas, US',
            date:        '2022 - 2024',
            description: 'Provided professional consecutive translation and interpretation services in both English and Spanish. This was a demanding role that allowed me to gain rewarding experience working alongside doctors, legal professionals, law enforcement, and sales teams. Although I worked remotely, I utilized traditional note-taking techniques. While initially slower than keyboard users, my proficiency and speed in shorthand improved significantly over time.',
            logo: { src: 'img/cv-propio.png', alt: 'Propio Language Services Logo', url: 'https://propio.com' },
          },
          {
            title:       'English Teacher @ Like Institute',
            location:    'Rio Ceballos, Cordoba, Argentina',
            date:        '2021 - 2022',
            description: 'English teacher at Like Institute, focusing on language development and student engagement in a dynamic learning environment.',
            logo: { src: 'img/cv-like-institute.png', alt: 'Like Institute Logo', url: 'https://likeinstitute.com/' },
          },
          {
            title:       'Salesman @ Royal Prestige',
            location:    'Cordoba, Cordoba, Argentina',
            date:        '2020 - 2021',
            description: 'Executed a high-intensity direct sales strategy centered on cold-calling and conducting live product demonstrations to secure immediate on-the-spot closures. A critical component of the role involved strategic lead generation and referral management to ensure a continuous sales pipeline. Despite entering the field at a young age, I achieved significant financial success and discovered a profound passion for interpersonal connection and the psychological complexities of the sales industry. This experience solidified my commitment to professional sales, proving my ability to build rapport quickly, handle high-pressure environments, and find genuine satisfaction in achieving ambitious targets through direct client engagement.',
            logo: { src: 'img/cv-royal-prestige.jpg', alt: 'Royal Prestige Logo', url: 'https://www.royalprestige.com/' },
          },
        ],
      },

      education: {
        heading: 'Education',
        items: [
          {
            title:       'Computer Scientist @ FAMAF - UNC - Argentina',
            date:        '2026 - present',
            description: 'Engaged in math competitions and various projects related to programming and computing data. This career follows years of self-taught programming and a deep interest in computer operations.',
            logo: { src: 'img/cv-famaf.jpg', alt: 'FAMAF Logo', url: 'https://www.famaf.unc.edu.ar' },
          },
          {
            title:       'Legal Translator @ Faculty of Languages (FL) - UNC - Argentina',
            date:        '2021 - 2024',
            description: 'Completed thesis practice during this program, which significantly advanced my English proficiency and understanding of linguistics. The curriculum had a strong focus on British English and IPA pronunciation.',
            logo: { src: 'img/cv-fl.png', alt: 'Facultad de Lenguas Logo', url: 'https://lenguas.unc.edu.ar' },
          },
          {
            title:       'Psychology @ UNC - Argentina',
            date:        '2020 - 2021',
            description: 'Indulged in theoretical studies, history, and biology. My studies took place during the pandemic, providing a unique perspective on human behavior and psychological theory.',
            logo: { src: 'img/cv-psicologia.jpg', alt: 'Facultad de Psicologia Logo', url: 'https://www.unc.edu.ar/acad%C3%A9micas/facultad-de-psicolog%C3%ADa' },
          },
          {
            title:       'Instituto Educativo Nuevo Milenio (IENM) - Unquillo, Cordoba, Argentina',
            date:        '2014 - 2020',
            description: 'High School Diploma with a specialization in Communication. Developed foundational skills in media and interpersonal communication.',
            logo: { src: 'img/cv-ienm.webp', alt: 'IENM Logo', url: 'https://ienm.edu.ar/' },
          },
        ],
      },

      software: {
        heading: 'Software Experience',
        categories: [
          {
            name: 'Graphical Engines',
            items: [
              { label: 'S&Box',          url: 'https://sbox.game/',                                                    icon: 'fas fa-cube',              years: '8 Months' },
              { label: 'Unity',          url: 'https://unity.com/',                                                    icon: 'fab fa-unity',             years: '3 Years'  },
              { label: 'Unreal Engine',  url: 'https://www.unrealengine.com/',                                         icon: 'fas fa-ghost',             years: '2 Years'  },
              { label: 'Godot',          url: 'https://godotengine.org/',                                              icon: 'fas fa-robot',             years: '2 Years'  },
              { label: 'Vulkan',         url: 'https://www.vulkan.org/',                                               icon: 'fas fa-microchip',         years: '1 Year'   },
              { label: 'OpenGL',         url: 'https://www.opengl.org/',                                               icon: 'fas fa-code',              years: '2 Years'  },
            ],
          },
          {
            name: 'Programming',
            items: [
              { label: 'C++',            url: 'https://isocpp.org/',                                                   icon: 'fab fa-cuttlefish',        years: '7 Years'  },
              { label: 'Python',         url: 'https://www.python.org/',                                               icon: 'fab fa-python',            years: '8 Years'  },
              { label: 'JavaScript',     url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',               icon: 'fab fa-js',                years: '9 Years'  },
              { label: 'Java',           url: 'https://www.java.com/',                                                 icon: 'fab fa-java',              years: '6 Years'  },
              { label: 'NodeJS',         url: 'https://nodejs.org/',                                                   icon: 'fab fa-node-js',           years: '7 Years'  },
              { label: 'HTML',           url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',                     icon: 'fab fa-html5',             years: '10 Years' },
              { label: 'CSS',            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',                      icon: 'fab fa-css3-alt',          years: '10 Years' },
              { label: 'React',          url: 'https://react.dev/',                                                    icon: 'fab fa-react',             years: '5 Years'  },
            ],
          },
          {
            name: 'Adobe Tools',
            items: [
              { label: 'Photoshop',      url: 'https://www.adobe.com/products/photoshop.html',                         icon: 'fas fa-paint-brush',       years: '12 Years' },
              { label: 'Illustrator',    url: 'https://www.adobe.com/products/illustrator.html',                       icon: 'fas fa-pen-nib',           years: '10 Years' },
              { label: 'Premiere',       url: 'https://www.adobe.com/products/premiere.html',                          icon: 'fas fa-video',             years: '9 Years'  },
              { label: 'InDesign',       url: 'https://www.adobe.com/products/indesign.html',                          icon: 'fas fa-file-alt',          years: '8 Years'  },
            ],
          },
          {
            name: 'Office Suites',
            items: [
              { label: 'Writer / Word',  url: 'https://www.libreoffice.org/',                                          icon: 'fas fa-file-word',         years: '15 Years' },
              { label: 'Calc / Excel',   url: 'https://www.libreoffice.org/',                                          icon: 'fas fa-file-excel',        years: '12 Years' },
              { label: 'Impress / PPT',  url: 'https://www.libreoffice.org/',                                          icon: 'fas fa-file-powerpoint',   years: '10 Years' },
            ],
          },
          {
            name: '3D / 2D Design',
            items: [
              { label: 'Krita',          url: 'https://krita.org/',                                                    icon: 'fas fa-palette',           years: '5 Years'  },
              { label: 'Blender',        url: 'https://www.blender.org/',                                              icon: 'fas fa-shapes',            years: '3 Years'  },
              { label: 'Aseprite',       url: 'https://www.aseprite.org/',                                             icon: 'fas fa-th',                years: '4 Years'  },
              { label: 'InkScape',       url: 'https://inkscape.org/',                                                 icon: 'fas fa-vector-square',     years: '2 Years'  },
            ],
          },
          {
            name: 'GTM & Sales Tech',
            items: [
              { label: 'Clay',           url: 'https://www.clay.com/',                                                 icon: 'fas fa-database',          years: '3 Years'  },
              { label: 'Apollo',         url: 'https://www.apollo.io/',                                                icon: 'fas fa-rocket',            years: '4 Years'  },
              { label: 'HubSpot',        url: 'https://www.hubspot.com/',                                              icon: 'fab fa-hubspot',           years: '4 Years'  },
              { label: 'Clearbit',       url: 'https://clearbit.com/',                                                 icon: 'fas fa-bullseye',          years: '3 Years'  },
              { label: 'ZoomInfo',       url: 'https://www.zoominfo.com/',                                             icon: 'fas fa-search-plus',       years: '4 Years'  },
              { label: 'Datanyze',       url: 'https://www.datanyze.com/',                                             icon: 'fas fa-chart-line',        years: '2 Years'  },
              { label: 'LeadGenius',     url: 'https://www.leadgenius.com/',                                           icon: 'fas fa-user-check',        years: '2 Years'  },
              { label: 'Zoho',           url: 'https://www.zoho.com/',                                                 icon: 'fas fa-cloud',             years: '5 Years'  },
              { label: 'Creatio',        url: 'https://www.creatio.com/',                                              icon: 'fas fa-cog',               years: '2 Years'  },
              { label: 'Salesforce',     url: 'https://www.salesforce.com/',                                           icon: 'fab fa-salesforce',        years: '4 Years'  },
              { label: 'Lemlist',        url: 'https://www.lemlist.com/',                                              icon: 'fas fa-paper-plane',       years: '3 Years'  },
              { label: 'Instantly.ai',   url: 'https://instantly.ai/',                                                 icon: 'fas fa-envelope-open-text',years: '2 Years'  },
            ],
          },
          {
            name: 'Preferred OS',
            items: [
              { label: 'Fedora',         url: 'https://fedoraproject.org/',                                            icon: 'fab fa-fedora',            years: '' },
              { label: 'Arch',           url: 'https://archlinux.org/',                                                icon: 'fas fa-linux',             years: '' },
              { label: 'NixOS',          url: 'https://nixos.org/',                                                    icon: 'fas fa-snowflake',         years: '' },
              { label: 'Gentoo',         url: 'https://www.gentoo.org/',                                               icon: 'fas fa-terminal',          years: '' },
              { label: 'Ubuntu',         url: 'https://ubuntu.com/',                                                   icon: 'fab fa-ubuntu',            years: '' },
            ],
          },
        ],
      },

      qr: {
        text: 'Scan to visit my website:',
        src:  'img/qr.svg',
        alt:  'QR Code',
      },

      instructions: {
        heading: 'How to use this website',
        text:    'I recommend navigating through the tabs at the top by clicking them or typing 1, 2, 3, 4, 5 while on the page.',
      },

      notes: {
        heading:   'Notes',
        text:      'If you are viewing this via PDF, you can access my complete portfolio at:',
        url:       'https://maximoappendino.github.io',
        visitText: 'Visit the website to access interactive features and my voice acting demos.',
      },
    },

    // ── DEMOS ────────────────────────────────────────────────────
    demos: {
      header: { title: 'My Demos', subtitle: 'A collection of my voice acting work.' },
      // audioSrc and imageSrc are paths relative to index.html
      items: [
        {
          audioSrc:    'demos/coffee-ad.wav',
          imageSrc:    'img/barista.png',
          title:       'Coffee Advertisement',
          description: 'Rise & Grind.',
        },
        {
          audioSrc:    'demos/alpura-demo.wav',
          imageSrc:    'img/cow-argentinian.png',
          title:       'Publicidad Alpura',
          description: 'Publicidad de leche Alpura',
        },
        {
          audioSrc:    'demos/demo1.wav',
          imageSrc:    'img/demo3.jpg',
          title:       'Old Commercial',
          description: 'A classic old commercial with that static noise.',
        },
      ],
    },

    // ── CODING ───────────────────────────────────────────────────
    coding: {
      githubUser:       'maximoappendino',
      githubLabel:      '>> MY_GITHUB',
      scrollingText:    '* BASH * HTML5 * CSS3 * JAVASCRIPT * PYTHON * NODEJS * C++ * RUST',
      activityLabel:    '// GITHUB_ACTIVITY_MONITOR',
      reposLabel:       '// REPOSITORIES_DATA',
      objectivesLabel:  '// CURRENT_OBJECTIVES',
      objectives: [
        '> [RUNNING] HTML/CSS/JS Mastery for local e-commerce solutions',
        '> [RUNNING] Professional Voice Acting Studio construction',
        '> [RUNNING] Academic Excellence @ FAMAF (Computer Science)',
        '> [PENDING] Global travel & networking expansion (ETA: 2030)',
      ],
      loadingLines: [
        '[SYSTEM] Accessing GitHub API...',
        '[SYSTEM] Loading repository data...',
      ],
      errorText:   '[ERROR] Failed to establish connection to GitHub API.',
      footerText:  'Total memory: 640K... OK',
      noDesc:      'No description provided.',
    },

    // ── FUTURE ───────────────────────────────────────────────────
    future: {
      title: 'The Grand Prophecy',
      items: [
        {
          year:  '2026',
          title: 'New Year, New Possibilities',
          text:  'This year, I aim to secure a position that aligns with my long-term career goals in software development, voice acting, or sales. I am dedicated to excelling in my university studies by focusing on mathematics and advanced technical skills. I also plan to adopt a more disciplined routine to further my personal and professional growth.',
          image: { src: 'img/future-eye-of-the-tiger.jpeg', alt: 'Eye of the Tiger' },
        },
        {
          year:  '2030',
          title: 'Traveling Abroad',
          text:  'By 2030, I envision myself traveling across Europe, building a strong professional network, and working on large-scale projects that I am passionate about. My goal is to establish a business that creates opportunities for others and leverages my technical background. By this time, I expect to have completed my university degree and finished building my personal data center.',
          image: { src: 'img/future-business.jpg', alt: 'Business Meeting' },
        },
        {
          year:  '2035',
          title: 'Building Our New Home',
          text:  'By 2035, I hope to have established a home for my wife and me. For years, I have dreamed of looking out of our window at a beautiful sunset, sharing that moment with the love of my life.',
          image: { src: 'img/future-sunset.avif', alt: 'Couple watching sunset' },
        },
      ],
    },

    // ── PERSONAL / BLOG ──────────────────────────────────────────
    personal: {
      header:   { title: 'Just Me.', subtitle: 'Thoughts, coffee, and pixels.' },
      readMore: 'Read More',
      blogs: [
        {
          id:      'morning-routine',
          image:   'img/blog-sunrise.jpeg',
          title:   'My Morning Routine',
          preview: 'Why I wake up at 5 AM to run...',
          // Each string becomes one <p> in the modal
          content: [
            'Waking up at 5 AM isn\'t for everyone, but for me, it\'s a game-changer. The quiet stillness of the early morning provides the perfect environment to focus, plan my day, and get a head start on my goals.',
            'My routine usually consists of a 30-minute run, followed by meditation and a healthy breakfast. This combination of physical activity and mindfulness helps me start the day with a clear head and a positive attitude.',
            'Of course, there are days when I\'d rather stay in bed, but the benefits of my morning routine far outweigh the temporary discomfort. It\'s a discipline that has had a profound impact on my productivity and overall well-being.',
          ],
        },
        {
          id:      'games',
          image:   'img/blog-arcade.jpg',
          title:   'All-Time Favourites',
          preview: 'These are the games that shaped my soul.',
          content: [
            'Arcade games and old consoles were a huge part of my life growing up. From the Game Boy Advance to the PlayStation 2, games felt raw, challenging, and full of personality. Titles like Metal Slug, Castlevania, Kirby, Mortal Kombat, Urban Reign, and Resident Evil 4 left a permanent mark on me.',
            'Some games weren\'t just entertainment — they were worlds. Skyrim was one of those games that made me lose track of time entirely, while arcade machines taught me persistence through difficulty and repetition.',
            'Modern games still manage to capture that magic sometimes. Outer Wilds and Rain World stand out as experiences that value curiosity, atmosphere, and discovery over hand-holding. They remind me why I fell in love with games in the first place.',
          ],
        },
        {
          id:      'lost-media',
          image:   'img/blog-popeye.jpeg',
          title:   'Preserving Lost Media',
          preview: 'How I host media to preserve culture for future generations.',
          content: [
            'Preserving media is more than just a hobby; it\'s a way to ensure that the culture and history captured in old films, music, and software aren\'t lost to time. By hosting and sharing this media, I hope to contribute to a collective effort to keep our digital heritage alive.',
            'Whether it\'s an obscure 80s commercial or a piece of software that was almost forgotten, every bit of media tells a story. I find great satisfaction in the technical challenge of rescuing and restoring these digital artifacts.',
          ],
        },
        {
          id:      'computers',
          image:   'img/blog-computer.webp',
          title:   'How I Got into Computers',
          preview: 'Ever since I was young, I\'ve enjoyed using computers and troubleshooting various errors. I have certainly faced many along the way.',
          content: [
            'I\'ve been fascinated by computers for as long as I can remember. At first, it was pure curiosity — clicking things, breaking things, and trying to understand why something worked or didn\'t.',
            'Over time, that curiosity turned into problem-solving. Fixing errors, tweaking systems, and learning how software interacts with hardware became second nature. Computers stopped being tools and started feeling like systems I could truly understand.',
            'That early exposure shaped the way I think today. I\'m comfortable experimenting, failing, and digging deeper until something makes sense. Computers taught me patience, logic, and the value of learning by doing.',
          ],
        },
        {
          id:      'discipline',
          image:   'img/blog-discipline.jpg',
          title:   'Discipline and Nature',
          preview: 'This is the story of how I pushed my limits to grow stronger, both physically and mentally.',
          content: [
            'Meditation, breath control, and martial arts have always felt deeply connected to me. Practices like kung fu and muay thai aren\'t just about combat — they\'re about discipline, awareness, and understanding how fragile and powerful the human body truly is.',
            'Spending time in nature sharpens that awareness even more. Hiking in the mountains without equipment, free diving, and being fully immersed in water or open air strips life down to its essentials: breath, focus, and movement. Every step and every inhale matters.',
            'There\'s something humbling about realizing how deadly techniques can be, and how calm the mind must be to control them. Nature teaches the same lesson — respect it, or it will overwhelm you. Balance is everything.',
          ],
        },
      ],
    },
  },

  // ── SPANISH ──────────────────────────────────────────────────
  es: {
    name: 'Español',

    nav: ['1. CV', '2. Demos', '3. Código', '4. Personal', '5. Futuro'],

    buttons: {
      schedule: 'Agendar Entrevista',
      whatsapp:  'WhatsApp',
    },

    cv: {
      portrait: { src: 'img/pp.jpeg', alt: 'Maximo Appendino' },
      name:     'Maximo Appendino',
      title:    'Vendedor, Desarrollador de Software, Actor de Voz e Intérprete Médico, Legal y Financiero',

      contact: {
        heading: 'Contacto',
        email:   'maximoappendinopadilla@gmail.com',
        phones:  ['+54 9 351 714-6520', '+44 1217519880'],
      },

      languages: {
        heading: 'Idiomas',
        items: [
          { flag: '🇦🇷', name: 'Español', level: 'Nativo' },
          { flag: '🇬🇧', name: 'Inglés',  level: 'Profesional' },
          { flag: '🇮🇹', name: 'Italiano', level: 'Conversacional' },
        ],
      },

      availability: {
        heading: 'Disponibilidad',
        items:   ['Inmediata / Tiempo completo', 'Remoto y Presencial'],
      },

      jobInterests: {
        heading: 'Intereses Laborales',
        text:    'Desarrollo de Software, Traducción Profesional, Actuación de Voz, Ventas y Operaciones.',
      },

      relocation: {
        heading: 'Reubicación',
        text:    'Abierto a reubicación internacional.',
      },

      visas: {
        heading: 'Visas y Acceso',
        items:   ['Visa EEUU', 'Acceso Unión Europea', 'España', 'Italia', 'Reino Unido'],
      },

      experience: {
        heading: 'Experiencia Laboral (Más reciente a más antigua)',
        items: [
          {
            title:       'Operaciones y Desarrollador Full Stack @ Papaya',
            location:    'Chicago, EEUU',
            date:        '2025 - 2026',
            description: 'Comencé mi rol en Papaya como tutor de inglés y matemáticas, aplicando y desarrollando aún más las habilidades adquiridas en Like Institute. Con el tiempo, transicioné a un rol de Operaciones, asumiendo mayores responsabilidades técnicas y organizativas: diseñé e implementé un nuevo sistema, construyendo su base de datos, su back-end y su front-end. También desarrollé herramientas de monitoreo para mejorar la eficiencia operativa, gestioné tickets de soporte y aseguré la precisión de la programación de horarios para estudiantes y tutores. Mi tiempo en Papaya llegó a su fin debido a las dificultades financieras de la empresa, que llevaron a la quiebra y a amplias reducciones de personal.',
            logo: { src: 'img/cv-papaya.jpeg', alt: 'Logo Papaya Tutors', url: 'https://papayatutor.com' },
          },
          {
            title:       'Agente de Viajes @ Reservation Desk, Reservation Counter, Travelpass',
            location:    'Utah, EEUU',
            date:        '2024 - 2026',
            description: 'Completé con éxito una rigurosa capacitación en ventas y apliqué consistentemente un alto sentido de urgencia para impulsar conversiones dentro de un marco de ventas estructurado. Si bien me adherí a estrictos protocolos corporativos, aproveché la flexibilidad creativa del proceso para adaptar mi enfoque persuasivo a una amplia variedad de personalidades y necesidades de los clientes. Reconocido como un artista de alto desempeño, demostré una excepcional perspicacia en ventas y recibí un Smart TV por excelencia durante una competencia de alto riesgo.',
            logo: { src: 'img/cv-reservation-desk.svg', alt: 'Logo Reservation Desk', url: 'https://www.reservationdesk.com' },
          },
          {
            title:       'Intérprete Médico, Legal y Financiero @ Propio Language Services',
            location:    'Kansas, EEUU',
            date:        '2022 - 2024',
            description: 'Proporcioné servicios profesionales de traducción e interpretación consecutiva en inglés y español. Este rol exigente me permitió ganar valiosa experiencia trabajando junto a médicos, profesionales legales, fuerzas del orden y equipos de ventas. Aunque trabajé de forma remota, utilicé técnicas tradicionales de taquigrafía, mejorando significativamente mi velocidad y competencia con el tiempo.',
            logo: { src: 'img/cv-propio.png', alt: 'Logo Propio Language Services', url: 'https://propio.com' },
          },
          {
            title:       'Profesor de Inglés @ Like Institute',
            location:    'Río Ceballos, Córdoba, Argentina',
            date:        '2021 - 2022',
            description: 'Profesor de inglés en Like Institute, con enfoque en el desarrollo del idioma y el compromiso de los estudiantes en un entorno de aprendizaje dinámico.',
            logo: { src: 'img/cv-like-institute.png', alt: 'Logo Like Institute', url: 'https://likeinstitute.com/' },
          },
          {
            title:       'Vendedor @ Royal Prestige',
            location:    'Córdoba, Córdoba, Argentina',
            date:        '2020 - 2021',
            description: 'Ejecuté una estrategia de ventas directas de alta intensidad centrada en llamadas en frío y demostraciones de productos en vivo para asegurar cierres inmediatos. A pesar de ingresar al campo a una edad temprana, logré un éxito financiero significativo y descubrí una profunda pasión por la conexión interpersonal y las complejidades psicológicas de la industria de ventas.',
            logo: { src: 'img/cv-royal-prestige.jpg', alt: 'Logo Royal Prestige', url: 'https://www.royalprestige.com/' },
          },
        ],
      },

      education: {
        heading: 'Educación',
        items: [
          {
            title:       'Ciencias de la Computación @ FAMAF - UNC - Argentina',
            date:        '2026 - presente',
            description: 'Participando en competencias de matemáticas y proyectos de programación y datos informáticos. Esta carrera sigue años de programación autodidacta y un profundo interés en las operaciones informáticas.',
            logo: { src: 'img/cv-famaf.jpg', alt: 'Logo FAMAF', url: 'https://www.famaf.unc.edu.ar' },
          },
          {
            title:       'Traductor Legal @ Facultad de Lenguas (FL) - UNC - Argentina',
            date:        '2021 - 2024',
            description: 'Completé la práctica de tesis durante este programa, avanzando significativamente mi dominio del inglés y la comprensión de la lingüística. El currículo tenía un fuerte enfoque en el inglés británico y la pronunciación IPA.',
            logo: { src: 'img/cv-fl.png', alt: 'Logo Facultad de Lenguas', url: 'https://lenguas.unc.edu.ar' },
          },
          {
            title:       'Psicología @ UNC - Argentina',
            date:        '2020 - 2021',
            description: 'Estudios teóricos, historia y biología durante la pandemia, brindando una perspectiva única sobre el comportamiento humano y la teoría psicológica.',
            logo: { src: 'img/cv-psicologia.jpg', alt: 'Logo Facultad de Psicología', url: 'https://www.unc.edu.ar/acad%C3%A9micas/facultad-de-psicolog%C3%ADa' },
          },
          {
            title:       'Instituto Educativo Nuevo Milenio (IENM) - Unquillo, Córdoba, Argentina',
            date:        '2014 - 2020',
            description: 'Bachiller con especialización en Comunicación. Desarrollo de habilidades fundamentales en medios y comunicación interpersonal.',
            logo: { src: 'img/cv-ienm.webp', alt: 'Logo IENM', url: 'https://ienm.edu.ar/' },
          },
        ],
      },

      software: {
        heading: 'Experiencia en Software',
        categories: [
          {
            name: 'Motores Gráficos',
            items: [
              { label: 'S&Box',          url: 'https://sbox.game/',                                                    icon: 'fas fa-cube',              years: '8 Meses' },
              { label: 'Unity',          url: 'https://unity.com/',                                                    icon: 'fab fa-unity',             years: '3 Años'  },
              { label: 'Unreal Engine',  url: 'https://www.unrealengine.com/',                                         icon: 'fas fa-ghost',             years: '2 Años'  },
              { label: 'Godot',          url: 'https://godotengine.org/',                                              icon: 'fas fa-robot',             years: '2 Años'  },
              { label: 'Vulkan',         url: 'https://www.vulkan.org/',                                               icon: 'fas fa-microchip',         years: '1 Año'   },
              { label: 'OpenGL',         url: 'https://www.opengl.org/',                                               icon: 'fas fa-code',              years: '2 Años'  },
            ],
          },
          {
            name: 'Programación',
            items: [
              { label: 'C++',            url: 'https://isocpp.org/',                                                   icon: 'fab fa-cuttlefish',        years: '7 Años'  },
              { label: 'Python',         url: 'https://www.python.org/',                                               icon: 'fab fa-python',            years: '8 Años'  },
              { label: 'JavaScript',     url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',               icon: 'fab fa-js',                years: '9 Años'  },
              { label: 'Java',           url: 'https://www.java.com/',                                                 icon: 'fab fa-java',              years: '6 Años'  },
              { label: 'NodeJS',         url: 'https://nodejs.org/',                                                   icon: 'fab fa-node-js',           years: '7 Años'  },
              { label: 'HTML',           url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',                     icon: 'fab fa-html5',             years: '10 Años' },
              { label: 'CSS',            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',                      icon: 'fab fa-css3-alt',          years: '10 Años' },
              { label: 'React',          url: 'https://react.dev/',                                                    icon: 'fab fa-react',             years: '5 Años'  },
            ],
          },
          {
            name: 'Herramientas Adobe',
            items: [
              { label: 'Photoshop',      url: 'https://www.adobe.com/products/photoshop.html',                         icon: 'fas fa-paint-brush',       years: '12 Años' },
              { label: 'Illustrator',    url: 'https://www.adobe.com/products/illustrator.html',                       icon: 'fas fa-pen-nib',           years: '10 Años' },
              { label: 'Premiere',       url: 'https://www.adobe.com/products/premiere.html',                          icon: 'fas fa-video',             years: '9 Años'  },
              { label: 'InDesign',       url: 'https://www.adobe.com/products/indesign.html',                          icon: 'fas fa-file-alt',          years: '8 Años'  },
            ],
          },
          {
            name: 'Suites de Oficina',
            items: [
              { label: 'Writer / Word',  url: 'https://www.libreoffice.org/',                                          icon: 'fas fa-file-word',         years: '15 Años' },
              { label: 'Calc / Excel',   url: 'https://www.libreoffice.org/',                                          icon: 'fas fa-file-excel',        years: '12 Años' },
              { label: 'Impress / PPT',  url: 'https://www.libreoffice.org/',                                          icon: 'fas fa-file-powerpoint',   years: '10 Años' },
            ],
          },
          {
            name: '3D / Diseño 2D',
            items: [
              { label: 'Krita',          url: 'https://krita.org/',                                                    icon: 'fas fa-palette',           years: '5 Años'  },
              { label: 'Blender',        url: 'https://www.blender.org/',                                              icon: 'fas fa-shapes',            years: '3 Años'  },
              { label: 'Aseprite',       url: 'https://www.aseprite.org/',                                             icon: 'fas fa-th',                years: '4 Años'  },
              { label: 'InkScape',       url: 'https://inkscape.org/',                                                 icon: 'fas fa-vector-square',     years: '2 Años'  },
            ],
          },
          {
            name: 'GTM y Tecnología de Ventas',
            items: [
              { label: 'Clay',           url: 'https://www.clay.com/',                                                 icon: 'fas fa-database',          years: '3 Años'  },
              { label: 'Apollo',         url: 'https://www.apollo.io/',                                                icon: 'fas fa-rocket',            years: '4 Años'  },
              { label: 'HubSpot',        url: 'https://www.hubspot.com/',                                              icon: 'fab fa-hubspot',           years: '4 Años'  },
              { label: 'Clearbit',       url: 'https://clearbit.com/',                                                 icon: 'fas fa-bullseye',          years: '3 Años'  },
              { label: 'ZoomInfo',       url: 'https://www.zoominfo.com/',                                             icon: 'fas fa-search-plus',       years: '4 Años'  },
              { label: 'Datanyze',       url: 'https://www.datanyze.com/',                                             icon: 'fas fa-chart-line',        years: '2 Años'  },
              { label: 'LeadGenius',     url: 'https://www.leadgenius.com/',                                           icon: 'fas fa-user-check',        years: '2 Años'  },
              { label: 'Zoho',           url: 'https://www.zoho.com/',                                                 icon: 'fas fa-cloud',             years: '5 Años'  },
              { label: 'Creatio',        url: 'https://www.creatio.com/',                                              icon: 'fas fa-cog',               years: '2 Años'  },
              { label: 'Salesforce',     url: 'https://www.salesforce.com/',                                           icon: 'fab fa-salesforce',        years: '4 Años'  },
              { label: 'Lemlist',        url: 'https://www.lemlist.com/',                                              icon: 'fas fa-paper-plane',       years: '3 Años'  },
              { label: 'Instantly.ai',   url: 'https://instantly.ai/',                                                 icon: 'fas fa-envelope-open-text',years: '2 Años'  },
            ],
          },
          {
            name: 'SO Preferidos',
            items: [
              { label: 'Fedora',         url: 'https://fedoraproject.org/',                                            icon: 'fab fa-fedora',            years: '' },
              { label: 'Arch',           url: 'https://archlinux.org/',                                                icon: 'fas fa-linux',             years: '' },
              { label: 'NixOS',          url: 'https://nixos.org/',                                                    icon: 'fas fa-snowflake',         years: '' },
              { label: 'Gentoo',         url: 'https://www.gentoo.org/',                                               icon: 'fas fa-terminal',          years: '' },
              { label: 'Ubuntu',         url: 'https://ubuntu.com/',                                                   icon: 'fab fa-ubuntu',            years: '' },
            ],
          },
        ],
      },

      qr: {
        text: 'Escanea para visitar mi sitio web:',
        src:  'img/qr.svg',
        alt:  'Código QR',
      },

      instructions: {
        heading: 'Cómo usar este sitio web',
        text:    'Recomiendo navegar por las pestañas en la parte superior haciendo clic en ellas o escribiendo 1, 2, 3, 4, 5 mientras estés en la página.',
      },

      notes: {
        heading:   'Notas',
        text:      'Si estás viendo esto en PDF, puedes acceder a mi portfolio completo en:',
        url:       'https://maximoappendino.github.io',
        visitText: 'Visita el sitio web para acceder a funciones interactivas y mis demos de actuación de voz.',
      },
    },

    demos: {
      header: { title: 'Mis Demos', subtitle: 'Una colección de mi trabajo como actor de voz.' },
      items: [
        {
          audioSrc:    'demos/coffee-ad.wav',
          imageSrc:    'img/barista.png',
          title:       'Publicidad de Café',
          description: 'Rise & Grind.',
        },
        {
          audioSrc:    'demos/alpura-demo.wav',
          imageSrc:    'img/cow-argentinian.png',
          title:       'Publicidad Alpura',
          description: 'Publicidad de leche Alpura',
        },
        {
          audioSrc:    'demos/demo1.wav',
          imageSrc:    'img/demo3.jpg',
          title:       'Comercial Antiguo',
          description: 'Un clásico comercial antiguo con ese ruido estático.',
        },
      ],
    },

    coding: {
      githubUser:       'maximoappendino',
      githubLabel:      '>> MI_GITHUB',
      scrollingText:    '* BASH * HTML5 * CSS3 * JAVASCRIPT * PYTHON * NODEJS * C++ * RUST',
      activityLabel:    '// MONITOR_DE_ACTIVIDAD_GITHUB',
      reposLabel:       '// DATOS_DE_REPOSITORIOS',
      objectivesLabel:  '// OBJETIVOS_ACTUALES',
      objectives: [
        '> [EN CURSO] Dominio de HTML/CSS/JS para soluciones de e-commerce local',
        '> [EN CURSO] Construcción de Estudio Profesional de Actuación de Voz',
        '> [EN CURSO] Excelencia Académica @ FAMAF (Ciencias de la Computación)',
        '> [PENDIENTE] Expansión de viajes y redes globales (ETA: 2030)',
      ],
      loadingLines: [
        '[SISTEMA] Accediendo a la API de GitHub...',
        '[SISTEMA] Cargando datos de repositorios...',
      ],
      errorText:   '[ERROR] No se pudo establecer conexión con la API de GitHub.',
      footerText:  'Memoria total: 640K... OK',
      noDesc:      'Sin descripción.',
    },

    future: {
      title: 'La Gran Profecía',
      items: [
        {
          year:  '2026',
          title: 'Nuevo Año, Nuevas Posibilidades',
          text:  'Este año, aspiro a conseguir un puesto que se alinee con mis objetivos de carrera a largo plazo en desarrollo de software, actuación de voz o ventas. Estoy dedicado a sobresalir en mis estudios universitarios enfocándome en matemáticas y habilidades técnicas avanzadas. También planeo adoptar una rutina más disciplinada para impulsar mi crecimiento personal y profesional.',
          image: { src: 'img/future-eye-of-the-tiger.jpeg', alt: 'Eye of the Tiger' },
        },
        {
          year:  '2030',
          title: 'Viajando al Exterior',
          text:  'Para 2030, me visualizo viajando por Europa, construyendo una sólida red profesional y trabajando en proyectos a gran escala que me apasionen. Mi objetivo es establecer un negocio que cree oportunidades para otros y aproveche mi experiencia técnica. Para entonces, espero haber completado mi carrera universitaria y terminado de construir mi centro de datos personal.',
          image: { src: 'img/future-business.jpg', alt: 'Reunión de negocios' },
        },
        {
          year:  '2035',
          title: 'Construyendo Nuestro Nuevo Hogar',
          text:  'Para 2035, espero haber establecido un hogar para mi esposa y para mí. Durante años, he soñado con mirar por nuestra ventana un hermoso atardecer, compartiendo ese momento con el amor de mi vida.',
          image: { src: 'img/future-sunset.avif', alt: 'Pareja viendo el atardecer' },
        },
      ],
    },

    personal: {
      header:   { title: 'Solo Yo.', subtitle: 'Pensamientos, café y píxeles.' },
      readMore: 'Leer Más',
      blogs: [
        {
          id:      'morning-routine',
          image:   'img/blog-sunrise.jpeg',
          title:   'Mi Rutina Matutina',
          preview: 'Por qué me despierto a las 5 AM para correr...',
          content: [
            'Despertarse a las 5 AM no es para todos, pero para mí es un cambio radical. La quieta tranquilidad de la madrugada proporciona el ambiente perfecto para concentrarme, planificar mi día y adelantarme a mis objetivos.',
            'Mi rutina generalmente consiste en una carrera de 30 minutos, seguida de meditación y un desayuno saludable. Esta combinación de actividad física y atención plena me ayuda a comenzar el día con la mente clara y una actitud positiva.',
            'Por supuesto, hay días en que preferiría quedarme en cama, pero los beneficios de mi rutina matutina superan con creces el malestar temporal. Es una disciplina que ha tenido un profundo impacto en mi productividad y bienestar general.',
          ],
        },
        {
          id:      'games',
          image:   'img/blog-arcade.jpg',
          title:   'Favoritos de Siempre',
          preview: 'Estos son los juegos que moldearon mi alma.',
          content: [
            'Los juegos de arcade y las consolas antiguas fueron una gran parte de mi vida mientras crecía. Desde la Game Boy Advance hasta la PlayStation 2, los juegos se sentían crudos, desafiantes y llenos de personalidad. Títulos como Metal Slug, Castlevania, Kirby, Mortal Kombat, Urban Reign y Resident Evil 4 dejaron una marca permanente en mí.',
            'Algunos juegos no eran solo entretenimiento — eran mundos. Skyrim fue uno de esos juegos que me hizo perder completamente la noción del tiempo, mientras que las máquinas de arcade me enseñaron persistencia a través de la dificultad y la repetición.',
            'Los juegos modernos todavía logran capturar esa magia a veces. Outer Wilds y Rain World se destacan como experiencias que valoran la curiosidad, la atmósfera y el descubrimiento. Me recuerdan por qué me enamoré de los juegos en primer lugar.',
          ],
        },
        {
          id:      'lost-media',
          image:   'img/blog-popeye.jpeg',
          title:   'Preservando Media Perdida',
          preview: 'Cómo alojo medios para preservar la cultura para las generaciones futuras.',
          content: [
            'Preservar medios es más que un hobby; es una forma de asegurar que la cultura y la historia capturadas en películas antiguas, música y software no se pierdan con el tiempo. Al alojar y compartir estos medios, espero contribuir a un esfuerzo colectivo para mantener vivo nuestro patrimonio digital.',
            'Ya sea un comercial oscuro de los años 80 o un software casi olvidado, cada pieza de medios cuenta una historia. Encuentro gran satisfacción en el desafío técnico de rescatar y restaurar estos artefactos digitales.',
          ],
        },
        {
          id:      'computers',
          image:   'img/blog-computer.webp',
          title:   'Cómo Me Adentré en las Computadoras',
          preview: 'Desde pequeño, disfruté usar computadoras y resolver varios errores. Ciertamente enfrenté muchos en el camino.',
          content: [
            'He estado fascinado por las computadoras desde que tengo memoria. Al principio, era pura curiosidad: hacer clic en cosas, romperlas e intentar entender por qué algo funcionaba o no.',
            'Con el tiempo, esa curiosidad se convirtió en resolución de problemas. Arreglar errores, modificar sistemas y aprender cómo el software interactúa con el hardware se convirtió en algo natural. Las computadoras dejaron de ser herramientas y empezaron a sentirse como sistemas que podía comprender a fondo.',
            'Esa exposición temprana moldeó la forma en que pienso hoy. Me siento cómodo experimentando, fallando y profundizando hasta que algo tiene sentido. Las computadoras me enseñaron paciencia, lógica y el valor de aprender haciendo.',
          ],
        },
        {
          id:      'discipline',
          image:   'img/blog-discipline.jpg',
          title:   'Disciplina y Naturaleza',
          preview: 'Esta es la historia de cómo empujé mis límites para crecer más fuerte, tanto física como mentalmente.',
          content: [
            'La meditación, el control de la respiración y las artes marciales siempre han sentido profundamente conectados para mí. Prácticas como el kung fu y el muay thai no son solo sobre el combate — son sobre la disciplina, la conciencia y la comprensión de cuán frágil y poderoso es realmente el cuerpo humano.',
            'Pasar tiempo en la naturaleza agudiza aún más esa conciencia. Hacer senderismo en las montañas sin equipo, el buceo libre y estar completamente inmerso en el agua o el aire libre reduce la vida a sus esenciales: respiración, enfoque y movimiento. Cada paso y cada inhalación importan.',
            'Hay algo humillante en darse cuenta de cuán letales pueden ser las técnicas, y cuán tranquila debe estar la mente para controlarlas. La naturaleza enseña la misma lección: respétala, o te abrumará. El equilibrio lo es todo.',
          ],
        },
      ],
    },
  },


  // ── ITALIAN ──────────────────────────────────────────────────
  it: {
    name: 'Italiano',
    nav: ['1. CV', '2. Demo', '3. Codice', '4. Personale', '5. Futuro'],
    buttons: { schedule: 'Prenota un Colloquio', whatsapp: 'WhatsApp' },
    cv: {
      portrait: { src: 'img/pp.jpeg', alt: 'Maximo Appendino' },
      name:  'Maximo Appendino',
      title: 'Venditore, Sviluppatore Software, Doppiatore e Interprete Medico, Legale e Finanziario',
      contact: { heading: 'Contatti', email: 'maximoappendinopadilla@gmail.com', phones: ['+54 9 351 714-6520', '+44 1217519880'] },
      languages: { heading: 'Lingue', items: [
        { flag: '🇦🇷', name: 'Spagnolo', level: 'Madrelingua' },
        { flag: '🇬🇧', name: 'Inglese',  level: 'Professionale' },
        { flag: '🇮🇹', name: 'Italiano', level: 'Conversazionale' },
      ]},
      availability: { heading: 'Disponibilità', items: ['Immediata / Tempo pieno', 'Remoto e in presenza'] },
      jobInterests: { heading: 'Interessi Lavorativi', text: 'Sviluppo Software, Traduzione Professionale, Doppiaggio, Vendite e Operazioni.' },
      relocation:   { heading: 'Trasferimento', text: 'Disponibile a trasferimenti internazionali.' },
      visas: { heading: 'Visti e Accesso', items: ['Visto USA', 'Accesso Unione Europea', 'Spagna', 'Italia', 'Regno Unito'] },
      experience: {
        heading: 'Esperienza Lavorativa (Dalla più recente)',
        items: [
          {
            title: 'Operazioni e Sviluppatore Full Stack @ Papaya', location: 'Chicago, USA', date: '2025 - 2026',
            description: 'Ho iniziato in Papaya come tutor di inglese e matematica, sviluppando le competenze acquisite al Like Institute. Nel tempo sono passato alle Operazioni, dove ho progettato e implementato un nuovo sistema con database, back-end e front-end. Ho sviluppato strumenti di monitoraggio, gestito ticket di supporto e garantito la precisione della pianificazione per studenti e tutor. Il mio rapporto con Papaya si è concluso a causa delle difficoltà finanziarie dell\'azienda, che hanno portato al fallimento e a riduzioni del personale.',
            logo: { src: 'img/cv-papaya.jpeg', alt: 'Logo Papaya Tutors', url: 'https://papayatutor.com' },
          },
          {
            title: 'Agente di Viaggio @ Reservation Desk, Reservation Counter, Travelpass', location: 'Utah, USA', date: '2024 - 2026',
            description: 'Ho completato con successo una rigida formazione alle vendite e applicato costantemente un alto senso di urgenza per favorire le conversioni. Adattavo il mio approccio persuasivo alle diverse personalità dei clienti. Riconosciuto come top performer, ho ricevuto un TV Smart per l\'eccellenza durante una competizione di vendita ad alto rischio. Ho sviluppato resilienza nella gestione di rifiuti complessi e trattative sotto pressione.',
            logo: { src: 'img/cv-reservation-desk.svg', alt: 'Logo Reservation Desk', url: 'https://www.reservationdesk.com' },
          },
          {
            title: 'Interprete Medico, Legale e Finanziario @ Propio Language Services', location: 'Kansas, USA', date: '2022 - 2024',
            description: 'Ho fornito servizi professionali di interpretariato consecutivo in inglese e spagnolo, lavorando con medici, professionisti legali, forze dell\'ordine e team di vendita. Sebbene lavorassi da remoto, ho utilizzato tecniche tradizionali di stenografia, migliorando significativamente la mia velocità e competenza nel tempo.',
            logo: { src: 'img/cv-propio.png', alt: 'Logo Propio Language Services', url: 'https://propio.com' },
          },
          {
            title: 'Insegnante di Inglese @ Like Institute', location: 'Rio Ceballos, Córdoba, Argentina', date: '2021 - 2022',
            description: 'Insegnante di inglese al Like Institute, con focus sullo sviluppo della lingua e il coinvolgimento degli studenti in un ambiente di apprendimento dinamico.',
            logo: { src: 'img/cv-like-institute.png', alt: 'Logo Like Institute', url: 'https://likeinstitute.com/' },
          },
          {
            title: 'Venditore @ Royal Prestige', location: 'Córdoba, Argentina', date: '2020 - 2021',
            description: 'Ho eseguito una strategia di vendita diretta ad alta intensità con chiamate a freddo e dimostrazioni dal vivo. Nonostante fossi giovane, ho raggiunto un notevole successo finanziario e scoperto una profonda passione per la connessione interpersonale e le complessità psicologiche delle vendite.',
            logo: { src: 'img/cv-royal-prestige.jpg', alt: 'Logo Royal Prestige', url: 'https://www.royalprestige.com/' },
          },
        ],
      },
      education: {
        heading: 'Formazione',
        items: [
          { title: 'Informatica @ FAMAF - UNC - Argentina', date: '2026 - presente', description: 'Partecipazione a gare di matematica e progetti di programmazione. Questa carriera segue anni di apprendimento autodidatta e un profondo interesse per le operazioni informatiche.', logo: { src: 'img/cv-famaf.jpg', alt: 'Logo FAMAF', url: 'https://www.famaf.unc.edu.ar' } },
          { title: 'Traduttore Legale @ Facoltà di Lingue (FL) - UNC - Argentina', date: '2021 - 2024', description: 'Ho completato il tirocinio, migliorando notevolmente le mie competenze in inglese e la comprensione della linguistica. Il curriculum aveva un forte focus sull\'inglese britannico e la pronuncia IPA.', logo: { src: 'img/cv-fl.png', alt: 'Logo Facoltà di Lingue', url: 'https://lenguas.unc.edu.ar' } },
          { title: 'Psicologia @ UNC - Argentina', date: '2020 - 2021', description: 'Studio di teorie, storia e biologia durante la pandemia, offrendo una prospettiva unica sul comportamento umano e la teoria psicologica.', logo: { src: 'img/cv-psicologia.jpg', alt: 'Logo Facoltà di Psicologia', url: 'https://www.unc.edu.ar/acad%C3%A9micas/facultad-de-psicolog%C3%ADa' } },
          { title: 'Instituto Educativo Nuevo Milenio (IENM) - Unquillo, Córdoba, Argentina', date: '2014 - 2020', description: 'Diploma di scuola superiore con specializzazione in Comunicazione. Sviluppo di competenze fondamentali nei media e nella comunicazione interpersonale.', logo: { src: 'img/cv-ienm.webp', alt: 'Logo IENM', url: 'https://ienm.edu.ar/' } },
        ],
      },
      software: {
        heading: 'Competenze Software',
        categories: [
          { name: 'Motori Grafici', items: [
            { label: 'S&Box', url: 'https://sbox.game/', icon: 'fas fa-cube', years: '8 Mesi' },
            { label: 'Unity', url: 'https://unity.com/', icon: 'fab fa-unity', years: '3 Anni' },
            { label: 'Unreal Engine', url: 'https://www.unrealengine.com/', icon: 'fas fa-ghost', years: '2 Anni' },
            { label: 'Godot', url: 'https://godotengine.org/', icon: 'fas fa-robot', years: '2 Anni' },
            { label: 'Vulkan', url: 'https://www.vulkan.org/', icon: 'fas fa-microchip', years: '1 Anno' },
            { label: 'OpenGL', url: 'https://www.opengl.org/', icon: 'fas fa-code', years: '2 Anni' },
          ]},
          { name: 'Programmazione', items: [
            { label: 'C++', url: 'https://isocpp.org/', icon: 'fab fa-cuttlefish', years: '7 Anni' },
            { label: 'Python', url: 'https://www.python.org/', icon: 'fab fa-python', years: '8 Anni' },
            { label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'fab fa-js', years: '9 Anni' },
            { label: 'Java', url: 'https://www.java.com/', icon: 'fab fa-java', years: '6 Anni' },
            { label: 'NodeJS', url: 'https://nodejs.org/', icon: 'fab fa-node-js', years: '7 Anni' },
            { label: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'fab fa-html5', years: '10 Anni' },
            { label: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'fab fa-css3-alt', years: '10 Anni' },
            { label: 'React', url: 'https://react.dev/', icon: 'fab fa-react', years: '5 Anni' },
          ]},
          { name: 'Strumenti Adobe', items: [
            { label: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html', icon: 'fas fa-paint-brush', years: '12 Anni' },
            { label: 'Illustrator', url: 'https://www.adobe.com/products/illustrator.html', icon: 'fas fa-pen-nib', years: '10 Anni' },
            { label: 'Premiere', url: 'https://www.adobe.com/products/premiere.html', icon: 'fas fa-video', years: '9 Anni' },
            { label: 'InDesign', url: 'https://www.adobe.com/products/indesign.html', icon: 'fas fa-file-alt', years: '8 Anni' },
          ]},
          { name: 'Suite per Ufficio', items: [
            { label: 'Writer / Word', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-word', years: '15 Anni' },
            { label: 'Calc / Excel', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-excel', years: '12 Anni' },
            { label: 'Impress / PPT', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-powerpoint', years: '10 Anni' },
          ]},
          { name: 'Design 3D / 2D', items: [
            { label: 'Krita', url: 'https://krita.org/', icon: 'fas fa-palette', years: '5 Anni' },
            { label: 'Blender', url: 'https://www.blender.org/', icon: 'fas fa-shapes', years: '3 Anni' },
            { label: 'Aseprite', url: 'https://www.aseprite.org/', icon: 'fas fa-th', years: '4 Anni' },
            { label: 'InkScape', url: 'https://inkscape.org/', icon: 'fas fa-vector-square', years: '2 Anni' },
          ]},
          { name: 'GTM e Tecnologia di Vendita', items: [
            { label: 'Clay', url: 'https://www.clay.com/', icon: 'fas fa-database', years: '3 Anni' },
            { label: 'Apollo', url: 'https://www.apollo.io/', icon: 'fas fa-rocket', years: '4 Anni' },
            { label: 'HubSpot', url: 'https://www.hubspot.com/', icon: 'fab fa-hubspot', years: '4 Anni' },
            { label: 'Clearbit', url: 'https://clearbit.com/', icon: 'fas fa-bullseye', years: '3 Anni' },
            { label: 'ZoomInfo', url: 'https://www.zoominfo.com/', icon: 'fas fa-search-plus', years: '4 Anni' },
            { label: 'Datanyze', url: 'https://www.datanyze.com/', icon: 'fas fa-chart-line', years: '2 Anni' },
            { label: 'LeadGenius', url: 'https://www.leadgenius.com/', icon: 'fas fa-user-check', years: '2 Anni' },
            { label: 'Zoho', url: 'https://www.zoho.com/', icon: 'fas fa-cloud', years: '5 Anni' },
            { label: 'Creatio', url: 'https://www.creatio.com/', icon: 'fas fa-cog', years: '2 Anni' },
            { label: 'Salesforce', url: 'https://www.salesforce.com/', icon: 'fab fa-salesforce', years: '4 Anni' },
            { label: 'Lemlist', url: 'https://www.lemlist.com/', icon: 'fas fa-paper-plane', years: '3 Anni' },
            { label: 'Instantly.ai', url: 'https://instantly.ai/', icon: 'fas fa-envelope-open-text', years: '2 Anni' },
          ]},
          { name: 'Sistemi Operativi Preferiti', items: [
            { label: 'Fedora', url: 'https://fedoraproject.org/', icon: 'fab fa-fedora', years: '' },
            { label: 'Arch', url: 'https://archlinux.org/', icon: 'fas fa-linux', years: '' },
            { label: 'NixOS', url: 'https://nixos.org/', icon: 'fas fa-snowflake', years: '' },
            { label: 'Gentoo', url: 'https://www.gentoo.org/', icon: 'fas fa-terminal', years: '' },
            { label: 'Ubuntu', url: 'https://ubuntu.com/', icon: 'fab fa-ubuntu', years: '' },
          ]},
        ],
      },
      qr:           { text: 'Scansiona per visitare il mio sito web:', src: 'img/qr.svg', alt: 'Codice QR' },
      instructions: { heading: 'Come usare questo sito web', text: 'Consiglio di navigare tra le schede in alto cliccandoci sopra o digitando 1, 2, 3, 4, 5 mentre sei sulla pagina.' },
      notes:        { heading: 'Note', text: 'Se stai visualizzando questo in PDF, puoi accedere al mio portfolio completo su:', url: 'https://maximoappendino.github.io', visitText: 'Visita il sito web per accedere alle funzionalità interattive e ai miei demo di doppiaggio.' },
    },
    demos: {
      header: { title: 'I Miei Demo', subtitle: 'Una raccolta del mio lavoro di doppiaggio.' },
      items: [
        { audioSrc: 'demos/coffee-ad.wav', imageSrc: 'img/barista.png', title: 'Pubblicità del Caffè', description: 'Rise & Grind.' },
        { audioSrc: 'demos/alpura-demo.wav', imageSrc: 'img/cow-argentinian.png', title: 'Pubblicità Alpura', description: 'Pubblicità del latte Alpura' },
        { audioSrc: 'demos/demo1.wav', imageSrc: 'img/demo3.jpg', title: 'Vecchio Spot Commerciale', description: 'Un classico spot commerciale con quel rumore statico.' },
      ],
    },
    coding: {
      githubUser: 'maximoappendino', githubLabel: '>> IL_MIO_GITHUB',
      scrollingText: '* BASH * HTML5 * CSS3 * JAVASCRIPT * PYTHON * NODEJS * C++ * RUST',
      activityLabel: '// MONITOR_ATTIVITÀ_GITHUB', reposLabel: '// DATI_REPOSITORY', objectivesLabel: '// OBIETTIVI_ATTUALI',
      objectives: [
        '> [IN CORSO] Padronanza di HTML/CSS/JS per soluzioni e-commerce locali',
        '> [IN CORSO] Costruzione di uno Studio Professionale di Doppiaggio',
        '> [IN CORSO] Eccellenza Accademica @ FAMAF (Informatica)',
        '> [IN ATTESA] Espansione di viaggi e networking globale (ETA: 2030)',
      ],
      loadingLines: ['[SISTEMA] Accesso all\'API GitHub in corso...', '[SISTEMA] Caricamento dati repository...'],
      errorText: '[ERRORE] Impossibile stabilire la connessione con l\'API GitHub.',
      footerText: 'Memoria totale: 640K... OK', noDesc: 'Nessuna descrizione disponibile.',
    },
    future: {
      title: 'La Grande Profezia',
      items: [
        { year: '2026', title: 'Nuovo Anno, Nuove Possibilità', text: 'Quest\'anno miro a ottenere una posizione in linea con i miei obiettivi a lungo termine nello sviluppo software, nel doppiaggio o nelle vendite. Sono impegnato a eccellere negli studi universitari con focus su matematica e tecnologia avanzata. Prevedo anche di adottare una routine più disciplinata per la mia crescita personale e professionale.', image: { src: 'img/future-eye-of-the-tiger.jpeg', alt: 'Eye of the Tiger' } },
        { year: '2030', title: 'Viaggiare all\'Estero', text: 'Entro il 2030, mi immagino a viaggiare per l\'Europa, costruire una solida rete professionale e lavorare a progetti su larga scala che mi appassionano. Il mio obiettivo è creare un\'impresa che generi opportunità per gli altri. Mi aspetto di aver completato la laurea e il mio data center personale.', image: { src: 'img/future-business.jpg', alt: 'Riunione di lavoro' } },
        { year: '2035', title: 'Costruire la Nostra Nuova Casa', text: 'Entro il 2035, spero di aver creato una casa per mia moglie e me. Da anni sogno di guardare fuori dalla nostra finestra un bel tramonto, condividendo quel momento con l\'amore della mia vita.', image: { src: 'img/future-sunset.avif', alt: 'Coppia che guarda il tramonto' } },
      ],
    },
    personal: {
      header: { title: 'Solo io.', subtitle: 'Pensieri, caffè e pixel.' }, readMore: 'Leggi Tutto',
      blogs: [
        { id: 'morning-routine', image: 'img/blog-sunrise.jpeg', title: 'La Mia Routine Mattutina', preview: 'Perché mi sveglio alle 5 del mattino per correre...', content: ['Alzarsi alle 5 del mattino non è per tutti, ma per me è un punto di svolta. La quiete della prima mattina offre l\'ambiente perfetto per concentrarsi, pianificare la giornata e anticipare i propri obiettivi.', 'La mia routine consiste in una corsa di 30 minuti, meditazione e una colazione sana. Questa combinazione aiuta a iniziare la giornata con la mente libera e un atteggiamento positivo.', 'Certo, ci sono giorni in cui preferirei restare a letto, ma i benefici della routine superano il disagio temporaneo. È una disciplina che ha avuto un profondo impatto sulla mia produttività e sul mio benessere.'] },
        { id: 'games', image: 'img/blog-arcade.jpg', title: 'I Preferiti di Sempre', preview: 'Questi sono i giochi che hanno plasmato la mia anima.', content: ['I giochi arcade e le console vecchie erano una grande parte della mia vita. Dalla Game Boy Advance alla PlayStation 2, i giochi erano grezzi, impegnativi e pieni di personalità. Metal Slug, Castlevania, Kirby, Mortal Kombat, Urban Reign e Resident Evil 4 hanno lasciato un segno permanente.', 'Alcuni giochi non erano semplice intrattenimento — erano mondi. Skyrim mi faceva perdere completamente la cognizione del tempo, mentre le macchine arcade insegnavano la perseveranza.', 'I giochi moderni riescono ancora a catturare quella magia. Outer Wilds e Rain World si distinguono per curiosità, atmosfera e scoperta. Mi ricordano perché mi sono innamorato dei videogiochi.'] },
        { id: 'lost-media', image: 'img/blog-popeye.jpeg', title: 'Preservare i Media Perduti', preview: 'Come ospito media per preservare la cultura per le generazioni future.', content: ['Preservare i media è più di un hobby; è un modo per garantire che la cultura e la storia catturate in vecchi film, musica e software non vadano perdute nel tempo.', 'Che si tratti di uno spot degli anni \'80 o di un software quasi dimenticato, ogni media racconta una storia. Trovo grande soddisfazione nella sfida tecnica di recuperare e restaurare questi artefatti digitali.'] },
        { id: 'computers', image: 'img/blog-computer.webp', title: 'Come Mi Sono Appassionato ai Computer', preview: 'Da sempre mi è piaciuto usare i computer e risolvere errori. Ne ho affrontati molti lungo la strada.', content: ['Sono stato affascinato dai computer da sempre. All\'inizio era pura curiosità: cliccare su cose, romperle e capire perché funzionavano o meno.', 'Nel tempo, quella curiosità si è trasformata in problem solving. I computer hanno smesso di essere semplici strumenti e hanno iniziato a sembrare sistemi che potevo davvero comprendere.', 'Quella precoce esposizione ha plasmato il mio modo di pensare. Mi trovo a mio agio nello sperimentare, fallire e approfondire finché qualcosa non ha senso. I computer mi hanno insegnato pazienza, logica e il valore dell\'apprendimento pratico.'] },
        { id: 'discipline', image: 'img/blog-discipline.jpg', title: 'Disciplina e Natura', preview: 'La storia di come ho spinto i miei limiti per crescere più forte, fisicamente e mentalmente.', content: ['Meditazione, controllo del respiro e arti marziali sono sempre stati profondamente connessi per me. Kung fu e muay thai riguardano la disciplina, la consapevolezza e la comprensione di quanto fragile e potente sia il corpo umano.', 'Trascorrere del tempo nella natura acuisce ulteriormente questa consapevolezza. Escursioni in montagna senza attrezzatura, apnea e immersione totale riduce la vita ai suoi essenziali: respiro, concentrazione e movimento.', 'C\'è qualcosa di umiliante nel rendersi conto di quanto letali possano essere certe tecniche. La natura insegna la stessa lezione — rispettala, o ti sopraffà. L\'equilibrio è tutto.'] },
      ],
    },
  },

  // ── PORTUGUESE ───────────────────────────────────────────────
  pt: {
    name: 'Português',
    nav: ['1. CV', '2. Demos', '3. Código', '4. Pessoal', '5. Futuro'],
    buttons: { schedule: 'Agendar Entrevista', whatsapp: 'WhatsApp' },
    cv: {
      portrait: { src: 'img/pp.jpeg', alt: 'Maximo Appendino' },
      name:  'Maximo Appendino',
      title: 'Vendedor, Desenvolvedor de Software, Dublador e Intérprete Médico, Jurídico e Financeiro',
      contact: { heading: 'Contato', email: 'maximoappendinopadilla@gmail.com', phones: ['+54 9 351 714-6520', '+44 1217519880'] },
      languages: { heading: 'Idiomas', items: [
        { flag: '🇦🇷', name: 'Espanhol', level: 'Nativo' },
        { flag: '🇬🇧', name: 'Inglês',   level: 'Profissional' },
        { flag: '🇮🇹', name: 'Italiano', level: 'Conversacional' },
      ]},
      availability: { heading: 'Disponibilidade', items: ['Imediata / Tempo integral', 'Remoto e Presencial'] },
      jobInterests: { heading: 'Interesses Profissionais', text: 'Desenvolvimento de Software, Tradução Profissional, Dublagem, Vendas e Operações.' },
      relocation:   { heading: 'Realocação', text: 'Aberto a realocação internacional.' },
      visas: { heading: 'Vistos e Acesso', items: ['Visto EUA', 'Acesso União Europeia', 'Espanha', 'Itália', 'Reino Unido'] },
      experience: {
        heading: 'Experiência Profissional (Mais recente ao mais antigo)',
        items: [
          {
            title: 'Operações e Desenvolvedor Full Stack @ Papaya', location: 'Chicago, EUA', date: '2025 - 2026',
            description: 'Comecei na Papaya como tutor de inglês e matemática, desenvolvendo as habilidades adquiridas no Like Institute. Com o tempo, passei para Operações, projetando e implementando um novo sistema com banco de dados, back-end e front-end. Desenvolvi ferramentas de monitoramento, gerenciei tickets de suporte e garanti a precisão dos horários para alunos e tutores. Meu tempo na Papaya encerrou devido às dificuldades financeiras da empresa, que levaram à falência e a amplas reduções de pessoal.',
            logo: { src: 'img/cv-papaya.jpeg', alt: 'Logo Papaya Tutors', url: 'https://papayatutor.com' },
          },
          {
            title: 'Agente de Viagens @ Reservation Desk, Reservation Counter, Travelpass', location: 'Utah, EUA', date: '2024 - 2026',
            description: 'Completei com sucesso um rigoroso treinamento de vendas e apliquei consistentemente um alto senso de urgência para impulsionar conversões. Adaptei minha abordagem persuasiva a uma ampla gama de personalidades dos clientes. Reconhecido como artista de alto desempenho, recebi uma Smart TV por excelência durante uma competição de vendas de alto risco.',
            logo: { src: 'img/cv-reservation-desk.svg', alt: 'Logo Reservation Desk', url: 'https://www.reservationdesk.com' },
          },
          {
            title: 'Intérprete Médico, Jurídico e Financeiro @ Propio Language Services', location: 'Kansas, EUA', date: '2022 - 2024',
            description: 'Prestei serviços profissionais de interpretação consecutiva em inglês e espanhol, trabalhando com médicos, profissionais jurídicos, forças de segurança e equipes de vendas. Utilizei técnicas tradicionais de taquigrafia remotamente, melhorando significativamente minha velocidade e competência ao longo do tempo.',
            logo: { src: 'img/cv-propio.png', alt: 'Logo Propio Language Services', url: 'https://propio.com' },
          },
          {
            title: 'Professor de Inglês @ Like Institute', location: 'Rio Ceballos, Córdoba, Argentina', date: '2021 - 2022',
            description: 'Professor de inglês no Like Institute, com foco no desenvolvimento do idioma e no engajamento dos alunos em um ambiente de aprendizado dinâmico.',
            logo: { src: 'img/cv-like-institute.png', alt: 'Logo Like Institute', url: 'https://likeinstitute.com/' },
          },
          {
            title: 'Vendedor @ Royal Prestige', location: 'Córdoba, Argentina', date: '2020 - 2021',
            description: 'Executei uma estratégia de vendas diretas de alta intensidade com chamadas frias e demonstrações ao vivo. Apesar de ter entrado no setor em uma idade jovem, alcancei um sucesso financeiro significativo e descobri uma profunda paixão pela conexão interpessoal e pelas complexidades psicológicas das vendas.',
            logo: { src: 'img/cv-royal-prestige.jpg', alt: 'Logo Royal Prestige', url: 'https://www.royalprestige.com/' },
          },
        ],
      },
      education: {
        heading: 'Formação Acadêmica',
        items: [
          { title: 'Ciência da Computação @ FAMAF - UNC - Argentina', date: '2026 - presente', description: 'Participando de competições de matemática e projetos de programação. Esta carreira segue anos de aprendizado autodidata e um profundo interesse nas operações computacionais.', logo: { src: 'img/cv-famaf.jpg', alt: 'Logo FAMAF', url: 'https://www.famaf.unc.edu.ar' } },
          { title: 'Tradutor Jurídico @ Faculdade de Línguas (FL) - UNC - Argentina', date: '2021 - 2024', description: 'Completei a prática de dissertação, avançando significativamente minha proficiência em inglês e compreensão da linguística. O currículo tinha forte foco no inglês britânico e na pronúncia IPA.', logo: { src: 'img/cv-fl.png', alt: 'Logo Faculdade de Línguas', url: 'https://lenguas.unc.edu.ar' } },
          { title: 'Psicologia @ UNC - Argentina', date: '2020 - 2021', description: 'Estudos teóricos, história e biologia durante a pandemia, proporcionando uma perspectiva única sobre o comportamento humano e a teoria psicológica.', logo: { src: 'img/cv-psicologia.jpg', alt: 'Logo Faculdade de Psicologia', url: 'https://www.unc.edu.ar/acad%C3%A9micas/facultad-de-psicolog%C3%ADa' } },
          { title: 'Instituto Educativo Nuevo Milenio (IENM) - Unquillo, Córdoba, Argentina', date: '2014 - 2020', description: 'Ensino Médio com especialização em Comunicação. Desenvolvimento de habilidades fundamentais em mídia e comunicação interpessoal.', logo: { src: 'img/cv-ienm.webp', alt: 'Logo IENM', url: 'https://ienm.edu.ar/' } },
        ],
      },
      software: {
        heading: 'Experiência em Software',
        categories: [
          { name: 'Engines Gráficas', items: [
            { label: 'S&Box', url: 'https://sbox.game/', icon: 'fas fa-cube', years: '8 Meses' },
            { label: 'Unity', url: 'https://unity.com/', icon: 'fab fa-unity', years: '3 Anos' },
            { label: 'Unreal Engine', url: 'https://www.unrealengine.com/', icon: 'fas fa-ghost', years: '2 Anos' },
            { label: 'Godot', url: 'https://godotengine.org/', icon: 'fas fa-robot', years: '2 Anos' },
            { label: 'Vulkan', url: 'https://www.vulkan.org/', icon: 'fas fa-microchip', years: '1 Ano' },
            { label: 'OpenGL', url: 'https://www.opengl.org/', icon: 'fas fa-code', years: '2 Anos' },
          ]},
          { name: 'Programação', items: [
            { label: 'C++', url: 'https://isocpp.org/', icon: 'fab fa-cuttlefish', years: '7 Anos' },
            { label: 'Python', url: 'https://www.python.org/', icon: 'fab fa-python', years: '8 Anos' },
            { label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'fab fa-js', years: '9 Anos' },
            { label: 'Java', url: 'https://www.java.com/', icon: 'fab fa-java', years: '6 Anos' },
            { label: 'NodeJS', url: 'https://nodejs.org/', icon: 'fab fa-node-js', years: '7 Anos' },
            { label: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'fab fa-html5', years: '10 Anos' },
            { label: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'fab fa-css3-alt', years: '10 Anos' },
            { label: 'React', url: 'https://react.dev/', icon: 'fab fa-react', years: '5 Anos' },
          ]},
          { name: 'Ferramentas Adobe', items: [
            { label: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html', icon: 'fas fa-paint-brush', years: '12 Anos' },
            { label: 'Illustrator', url: 'https://www.adobe.com/products/illustrator.html', icon: 'fas fa-pen-nib', years: '10 Anos' },
            { label: 'Premiere', url: 'https://www.adobe.com/products/premiere.html', icon: 'fas fa-video', years: '9 Anos' },
            { label: 'InDesign', url: 'https://www.adobe.com/products/indesign.html', icon: 'fas fa-file-alt', years: '8 Anos' },
          ]},
          { name: 'Suítes de Escritório', items: [
            { label: 'Writer / Word', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-word', years: '15 Anos' },
            { label: 'Calc / Excel', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-excel', years: '12 Anos' },
            { label: 'Impress / PPT', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-powerpoint', years: '10 Anos' },
          ]},
          { name: 'Design 3D / 2D', items: [
            { label: 'Krita', url: 'https://krita.org/', icon: 'fas fa-palette', years: '5 Anos' },
            { label: 'Blender', url: 'https://www.blender.org/', icon: 'fas fa-shapes', years: '3 Anos' },
            { label: 'Aseprite', url: 'https://www.aseprite.org/', icon: 'fas fa-th', years: '4 Anos' },
            { label: 'InkScape', url: 'https://inkscape.org/', icon: 'fas fa-vector-square', years: '2 Anos' },
          ]},
          { name: 'GTM e Tecnologia de Vendas', items: [
            { label: 'Clay', url: 'https://www.clay.com/', icon: 'fas fa-database', years: '3 Anos' },
            { label: 'Apollo', url: 'https://www.apollo.io/', icon: 'fas fa-rocket', years: '4 Anos' },
            { label: 'HubSpot', url: 'https://www.hubspot.com/', icon: 'fab fa-hubspot', years: '4 Anos' },
            { label: 'Clearbit', url: 'https://clearbit.com/', icon: 'fas fa-bullseye', years: '3 Anos' },
            { label: 'ZoomInfo', url: 'https://www.zoominfo.com/', icon: 'fas fa-search-plus', years: '4 Anos' },
            { label: 'Datanyze', url: 'https://www.datanyze.com/', icon: 'fas fa-chart-line', years: '2 Anos' },
            { label: 'LeadGenius', url: 'https://www.leadgenius.com/', icon: 'fas fa-user-check', years: '2 Anos' },
            { label: 'Zoho', url: 'https://www.zoho.com/', icon: 'fas fa-cloud', years: '5 Anos' },
            { label: 'Creatio', url: 'https://www.creatio.com/', icon: 'fas fa-cog', years: '2 Anos' },
            { label: 'Salesforce', url: 'https://www.salesforce.com/', icon: 'fab fa-salesforce', years: '4 Anos' },
            { label: 'Lemlist', url: 'https://www.lemlist.com/', icon: 'fas fa-paper-plane', years: '3 Anos' },
            { label: 'Instantly.ai', url: 'https://instantly.ai/', icon: 'fas fa-envelope-open-text', years: '2 Anos' },
          ]},
          { name: 'SOs Preferidos', items: [
            { label: 'Fedora', url: 'https://fedoraproject.org/', icon: 'fab fa-fedora', years: '' },
            { label: 'Arch', url: 'https://archlinux.org/', icon: 'fas fa-linux', years: '' },
            { label: 'NixOS', url: 'https://nixos.org/', icon: 'fas fa-snowflake', years: '' },
            { label: 'Gentoo', url: 'https://www.gentoo.org/', icon: 'fas fa-terminal', years: '' },
            { label: 'Ubuntu', url: 'https://ubuntu.com/', icon: 'fab fa-ubuntu', years: '' },
          ]},
        ],
      },
      qr:           { text: 'Escaneie para visitar meu site:', src: 'img/qr.svg', alt: 'Código QR' },
      instructions: { heading: 'Como usar este site', text: 'Recomendo navegar pelas abas no topo clicando nelas ou digitando 1, 2, 3, 4, 5 enquanto estiver na página.' },
      notes:        { heading: 'Observações', text: 'Se estiver visualizando isso em PDF, pode acessar meu portfólio completo em:', url: 'https://maximoappendino.github.io', visitText: 'Visite o site para acessar recursos interativos e meus demos de dublagem.' },
    },
    demos: {
      header: { title: 'Meus Demos', subtitle: 'Uma coleção do meu trabalho como dublador.' },
      items: [
        { audioSrc: 'demos/coffee-ad.wav', imageSrc: 'img/barista.png', title: 'Anúncio de Café', description: 'Rise & Grind.' },
        { audioSrc: 'demos/alpura-demo.wav', imageSrc: 'img/cow-argentinian.png', title: 'Publicidade Alpura', description: 'Publicidade de leite Alpura' },
        { audioSrc: 'demos/demo1.wav', imageSrc: 'img/demo3.jpg', title: 'Comercial Antigo', description: 'Um clássico comercial antigo com aquele ruído estático.' },
      ],
    },
    coding: {
      githubUser: 'maximoappendino', githubLabel: '>> MEU_GITHUB',
      scrollingText: '* BASH * HTML5 * CSS3 * JAVASCRIPT * PYTHON * NODEJS * C++ * RUST',
      activityLabel: '// MONITOR_DE_ATIVIDADE_GITHUB', reposLabel: '// DADOS_DOS_REPOSITÓRIOS', objectivesLabel: '// OBJETIVOS_ATUAIS',
      objectives: [
        '> [EM CURSO] Domínio de HTML/CSS/JS para soluções de e-commerce local',
        '> [EM CURSO] Construção de Estúdio Profissional de Dublagem',
        '> [EM CURSO] Excelência Acadêmica @ FAMAF (Ciência da Computação)',
        '> [PENDENTE] Expansão de viagens e redes globais (ETA: 2030)',
      ],
      loadingLines: ['[SISTEMA] Acessando API do GitHub...', '[SISTEMA] Carregando dados dos repositórios...'],
      errorText: '[ERRO] Falha ao estabelecer conexão com a API do GitHub.',
      footerText: 'Memória total: 640K... OK', noDesc: 'Sem descrição.',
    },
    future: {
      title: 'A Grande Profecia',
      items: [
        { year: '2026', title: 'Novo Ano, Novas Possibilidades', text: 'Este ano, pretendo conquistar uma posição alinhada com meus objetivos de longo prazo em desenvolvimento de software, dublagem ou vendas. Estou dedicado a me destacar na universidade, focando em matemática e habilidades técnicas avançadas. Também planejo adotar uma rotina mais disciplinada para impulsionar meu crescimento pessoal e profissional.', image: { src: 'img/future-eye-of-the-tiger.jpeg', alt: 'Eye of the Tiger' } },
        { year: '2030', title: 'Viajando pelo Exterior', text: 'Em 2030, me vejo viajando pela Europa, construindo uma sólida rede profissional e trabalhando em projetos de grande escala. Meu objetivo é estabelecer um negócio que crie oportunidades para outros. Espero ter concluído minha graduação e terminado de construir meu data center pessoal.', image: { src: 'img/future-business.jpg', alt: 'Reunião de negócios' } },
        { year: '2035', title: 'Construindo Nossa Nova Casa', text: 'Em 2035, espero ter estabelecido um lar para minha esposa e para mim. Por anos, sonhei em olhar pela nossa janela para um belo pôr do sol, compartilhando esse momento com o amor da minha vida.', image: { src: 'img/future-sunset.avif', alt: 'Casal vendo o pôr do sol' } },
      ],
    },
    personal: {
      header: { title: 'Só Eu.', subtitle: 'Pensamentos, café e pixels.' }, readMore: 'Ler Mais',
      blogs: [
        { id: 'morning-routine', image: 'img/blog-sunrise.jpeg', title: 'Minha Rotina Matinal', preview: 'Por que acordo às 5 da manhã para correr...', content: ['Acordar às 5 da manhã não é para todos, mas para mim é transformador. A quietude da madrugada proporciona o ambiente perfeito para me concentrar, planejar meu dia e sair na frente nos meus objetivos.', 'Minha rotina consiste em uma corrida de 30 minutos, meditação e um café da manhã saudável. Esta combinação ajuda a começar o dia com a cabeça limpa e uma atitude positiva.', 'Claro, há dias em que eu preferiria ficar na cama, mas os benefícios superam em muito o desconforto temporário. É uma disciplina que impactou profundamente minha produtividade e bem-estar.'] },
        { id: 'games', image: 'img/blog-arcade.jpg', title: 'Favoritos de Todos os Tempos', preview: 'Estes são os jogos que moldaram minha alma.', content: ['Os jogos de arcade e os consoles antigos foram uma grande parte da minha infância. Do Game Boy Advance ao PlayStation 2, os jogos eram brutos, desafiadores e cheios de personalidade. Metal Slug, Castlevania, Kirby, Mortal Kombat, Urban Reign e Resident Evil 4 deixaram marcas permanentes.', 'Alguns jogos não eram apenas entretenimento — eram mundos. Skyrim me fazia perder a noção do tempo, enquanto os arcades ensinavam persistência pela dificuldade e repetição.', 'Os jogos modernos ainda conseguem capturar essa magia. Outer Wilds e Rain World se destacam por valorizar curiosidade e descoberta. Eles me lembram por que me apaixonei pelos jogos.'] },
        { id: 'lost-media', image: 'img/blog-popeye.jpeg', title: 'Preservando Mídia Perdida', preview: 'Como hospedo mídias para preservar a cultura para as gerações futuras.', content: ['Preservar mídias é mais do que um hobby; é uma forma de garantir que a cultura e a história não se percam com o tempo. Ao hospedar e compartilhar essas mídias, espero contribuir para manter vivo nosso patrimônio digital.', 'Seja um comercial obscuro dos anos 80 ou um software quase esquecido, cada mídia conta uma história. Encontro grande satisfação no desafio técnico de resgatar e restaurar esses artefatos digitais.'] },
        { id: 'computers', image: 'img/blog-computer.webp', title: 'Como Comecei com Computadores', preview: 'Desde pequeno, adorei usar computadores e resolver erros. Certamente enfrentei muitos pelo caminho.', content: ['Sempre fui fascinado por computadores. No começo, era pura curiosidade — clicar nas coisas, quebrá-las e tentar entender por que funcionavam ou não.', 'Com o tempo, essa curiosidade se transformou em resolução de problemas. Consertar erros e aprender como o software interage com o hardware se tornou algo natural.', 'Essa exposição inicial moldou a forma como penso hoje. Me sinto confortável experimentando, falhando e aprofundando até que algo faça sentido. Os computadores me ensinaram paciência, lógica e o valor de aprender fazendo.'] },
        { id: 'discipline', image: 'img/blog-discipline.jpg', title: 'Disciplina e Natureza', preview: 'A história de como empurrei meus limites para crescer mais forte, física e mentalmente.', content: ['Meditação, controle da respiração e artes marciais sempre foram profundamente conectados para mim. Kung fu e muay thai são sobre disciplina, consciência e entender o quão frágil e poderoso é o corpo humano.', 'Passar tempo na natureza aguça essa consciência. Trilhas nas montanhas sem equipamento, mergulho livre e imersão no ar livre reduzem a vida aos seus elementos essenciais: respiração, foco e movimento.', 'Há algo humilhante em perceber o quão letais certas técnicas podem ser. A natureza ensina a mesma lição — respeite-a, ou ela o sobrecarregará. O equilíbrio é tudo.'] },
      ],
    },
  },

  // ── GERMAN ───────────────────────────────────────────────────
  de: {
    name: 'Deutsch',
    nav: ['1. Lebenslauf', '2. Demos', '3. Code', '4. Persönlich', '5. Zukunft'],
    buttons: { schedule: 'Interview Vereinbaren', whatsapp: 'WhatsApp' },
    cv: {
      portrait: { src: 'img/pp.jpeg', alt: 'Maximo Appendino' },
      name:  'Maximo Appendino',
      title: 'Verkäufer, Softwareentwickler, Synchronsprecher und Medizinischer, Rechtlicher und Finanzieller Dolmetscher',
      contact: { heading: 'Kontakt', email: 'maximoappendinopadilla@gmail.com', phones: ['+54 9 351 714-6520', '+44 1217519880'] },
      languages: { heading: 'Sprachen', items: [
        { flag: '🇦🇷', name: 'Spanisch',    level: 'Muttersprache' },
        { flag: '🇬🇧', name: 'Englisch',    level: 'Professionell' },
        { flag: '🇮🇹', name: 'Italienisch', level: 'Konversationsniveau' },
      ]},
      availability: { heading: 'Verfügbarkeit', items: ['Sofort / Vollzeit', 'Remote & Vor Ort'] },
      jobInterests: { heading: 'Berufsinteressen', text: 'Softwareentwicklung, Professionelle Übersetzung, Synchronsprechen, Vertrieb & Betrieb.' },
      relocation:   { heading: 'Umzug', text: 'Offen für internationalen Umzug.' },
      visas: { heading: 'Visa & Zugang', items: ['US-Visum', 'EU-Zugang', 'Spanien', 'Italien', 'Vereinigtes Königreich'] },
      experience: {
        heading: 'Berufserfahrung (Neueste zuerst)',
        items: [
          {
            title: 'Betrieb & Full-Stack-Entwickler @ Papaya', location: 'Chicago, USA', date: '2025 - 2026',
            description: 'Ich begann bei Papaya als Tutor für Englisch und Mathematik und entwickelte die am Like Institute erworbenen Fähigkeiten weiter. Im Laufe der Zeit wechselte ich in eine operative Rolle, wo ich ein neues System mit Datenbank, Back-End und Front-End entwarf und implementierte. Ich entwickelte Monitoring-Tools, verwaltete Support-Tickets und stellte die Genauigkeit der Stundenplanung sicher. Meine Zeit bei Papaya endete aufgrund der finanziellen Schwierigkeiten des Unternehmens, die zur Insolvenz und zu Stellenabbau führten.',
            logo: { src: 'img/cv-papaya.jpeg', alt: 'Logo Papaya Tutors', url: 'https://papayatutor.com' },
          },
          {
            title: 'Reisevermittler @ Reservation Desk, Reservation Counter, Travelpass', location: 'Utah, USA', date: '2024 - 2026',
            description: 'Ich absolvierte erfolgreich eine rigorose Verkaufsschulung und wendete konsequent hohes Dringlichkeitsgefühl an. Unter Einhaltung der Unternehmensrichtlinien passte ich meinen Ansatz an verschiedene Kundenpersönlichkeiten an. Als Top-Performer ausgezeichnet, erhielt ich einen Smart TV für Exzellenz während eines Verkaufswettbewerbs.',
            logo: { src: 'img/cv-reservation-desk.svg', alt: 'Logo Reservation Desk', url: 'https://www.reservationdesk.com' },
          },
          {
            title: 'Medizinischer, Rechtlicher & Finanzieller Dolmetscher @ Propio Language Services', location: 'Kansas, USA', date: '2022 - 2024',
            description: 'Ich erbrachte professionelle konsekutive Dolmetschleistungen in Englisch und Spanisch, arbeitete mit Ärzten, Juristen, Strafverfolgungsbehörden und Verkaufsteams zusammen. Obwohl ich remote arbeitete, nutzte ich traditionelle Stenografietechniken und verbesserte meine Fähigkeiten erheblich.',
            logo: { src: 'img/cv-propio.png', alt: 'Logo Propio Language Services', url: 'https://propio.com' },
          },
          {
            title: 'Englischlehrer @ Like Institute', location: 'Rio Ceballos, Córdoba, Argentinien', date: '2021 - 2022',
            description: 'Englischlehrer am Like Institute mit Fokus auf Sprachentwicklung und Schülerbindung in einem dynamischen Lernumfeld.',
            logo: { src: 'img/cv-like-institute.png', alt: 'Logo Like Institute', url: 'https://likeinstitute.com/' },
          },
          {
            title: 'Verkäufer @ Royal Prestige', location: 'Córdoba, Argentinien', date: '2020 - 2021',
            description: 'Ich führte eine intensive Direktverkaufsstrategie mit Kaltakquise und Live-Demonstrationen durch. Trotz meines jungen Einstiegsalters erzielte ich bedeutenden finanziellen Erfolg und entdeckte eine tiefe Leidenschaft für zwischenmenschliche Verbindung und die Psychologie des Vertriebs.',
            logo: { src: 'img/cv-royal-prestige.jpg', alt: 'Logo Royal Prestige', url: 'https://www.royalprestige.com/' },
          },
        ],
      },
      education: {
        heading: 'Ausbildung',
        items: [
          { title: 'Informatik @ FAMAF - UNC - Argentinien', date: '2026 - heute', description: 'Teilnahme an Mathematikwettbewerben und Programmierprojekten. Diese Karriere folgt Jahren des selbsterlernten Programmierens und einem tiefen Interesse an Computersystemen.', logo: { src: 'img/cv-famaf.jpg', alt: 'Logo FAMAF', url: 'https://www.famaf.unc.edu.ar' } },
          { title: 'Rechtsübersetzer @ Sprachfakultät (FL) - UNC - Argentinien', date: '2021 - 2024', description: 'Abschluss der Abschlussarbeit, was meine Englischkenntnisse und das Verständnis der Linguistik erheblich verbesserte. Starker Fokus auf britisches Englisch und IPA-Aussprache.', logo: { src: 'img/cv-fl.png', alt: 'Logo Sprachfakultät', url: 'https://lenguas.unc.edu.ar' } },
          { title: 'Psychologie @ UNC - Argentinien', date: '2020 - 2021', description: 'Theoretische Studien, Geschichte und Biologie während der Pandemie, was eine einzigartige Perspektive auf menschliches Verhalten und psychologische Theorie bot.', logo: { src: 'img/cv-psicologia.jpg', alt: 'Logo Psychologiefakultät', url: 'https://www.unc.edu.ar/acad%C3%A9micas/facultad-de-psicolog%C3%ADa' } },
          { title: 'Instituto Educativo Nuevo Milenio (IENM) - Unquillo, Córdoba, Argentinien', date: '2014 - 2020', description: 'Abitur mit Schwerpunkt Kommunikation. Entwicklung grundlegender Fähigkeiten in Medien und zwischenmenschlicher Kommunikation.', logo: { src: 'img/cv-ienm.webp', alt: 'Logo IENM', url: 'https://ienm.edu.ar/' } },
        ],
      },
      software: {
        heading: 'Softwarekenntnisse',
        categories: [
          { name: 'Grafik-Engines', items: [
            { label: 'S&Box', url: 'https://sbox.game/', icon: 'fas fa-cube', years: '8 Monate' },
            { label: 'Unity', url: 'https://unity.com/', icon: 'fab fa-unity', years: '3 Jahre' },
            { label: 'Unreal Engine', url: 'https://www.unrealengine.com/', icon: 'fas fa-ghost', years: '2 Jahre' },
            { label: 'Godot', url: 'https://godotengine.org/', icon: 'fas fa-robot', years: '2 Jahre' },
            { label: 'Vulkan', url: 'https://www.vulkan.org/', icon: 'fas fa-microchip', years: '1 Jahr' },
            { label: 'OpenGL', url: 'https://www.opengl.org/', icon: 'fas fa-code', years: '2 Jahre' },
          ]},
          { name: 'Programmierung', items: [
            { label: 'C++', url: 'https://isocpp.org/', icon: 'fab fa-cuttlefish', years: '7 Jahre' },
            { label: 'Python', url: 'https://www.python.org/', icon: 'fab fa-python', years: '8 Jahre' },
            { label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'fab fa-js', years: '9 Jahre' },
            { label: 'Java', url: 'https://www.java.com/', icon: 'fab fa-java', years: '6 Jahre' },
            { label: 'NodeJS', url: 'https://nodejs.org/', icon: 'fab fa-node-js', years: '7 Jahre' },
            { label: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'fab fa-html5', years: '10 Jahre' },
            { label: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'fab fa-css3-alt', years: '10 Jahre' },
            { label: 'React', url: 'https://react.dev/', icon: 'fab fa-react', years: '5 Jahre' },
          ]},
          { name: 'Adobe-Tools', items: [
            { label: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html', icon: 'fas fa-paint-brush', years: '12 Jahre' },
            { label: 'Illustrator', url: 'https://www.adobe.com/products/illustrator.html', icon: 'fas fa-pen-nib', years: '10 Jahre' },
            { label: 'Premiere', url: 'https://www.adobe.com/products/premiere.html', icon: 'fas fa-video', years: '9 Jahre' },
            { label: 'InDesign', url: 'https://www.adobe.com/products/indesign.html', icon: 'fas fa-file-alt', years: '8 Jahre' },
          ]},
          { name: 'Office-Suiten', items: [
            { label: 'Writer / Word', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-word', years: '15 Jahre' },
            { label: 'Calc / Excel', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-excel', years: '12 Jahre' },
            { label: 'Impress / PPT', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-powerpoint', years: '10 Jahre' },
          ]},
          { name: '3D / 2D-Design', items: [
            { label: 'Krita', url: 'https://krita.org/', icon: 'fas fa-palette', years: '5 Jahre' },
            { label: 'Blender', url: 'https://www.blender.org/', icon: 'fas fa-shapes', years: '3 Jahre' },
            { label: 'Aseprite', url: 'https://www.aseprite.org/', icon: 'fas fa-th', years: '4 Jahre' },
            { label: 'InkScape', url: 'https://inkscape.org/', icon: 'fas fa-vector-square', years: '2 Jahre' },
          ]},
          { name: 'GTM & Vertriebstechnik', items: [
            { label: 'Clay', url: 'https://www.clay.com/', icon: 'fas fa-database', years: '3 Jahre' },
            { label: 'Apollo', url: 'https://www.apollo.io/', icon: 'fas fa-rocket', years: '4 Jahre' },
            { label: 'HubSpot', url: 'https://www.hubspot.com/', icon: 'fab fa-hubspot', years: '4 Jahre' },
            { label: 'Clearbit', url: 'https://clearbit.com/', icon: 'fas fa-bullseye', years: '3 Jahre' },
            { label: 'ZoomInfo', url: 'https://www.zoominfo.com/', icon: 'fas fa-search-plus', years: '4 Jahre' },
            { label: 'Datanyze', url: 'https://www.datanyze.com/', icon: 'fas fa-chart-line', years: '2 Jahre' },
            { label: 'LeadGenius', url: 'https://www.leadgenius.com/', icon: 'fas fa-user-check', years: '2 Jahre' },
            { label: 'Zoho', url: 'https://www.zoho.com/', icon: 'fas fa-cloud', years: '5 Jahre' },
            { label: 'Creatio', url: 'https://www.creatio.com/', icon: 'fas fa-cog', years: '2 Jahre' },
            { label: 'Salesforce', url: 'https://www.salesforce.com/', icon: 'fab fa-salesforce', years: '4 Jahre' },
            { label: 'Lemlist', url: 'https://www.lemlist.com/', icon: 'fas fa-paper-plane', years: '3 Jahre' },
            { label: 'Instantly.ai', url: 'https://instantly.ai/', icon: 'fas fa-envelope-open-text', years: '2 Jahre' },
          ]},
          { name: 'Bevorzugte Betriebssysteme', items: [
            { label: 'Fedora', url: 'https://fedoraproject.org/', icon: 'fab fa-fedora', years: '' },
            { label: 'Arch', url: 'https://archlinux.org/', icon: 'fas fa-linux', years: '' },
            { label: 'NixOS', url: 'https://nixos.org/', icon: 'fas fa-snowflake', years: '' },
            { label: 'Gentoo', url: 'https://www.gentoo.org/', icon: 'fas fa-terminal', years: '' },
            { label: 'Ubuntu', url: 'https://ubuntu.com/', icon: 'fab fa-ubuntu', years: '' },
          ]},
        ],
      },
      qr:           { text: 'Scannen Sie, um meine Website zu besuchen:', src: 'img/qr.svg', alt: 'QR-Code' },
      instructions: { heading: 'So verwenden Sie diese Website', text: 'Ich empfehle, durch die Tabs oben zu navigieren, indem Sie darauf klicken oder 1, 2, 3, 4, 5 auf der Seite eingeben.' },
      notes:        { heading: 'Hinweise', text: 'Wenn Sie dies als PDF betrachten, können Sie mein vollständiges Portfolio unter folgender Adresse aufrufen:', url: 'https://maximoappendino.github.io', visitText: 'Besuchen Sie die Website für interaktive Funktionen und meine Synchronsprechdemos.' },
    },
    demos: {
      header: { title: 'Meine Demos', subtitle: 'Eine Sammlung meiner Synchronsprecharbeiten.' },
      items: [
        { audioSrc: 'demos/coffee-ad.wav', imageSrc: 'img/barista.png', title: 'Kaffee-Werbung', description: 'Rise & Grind.' },
        { audioSrc: 'demos/alpura-demo.wav', imageSrc: 'img/cow-argentinian.png', title: 'Alpura-Werbung', description: 'Alpura Milchwerbung' },
        { audioSrc: 'demos/demo1.wav', imageSrc: 'img/demo3.jpg', title: 'Alter Werbespot', description: 'Ein klassischer alter Werbespot mit diesem statischen Rauschen.' },
      ],
    },
    coding: {
      githubUser: 'maximoappendino', githubLabel: '>> MEIN_GITHUB',
      scrollingText: '* BASH * HTML5 * CSS3 * JAVASCRIPT * PYTHON * NODEJS * C++ * RUST',
      activityLabel: '// GITHUB_AKTIVITÄTSMONITOR', reposLabel: '// REPOSITORY_DATEN', objectivesLabel: '// AKTUELLE_ZIELE',
      objectives: [
        '> [LAUFEND] HTML/CSS/JS-Kenntnisse für lokale E-Commerce-Lösungen',
        '> [LAUFEND] Aufbau eines Professionellen Synchronsprechstudios',
        '> [LAUFEND] Akademische Exzellenz @ FAMAF (Informatik)',
        '> [AUSSTEHEND] Globale Reisen & Netzwerkerweiterung (ETA: 2030)',
      ],
      loadingLines: ['[SYSTEM] GitHub-API wird verbunden...', '[SYSTEM] Repository-Daten werden geladen...'],
      errorText: '[FEHLER] Verbindung zur GitHub-API konnte nicht hergestellt werden.',
      footerText: 'Gesamtspeicher: 640K... OK', noDesc: 'Keine Beschreibung vorhanden.',
    },
    future: {
      title: 'Die Große Prophezeiung',
      items: [
        { year: '2026', title: 'Neues Jahr, Neue Möglichkeiten', text: 'In diesem Jahr möchte ich eine Position sichern, die mit meinen Karrierezielen in der Softwareentwicklung, im Synchronsprechen oder im Vertrieb übereinstimmt. Ich bin entschlossen, im Studium zu glänzen und mich auf Mathematik und fortgeschrittene Technologie zu konzentrieren. Ich plane auch, eine diszipliniertere Routine für mein persönliches und berufliches Wachstum zu entwickeln.', image: { src: 'img/future-eye-of-the-tiger.jpeg', alt: 'Eye of the Tiger' } },
        { year: '2030', title: 'Reisen ins Ausland', text: 'Bis 2030 stelle ich mir vor, durch Europa zu reisen, ein starkes professionelles Netzwerk aufzubauen und an großangelegten Projekten zu arbeiten. Mein Ziel ist es, ein Unternehmen zu gründen, das Möglichkeiten für andere schafft. Ich erwarte, mein Studium abgeschlossen und mein persönliches Rechenzentrum fertiggestellt zu haben.', image: { src: 'img/future-business.jpg', alt: 'Geschäftstreffen' } },
        { year: '2035', title: 'Unser Neues Zuhause Bauen', text: 'Bis 2035 hoffe ich, ein Zuhause für meine Frau und mich geschaffen zu haben. Seit Jahren träume ich davon, aus unserem Fenster auf einen schönen Sonnenuntergang zu schauen und diesen Moment mit der Liebe meines Lebens zu teilen.', image: { src: 'img/future-sunset.avif', alt: 'Paar schaut den Sonnenuntergang an' } },
      ],
    },
    personal: {
      header: { title: 'Einfach ich.', subtitle: 'Gedanken, Kaffee und Pixel.' }, readMore: 'Mehr Lesen',
      blogs: [
        { id: 'morning-routine', image: 'img/blog-sunrise.jpeg', title: 'Meine Morgenroutine', preview: 'Warum ich um 5 Uhr morgens aufstehe, um zu laufen...', content: ['Um 5 Uhr morgens aufzustehen ist nicht jedermanns Sache, aber für mich ist es ein Gamechanger. Die ruhige Stille des frühen Morgens bietet die perfekte Umgebung, um sich zu konzentrieren und den Tag zu planen.', 'Meine Routine besteht aus einem 30-minütigen Lauf, Meditation und einem gesunden Frühstück. Diese Kombination hilft mir, den Tag mit klarem Kopf zu beginnen.', 'Natürlich gibt es Tage, an denen ich lieber im Bett bleiben würde, aber die Vorteile überwiegen bei weitem. Es ist eine Disziplin mit tiefgreifendem Einfluss auf meine Produktivität und mein Wohlbefinden.'] },
        { id: 'games', image: 'img/blog-arcade.jpg', title: 'Alle-Zeit-Favoriten', preview: 'Diese Spiele haben meine Seele geprägt.', content: ['Arcade-Spiele und alte Konsolen waren ein großer Teil meines Aufwachsens. Von der Game Boy Advance bis zur PlayStation 2 wirkten Spiele roh und herausfordernd. Metal Slug, Castlevania, Kirby, Mortal Kombat, Urban Reign und Resident Evil 4 hinterließen bleibende Eindrücke.', 'Manche Spiele waren nicht nur Unterhaltung — sie waren Welten. Skyrim ließ mich das Zeitgefühl vergessen, während Arcade-Maschinen mir Beständigkeit lehrten.', 'Moderne Spiele fangen diese Magie manchmal noch ein. Outer Wilds und Rain World stehen für Neugier und Entdeckung. Sie erinnern mich daran, warum ich Spiele liebe.'] },
        { id: 'lost-media', image: 'img/blog-popeye.jpeg', title: 'Verlorene Medien Bewahren', preview: 'Wie ich Medien hoste, um Kultur für zukünftige Generationen zu erhalten.', content: ['Medien zu bewahren ist mehr als ein Hobby; es ist ein Weg sicherzustellen, dass Kultur und Geschichte nicht verlorengehen. Durch das Hosten und Teilen dieser Medien hoffe ich, unser digitales Erbe lebendig zu halten.', 'Ob ein obskurer 80er-Werbespot oder eine fast vergessene Software — jedes Medium erzählt eine Geschichte. Ich finde große Befriedigung in der technischen Herausforderung, diese digitalen Artefakte zu retten.'] },
        { id: 'computers', image: 'img/blog-computer.webp', title: 'Wie Ich zu Computern Kam', preview: 'Schon früh genoss ich es, Computer zu nutzen und Fehler zu beheben. Ich habe viele erlebt.', content: ['Ich war von Computern schon immer fasziniert. Anfangs war es pure Neugier — auf Dinge klicken, sie kaputt machen und verstehen, warum etwas funktionierte.', 'Im Laufe der Zeit wurde die Neugier zur Problemlösung. Fehler beheben und Systeme verstehen wurde zur zweiten Natur. Computer fühlten sich wie Systeme an, die ich wirklich begreifen konnte.', 'Diese frühe Erfahrung prägte meine Denkweise. Ich bin damit vertraut, zu experimentieren und tiefer zu graben, bis etwas Sinn ergibt. Computer lehrten mich Geduld, Logik und den Wert des Lernens durch Tun.'] },
        { id: 'discipline', image: 'img/blog-discipline.jpg', title: 'Disziplin und Natur', preview: 'Die Geschichte, wie ich meine Grenzen überwand, um stärker zu werden — körperlich und geistig.', content: ['Meditation, Atemkontrolle und Kampfkünste fühlten sich immer tiefgründig verbunden an. Kung Fu und Muay Thai drehen sich um Disziplin, Bewusstsein und das Verständnis des menschlichen Körpers.', 'Zeit in der Natur zu verbringen schärft dieses Bewusstsein weiter. Bergwandern ohne Ausrüstung, Apnoetauchen und Immersion im Freien reduziert das Leben auf seine Wesentlichkeiten: Atem, Fokus und Bewegung.', 'Es ist etwas Demütigendes daran zu erkennen, wie tödlich Techniken sein können und wie ruhig der Geist sein muss. Die Natur lehrt dieselbe Lektion — respektiere sie, oder sie wird dich überwältigen. Balance ist alles.'] },
      ],
    },
  },

  // ── RUSSIAN ───────────────────────────────────────────────────
  ru: {
    name: 'Русский',
    nav: ['1. Резюме', '2. Демо', '3. Код', '4. Личное', '5. Будущее'],
    buttons: { schedule: 'Записаться на Интервью', whatsapp: 'WhatsApp' },
    cv: {
      portrait: { src: 'img/pp.jpeg', alt: 'Maximo Appendino' },
      name:  'Maximo Appendino',
      title: 'Продавец, Разработчик ПО, Актёр озвучивания и Медицинский, Юридический и Финансовый Переводчик',
      contact: { heading: 'Контакты', email: 'maximoappendinopadilla@gmail.com', phones: ['+54 9 351 714-6520', '+44 1217519880'] },
      languages: { heading: 'Языки', items: [
        { flag: '🇦🇷', name: 'Испанский',  level: 'Родной' },
        { flag: '🇬🇧', name: 'Английский', level: 'Профессиональный' },
        { flag: '🇮🇹', name: 'Итальянский',level: 'Разговорный' },
      ]},
      availability: { heading: 'Доступность', items: ['Немедленно / Полная занятость', 'Удалённо и в офисе'] },
      jobInterests: { heading: 'Профессиональные Интересы', text: 'Разработка ПО, Профессиональный перевод, Озвучивание, Продажи и Операции.' },
      relocation:   { heading: 'Переезд', text: 'Готов к международному переезду.' },
      visas: { heading: 'Визы и Доступ', items: ['Виза США', 'Доступ в ЕС', 'Испания', 'Италия', 'Великобритания'] },
      experience: {
        heading: 'Опыт Работы (от новейшего к старейшему)',
        items: [
          {
            title: 'Операции и Full-Stack разработчик @ Papaya', location: 'Чикаго, США', date: '2025 - 2026',
            description: 'Начал в Papaya репетитором по английскому и математике, развивая навыки, приобретённые в Like Institute. Со временем перешёл в операционный отдел, где спроектировал и внедрил новую систему с базой данных, бэкендом и фронтендом. Разрабатывал инструменты мониторинга, управлял тикетами поддержки и обеспечивал точность расписания. Моё сотрудничество с Papaya завершилось из-за финансовых трудностей компании, приведших к банкротству и сокращениям.',
            logo: { src: 'img/cv-papaya.jpeg', alt: 'Логотип Papaya Tutors', url: 'https://papayatutor.com' },
          },
          {
            title: 'Агент по туризму @ Reservation Desk, Reservation Counter, Travelpass', location: 'Юта, США', date: '2024 - 2026',
            description: 'Успешно прошёл жёсткое обучение по продажам и последовательно применял высокое чувство срочности для стимулирования конверсий. Адаптировал убедительный подход к разнообразным клиентам. Признан лучшим сотрудником и награждён Smart TV за выдающиеся результаты в конкурсе по продажам.',
            logo: { src: 'img/cv-reservation-desk.svg', alt: 'Логотип Reservation Desk', url: 'https://www.reservationdesk.com' },
          },
          {
            title: 'Медицинский, Юридический и Финансовый Переводчик @ Propio Language Services', location: 'Канзас, США', date: '2022 - 2024',
            description: 'Оказывал профессиональные услуги последовательного перевода на английском и испанском языках, работая с врачами, юристами, правоохранителями и отделами продаж. Несмотря на удалённую работу, использовал традиционную стенографию, существенно улучшив скорость и компетентность со временем.',
            logo: { src: 'img/cv-propio.png', alt: 'Логотип Propio Language Services', url: 'https://propio.com' },
          },
          {
            title: 'Преподаватель английского @ Like Institute', location: 'Рио-Себальос, Кордоба, Аргентина', date: '2021 - 2022',
            description: 'Преподаватель английского в Like Institute с акцентом на развитие языковых навыков и вовлечённость студентов в динамичной учебной среде.',
            logo: { src: 'img/cv-like-institute.png', alt: 'Логотип Like Institute', url: 'https://likeinstitute.com/' },
          },
          {
            title: 'Продавец @ Royal Prestige', location: 'Кордоба, Аргентина', date: '2020 - 2021',
            description: 'Реализовывал интенсивную стратегию прямых продаж через холодные звонки и живые демонстрации. Несмотря на молодой возраст, достиг значительного финансового успеха и открыл в себе страсть к межличностному общению и психологии продаж.',
            logo: { src: 'img/cv-royal-prestige.jpg', alt: 'Логотип Royal Prestige', url: 'https://www.royalprestige.com/' },
          },
        ],
      },
      education: {
        heading: 'Образование',
        items: [
          { title: 'Информатика @ FAMAF - UNC - Аргентина', date: '2026 - настоящее время', description: 'Участие в математических олимпиадах и проектах по программированию. Эта карьера следует за годами самостоятельного изучения и глубокого интереса к вычислительным системам.', logo: { src: 'img/cv-famaf.jpg', alt: 'Логотип FAMAF', url: 'https://www.famaf.unc.edu.ar' } },
          { title: 'Юридический переводчик @ Факультет языков (FL) - UNC - Аргентина', date: '2021 - 2024', description: 'Завершил дипломную практику, значительно повысив уровень английского и понимание лингвистики. Акцент на британском английском и произношении IPA.', logo: { src: 'img/cv-fl.png', alt: 'Логотип Факультета языков', url: 'https://lenguas.unc.edu.ar' } },
          { title: 'Психология @ UNC - Аргентина', date: '2020 - 2021', description: 'Теоретические исследования, история и биология во время пандемии, открывшие уникальный взгляд на поведение человека и психологическую теорию.', logo: { src: 'img/cv-psicologia.jpg', alt: 'Логотип Факультета психологии', url: 'https://www.unc.edu.ar/acad%C3%A9micas/facultad-de-psicolog%C3%ADa' } },
          { title: 'Instituto Educativo Nuevo Milenio (IENM) - Ункильо, Кордоба, Аргентина', date: '2014 - 2020', description: 'Аттестат о среднем образовании со специализацией в области коммуникаций. Развитие базовых навыков в сфере медиа и межличностного общения.', logo: { src: 'img/cv-ienm.webp', alt: 'Логотип IENM', url: 'https://ienm.edu.ar/' } },
        ],
      },
      software: {
        heading: 'Опыт работы с ПО',
        categories: [
          { name: 'Графические движки', items: [
            { label: 'S&Box', url: 'https://sbox.game/', icon: 'fas fa-cube', years: '8 Месяцев' },
            { label: 'Unity', url: 'https://unity.com/', icon: 'fab fa-unity', years: '3 Года' },
            { label: 'Unreal Engine', url: 'https://www.unrealengine.com/', icon: 'fas fa-ghost', years: '2 Года' },
            { label: 'Godot', url: 'https://godotengine.org/', icon: 'fas fa-robot', years: '2 Года' },
            { label: 'Vulkan', url: 'https://www.vulkan.org/', icon: 'fas fa-microchip', years: '1 Год' },
            { label: 'OpenGL', url: 'https://www.opengl.org/', icon: 'fas fa-code', years: '2 Года' },
          ]},
          { name: 'Программирование', items: [
            { label: 'C++', url: 'https://isocpp.org/', icon: 'fab fa-cuttlefish', years: '7 Лет' },
            { label: 'Python', url: 'https://www.python.org/', icon: 'fab fa-python', years: '8 Лет' },
            { label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'fab fa-js', years: '9 Лет' },
            { label: 'Java', url: 'https://www.java.com/', icon: 'fab fa-java', years: '6 Лет' },
            { label: 'NodeJS', url: 'https://nodejs.org/', icon: 'fab fa-node-js', years: '7 Лет' },
            { label: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'fab fa-html5', years: '10 Лет' },
            { label: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'fab fa-css3-alt', years: '10 Лет' },
            { label: 'React', url: 'https://react.dev/', icon: 'fab fa-react', years: '5 Лет' },
          ]},
          { name: 'Инструменты Adobe', items: [
            { label: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html', icon: 'fas fa-paint-brush', years: '12 Лет' },
            { label: 'Illustrator', url: 'https://www.adobe.com/products/illustrator.html', icon: 'fas fa-pen-nib', years: '10 Лет' },
            { label: 'Premiere', url: 'https://www.adobe.com/products/premiere.html', icon: 'fas fa-video', years: '9 Лет' },
            { label: 'InDesign', url: 'https://www.adobe.com/products/indesign.html', icon: 'fas fa-file-alt', years: '8 Лет' },
          ]},
          { name: 'Офисные пакеты', items: [
            { label: 'Writer / Word', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-word', years: '15 Лет' },
            { label: 'Calc / Excel', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-excel', years: '12 Лет' },
            { label: 'Impress / PPT', url: 'https://www.libreoffice.org/', icon: 'fas fa-file-powerpoint', years: '10 Лет' },
          ]},
          { name: '3D / 2D Дизайн', items: [
            { label: 'Krita', url: 'https://krita.org/', icon: 'fas fa-palette', years: '5 Лет' },
            { label: 'Blender', url: 'https://www.blender.org/', icon: 'fas fa-shapes', years: '3 Года' },
            { label: 'Aseprite', url: 'https://www.aseprite.org/', icon: 'fas fa-th', years: '4 Года' },
            { label: 'InkScape', url: 'https://inkscape.org/', icon: 'fas fa-vector-square', years: '2 Года' },
          ]},
          { name: 'GTM и технологии продаж', items: [
            { label: 'Clay', url: 'https://www.clay.com/', icon: 'fas fa-database', years: '3 Года' },
            { label: 'Apollo', url: 'https://www.apollo.io/', icon: 'fas fa-rocket', years: '4 Года' },
            { label: 'HubSpot', url: 'https://www.hubspot.com/', icon: 'fab fa-hubspot', years: '4 Года' },
            { label: 'Clearbit', url: 'https://clearbit.com/', icon: 'fas fa-bullseye', years: '3 Года' },
            { label: 'ZoomInfo', url: 'https://www.zoominfo.com/', icon: 'fas fa-search-plus', years: '4 Года' },
            { label: 'Datanyze', url: 'https://www.datanyze.com/', icon: 'fas fa-chart-line', years: '2 Года' },
            { label: 'LeadGenius', url: 'https://www.leadgenius.com/', icon: 'fas fa-user-check', years: '2 Года' },
            { label: 'Zoho', url: 'https://www.zoho.com/', icon: 'fas fa-cloud', years: '5 Лет' },
            { label: 'Creatio', url: 'https://www.creatio.com/', icon: 'fas fa-cog', years: '2 Года' },
            { label: 'Salesforce', url: 'https://www.salesforce.com/', icon: 'fab fa-salesforce', years: '4 Года' },
            { label: 'Lemlist', url: 'https://www.lemlist.com/', icon: 'fas fa-paper-plane', years: '3 Года' },
            { label: 'Instantly.ai', url: 'https://instantly.ai/', icon: 'fas fa-envelope-open-text', years: '2 Года' },
          ]},
          { name: 'Предпочтительные ОС', items: [
            { label: 'Fedora', url: 'https://fedoraproject.org/', icon: 'fab fa-fedora', years: '' },
            { label: 'Arch', url: 'https://archlinux.org/', icon: 'fas fa-linux', years: '' },
            { label: 'NixOS', url: 'https://nixos.org/', icon: 'fas fa-snowflake', years: '' },
            { label: 'Gentoo', url: 'https://www.gentoo.org/', icon: 'fas fa-terminal', years: '' },
            { label: 'Ubuntu', url: 'https://ubuntu.com/', icon: 'fab fa-ubuntu', years: '' },
          ]},
        ],
      },
      qr:           { text: 'Отсканируйте для перехода на мой сайт:', src: 'img/qr.svg', alt: 'QR-код' },
      instructions: { heading: 'Как пользоваться этим сайтом', text: 'Рекомендую перемещаться между вкладками вверху, нажимая на них или набирая 1, 2, 3, 4, 5 на странице.' },
      notes:        { heading: 'Примечания', text: 'Если вы просматриваете это в PDF, полный портфолио доступен по адресу:', url: 'https://maximoappendino.github.io', visitText: 'Посетите сайт для доступа к интерактивным функциям и демозаписям озвучивания.' },
    },
    demos: {
      header: { title: 'Мои Демо', subtitle: 'Подборка моих работ в озвучивании.' },
      items: [
        { audioSrc: 'demos/coffee-ad.wav', imageSrc: 'img/barista.png', title: 'Реклама Кофе', description: 'Rise & Grind.' },
        { audioSrc: 'demos/alpura-demo.wav', imageSrc: 'img/cow-argentinian.png', title: 'Реклама Alpura', description: 'Реклама молока Alpura' },
        { audioSrc: 'demos/demo1.wav', imageSrc: 'img/demo3.jpg', title: 'Старая Реклама', description: 'Классическая старая реклама с тем статическим шумом.' },
      ],
    },
    coding: {
      githubUser: 'maximoappendino', githubLabel: '>> МОЙ_GITHUB',
      scrollingText: '* BASH * HTML5 * CSS3 * JAVASCRIPT * PYTHON * NODEJS * C++ * RUST',
      activityLabel: '// МОНИТОР_АКТИВНОСТИ_GITHUB', reposLabel: '// ДАННЫЕ_РЕПОЗИТОРИЕВ', objectivesLabel: '// ТЕКУЩИЕ_ЦЕЛИ',
      objectives: [
        '> [ВЫПОЛНЯЕТСЯ] Освоение HTML/CSS/JS для e-commerce решений',
        '> [ВЫПОЛНЯЕТСЯ] Строительство Профессиональной Студии Озвучивания',
        '> [ВЫПОЛНЯЕТСЯ] Академическое Превосходство @ FAMAF (Информатика)',
        '> [ОЖИДАЕТСЯ] Глобальные путешествия и расширение сети (ETA: 2030)',
      ],
      loadingLines: ['[СИСТЕМА] Подключение к API GitHub...', '[СИСТЕМА] Загрузка данных репозиториев...'],
      errorText: '[ОШИБКА] Не удалось установить соединение с API GitHub.',
      footerText: 'Общая память: 640K... OK', noDesc: 'Описание отсутствует.',
    },
    future: {
      title: 'Великое Пророчество',
      items: [
        { year: '2026', title: 'Новый Год, Новые Возможности', text: 'В этом году я стремлюсь занять позицию, соответствующую моим долгосрочным карьерным целям в разработке ПО, озвучивании или продажах. Я посвящён академическому совершенству, сосредоточившись на математике и передовых технологиях. Также планирую выработать более дисциплинированный распорядок для личного и профессионального роста.', image: { src: 'img/future-eye-of-the-tiger.jpeg', alt: 'Eye of the Tiger' } },
        { year: '2030', title: 'Путешествия за Рубеж', text: 'К 2030 году я вижу себя путешествующим по Европе, выстраивающим прочную профессиональную сеть и работающим над масштабными проектами. Моя цель — создать бизнес, открывающий возможности для других. К этому времени рассчитываю окончить университет и завершить строительство персонального дата-центра.', image: { src: 'img/future-business.jpg', alt: 'Деловая встреча' } },
        { year: '2035', title: 'Строим Наш Новый Дом', text: 'К 2035 году я надеюсь обустроить дом для себя и своей супруги. Годами я мечтал смотреть из нашего окна на прекрасный закат, разделяя этот момент с любовью всей моей жизни.', image: { src: 'img/future-sunset.avif', alt: 'Пара смотрит закат' } },
      ],
    },
    personal: {
      header: { title: 'Просто Я.', subtitle: 'Мысли, кофе и пиксели.' }, readMore: 'Читать Далее',
      blogs: [
        { id: 'morning-routine', image: 'img/blog-sunrise.jpeg', title: 'Моя Утренняя Рутина', preview: 'Почему я встаю в 5 утра, чтобы бегать...', content: ['Вставать в 5 утра — не для всех, но для меня это переломный момент. Тихое спокойствие раннего утра создаёт идеальную среду для концентрации, планирования дня и достижения целей.', 'Мой распорядок включает 30-минутную пробежку, медитацию и здоровый завтрак. Это сочетание помогает начать день с ясной головой и позитивным настроем.', 'Конечно, бывают дни, когда я бы предпочёл остаться в постели, но преимущества рутины с лихвой перевешивают временный дискомфорт. Это дисциплина, глубоко повлиявшая на мою продуктивность и самочувствие.'] },
        { id: 'games', image: 'img/blog-arcade.jpg', title: 'Любимчики Всех Времён', preview: 'Это игры, которые сформировали мою душу.', content: ['Аркадные игры и старые консоли занимали важное место в моём детстве. От Game Boy Advance до PlayStation 2 игры были сырыми, сложными и полными характера. Metal Slug, Castlevania, Kirby, Mortal Kombat, Urban Reign и Resident Evil 4 оставили неизгладимый след.', 'Некоторые игры были не просто развлечением — они были мирами. Skyrim заставлял полностью терять счёт времени, а аркадные автоматы учили настойчивости.', 'Современные игры порой всё ещё умеют поймать эту магию. Outer Wilds и Rain World ценят любопытство и открытие. Они напоминают, почему я влюбился в игры.'] },
        { id: 'lost-media', image: 'img/blog-popeye.jpeg', title: 'Сохранение Утерянных Медиа', preview: 'Как я размещаю медиа для сохранения культуры для будущих поколений.', content: ['Сохранение медиа — это больше, чем хобби; это способ обеспечить, чтобы культура и история не были утрачены. Размещая и распространяя эти материалы, я надеюсь вносить вклад в сохранение нашего цифрового наследия.', 'Будь то малоизвестная реклама 80-х или почти забытая программа — каждый медиаматериал рассказывает историю. Я нахожу большое удовлетворение в технической задаче восстановления этих цифровых артефактов.'] },
        { id: 'computers', image: 'img/blog-computer.webp', title: 'Как Я Увлёкся Компьютерами', preview: 'С детства я любил пользоваться компьютерами и решать ошибки. Их на пути встретилось немало.', content: ['Я всегда был увлечён компьютерами. Сначала это было чистое любопытство — нажимать на всё подряд, ломать и пытаться понять, почему что-то работает или нет.', 'Со временем любопытство переросло в решение задач. Исправление ошибок и понимание взаимодействия ПО с железом стало второй натурой. Компьютеры превратились в системы, которые я мог по-настоящему понять.', 'Этот ранний опыт сформировал мой способ мышления. Мне комфортно экспериментировать, ошибаться и углубляться, пока что-то не обретёт смысл. Компьютеры научили меня терпению, логике и ценности практического обучения.'] },
        { id: 'discipline', image: 'img/blog-discipline.jpg', title: 'Дисциплина и Природа', preview: 'История о том, как я преодолевал свои пределы, чтобы стать сильнее — физически и духовно.', content: ['Медитация, контроль дыхания и боевые искусства всегда были глубоко взаимосвязаны для меня. Кунг-фу и муай-тай — это о дисциплине, осознанности и понимании человеческого тела.', 'Время на природе ещё больше обостряет это осознание. Походы без снаряжения, фридайвинг и погружение в открытый воздух сводят жизнь к основам: дыхание, концентрация и движение.', 'В осознании смертоносности техник и необходимости спокойствия ума есть что-то смиряющее. Природа учит тому же — уважай её, иначе она захлестнёт тебя. Баланс — это всё.'] },
      ],
    },
  },

};
