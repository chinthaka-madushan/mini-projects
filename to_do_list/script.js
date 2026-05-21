const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
let taskCount = 0;
let com_taskCount = 0;


addBtn.addEventListener('click', () => {
    addTask();
});

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const task = taskInput.value.trim();
    if (task === null || task === '') {
        alert('Please enter a task');
        return;
    }
    addlist(task);
    taskCount++;
    updateStatus();
}

function addlist(task) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('completed');
            com_taskCount++;
            updateStatus();
        } else {
            li.classList.remove('completed');
            com_taskCount--;
            updateStatus();
        }
    });

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        if(checkbox.checked){
            com_taskCount--;
            taskCount--;
        }else{
            taskCount--;
        }
        updateStatus();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';

    taskInput.focus();
}

function updateStatus(){
    totalTasks.textContent = taskCount;
    completedTasks.textContent = com_taskCount;
}