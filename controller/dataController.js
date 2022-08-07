const dataService = require("../service/dataService");

const save = async (req, res) => {
    if (req.validationError) return res.json({status: 'fail'})

    const result = await dataService.save(req.body)

    return res.json({status: result})
}

module.exports = {
    save
}