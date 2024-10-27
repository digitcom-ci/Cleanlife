let currentDay = 1;

document.getElementById('next-day-btn').addEventListener('click', () => {
    if (currentDay < 31) {
        currentDay++;
        updateDayAndProgress();
    }
});

document.getElementById('prev-day-btn').addEventListener('click', () => {
    if (currentDay > 1) {
        currentDay--;
        updateDayAndProgress();
    }
});

function updateDayAndProgress() {
    document.getElementById('day-number').textContent = currentDay;
    document.getElementById('current-day').textContent = currentDay;
    updateProgress();
    resetCheckboxes();
}

function resetCheckboxes() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const percentage = Math.round((currentDay / 31) * 100);
    progressBar.style.width = percentage + '%';
    progressText.textContent = `Jour ${currentDay} sur 31 - ${percentage}%`;
}
// FonctionnalitÃ© du menu hamburger
const hamburger = document.getElementById('hamburger');
document.addEventListener("DOMContentLoaded", function() {
    const calendarBody = document.getElementById('calendar-body');
    const progressTasks = document.getElementById('progress-tasks');
    const selectedDayElement = document.getElementById('selected-day');
    let currentDay = 1;

    // Exemple de donnÃ©es pour les tÃ¢ches quotidiennes
    const dailyProgress = {
        1: ["Faire du Pilates", "Boire 2 litres d'eau", "Se brosser les dents matin et soir"],
        2: ["Faire une marche de 30 minutes", "Lire un chapitre d'un livre", "Routine du visage"],
        3: ["Essayer un masque de beautÃ©", "MÃ©ditation 10 minutes", "Planifier la journÃ©e"],
        // Ajoute plus de jours ici jusqu'Ã  31
    };

    // GÃ©nÃ©rer le calendrier de 31 jours
    function generateCalendar() {
        let day = 1;
        for (let i = 0; i < 5; i++) { // 5 semaines de jours affichÃ©s
            const row = document.createElement('tr');
            for (let j = 0; j < 7; j++) { // 7 jours par semaine
                const cell = document.createElement('td');
                if (day <= 31) {
                    cell.textContent = day;
                    cell.addEventListener('click', () => selectDay(day, cell));
                    row.appendChild(cell);
                    day++;
                } else {
                    row.appendChild(document.createElement('td')); // Cases vides
                }
            }
            calendarBody.appendChild(row);
        }
    }

    // SÃ©lectionne un jour et affiche les tÃ¢ches correspondantes
    function selectDay(day, cell) {
        currentDay = day;
        selectedDayElement.textContent = day;

        // RÃ©initialiser la classe active des autres jours
        document.querySelectorAll('#calendar-table td').forEach(td => td.classList.remove('active'));
        cell.classList.add('active');

        // Afficher les tÃ¢ches pour le jour sÃ©lectionnÃ©
        updateProgressTasks();
    }

    // Mettre Ã  jour les tÃ¢ches du jour sÃ©lectionnÃ©
    function updateProgressTasks() {
        progressTasks.innerHTML = ''; // RÃ©initialiser les tÃ¢ches
        const tasks = dailyProgress[currentDay] || [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('click', () => markDayAsComplete());
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(` ${task}`));
            progressTasks.appendChild(li);
        });
    }

    // Marquer le jour comme complÃ©tÃ© dans le calendrier
    function markDayAsComplete() {
        const selectedCell = document.querySelector(`#calendar-table td.active`);
        if (selectedCell) {
            selectedCell.classList.add('completed');
        }
    }

    generateCalendar();
    updateProgressTasks();
});
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block'; // Toggle du menu
});
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}
// GÃ©rer l'affichage des modals Connexion et Inscription
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeSignup = document.getElementById('close-signup');
const closeLogin = document.getElementById('close-login');
const userInfo = document.getElementById('user-info');
const usernameDisplay = document.getElementById('username-display');

// Ouvrir le formulaire de connexion
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Ouvrir le formulaire d'inscription
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

// Fermer les modals
closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
});
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Simuler la connexion d'un utilisateur (fonctionnalitÃ© serveur Ã  ajouter)
const userLoggedIn = true;  // Simule qu'un utilisateur est connectÃ©
const username = "Yasmine"; // Nom de l'utilisateur connectÃ©

if (userLoggedIn) {
    usernameDisplay.textContent = `Bienvenue, ${username}`;
    userInfo.style.display = 'block';
}
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = "Les mots de passe ne correspondent pas.";
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Envoie les donnÃ©es d'inscription Ã  une base de donnÃ©es ou une API
        alert(`Merci pour ton inscription, ${name} !`);
        // RÃ©initialiser le formulaire aprÃ¨s l'inscription
        document.getElementById('signup-form').reset();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const monthElement = document.getElementById('month');
    const yearElement = document.getElementById('year');
    const taskList = document.getElementById('taskList');

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    monthElement.textContent = today.toLocaleString('default', { month: 'long' });
    yearElement.textContent = year;

    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        day.addEventListener('click', () => {
            if (!day.classList.contains('completed')) {
                day.classList.add('completed');
                const li = document.createElement('li');
                li.textContent = `Task completed on ${day.textContent} ${monthElement.textContent} ${year}`;
                taskList.appendChild(li);
            }
        });
    });
});

