import { EventEmitter } from "events";

const myEvent = new EventEmitter();
const system = 60;

const overloadListener =
  ("my event",
  () => {
    console.log("system overload detected");
  });

myEvent.on("system", overloadListener);
setInterval(() => {
  if (system > 80) {
    const date = new Date();
    myEvent.emit(`overload: ${dateTime.toLocalString()}`);
  }
  console.log("system is normal");
}, 1000);

process.stdin.resume();
