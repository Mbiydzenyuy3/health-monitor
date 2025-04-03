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
  // const usage = Math.floor(Math.random() * 100) + 1;

  if (system > 70) {
    const date = new Date();
    myEvent.emit(`overload: ${dateTime.toLocalString()}`, usage);
  }
  console.log("system is normal");
}, 300);
