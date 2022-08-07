const documentService = require("../service/documentService");

const get = async (req, res) => {
    const result = await documentService.merge()
    res.json(result);
}

module.exports = {
    get
}