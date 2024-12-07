// Update Time and Date
function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

// Run updateTime every second
setInterval(updateTime, 1000);

// Initialize on Load
updateTime();


// Get references to elements
const todoContainer = document.getElementById('todo-container');
const todoButton = document.querySelector('.floating-buttons .button:nth-child(4)');
const minimizeButton = document.getElementById('minimize-btn');
const addTaskButton = document.getElementById('add-task-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Toggle to-do list visibility
todoButton.addEventListener('click', () => {
  todoContainer.classList.toggle('hidden');
});

// Minimize the to-do list
minimizeButton.addEventListener('click', () => {
  todoContainer.classList.add('hidden');
});

// Add a new task
addTaskButton.addEventListener('click', () => {
  const task = todoInput.value.trim();
  if (task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${task}</span>
      <button class="delete-task-btn">Delete</button>
    `;

    // Add delete functionality
    listItem.querySelector('.delete-task-btn').addEventListener('click', () => {
      listItem.remove();
    });

    todoList.appendChild(listItem);
    todoInput.value = ''; // Clear the input
  }
});

// Handle Enter key for adding tasks
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskButton.click();
  }
});