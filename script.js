document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value; // Get the description
    const taskList = document.getElementById('task-list');

    if (taskName && taskDescription) { // Check if both name and description are provided
        // Create a new list item
        const li = document.createElement('li');
        li.className = 'task-item'; // Add class for styling

        // Task name as heading
        const taskTitle = document.createElement('strong');
        taskTitle.textContent = taskName;

        // Task description
        const description = document.createElement('p');
        description.className = 'task-description';
        description.textContent = taskDescription;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Add an event listener to the delete button
        deleteBtn.addEventListener('click', () => {
            li.remove(); // Remove the list item when the button is clicked
        });

        // Create a completion button
        const completionBtn = document.createElement('button');
        completionBtn.textContent = 'Complete';
        completionBtn.className = 'completion-btn';

        // Add an event listener to the completion button
        completionBtn.addEventListener('click', () => {
            li.style.textDecoration = 'line-through'; // Mark the task as completed (e.g., strike-through text)
            completionBtn.disabled = true; // Disable the completion button after task completion
        });

        // Append task name and description
        li.appendChild(taskTitle);
        li.appendChild(description);

        // Append buttons side by side inside a div
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';
        buttonsContainer.appendChild(deleteBtn);
        buttonsContainer.appendChild(completionBtn);

        // Append the buttons container to the list item
        li.appendChild(buttonsContainer);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input fields
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
    }
});
