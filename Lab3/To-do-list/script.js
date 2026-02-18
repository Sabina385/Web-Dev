const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo(task) {
  const li = document.createElement('li');

  const taskLeft = document.createElement('div');
  taskLeft.className = 'task-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑';
  deleteBtn.className = 'delete-btn';
  

  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(span);

  li.appendChild(taskLeft);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done');
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    addTodo(task);
    input.value = '';
    input.focus();
  }
});


document.querySelectorAll('#todo-list li').forEach(li => {
  const checkbox = li.querySelector('input');
  const deleteBtn = li.querySelector('.delete-btn');

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done');
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  if (checkbox.checked) {
    li.classList.add('done');
  }
});

