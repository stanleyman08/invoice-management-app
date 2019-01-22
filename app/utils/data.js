const storage = require('electron-json-storage'); 

class Data {

    constructor(fileName) {
        this.fileName = fileName;
        console.log("created");
    }

    add(key, value) {
        storage.get(this.fileName, function(error, data) {
            if (error) throw error;
            if (Object.keys(data).length != 0) {
                data[key].push({name: value});
                storage.set(this.fileName, data);
            } else {
                storage.set(this.fileName, {key: [ value ]});
            }
        }.bind(this));
    }
}
export default Data;