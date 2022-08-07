const documentRepository = require("../repository/documentRepository");

const save = async (body) => {
    const savedData = await documentRepository.getByFilePath('documentStorage/data.json')
    body = savedData ? {data: [...savedData.data, {...body}]} : {data: [{...body}]}

    return await documentRepository.saveByFilePath(body, 'documentStorage/data.json')
}

module.exports = {
    save
}