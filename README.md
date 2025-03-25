E-Commerce Admin Panel
Overview
This project is an Admin Panel for an e-commerce website. The admin can add Books and Users to the system using the provided forms. The app also includes functionality to send these details to the backend API.

The project includes:

Add Books - Form to add book details like title, author, and categories.

Add Users - Form to add user details like name, email, and image.

API Integration - The data entered is sent to the backend using fetch via POST requests.

Features:
Add Books:

Title

Thumbnail URL

Author

Page Count

Categories

Add Users:

First Name

Last Name

Email

Image URL

Mobile

About

Prerequisites:
Node.js (preferably the latest version)

React for the frontend

Backend API running on localhost (with specific endpoints /books and /users for adding books and users respectively).

Installation:
Step 1: Clone the Repository
Clone the repository to your local machine using:

bash
Copy
Edit
git clone <repository-url>
Step 2: Install Dependencies
Navigate into the project directory and install the necessary dependencies:

bash
Copy
Edit
cd ecommerce-website
npm install
Step 3: Start the Development Server
Run the following command to start the React app:

bash
Copy
Edit
npm start
This will start the development server on http://localhost:3000.

Step 4: Backend Setup (API)
Make sure you have the backend running at http://localhost:4500. The frontend will send POST requests to:

/books to add book details.

/users to add user details.

Ensure the backend API endpoints are active for proper functionality.

Step 5: Add Data
Add Books:

Navigate to the Add Books section.

Enter the required book details (Title, Thumbnail URL, Author, Page Count, Categories) and click the "Add Book" button.

The book data will be sent to the backend.

Add Users:

Navigate to the Add Users section.

Enter the required user details (First Name, Last Name, Email, Mobile, About, Image URL) and click the "Add User" button.

The user data will be sent to the backend.

Step 6: Customize the Styles
The app uses CSS for styling, specifically:

admin/addBooks.css - Styles for the add books form.

admin/addUsers.css - Styles for the add users form.

Feel free to customize the styles in these files.

Project Structure:
bash
Copy
Edit
/src
  /components
    AddBooks.js          # Add Books Form
    AddUsers.js          # Add Users Form
  /Styles
    /admin
      addBooks.css       # Styles for Add Books Form
      addUsers.css       # Styles for Add Users Form
  App.js                 # Main App component
  index.js               # Entry point of the app
Development Notes:
Form Validation: Ensure all fields are validated before submitting. You can add more robust validation (e.g., check for empty fields or correct formats).

Error Handling: Currently, there is no error handling for failed API calls. You can add .catch() blocks for better error management.

Technologies Used:
React: For building the user interface.

CSS: For styling the components.

fetch API: For making HTTP requests to the backend.

