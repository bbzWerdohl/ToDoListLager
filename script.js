const defaultData = [
    {
        id: 0,
        categorie: "Hyreka",
        title: "Katalog erstellen",
        beschreibung: "Im Hyreka aus dem Dateien, einem Katalog mit Bildern erstellen",
        created_at: "22.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Herr Schmack",
        task_status_inWork: '',
        task_status_completed: 'Elvis',
        completed_at: '27.05.2024'
    },
    {
        id: 1,
        categorie: "Lager",
        title: "Inventur Monat März 2024",
        beschreibung: "Aufnahme der Artikel im Lager",
        created_at: "24.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Herr Schmack",
        task_status_inWork: '',
        task_status_completed: 'Elvis, Dominik',
        completed_at: '26.04.2024'
    },
    {
        id: 2,
        categorie: "Lager",
        title: "Inventur Monat April 2024",
        beschreibung: "Aufnahme der Artikel im Lager",
        created_at: "30.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Herr Schmack",
        task_status_inWork: '',
        task_status_completed: 'Elvis, Sven',
        completed_at: '14.05.2024'
    },
    {
        id: 3,
        categorie: "Allgemein",
        title: "Projekt 'Der Trip nach Norwegen'",
        beschreibung: "Gesundheits- Förderprogramm wo Teilnehmer Schritte sammeln und an einem virtuelle Trip nach Norwegen teilnehmen",
        created_at: "08.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "bbz",
        task_status_inWork: '',
        task_status_completed: 'Alle',
        completed_at: '07.05.2024'
    },
    {
        id: 4,
        categorie: "Kiosk",
        title: "Verkauf und Kundenbetreuung",
        beschreibung: "Verkauf von Waren und Betreuung von Kunden",
        created_at: "01.01.2022",
        isFertig: false,
        isImArbeit: true,
        creator: "bbz",
        task_status_inWork: 'Herr Capitzi',
        task_status_completed: '',
        completed_at: ''
    },
    {
        id: 5,
        categorie: "Kiosk",
        title: "Artikelliste aktualisieren",
        beschreibung: "Aktualisierung der Artikelliste",
        created_at: "29.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Nicole",
        task_status_inWork: '',
        task_status_completed: 'Nicole',
        completed_at: '30.04.2024'
    },
    {
        id: 6,
        categorie: "Kiosk",
        title: "Aushangs Werbung",
        beschreibung: "Neue Werbung für das Kiosk erstellen",
        created_at: "24.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Nicole",
        task_status_inWork: '',
        task_status_completed: 'Nicole',
        completed_at: '25.04.2024'
    },
    {
        id: 7,
        categorie: "Allgeimein",
        title: "Plakat Europawahl bbz",
        beschreibung: "Erstellen Projekt Plakat für bbz Projekt 'Europawahl'",
        created_at: "16.02.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Nicole",
        task_status_inWork: '',
        task_status_completed: 'Nicole',
        completed_at: '19.02.2024'
    },
    {
        id: 8,
        categorie: "Allgemein",
        title: "Willkommensplakat",
        beschreibung: "Erstellen Willkommensplakat für bbz",
        created_at: "29.02.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Nicole",
        task_status_inWork: '',
        task_status_completed: 'Nicole',
        completed_at: '30.02.2024'
    },
    {
        id: 9,
        categorie: "Allgemein",
        title: "PC Programme prüfen",
        beschreibung: "PC Programme uberprüfen/ Liste erstellen von Apps",
        created_at: "14.03.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Nicole",
        task_status_inWork: '',
        task_status_completed: 'Nicole',
        completed_at: '14.02.2024'
    },
    {
        id: 10,
        categorie: "Allgemein",
        title: "'Allergie' Steckbrief",
        beschreibung: "Power Point Präsentation 'Allergien'",
        created_at: "15.04.2024",
        isFertig: false,
        isImArbeit: true,
        creator: "Nicole",
        task_status_inWork: 'Nicole',
        task_status_completed: '',
        completed_at: ''
    },
    {
        id: 11,
        categorie: "Allgemein",
        title: "Automaken stuckzahl",
        beschreibung: "Automaken stuckzahl/ verkaufliste",
        created_at: "27.02.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Lara",
        task_status_inWork: '',
        task_status_completed: 'Lara',
        completed_at: '27.02.2024'
    },
    {
        id: 12,
        categorie: "Allgemein",
        title: "Präsentation 'Planeten'",
        beschreibung: "PowerPoint Präsentation auf theme 'Planeten'",
        created_at: "01.03.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Lara",
        task_status_inWork: '',
        task_status_completed: 'Lara',
        completed_at: '08.03.2024'
    },
    {
        id: 13,
        categorie: "Allgemein",
        title: "Präsentation 'Pferderassen'",
        beschreibung: "PowerPoint Präsentation 'Pferderassen'",
        created_at: "11.03.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Lara",
        task_status_inWork: '',
        task_status_completed: 'Lara',
        completed_at: '18.03.2024'
    },
    {
        id: 14,
        categorie: "Allgemein",
        title: "ToDo Liste Lager",
        beschreibung: "Erstellen ToDo liste für abteilung Lager",
        created_at: "15.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Elvis",
        task_status_inWork: '',
        task_status_completed: 'Elvis',
        completed_at: '17.05.2024'
    },
    {
        id: 15,
        categorie: "Allgemein",
        title: "ToDo Liste Elektro",
        beschreibung: "Erstellen ToDo liste für Elektro Abteilung",
        created_at: "30.04.2024",
        isFertig: false,
        isImArbeit: true,
        creator: "Elvis",
        task_status_inWork: 'Elvis',
        task_status_completed: '',
        completed_at: ''
    },
    {
        id: 16,
        categorie: "Allgemein",
        title: "bbz Profile GitHub",
        beschreibung: "Erstellen bbz Profil im GitHub, ToDo Liste zu nutzen und verwalten",
        created_at: "30.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Elvis",
        task_status_inWork: '',
        task_status_completed: 'Elvis',
        completed_at: '17.05.2024'
    },
    {
        id: 17,
        categorie: "Hyreka",
        title: "Lieferschein bearbeiten",
        beschreibung: "Uberarbeitung des Lieferscheines",
        created_at: "15.04.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Herr Schmack",
        task_status_inWork: '',
        task_status_completed: 'Dominik',
        completed_at: '25.04.2024'
    },
    {
        id: 18,
        categorie: "Allgemein",
        title: "EuropaWahl 2024",
        beschreibung: "Präsentationen fertigen über Europa Wahl",
        created_at: "06.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Herr Schmack",
        task_status_inWork: '',
        task_status_completed: 'alle Teilnähmer',
        completed_at: '17.05.2024'
    },
    {
        id: 19,
        categorie: "Allgemein",
        title: "Europa Karte",
        beschreibung: "Europa karte zu erstellen",
        created_at: "13.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Frau Germowitz",
        task_status_inWork: '',
        task_status_completed: 'Frau Sen',
        completed_at: '17.05.2024'
    },
    {
        id: 21,
        categorie: "Allgemein",
        title: "Eiropäische Politische system",
        beschreibung: "Präsentationen über Politische system des Eiropäische Union",
        created_at: "06.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Herr Gester",
        task_status_inWork: '',
        task_status_completed: 'Dominik Gester, Sven Nau',
        completed_at: '17.05.2024'
    },
    {
        id: 22,
        categorie: "Allgemein",
        title: "Europa",
        beschreibung: "Präsentationen über Europa und EU",
        created_at: "06.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Elvis",
        task_status_inWork: '',
        task_status_completed: 'Elvis, Frau Sen',
        completed_at: '06.05.2024'
    },
    {
        id: 23,
        categorie: "Lager",
        title: "Inventur Monat Mai 2024",
        beschreibung: "Aufnahme der Artikel im Lager",
        created_at: "14.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Herr Schmack",
        task_status_inWork: '',
        task_status_completed: 'Elvis',
        completed_at: '04.06.2024'
    },
    {
        id: 24,
        categorie: "Lager",
        title: "Lager Schrank pflege",
        beschreibung: "Alle artikel im Schranke einsortieren und im Hyreka II eingäben",
        created_at: "06.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Elvis",
        task_status_inWork: '',
        task_status_completed: 'Elvis',
        completed_at: '10.05.2024'
    },
    {
        id: 25,
        categorie: "Kiosk",
        title: "Artikelliste aktualisieren",
        beschreibung: "Aktualisierung der Artikelliste",
        created_at: "15.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Elvis",
        task_status_inWork: '',
        task_status_completed: 'Elvis',
        completed_at: '16.05.2024'
    },
    {
        id: 26,
        categorie: "Hyreka",
        title: "Hyreka aktualisieren",
        beschreibung: "Hyreka client und falls nöttig Datenbank aktualisieren(Update)",
        created_at: "24.05.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Elvis",
        task_status_inWork: '',
        task_status_completed: 'Elvis',
        completed_at: '27.05.2024'
    },
    {
        id: 27,
        categorie: "Kiosk",
        title: "Rechnen",
        beschreibung: "Wie viel kostet ein Kaffee?",
        created_at: "20.06.2024",
        isFertig: true,
        isImArbeit: false,
        creator: "Dr. Prof. Patryk Zieba",
        task_status_inWork: '',
        task_status_completed: 'Dr. Prof. Patryk Zieba',
        completed_at: '20.06.2024'
    },
    {
        id: 28,
        categorie: "Lager",
        title: "Inventur Monat Juni 2024",
        beschreibung: "Aufnahme der Artikel im Lager",
        created_at: "14.05.2024",
        isFertig: false,
        isImArbeit: true,
        creator: "Elvis",
        task_status_inWork: 'Elvis',
        task_status_completed: '',
        completed_at: ''
    },
];

