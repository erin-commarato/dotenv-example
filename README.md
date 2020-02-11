# dotenv-example
A brief demo of dotenv

## Usage:
Run `npm i` to install the dotenv package
Create a file at the root of your project called .env
Add the following variable to the .env file:
SUPER_SECRET=123abc

In your terminal, run `node index.js`
The secret variable is found in process.env, thanks to the dotenv package