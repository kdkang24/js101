const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';
let key = MESSAGES[LANGUAGE];

function prompt(key) {
  console.log(`=> ${MESSAGES[LANGUAGE][key]}`);
}

prompt('welcomeMessage');
