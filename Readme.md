## Code explanation 
Recursion processes files sequentially, where the files loads one afte. If a file read fails, the error is logged, but the next file is processed.

## Error Handling

Skipped files don’t halt execution; later files override earlier keys.

## How to Run Tests
node test.js (output shows merged config with overrides)

