const fs = require("fs");

const getByFilePath = async (filePath) => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8')
        return JSON.parse(data)
    }
    catch(err) {
        console.log(err)
    }
}

const saveByFilePath = async (data, filePath) => {
    try {
        await fs.promises.writeFile(filePath, JSON.stringify(data));
        return 'success'
    }
    catch(err) {
        console.log(err)
        return 'fail'
    }
}

module.exports = {
    getByFilePath,
    saveByFilePath
}