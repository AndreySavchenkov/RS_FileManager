import fs from "fs/promises";
import path from "path";
import { printOperationFailed } from "./common.js";

const catFile = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    console.log(fileContent);
  } catch (error) {
    printOperationFailed();
  }
};

const createEmptyFile = (fileName) => {
  try {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFileSync(filePath, "");
    console.log(`${fileName} created successfully.`);
  } catch (error) {
    printOperationFailed();
  }
};

const renameFile = (oldFilePath, newFileName) => {
  try {
    const directoryPath = path.dirname(oldFilePath);
    const newFilePath = path.join(directoryPath, newFileName);

    fs.renameSync(oldFilePath, newFilePath);
    console.log(
      `${path.basename(oldFilePath)} renamed to ${newFileName} successfully.`
    );
  } catch (error) {
    printOperationFailed();
  }
};

const copyFile = (sourcePath, destinationPath) => {
  try {
    const sourceStream = fs.createReadStream(sourcePath);
    const destinationStream = fs.createWriteStream(destinationPath);

    sourceStream.pipe(destinationStream);

    sourceStream.on("end", () => {
      console.log(
        `${path.basename(
          sourcePath
        )} copied to ${destinationPath} successfully.`
      );
    });
  } catch (error) {
    printOperationFailed();
  }
};

const moveFile = async (sourcePath, destinationPath) => {
  try {
    await fs.copyFile(sourcePath, destinationPath);
    await fs.unlink(sourcePath);

    console.log(
      `${path.basename(sourcePath)} moved to ${destinationPath} successfully.`
    );
  } catch (error) {
    console.error(`Error moving file: ${error.message}`);
    printOperationFailed();
  }
};

const deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
    console.log(`${path.basename(filePath)} deleted successfully.`);
  } catch (error) {
    printOperationFailed();
  }
};

export { catFile, createEmptyFile, renameFile, copyFile, moveFile, deleteFile };
