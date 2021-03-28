const fs = require('fs');
const path = require('path');

var namespace = function writer() {

    function writeToFile(filePath, data) {
        var folderPath = path.dirname(filePath);
    
        createFolder(folderPath);
    
        fs.writeFile(filePath, data, function (err) {
            if (err) return console.log(err);
        });
    }
    
    function createFolder(folderPath) {
        try {
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return {
        writeToFile: writeToFile,
        createFolder: createFolder
    }

}

module.exports.writer = namespace;