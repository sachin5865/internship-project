document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const addTodoInput = document.getElementById('add-todo');

    addTodoInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const taskText = addTodoInput.value.trim();
            if (taskText !== '') {
                addTodoItem(taskText);
                addTodoInput.value = '';
            }
        }
    });

    function addTodoItem(taskText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const task = document.createElement('span');
        task.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(task);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    }
});