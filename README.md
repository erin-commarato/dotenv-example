# dotenv-example
A brief demo of dotenv

## Usage:
Clone this repo
1. Run `npm i` to install the dependencies
2. Create a file at the root of your project called .env
3. Add the following variable to the .env file:
  SUPER_SECRET=123abc
4. In your terminal, run `node index.js`
5. The secret variable is found in process.env, thanks to the dotenv package
