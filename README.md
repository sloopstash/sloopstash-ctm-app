# Sloopstash CTM App

Welcome to the **Sloopstash CTM app**, which includes both the backend and frontend components. This guide will walk you through the setup process to run the application locally.

## Project Structure

The project consists of two main folders:

- **backend**: Node.js backend API for the CTM app.
- **frontend**: React frontend for the CTM app.

## Prerequisites

Before you start, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
  - **Installation for Node.js**:
    - Visit the official [Node.js website](https://nodejs.org/) and download the latest stable version (LTS). Follow the installation instructions specific to your operating system (Windows, macOS, or Linux).
    - You can verify the installation by running the following commands in your terminal or command prompt:
      ```bash
      node -v
      npm -v
      ```
      If both commands return a version number, Node.js and npm (Node Package Manager) are successfully installed.

- [MongoDB](https://www.mongodb.com/) (running locally or remotely)
  - If you want to run MongoDB locally, install it from [MongoDB's official site](https://www.mongodb.com/try/download/community) and follow the instructions for your OS.
  - Alternatively, you can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution.

## Backend Setup

The backend of this application is built with **Node.js** and **Express**. Follow these steps to get the backend running locally.

### Steps:

1. **Navigate to the `backend` folder**:
    ```bash
    cd sloopstash/backend
    ```

2. **Create a `.env` file** for local configuration:
    ```bash
    touch .env
    ```

3. **Add the following environment variables** to the `.env` file:
    ```env
    MONGO_URI=mongodb://localhost:27017/ctm
    JWT_SECRET=your_secret_key_here
    ```

   - `MONGO_URI`: The MongoDB connection string for your database.
   - `JWT_SECRET`: Secret key used to sign JWT tokens for authentication.

4. **Install dependencies**:
    ```bash
    npm install
    ```

5. **Start the backend server**:

   - This command will use **nodemon** to run the server. Make sure you have **nodemon** installed globally if you don't have it already: 
     ```bash
     npm install -g nodemon
     ```

    ```bash
    npm run dev
    ```

The backend should now be running on [http://localhost:2000](http://localhost:2000).


## Frontend Setup

The frontend is built with **React**. Follow these steps to get the frontend running locally.

### Steps:

1. **Navigate to the `frontend` folder**:
    ```bash
    cd sloopstash/frontend
    ```

2. **Create a `.env` file** for local configuration:
    ```bash
    touch .env
    ```

3. **Add the following environment variable** to the `.env` file:
    ```env
    BACKEND_BASE_URL=http://localhost:2000/api
    ```

   - `BACKEND_BASE_URL`: The URL to the backend API. This allows the frontend to make API requests to the backend.

4. **Install dependencies**:
    ```bash
    npm install
    ```

5. **Start the frontend development server**:
    ```bash
    npm start
    ```

The frontend should now be running on [http://localhost:3000](http://localhost:3000).

## Additional Notes

- **MongoDB**: Make sure you have **MongoDB** running locally on your machine. If not, you can install it from [MongoDB's official site](https://www.mongodb.com/try/download/community) or use a cloud-based MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
  
- **Development Setup**: The app is set up for local development. If you encounter any issues with missing dependencies or errors during setup, try deleting the `node_modules` folder and running `npm install` again.

- **Port Customization**: If you want to change the backend port or database URI, you can modify the `.env` files in both the frontend and backend directories accordingly.

- **Future Updates**: **Containerization** work using **Docker** is ongoing and will be available in future releases. Once containerization is complete, you will be able to run the app using Docker and Docker Compose.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Thank you for using the Sloopstash CTM app!**
