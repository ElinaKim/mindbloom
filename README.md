## ![Logo](/client/src/assets/logo.svg)

# mindbloom

## Overview

mindbloom is a user friendly To-Do web app that helps people organize their daily life with ease.

## Tech Stack Used

<p>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" alt="tailwindcss" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>  <img src="https://static-00.iconduck.com/assets.00/knex-icon-512x512-vg01e8qb.png" alt="knex" width="30" height="30"/> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </p>

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
Create database and configure database connection details with your database information in .env
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

The app uses Vite as a build tool and development server.

#### Running the app and opening the application in the browser

```
npm run dev and press the 'o' key
```
