document.addEventListener('DOMContentLoaded', () => {
    const threadForm = document.getElementById('thread-form');
    const threadList = document.getElementById('thread-list');

    // Function to create a new thread item
    function createThreadElement(title, description) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
        `;
        return listItem;
    }

    // Handle form submission
    threadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        if (title && description) {
            const newThread = createThreadElement(title, description);
            threadList.appendChild(newThread);

            // Clear form fields
            threadForm.reset();
        }
    });
});
