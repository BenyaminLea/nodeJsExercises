const length = Number(process.argv[2]);
if (isNaN(length)) {
  console.log("You should enter a number");
} else if (length < 1 || length > 10) {
  console.log("You should enter a number between 1 and 10");
} else {
  for (var i = 0; i < length; i++) {
    let line = "";
    for (var j = 0; j < length; j++) {
      line = line + "#";
    }
    console.log(line);
  }
}
