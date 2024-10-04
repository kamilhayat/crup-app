I created a simple web application that allows users to manage a list of items. The application consists of a frontend built with React and a backend using Node.js with Express, while MongoDB is used to store the data.

How It Works
Setup the Backend:
I set up an Express server that connects to a MongoDB database.
I created RESTful API endpoints for performing CRUD (Create, Read, Update, Delete) operations on the items.
The backend allows users to add new items, view all items, edit existing items, and delete items from the database.

Build the Frontend:

I used React to create a user-friendly interface.
The main features include:
A homepage that displays the list of items.
A form to add new items to the list.
An edit button next to each item that allows users to modify the item name.
A delete button to remove an item from the list.

When users add an item, it is sent to the backend and stored in the database.
Users can edit an item by clicking the edit button, which brings up an input field to change the item name.
Once edited, the changes are saved back to the database.
Users can also delete items they no longer need.


I styled the application using CSS to make it visually appealing and user-friendly, ensuring that buttons and input fields are well-organized and easy to use.

By combining React for the frontend and Node.js with Express for the backend, I built a full-stack application that allows users to easily manage their items with a simple and interactive interface. The use of MongoDB for data storage ensures that all changes are saved and persistent across sessions.