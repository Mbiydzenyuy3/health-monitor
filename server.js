import { EventEmitter } from "events";

const myEvent = new EventEmitter();
const system = 60;

const overload =
  ("my event",
  () => {
    console.log("system overload detected");
  });

myEvent.on("system", overload);
setInterval(() => {
  if (system > 75) {
    const date = new Date();
    myEvent.emit(`overload: ${dateTime.toLocalString()}`);
  } else {
    console.log("system is normal");
  }
}, 1000);
