const fs = require('fs');
const path = require('path');
const dirPath = path.resolve(__dirname);
let filesList;

if (process.argv.length < 3) {
    console.log('USAGE: node search [EXT] [TEXT]');
    return;
}

if (typeof(process.argv[3]) === 'undefined'){
    console.log('USAGE: node search [EXT] [TEXT]');
    return;
}

fs.readdir(dirPath, function(err, files){
    filesList = files.filter(function(str){
        return path.extname(str) === ('.'+process.argv[2])
    });

    filesList.map(d => {
        fs.readFile(d, function(err, cont) {
            if (err)
                throw err;
            if(cont.indexOf(process.argv[3])>-1){
                console.log(__dirname+'\\'+d);
            } else{
                console.log('No file was found')
            }
        });
    })
});