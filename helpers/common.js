const username = process.argv[3];

// const getCurrentDirectory = () => process.cwd();

const printCurrentDirectory = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

const printWelcomeMessage = () => {
  console.log(`Welcome to the File Manager, ${username}!`);
};

const printGoodbyeMessage = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
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
