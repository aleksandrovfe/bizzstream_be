const documentRepository = require("../repository/documentRepository");

const merge = async () => {
    let docDef = await documentRepository.getByFilePath('documentStorage/documentDefinition.json')
    let doc = await documentRepository.getByFilePath('documentStorage/document.json')

    const reformatDocDefFields = {}

    docDef.schema.fields.forEach(({_id, ...field}) => {
        reformatDocDefFields[_id] = {...field}
    })

    return doc.header.rows.map((row) => {
        return row.columns.map((column) => {
            if (column.type === 'field') {
                return reformatDocDefFields[column.fieldId]
            } else {
                return column
            }
        })
    })
}

module.exports = {
    merge
}