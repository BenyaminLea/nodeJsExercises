const fs = require("fs-extra");
function myLog(msg, relativePath) {
  const msgToLog = createMessageToLog(msg);
  if (!fs.existsSync(relativePath)) {
    let count = relativePath.length - 1;
    while (relativePath[count] !== "/") {
      count = count - 1;
    }
    fs.ensureDir(relativePath.slice(0, count))
      .catch((err) => {
        console.error(err);
      })
      .then(() =>
        fs.ensureFile(relativePath).catch((err) => {
          console.error(err);
        })
      )
      .then(() => writeMessage(relativePath, msgToLog));
  } else {
    writeMessage(relativePath, msgToLog);
  }
}

function createMessageToLog(msg) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const msgToLog =
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    hour +
    ":" +
    minutes +
    ":" +
    seconds +
    ":" +
    msg +
    "\n";
  return msgToLog;
}

function writeMessage(relativePath, msgToLog) {
  fs.writeFile(relativePath, msgToLog, { flag: "a" }, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

myLog("Hello World", "./exo/exo/exo2bis.");
