document.addEventListener('DOMContentLoaded', () => {
    
    // --- STATE MANAGEMENT ---
    const body = document.body;
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Mode names corresponding to IDs
    const modes = {
        1: 'professional',
        2: 'audio',
        3: 'coding',
        4: 'personal',
        5: 'future'
    };

    // --- SWITCH FUNCTION ---
    function setMode(modeIndex) {
        // 1. Remove all mode classes from body
        body.classList.remove('mode-professional', 'mode-coding', 'mode-future', 'mode-personal', 'mode-audio');
        
        // 2. Add new mode class
        const modeName = modes[modeIndex];
        body.classList.add(`mode-${modeName}`);

        // 3. Update Active Nav Button
        navButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.nav-btn[data-mode="${modeIndex}"]`);
        if(activeBtn) activeBtn.classList.add('active');

        // 4. Initialize specific things if needed
        if (modeIndex === 2) {
            loadDemos();
        }
        if (modeIndex === 3) {
            loadCodingData();
        }
    }

    function loadDemos() {
        const view = document.getElementById('view-audio');
        if (view.getAttribute('data-loaded') === 'true') {
            return;
        }

        const demosGrid = document.getElementById('demos-grid');
const demoFiles = [
            { audioSrc: 'coffee-ad.wav', imageSrc: 'img/barista.png', title: 'Coffee Advertisement', description: 'Rise & Grind.' },
            { audioSrc: 'alpura-demo.wav', imageSrc: 'img/cow-argentinian.png', title: 'Publicidad Alpura', description: 'Publicidad de leche Alpura' },
            { audioSrc: 'demo.wav', imageSrc: 'img/demo3.jpg', title: 'Old Commercial', description: 'A clasic old commercial with that static noise.' }
        ];

        demosGrid.innerHTML = ''; // Clear loading message

        demoFiles.forEach(demo => {
            const card = document.createElement('div');
            card.className = 'demo-card';
            card.innerHTML = `
                <div class="demo-card-img" style="background-image: url('${demo.imageSrc}'); background-size: cover; background-position: center;"></div>
                <h3>${demo.title}</h3>
                <p>${demo.description}</p>
                <audio controls>
                    <source src="demos/${demo.audioSrc}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
            `;
            demosGrid.appendChild(card);
        });


        view.setAttribute('data-loaded', 'true');
    }

    async function loadCodingData() {
        const view = document.getElementById('view-coding');
        if (view.getAttribute('data-loaded') === 'true') {
            return;
        }

        const username = 'maximoappendino';
        const repoList = document.getElementById('repo-list');

        try {
            // Fetch Repos (excluding the profile README repo and fork)
            const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
            let repos = await repoResponse.json();
            
            // Filter out the special profile repo if desired, and limit to 6
            repos = repos.filter(repo => repo.name !== username).slice(0, 6);
            
            repoList.innerHTML = ''; // Clear loading message

            repos.forEach(repo => {
                const li = document.createElement('li');
                const lastUpdate = new Date(repo.updated_at).toLocaleDateString();
                li.innerHTML = `
                    <div>
                        <a href="${repo.html_url}" target="_blank">/usr/bin/${repo.name}</a>
                    </div>
                    <div class="repo-meta">
                        > DESC: ${repo.description || 'No description provided.'}<br>
                        > LANG: ${repo.language || 'Mixed'} | STARS: ${repo.stargazers_count} | UPDATED: ${lastUpdate}
                    </div>
                `;
                repoList.appendChild(li);
            });

            view.setAttribute('data-loaded', 'true');

        } catch (error) {
            repoList.innerHTML = '<li>[ERROR] Failed to establish connection to GitHub API.</li>';
            console.error('Error fetching GitHub data:', error);
        }
    }

    // --- MODAL LOGIC (BLOG) ---
    const blogModal = document.getElementById('blog-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    function openBlog(blogId) {
        const contentSource = document.getElementById(`content-${blogId}`);
        if (contentSource) {
            modalBody.innerHTML = contentSource.innerHTML;
            blogModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            console.error(`Blog content not found for ID: ${blogId}`);
        }
    }

    function closeBlog() {
        blogModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Attach click listeners to blog cards
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const blogId = card.getAttribute('data-blog-id');
            openBlog(blogId);
        });
    });

    closeModal.addEventListener('click', closeBlog);
    
    window.addEventListener('click', (e) => {
        if (e.target === blogModal) closeBlog();
    });

    // --- LANGUAGE SWITCHER ---
    const langContainer = document.querySelector('.lang-container');
    const langOpts = document.querySelectorAll('.lang-opt');

    const translations = {
        en: {
            nav1: '1. CV',
            nav2: '2. Demos',
            nav3: '3. Coding',
            nav4: '4. Personal',
            nav5: '5. Future',
            schedule: 'Schedule Interview',
            whatsapp: 'WhatsApp Me',
            cvTitle: 'Salesman, Software Developer, Voice Actor & Medical, Legal, Financial Interpreter',
            expTitle: 'Work Experience (Newest to oldest)',
            eduTitle: 'Education',
            softTitle: 'Software Experience',
            howTo: 'How to use this website',
            howToDesc: 'I recommend navigating through the tabs at the top by clicking them or typing 1, 2, 3, 4, 5 while on the page.',
            notes: 'Notes',
            pdfNote: 'If you are viewing this via PDF, you can access my complete portfolio at:'
        },
        es: {
            nav1: '1. CV',
            nav2: '2. Demos',
            nav3: '3. Programación',
            nav4: '4. Personal',
            nav5: '5. Futuro',
            schedule: 'Agendar Entrevista',
            whatsapp: 'WhatsApp',
            cvTitle: 'Vendedor, Desarrollador de Software, Actor de Voz e Intérprete Médico, Legal y Financiero',
            expTitle: 'Experiencia Laboral (Más reciente a más antigua)',
            eduTitle: 'Educación',
            softTitle: 'Experiencia en Software',
            howTo: 'Cómo usar este sitio',
            howToDesc: 'Recomiendo navegar a través de las pestañas superiores haciendo clic en ellas o presionando 1, 2, 3, 4 o 5 en el teclado.',
            notes: 'Notas',
            pdfNote: 'Si estás viendo esto vía PDF, puedes acceder a mi portafolio completo en:'
        },
        it: {
            nav1: '1. CV',
            nav2: '2. Demo',
            nav3: '3. Coding',
            nav4: '4. Personale',
            nav5: '5. Futuro',
            schedule: 'Fissa un colloquio',
            whatsapp: 'WhatsApp',
            cvTitle: 'Venditore, Sviluppatore Software, Doppiatore e Interprete Medico, Legale, Finanziario',
            expTitle: 'Esperienza Lavorativa (Dalla più recente)',
            eduTitle: 'Istruzione',
            softTitle: 'Esperienza Software',
            howTo: 'Come usare questo sito',
            howToDesc: 'Consiglio di navigare tra le schede in alto cliccandole o digitando 1, 2, 3, 4, 5 mentre sei sulla pagina.',
            notes: 'Note',
            pdfNote: 'Se stai visualizzando questo tramite PDF, puoi accedere al mio portfolio completo su:'
        }
    };

    function updateLanguage(lang) {
        const t = translations[lang];
        
        // Update data attribute for CSS animation
        if(langContainer) langContainer.setAttribute('data-lang', lang);
        
        // Update Nav
        document.querySelector('.nav-btn[data-mode="1"]').textContent = t.nav1;
        document.querySelector('.nav-btn[data-mode="2"]').textContent = t.nav2;
        document.querySelector('.nav-btn[data-mode="3"]').textContent = t.nav3;
        document.querySelector('.nav-btn[data-mode="4"]').textContent = t.nav4;
        document.querySelector('.nav-btn[data-mode="5"]').textContent = t.nav5;

        // Update Floating Buttons
        document.querySelector('.schedule-btn').innerHTML = `<i class="fas fa-calendar-check"></i> ${t.schedule}`;
        document.querySelector('.whatsapp-btn').innerHTML = `<i class="fab fa-whatsapp"></i> ${t.whatsapp}`;

        // Update CV Header
        const cvHeaderP = document.querySelector('.cv-header p');
        if (cvHeaderP) cvHeaderP.textContent = t.cvTitle;

        // Update Section Titles
        const sections = document.querySelectorAll('.cv-section h3');
        if (sections.length >= 3) {
            sections[0].textContent = t.expTitle;
            sections[1].textContent = t.eduTitle;
            sections[2].textContent = t.softTitle;
        }

        // Update Footer
        const footerH3s = document.querySelectorAll('.cv-main > div > h3');
        if (footerH3s.length >= 2) {
            footerH3s[0].textContent = t.howTo;
            footerH3s[1].textContent = t.notes;
        }
        const footerPs = document.querySelectorAll('.cv-main > div > p');
        if (footerPs.length >= 2) {
            footerPs[0].textContent = t.howToDesc;
            footerPs[1].textContent = t.pdfNote;
        }

        // Update active class
        langOpts.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });
    }

    langOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Initialize default state
    if(langContainer) langContainer.setAttribute('data-lang', 'en');

    // --- EVENT LISTENERS (CLICK) ---
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = parseInt(btn.getAttribute('data-mode'));
            setMode(mode);
        });
    });

    // --- EVENT LISTENERS (KEYBOARD) ---
    document.addEventListener('keydown', (e) => {
        // Close modal on Escape
        if (e.key === 'Escape' && blogModal.style.display === 'block') {
            closeBlog();
            return;
        }

        // Check if key is 1, 2, 3, 4, or 5
        if (['1', '2', '3', '4', '5'].includes(e.key)) {
            if (e.altKey) return;
            setMode(parseInt(e.key));
        }
    });

});
