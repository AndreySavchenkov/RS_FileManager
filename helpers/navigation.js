import path from "path";
import fs from "fs";
import { printCurrentDirectory } from "./common.js";

const listFilesAndFolders = () => {
  const currentDirectory = process.cwd();
  const items = fs.readdirSync(currentDirectory);
  items.sort();

  const folders = items.filter((item) =>
    fs.statSync(path.join(currentDirectory, item)).isDirectory()
  );
  const files = items.filter(
    (item) => !fs.statSync(path.join(currentDirectory, item)).isDirectory()
  );

  const foldersAndFiles = [
    ...folders.map((folder) => ({ Type: "Folder", Name: folder })),
    ...files.map((file) => ({ Type: "File", Name: file })),
  ];

  console.table(foldersAndFiles);
};

const navigateUp = () => {
  const currentDirectory = process.cwd();
  const parentDirectory = path.resolve(currentDirectory, "..");

  if (parentDirectory !== process.cwd()) {
    process.chdir(parentDirectory);
  }

  printCurrentDirectory();
};

const navigateToDirectory = (directoryPath) => {
  const currentDirectory = process.cwd();
  const newDirectory = path.isAbsolute(directoryPath)
    ? directoryPath
    : path.join(currentDirectory, directoryPath);

  try {
    fs.accessSync(newDirectory, fs.constants.R_OK | fs.constants.X_OK);
    process.chdir(newDirectory);
    printCurrentDirectory();
  } catch (error) {
    printOperationFailed();
  }
};

export { listFilesAndFolders, navigateUp, navigateToDirectory };
