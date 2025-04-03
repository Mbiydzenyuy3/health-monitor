### Project's Title

My First Node Mini Project

## Project Description

# Project runs two different task

# Task 1

First task is about running the recursion processes files sequentially,
where the files loads one after the other. If a file read fails, the error is logged,
but continues to the next file.

# Task 2

# Modification for Enhanced Logging

Modify the function so that it logs a message indicating which file was successfully loaded (e.g., "Loaded config.defaults.json") and which file failed to load. Ensure that the final merged configuration is still printed after processing all files.

# Modification for Enhanced Logging

Modify the function so that it logs a message indicating which file was successfully loaded (e.g., "Loaded config.defaults.json") and which file failed to load. Ensure that the final merged configuration is still printed after processing all files.

# Promisify the Loader

Rewrite the loadConfig function using Promises (or async/await) instead of callbacks. Your new version should:
Return a Promise that resolves with the final configuration object.
Use the fs.promises.readFile API.
Handle errors by logging them and continuing with the next file.

# Testing the Functionality

Create a set of sample JSON configuration files (config.defaults.json, config.env.json, config.local.json) with overlapping keys to see how values are merged.
Write a short test script that:
Runs the configuration loader.
Prints the resulting configuration.
Demonstrates how the merging works (e.g., later files override values from earlier file)

## Error Handling

-Created custom error for proper error handling

## How to Run Tests

node exercisetwo-app.mjs (output shows merged config with overrides)

## How to Install and Run the Project

npm install, npm init -y, git init

# In other to run my scripts i had to create two different script commands to run(see in package.json);

- start-server: runs exerciseone-server.mjs;
- dev-app: runs exercisetwo-app.mjs

# How to Contribute to the Project

git clone https://github.com/Mbiydzenyuy3/health-monitor.git

# License

MIT license
