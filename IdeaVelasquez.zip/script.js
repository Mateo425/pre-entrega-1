document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Cargar tareas desde LocalStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));
    };

    // Guardar tareas en LocalStorage
    const saveTasks = () => {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('span').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Agregar tarea al DOM
    const addTaskToDOM = (task) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <button>Eliminar</button>
        `;
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);

        // Eventos de tarea
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'SPAN') {
                li.classList.toggle('completed');
                saveTasks();
            } else if (e.target.tagName === 'BUTTON') {
                li.remove();
                saveTasks();
            }
        });
    };

    // Agregar nueva tarea
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = {
            text: taskInput.value,
            completed: false
        };
        addTaskToDOM(newTask);
        saveTasks();
        taskInput.value = '';
    });

    // Cargar tareas al iniciar
    loadTasks();
});
