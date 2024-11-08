
---

# My Node.js Project

This project is a basic Node.js setup with Express.js for creating and managing users, using MySQL as the database, and other packages like CORS and Body-Parser for handling cross-origin requests and parsing JSON data.

## Packages Used

Below are the npm packages used in this project:

1. **Express.js**  
   A web application framework for Node.js, used to create the server and handle routes.  
   **Installation Command:**  
   ```bash
   npm install express
   ```

2. **MySQL**  
   A Node.js module used to connect and interact with a MySQL database.  
   **Installation Command:**  
   ```bash
   npm install mysql
   ```

3. **CORS**  
   Middleware for enabling Cross-Origin Resource Sharing (CORS).  
   **Installation Command:**  
   ```bash
   npm install cors
   ```

4. **Body-Parser**  
   Middleware to parse incoming request bodies in JSON format.  
   **Installation Command:**  
   ```bash
   npm install body-parser
   ```

## Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/jatingyass/Product-shop.git
```

### 2. Navigate to the project directory

```bash
cd Product-shop
```

### 3. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 4. Set up the database

Make sure MySQL is installed and running on your system. Then, create a database called `user_db` using the following SQL command:

```sql
CREATE DATABASE user_db;
```

### 5. Running the server

To start the server, run the following command:

```bash
node index.js
```

The server will start on port `3000`. You can visit `http://localhost:3000/` to check if it's running properly.

## API Endpoints

Here are the available API endpoints:

### 1. Create User (POST request)
- **URL:** `/api/users`
- **Description:** Adds a new user to the database.

### 2. Get All Users (GET request)
- **URL:** `/api/users`
- **Description:** Retrieves all users from the database.

### 3. Delete User (DELETE request)
- **URL:** `/api/users/:id`
- **Description:** Deletes a user from the database based on their ID.

## Additional Notes

- **CORS Issues:**  
  If you encounter CORS-related issues, they are resolved using the `cors` package installed in the project.

- **MySQL Configuration:**  
  Ensure your MySQL database credentials in the `db.js` file match your local setup.

## Commands Recap

Here’s a summary of the key commands used in the project:

- **Cloning the Repository:**
  ```bash
  git clone https://github.com/jatingyass/Product-shop.git
  ```

- **Installing Dependencies:**
  ```bash
  npm install
  ```

- **Running the Server:**
  ```bash
  node index.js
  ```

- **Creating a New User via API (POST request):**  
  Use Postman or any other tool to send a POST request to `http://localhost:3000/api/users`.

---

      

