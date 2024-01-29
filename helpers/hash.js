import crypto from "crypto";
import fs from "fs";
import path from "path";

const calculateHash = (filePath) => {
  const hash = crypto.createHash("sha256");

  try {
    const fileContent = fs.readFileSync(filePath);
    hash.update(fileContent);
    console.log(`Hash for ${path.basename(filePath)}: ${hash.digest("hex")}`);
  } catch (error) {
    printOperationFailed();
  }
};

export { calculateHash };
