/* jslint node: true */
var fs = require("fs");

try {
  fs.accessSync("config.json", fs.constants.R_OK);
  console.log("config.json is already created.");
} catch(e) {
  fs.createReadStream("config.json.example").pipe(fs.createWriteStream("config.json"));
  console.log("config.json created.");
}