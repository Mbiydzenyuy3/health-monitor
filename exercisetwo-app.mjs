// Original Code

// import { readFile } from "node:fs";
// const configFiles = [
//   "config.default.json",
//   "config.env.json",
//   "config.local.json",
// ];
// function loadConfig(files, index = 0, configData = {}) {
//   if (index >= files.length) {
//     console.log(" Final Config:", configData);
//     return;
//   }
//   readFile(files[index], "utf8", (err, contents) => {
//     if (err) {
//       console.error(` Error loading ${files[index]}:`, err.message);
//     } else {
//       console.log(`Loaded: ${files[index]}`);
//       Object.assign(configData, JSON.parse(contents));
//     }
//     loadConfig(files, index + 1, configData);
//   });
// }
// loadConfig(configFiles);

// Modified Code

import { promises as fs } from "node:fs";

const configFiles = [
  "config.default.json",
  "config.env.json",
  "config.local.json",
];

class ReferenceError extends Error {
  constructor(message) {
    super(message);
    this.name = "ReferenceError";
  }
}

async function loadConfig(files, index = 0, configData = {}) {
  if (index >= files.length) {
    console.log(" Final Config:", configData);
    return;
  }

  try {
    const contents = await fs.readFile(files[index], "utf8");
    Object.assign(configData, JSON.parse(contents));

    console.log(`Loaded ${files[index]}`);
  } catch (err) {
    // handling errors properly with Custom Errors here
    throw new ReferenceError(`file not found ${files[index]}:`, err.message);
    //  error should occur if the file in question is not found and move to the next
  }

  // move to the next file where or not the current file is read successfully
  await loadConfig(files, index + 1, configData);
}

// start loading process
loadConfig(configFiles);
