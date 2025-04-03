import { readFile } from "node:fs";
const configFiles = [
  "config.default.json",
  "config.env.json",
  "config.local.json",
];
function loadConfig(files, index = 0, configData = {}) {
  if (index >= files.length) {
    console.log(" Final Config:", configData);
    return;
  }
  readFile(files[index], "utf8", (err, contents) => {
    if (err) {
      console.error(` Error loading ${files[index]}:`, err.message);
    } else {
      console.log(`Loaded: ${files[index]}`);
      Object.assign(configData, JSON.parse(contents));
    }
    loadConfig(files, index + 1, configData);
  });
}
loadConfig(configFiles);
