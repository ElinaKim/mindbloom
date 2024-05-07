## ![Logo](/client/src/assets/logo.svg)

# mindbloom

## Overview

mindbloom is a user friendly To-Do web app that helps people organize their daily life with ease.

## Problem

This app provides a simple and elegant interface, it empowers its users to organize their responsibilities efficiently and manage their time effectively.

## Tech Stack Used

<p>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="tailwindcss" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="react" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>  <img src="https://static-00.iconduck.com/assets.00/knex-icon-512x512-vg01e8qb.png" alt="knex" width="30" height="30"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </p>

### Routes

- /users/register

- /users/login

- /tasks/today

- /tasks/upcoming

- /tasks/:task_id

- /tasks/create-task

- /tasks/update-task/task_id

- /tasks/delete-task/:task_id

### Features

#### Using this app the user can:

- Create their account
- Sign in to their account if they have one already

#### Task Window:

- Add tasks on click in the Task window and provide:
- task name
- description
- due date
- Delete / Add Task

#### Menu Window:

- Click on Upcoming tasks to reveal the rest of tasks
- Click on Today to only display Today's tasks
- Sign out

### Backend Setup

```
cd server/
```

#### Installing necessary dev dependencies

```
npm i
```

The app uses knex to run queries and manage db migrations

#### Database

```
Create database and configure database connection details with your database information as described in .env.sample in .env
```

### Migrations

#### Create migration

```
npx knex knex migrate:make {migration_name} -x ts
```

#### Migrate to latest

```
npx knex migrate:latest
```

#### Seeding Data

```
npx knex seed:run
```

#### Running the app

```
npm run dev
```

### Frontend Setup

```
cd client/
```

#### Installing necessary dev dependencies

```
npm i
```

```
Configure connection details with URL as described in .env.sample in your .env
```

The app uses Vite as a build tool and development server.

#### Running the app and opening the application in the browser

```
npm run dev and press the 'o' key
```
