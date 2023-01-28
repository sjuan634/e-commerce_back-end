# E-Commerce Back-End

## Description

This app is the back end for an e-commerce site. MySQL is used for the database, Sequelize is use to connect with the database, Express is used to build the RESTful API.

## User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

First clone the repo to your local machine. You will need to have [node.js](https://nodejs.org/en/) installed. The from the root of the repo run ```npm install```, this will install all the dependencies needed for the script to work.

To setup the database you need to ```source``` the schema.sql file that is in the db folder. To seed the test data you will have to run the index.js file that is in the seeds folder (```node seeds/index.js```).

## Usage
[Setting up the database and starting server](https://drive.google.com/file/d/1BJquYZbkARur3Ski5YpkO13eWKzlNIH2/view)
[Testing route in Insomnia](https://drive.google.com/file/d/1gR2CB8wqGfx7QzRIR4f8ldF3Srv3AHDR/view)