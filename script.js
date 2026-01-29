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
            { audioSrc: 'demo3.wav', imageSrc: 'img/demo3.jpg', title: 'Old Commercial', description: 'A clasic old commercial with that static noise.' }
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

    // --- EVENT LISTENERS (CLICK) ---
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = parseInt(btn.getAttribute('data-mode'));
            setMode(mode);
        });
    });

    // --- EVENT LISTENERS (KEYBOARD) ---
    document.addEventListener('keydown', (e) => {
        // Check if key is 1, 2, 3, 4, or 5
        if (['1', '2', '3', '4', '5'].includes(e.key)) {
            setMode(parseInt(e.key));
        }
    });

});
