const documentService = require("../service/documentService");
const validateData = async (req, res, next) => {
    const mergedDoc = await documentService.merge()
    req.validationError = false

    Object.entries(req.body).map(([key, value]) => {
        const doc = mergedDoc.flat().find(doc => doc.name === key)
        if (doc.type === 'number' && typeof value !== 'number') {
            req.validationError = true
        }
        if (doc.type === 'Text' && typeof value !== 'string') {
            req.validationError = true
        }
    })

    next()
}

module.exports = {
    validateData
}