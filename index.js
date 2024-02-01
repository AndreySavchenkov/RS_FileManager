import readline from "readline";
import { stdin as input, stdout as output } from "node:process";
import {
  printCurrentDirectory,
  printWelcomeMessage,
  printGoodbyeMessage,
  printInvalidInput,
} from "./helpers/common.js";
import {
  catFile,
  createEmptyFile,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
} from "./helpers/basicOperations.js";
import { calculateHash } from "./helpers/hash.js";
import {
  getEOL,
  getCpusInfo,
  getHomeDir,
  getUsername,
  getCpuArchitecture,
} from "./helpers/os.js";
import {
  compressFile,
  decompressFile,
} from "./helpers/compressAndDecompress.js";

const rl = readline.createInterface({ input, output });

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  switch (command) {
    case "up":
      navigateUp();
      break;
    case "cd":
      navigateToDirectory(args[0]);
      break;
    case "ls":
      listFilesAndFolders();
      break;
    case "cat":
      catFile(args[0]);
      break;
    case "add":
      createEmptyFile(args[0]);
      break;
    case "rn":
      renameFile(args[0], args[1]);
      break;
    case "cp":
      copyFile(args[0], args[1]);
      break;
    case "mv":
      moveFile(args[0], args[1]);
      break;
    case "rm":
      deleteFile(args[0]);
      break;
    case "os":
      switch (args[0]) {
        case "--EOL":
          getEOL();
          break;
        case "--cpus":
          getCpusInfo();
          break;
        case "--homedir":
          getHomeDir();
          break;
        case "--username":
          getUsername();
          break;
        case "--architecture":
          getCpuArchitecture();
          break;
        default:
          printInvalidInput();
      }
      break;
    case "hash":
      calculateHash(args[0]);
      break;
    case "compress":
      compressFile(args[0], args[1]);
      break;
    case "decompress":
      decompressFile(args[0], args[1]);
      break;
    default:
      printInvalidInput();
  }
});

rl.on("close", () => {
  printGoodbyeMessage();
  process.exit(0);
});

printCurrentDirectory();
printWelcomeMessage();
