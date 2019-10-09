const peg = require('pegjs');
const fs = require('fs');

function main() {
    var lang = null;
    var fileData = null;
    try {
        fileData = fs.readFileSync("./php.pegjs","utf8");
    } catch(e) {
        console.log("file:",e.message);
        return false;
    }
    try {
        lang = peg.generate(fileData);
    } catch(e) {
        console.log("generator:",e.message,e.location);
        return false;
    }
    if(lang!=null) {
        try {
            console.log( lang.parse("A") );
        } catch(e) {
            console.log("parser:",e.message,e.location);
            return false;
        }
    }
    return true;
}
main();