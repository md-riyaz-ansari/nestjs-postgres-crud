<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
  <a href="http://www.postgresql.org/" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="125" alt="PostgreSQL Logo" /></a>
</p>

# NestJs-PostgeSQL-CRUD-Api

Project Description: This is a simple project built using NestJS and PostgreSQL to demonstrate CRUD operations with an example of managing books.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [License](#license)

## Introduction

This project is a basic example of how to perform CRUD operations (Create, Read, Update, Delete) using NestJS and PostgreSQL. It provides a simple API for managing books, including adding new books, fetching book details, updating book information, and deleting books from the database.

## Features

- Create a new book with details like title, author, description.
- Fetch details of a specific book using its unique identifier.
- Update the information of an existing book.
- Delete a book from the database.

## Requirements

Before running the project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- PostgreSQL database

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/md-riyaz-ansari/nestjs-postgres-crud-api.git
   cd your-repo
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Configuration

Before running the application, you need to set up the database configuration. Open the `.env` file and provide the required PostgreSQL database connection settings.

```typescript
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=book
```

## Usage

To start the application, run the following command:

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

By default, the application will run on `http://localhost:3000/api`. You can access the API endpoints using a tool like Postman or a web browser.

## Endpoints

The API provides the following endpoints:

- `POST /book`: Create a new book.
- `GET /book`: Get a list of all books.
- `GET /book:id`: Get a specific book by id.
- `PUT /book/:id`: Update information for a specific book.
- `DELETE /book/:id`: Delete a book.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.

## Author

- Your Name
- GitHub: [md-riyaz-ansari](https://github.com/md-riyaz-ansari)
- Twitter: [@Md_Riyaz_Ansari](https://twitter.com/Md_Riyaz_Ansari)

---

Thank you for checking out this project! If you have any questions or feedback, please feel free to reach out. Happy coding!
