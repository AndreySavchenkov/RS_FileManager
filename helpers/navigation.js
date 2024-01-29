import path from "path";
import fs from "fs";
import { getCurrentDirectory, printCurrentDirectory } from "./common";

const listFilesAndFolders = () => {
  const currentDirectory = getCurrentDirectory();
  const items = fs.readdirSync(currentDirectory);
  items.sort();

  const folders = items.filter((item) =>
    fs.statSync(path.join(currentDirectory, item)).isDirectory()
  );
  const files = items.filter(
    (item) => !fs.statSync(path.join(currentDirectory, item)).isDirectory()
  );

  console.log("Folders:");
  folders.forEach((folder) => console.log(`  ${folder}`));

  console.log("Files:");
  files.forEach((file) => console.log(`  ${file}`));
};

const navigateUp = () => {
  const currentDirectory = getCurrentDirectory();
  const parentDirectory = path.resolve(currentDirectory, "..");

  if (parentDirectory !== currentDirectory) {
    process.chdir(parentDirectory);
  }

  printCurrentDirectory();
};

const navigateToDirectory = (directoryPath) => {
  const newDirectory = path.isAbsolute(directoryPath)
    ? directoryPath
    : path.join(getCurrentDirectory(), directoryPath);

  try {
    fs.accessSync(newDirectory, fs.constants.R_OK | fs.constants.X_OK);
    process.chdir(newDirectory);
    printCurrentDirectory();
  } catch (error) {
    printOperationFailed();
  }
};

export { listFilesAndFolders, navigateUp, navigateToDirectory };
