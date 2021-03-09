export default async function handler(req, res) {
    const {
        method,
    } = req
    const sql = require('mssql')


    switch (method) {
        case 'GET':
            try {
                // make sure that any items are correctly URL encoded in the connection string
                await sql.connect('mssql://sa:Aa774422*-snftnm@176.98.40.141/SINIFTANIM')
                const result = await sql.query`select * from dosyaTipi`
                res.send(result.recordset)
            } catch (err) {
                console.log(err)
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