function saveDataToLocalStorage(data) {
    localStorage.setItem('tasks', JSON.stringify(data));
}

function loadDataFromLocalStorage() {
    const data = localStorage.getItem('tasks');
    const tasks = data ? JSON.parse(data) : defaultData;
    assignUniqueIds(tasks);
    return tasks;
}

function assignUniqueIds(data) {
    let currentId = 0;

    data.forEach(task => {
        if (!task.id) {
            task.id = currentId++;
        }
    });
}

let data = loadDataFromLocalStorage();

// Function to create a mapping of category names to category list elements
function createCategoryMap() {
    const categories = {};
    document.querySelectorAll('.categorie').forEach(categoryDiv => {
        const categoryName = categoryDiv.querySelector('h3').textContent.trim();
        const categoryList = categoryDiv.querySelector('.categorie_list');
        categories[categoryName] = categoryList;
    });
    return categories;
}

// Function to render tasks in their respective categories
function renderTasks(data, categoryMap) {
    data.sort((a, b) => {
        // Completed tasks go to the bottom
        if (a.isFertig && !b.isFertig) return 1;
        if (!a.isFertig && b.isFertig) return -1;

        // Tasks in work go to the top
        if (a.isImArbeit && !b.isImArbeit) return -1;
        if (!a.isImArbeit && b.isImArbeit) return 1;
    });
    
    data.forEach(task => {
        const taskElem = document.createElement('div');
        taskElem.classList.add('task');
        
        // Assign classes based on task status
        if (task.isFertig) {
            taskElem.classList.add('task-complete');
        } else if (task.isImArbeit) {
            taskElem.classList.add('task-in-work');
        }

        // Create task element content
        taskElem.innerHTML = `
            <h4>${task.title}</h4>
            <div class="taskElemInfo">
                <small>Erstellt am: ${task.created_at}</small>
                ${task.isFertig ? `<p>Fertig am: ${task.completed_at}</p><p>Gefertigt von: ${task.task_status_completed}</p>` : ''}
                ${task.isImArbeit ? `<p>Bearbeiter: ${task.task_status_inWork}</p>` : ''}
            </div>
        `;

        // Add task element to the appropriate category list
        const categoryList = categoryMap[task.categorie];
        if (categoryList) {
            categoryList.appendChild(taskElem);
        }

        // Event listener to open task info modal
        taskElem.addEventListener('click', () => openTaskInfoModal(task));
    });
}

