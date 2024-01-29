import zlib from "zlib";
import fs from "fs";
import path from "path";

const compressFile = (filePath, destinationPath) => {
  const sourceStream = fs.createReadStream(filePath);
  const destinationStream = fs.createWriteStream(destinationPath);
  const compressStream = zlib.createBrotliCompress();

  sourceStream.pipe(compressStream).pipe(destinationStream);

  sourceStream.on("end", () => {
    console.log(
      `${path.basename(
        filePath
      )} compressed to ${destinationPath} successfully.`
    );
  });
};

const decompressFile = (filePath, destinationPath) => {
  const sourceStream = fs.createReadStream(filePath);
  const destinationStream = fs.createWriteStream(destinationPath);
  const decompressStream = zlib.createBrotliDecompress();

  sourceStream.pipe(decompressStream).pipe(destinationStream);

  sourceStream.on("end", () => {
    console.log(
      `${path.basename(
        filePath
      )} decompressed to ${destinationPath} successfully.`
    );
  });
};

export { compressFile, decompressFile };
