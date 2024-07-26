# BookOfRecords

## Overview
BookOfRecords is a server-side rendered application using EJS. It serves as a digital record book for various entries, allowing users to create, read, update, and delete records.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features
- Server-side rendering with EJS
- CRUD operations for records
- User authentication

## Technologies
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating Engine:** EJS

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine
- MongoDB installed and running

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Lakshya2099/BookOfRecords.git
    ```
2. Navigate to the project directory:
    ```bash
    cd BookOfRecords
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

### Running the Application
1. Set up environment variables:
    - Create a `.env` file in the root directory
    - Add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    ```

2. Start the application:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage
- Register a new user by providing an email and password
- Login with registered credentials to create, read, update, and delete records

## API Endpoints

### Records
- **GET** `/records` - Retrieve all records
- **POST** `/records` - Create a new record
- **GET** `/records/:id` - Retrieve a specific record by ID
- **PUT** `/records/:id` - Update a specific record by ID
- **DELETE** `/records/:id` - Delete a specific record by ID

## Contributing
Feel free to contribute by opening an issue or submitting a pull request.