// Function to open the task info modal and handle editing
function openTaskInfoModal(task) {
    const taskInfoModal = document.querySelector('#task_info_modal');
    const taskInfoContent = document.querySelector('#task_info_content');
    
    // Populate task info modal with task details
    taskInfoContent.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.beschreibung}</p>
        <small>Erstellt am: ${task.created_at}</small>
        <small>Erstellt von: ${task.creator}</small>
        ${task.isFertig ? `<p>Fertig am: ${task.completed_at}</p><p>Gefertigt von: ${task.task_status_completed}</p>` : ''}
        ${task.isImArbeit ? `<p>Bearbeiter: ${task.task_status_inWork}</p>` : ''}
        <button id="edit_button">Bearbeiten</button>
        <button id="delete_button">Löschen</button> <!-- Add delete button -->
        <div id="edit_section" style="display: none;">
            <label>
                <input type="checkbox" id="fertig_checkbox" ${task.isFertig ? 'checked' : ''}>
                Fertig
            </label>
            <label>
                <input type="checkbox" id="im_arbeit_checkbox" ${task.isImArbeit ? 'checked' : ''}>
                Im Arbeit
            </label>
            <input type="text" id="task_name_input" placeholder="Name" value="${task.isImArbeit ? task.task_status_inWork : task.task_status_completed}">
            <button id="save_button">Speichern</button>
        </div>
    `;

    // Initialize the checkboxes and input fields
    const fertigCheckbox = taskInfoModal.querySelector('#fertig_checkbox');
    const imArbeitCheckbox = taskInfoModal.querySelector('#im_arbeit_checkbox');
    const taskNameInput = taskInfoModal.querySelector('#task_name_input');
    
    fertigCheckbox.checked = task.isFertig;
    imArbeitCheckbox.checked = task.isImArbeit;

    // Event listener for the edit button
    taskInfoModal.querySelector('#edit_button').addEventListener('click', () => {
        const editSection = taskInfoModal.querySelector('#edit_section');
        editSection.style.display = 'block';
    });

    // Event listener for the save button
    taskInfoModal.querySelector('#save_button').addEventListener('click', () => {
        const taskName = taskNameInput.value;

        // Update task state based on checkbox status
        if (imArbeitCheckbox.checked) {
            task.task_status_inWork = taskName;
        } else {
            task.task_status_inWork = '';
        }

        if (fertigCheckbox.checked) {
            task.task_status_completed = taskName;
            task.completed_at = new Date().toLocaleString('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }).replace(',', '');
        } else {
            task.task_status_completed = '';
            task.completed_at = '';
        }

        // Update task properties
        task.isFertig = fertigCheckbox.checked;
        task.isImArbeit = imArbeitCheckbox.checked;

        // Save updated data
        saveDataToLocalStorage(data);

        // Re-render tasks
        const categoryMap = createCategoryMap();
        const categoryLists = document.querySelectorAll('.categorie_list');
        categoryLists.forEach(list => list.innerHTML = '');
        renderTasks(data, categoryMap);

        // Hide edit section and close the modal
        taskInfoModal.querySelector('#edit_section').style.display = 'none';
        taskInfoModal.classList.remove('modal_open');
    });

    // Event listener for the delete button
    taskInfoModal.querySelector('#delete_button').addEventListener('click', () => {
        deleteTask(task.id);
        taskInfoModal.classList.remove('modal_open');
    });

    // Open the task info modal
    taskInfoModal.classList.add('modal_open');
}

// Function to delete a task by its ID
function deleteTask(taskId) {
    data = data.filter(task => task.id !== taskId);
    saveDataToLocalStorage(data);

    // Re-render tasks
    const categoryMap = createCategoryMap();
    const categoryLists = document.querySelectorAll('.categorie_list');
    categoryLists.forEach(list => list.innerHTML = '');
    renderTasks(data, categoryMap);
}

function openCreateTaskModal() {
    const createTaskModal = document.querySelector('#create_task_modal');
    createTaskModal.classList.add('modal_open');
}
document.querySelector('#create_task_button').addEventListener('click', openCreateTaskModal);

// Event listeners for closing modals
document.querySelector('#create_task_modal .close').addEventListener('click', () => {
    document.querySelector('#create_task_modal').classList.remove('modal_open');
});

document.querySelector('#task_info_modal .close').addEventListener('click', () => {
    document.querySelector('#task_info_modal').classList.remove('modal_open');
});

// Function to open the create task modal
function openCreateTaskModal() {
    const createTaskModal = document.querySelector('#create_task_modal');
    createTaskModal.classList.add('modal_open');

    // Event listener for the form submission
    document.querySelector('#create_task_form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const categorieSelect = this.querySelector('#categorie_select');
        const categorie = categorieSelect.options[categorieSelect.selectedIndex].value;
        const taskName = this.querySelector('.task_name').value;
        const details = this.querySelector('.details').value;
        const nameOfCreator = this.querySelector('.nameOfCreator').value;

        const newTask = {
            id: data.length, // Assign a unique ID
            categorie: categorie,
            title: taskName,
            beschreibung: details,
            created_at: new Date().toLocaleDateString('de-DE'),
            isFertig: false,
            isImArbeit: false,
            creator: nameOfCreator,
            task_status_inWork: '',
            task_status_completed: '',
            completed_at: ''
        };

        // Add the new task to the data array
        data.push(newTask);

        // Save updated data
        saveDataToLocalStorage(data);

        // Re-render tasks
        const categoryMap = createCategoryMap();
        const categoryLists = document.querySelectorAll('.categorie_list');
        categoryLists.forEach(list => list.innerHTML = '');
        renderTasks(data, categoryMap);

        // Close the modal
        createTaskModal.classList.remove('modal_open');

        // Reset the form
        this.reset();
    });
}



// Initial render of tasks
const categoryMap = createCategoryMap();
renderTasks(data, categoryMap);
