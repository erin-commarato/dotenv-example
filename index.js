// Use dotenv to read .env vars into Node
require('dotenv').config();

console.log('my super secret variable is: ', process.env.SUPER_SECRET);
