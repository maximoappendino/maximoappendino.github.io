document.addEventListener('DOMContentLoaded', () => {

    // ── CONFIG ───────────────────────────────────────────────────
    // Supported language keys — must match keys in SITE_CONTENT (content.js)
    const LANGS = ['en', 'es', 'it', 'pt', 'de', 'ru'];

    // ── STATE ────────────────────────────────────────────────────
    const body       = document.body;
    const navButtons = document.querySelectorAll('.nav-btn');
    const modes      = { 1: 'professional', 2: 'audio', 3: 'coding', 4: 'personal', 5: 'future' };

    let cachedRepos = null; // GitHub API response, cached to avoid re-fetching on lang switch

    // ── LANGUAGE DROPDOWN ────────────────────────────────────────
    const langSelect = document.getElementById('lang-select');
    LANGS.forEach(key => {
        const opt = document.createElement('option');
        opt.value       = key;
        opt.textContent = SITE_CONTENT[key].name;
        langSelect.appendChild(opt);
    });
    langSelect.value = SITE_CONTENT.currentLang;

    langSelect.addEventListener('change', () => {
        SITE_CONTENT.currentLang = langSelect.value;
        document.documentElement.lang = langSelect.value;
        renderAll();
    });

    // ── RENDER: ENTRY POINT ──────────────────────────────────────
    function renderAll() {
        const c = SITE_CONTENT[SITE_CONTENT.currentLang];
        renderNav(c);
        renderButtons(c);
        renderDemos(c.demos);
        renderCV(c.cv);
        renderCoding(c.coding);
        renderFuture(c.future);
        renderPersonal(c.personal);
    }

    // ── RENDER: NAV & BUTTONS ────────────────────────────────────
    function renderNav(c) {
        navButtons.forEach((btn, i) => { btn.textContent = c.nav[i]; });
    }

    function renderButtons(c) {
        document.getElementById('btn-schedule-text').textContent = c.buttons.schedule;
        document.getElementById('btn-whatsapp-text').textContent = c.buttons.whatsapp;
    }

    // ── RENDER: CV ───────────────────────────────────────────────
    function renderCV(cv) {
        document.getElementById('cv-container').innerHTML = `
            <aside class="cv-sidebar">
                <div class="portrait-container">
                    <img src="${cv.portrait.src}" alt="${cv.portrait.alt}" class="cv-portrait">
                </div>
                ${sidebarSection(cv.contact.heading, `
                    <p><i class="fas fa-envelope"></i> E-mail:
                        <a href="mailto:${cv.contact.email}">${cv.contact.email}</a>
                    </p>
                    ${cv.contact.phones.map(p => `<p><i class="fas fa-phone"></i> ${p}</p>`).join('')}
                `)}
                ${sidebarSection(cv.languages.heading,
                    cv.languages.items.map(l => `<p>${l.flag} ${l.name}: ${l.level}</p>`).join('')
                )}
                ${sidebarSection(cv.availability.heading,
                    cv.availability.items.map(i => `<p>${i}</p>`).join('')
                )}
                ${sidebarSection(cv.jobInterests.heading, `<p>${cv.jobInterests.text}</p>`)}
                ${sidebarSection(cv.relocation.heading,   `<p>${cv.relocation.text}</p>`)}
                ${sidebarSection(cv.visas.heading,
                    `<ul class="visa-list">${cv.visas.items.map(v => `<li>${v}</li>`).join('')}</ul>`
                )}
                <div class="badge-base LI-profile-badge"
                     data-locale="en_US" data-size="medium" data-theme="light"
                     data-type="VERTICAL" data-vanity="maximoappendino" data-version="v1">
                    <a class="badge-base__link LI-simple-link"
                       href="https://ar.linkedin.com/in/maximoappendino?trk=profile-badge">
                        Maximo Appendino
                    </a>
                </div>
            </aside>

            <div class="cv-main">
                <header class="cv-header">
                    <h1>${cv.name}</h1>
                    <p>${cv.title}</p>
                </header>
                <hr>
                <div class="cv-content">
                    ${cvSection(cv.experience.heading, cv.experience.items.map(cvItem).join(''))}
                    ${cvSection(cv.education.heading,  cv.education.items.map(cvItem).join(''))}
                    ${softwareSection(cv.software)}
                    <div class="qr-container" style="text-align:center; margin-top:40px;">
                        <p>${cv.qr.text}</p>
                        <img src="${cv.qr.src}" alt="${cv.qr.alt}"
                             style="max-width:150px; margin-top:10px; border:1px solid #ddd; padding:10px; border-radius:8px;">
                    </div>
                    <div>
                        <h3>${cv.instructions.heading}</h3>
                        <p>${cv.instructions.text}</p>
                        <br>
                        <h3>${cv.notes.heading}</h3>
                        <p>${cv.notes.text}</p>
                        <a href="${cv.notes.url}">${cv.notes.url}</a>
                        <p>${cv.notes.visitText}</p>
                        <div style="margin-top:20px; border-top:1px solid #eee; padding-top:15px;">
                            <a href="https://maximoappendino.goatcounter.com" target="_blank"
                               style="text-decoration:none; color:#888; font-size:0.8rem; display:flex; align-items:center; gap:8px;">
                                <i class="fas fa-chart-line"></i> Total Views:
                                <img src="https://maximoappendino.goatcounter.com/counter/total.svg"
                                     alt="Views" style="height:1.2em; vertical-align:middle;">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function sidebarSection(heading, content) {
        return `<div class="sidebar-section"><h4>${heading}</h4>${content}</div>`;
    }

    function cvSection(heading, content) {
        return `<div class="cv-section"><h3>${heading}</h3>${content}</div>`;
    }

    function cvItem(item) {
        return `
            <div class="cv-item">
                <div class="cv-text">
                    <h4>${item.title}</h4>
                    ${item.location ? `<span class="location">${item.location}</span>` : ''}
                    <span class="date">${item.date}</span>
                    <p>${item.description}</p>
                </div>
                <a href="${item.logo.url}" target="_blank" class="cv-logo-link">
                    <img src="${item.logo.src}" alt="${item.logo.alt}" class="cv-logo-img">
                </a>
            </div>
        `;
    }

    function softwareSection(software) {
        const categories = software.categories.map(cat => `
            <div class="software-category">
                <h5>${cat.name}</h5>
                <ul>
                    ${cat.items.map(item => `
                        <li>
                            <a href="${item.url}" target="_blank">
                                <i class="${item.icon}"></i> ${item.label}
                            </a>
                            ${item.years ? `<span class="years">${item.years}</span>` : ''}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
        return `<div class="cv-section"><h3>${software.heading}</h3><div class="software-grid">${categories}</div></div>`;
    }

    // ── RENDER: DEMOS ────────────────────────────────────────────
    function renderDemos(demos) {
        document.getElementById('demos-title').textContent    = demos.header.title;
        document.getElementById('demos-subtitle').textContent = demos.header.subtitle;

        document.getElementById('demos-grid').innerHTML = demos.items.map(demo => `
            <div class="demo-card">
                <div class="demo-card-img"
                     style="background-image:url('${demo.imageSrc}'); background-size:cover; background-position:center;">
                </div>
                <h3>${demo.title}</h3>
                <p>${demo.description}</p>
                <audio controls>
                    <source src="${demo.audioSrc}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `).join('');
    }

    // ── RENDER: CODING ───────────────────────────────────────────
    function renderCoding(coding) {
        const link = document.getElementById('coding-github-link');
        link.href  = `https://github.com/${coding.githubUser}`;

        document.getElementById('coding-title').textContent           = coding.githubLabel;
        document.getElementById('coding-scrolling').textContent       = coding.scrollingText;
        document.getElementById('coding-activity-label').textContent  = coding.activityLabel;
        document.getElementById('coding-repos-label').textContent     = coding.reposLabel;
        document.getElementById('coding-objectives-label').textContent = coding.objectivesLabel;
        document.getElementById('coding-footer').textContent          = coding.footerText;

        document.getElementById('gh-activity-graph').src =
            `https://github-readme-activity-graph.vercel.app/graph?username=${coding.githubUser}&theme=react-dark&bg_color=000000&color=0f0&line=0f0&point=0f0&area=true&hide_border=true`;

        document.getElementById('work-in-progress').innerHTML =
            coding.objectives.map(o => `<li>${o}</li>`).join('');

        // Repos: re-render with cached data (respects translated noDesc), or show loading
        if (cachedRepos) {
            renderRepoList(cachedRepos);
        } else {
            document.getElementById('repo-list').innerHTML =
                coding.loadingLines.map(l => `<li>${l}</li>`).join('');
        }
    }

    function renderRepoList(repos) {
        const coding = SITE_CONTENT[SITE_CONTENT.currentLang].coding;
        document.getElementById('repo-list').innerHTML = repos.map(repo => {
            const updated = new Date(repo.updated_at).toLocaleDateString();
            return `
                <li>
                    <div>
                        <a href="${repo.html_url}" target="_blank">/usr/bin/${repo.name}</a>
                    </div>
                    <div class="repo-meta">
                        > DESC: ${repo.description || coding.noDesc}<br>
                        > LANG: ${repo.language || 'Mixed'} | STARS: ${repo.stargazers_count} | UPDATED: ${updated}
                    </div>
                </li>
            `;
        }).join('');
    }

    // ── RENDER: FUTURE ───────────────────────────────────────────
    function renderFuture(future) {
        document.getElementById('future-title').textContent = future.title;
        document.getElementById('future-timeline').innerHTML = future.items.map(item => `
            <article class="timeline-item">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-content">
                    <div class="text-content">
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                    </div>
                    <img src="${item.image.src}" alt="${item.image.alt}">
                </div>
            </article>
        `).join('');
    }

    // ── RENDER: PERSONAL / BLOG ──────────────────────────────────
    function renderPersonal(personal) {
        document.getElementById('personal-title').textContent    = personal.header.title;
        document.getElementById('personal-subtitle').textContent = personal.header.subtitle;

        const grid = document.getElementById('blog-grid');
        grid.innerHTML = personal.blogs.map(blog => `
            <article class="blog-card" data-blog-id="${blog.id}">
                <div class="blog-img"
                     style="background-image:url('${blog.image}'); background-size:cover; background-position:center;">
                </div>
                <div class="blog-card-content">
                    <h3>${blog.title}</h3>
                    <p>${blog.preview}</p>
                </div>
                <a href="#">${personal.readMore}</a>
            </article>
        `).join('');

        grid.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', e => {
                e.preventDefault();
                openBlog(card.getAttribute('data-blog-id'));
            });
        });
    }

    // ── BLOG MODAL ───────────────────────────────────────────────
    const blogModal  = document.getElementById('blog-modal');
    const modalBody  = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    function openBlog(blogId) {
        const personal = SITE_CONTENT[SITE_CONTENT.currentLang].personal;
        const blog     = personal.blogs.find(b => b.id === blogId);
        if (!blog) return;
        modalBody.innerHTML = `<h1>${blog.title}</h1>${blog.content.map(p => `<p>${p}</p>`).join('')}`;
        blogModal.style.display     = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeBlog() {
        blogModal.style.display     = 'none';
        document.body.style.overflow = 'auto';
    }

    closeModal.addEventListener('click', closeBlog);
    window.addEventListener('click', e => { if (e.target === blogModal) closeBlog(); });

    // ── GITHUB API ───────────────────────────────────────────────
    async function loadCodingData() {
        if (cachedRepos) { renderRepoList(cachedRepos); return; }

        const coding   = SITE_CONTENT[SITE_CONTENT.currentLang].coding;
        const repoList = document.getElementById('repo-list');

        try {
            const response = await fetch(
                `https://api.github.com/users/${coding.githubUser}/repos?sort=updated&per_page=10`
            );
            const all  = await response.json();
            cachedRepos = all.filter(r => r.name !== coding.githubUser).slice(0, 6);
            renderRepoList(cachedRepos);
            document.getElementById('view-coding').setAttribute('data-loaded', 'true');
        } catch (err) {
            repoList.innerHTML = `<li>${coding.errorText}</li>`;
            console.error('GitHub API error:', err);
        }
    }

    // ── MODE SWITCHING ───────────────────────────────────────────
    function setMode(modeIndex) {
        body.classList.remove('mode-professional', 'mode-coding', 'mode-future', 'mode-personal', 'mode-audio');
        body.classList.add(`mode-${modes[modeIndex]}`);

        navButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.nav-btn[data-mode="${modeIndex}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        if (modeIndex === 3) loadCodingData();
    }

    // ── EVENT LISTENERS ──────────────────────────────────────────
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => setMode(parseInt(btn.getAttribute('data-mode'))));
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && blogModal.style.display === 'block') { closeBlog(); return; }
        if (['1', '2', '3', '4', '5'].includes(e.key) && !e.altKey) setMode(parseInt(e.key));
    });

    // ── INIT ─────────────────────────────────────────────────────
    renderAll();
    setMode(1);

});
