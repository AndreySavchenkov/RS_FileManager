const args = process.argv.slice(2);
const usernameArgIndex = args.findIndex(arg => arg.startsWith('--username='));
const username = usernameArgIndex !== -1 ? args[usernameArgIndex].split('=')[1] : null;

const printCurrentDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

const printWelcomeMessage = () => {
  console.log(`Welcome to the File Manager${username ? ', ' + username + '!' : '!'}`);
};

const printGoodbyeMessage = () => {
  console.log(`Thank you for using File Manager${username ? ', ' + username : ''}, goodbye!`);
};

const printInvalidInput = () => {
  console.log("Invalid input. Please enter a valid command.");
};

const printOperationFailed = () => {
  console.log("Operation failed. Please try again.");
};

export {
  username,
  printCurrentDirectory,
  printWelcomeMessage,
  printGoodbyeMessage,
  printInvalidInput,
  printOperationFailed,
};
