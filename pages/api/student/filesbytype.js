export default async function handler(req, res) {
    const {
        query: { id,type },
        method,
    } = req
    const sql = require('mssql')


    switch (method) {
        case 'GET':
            try {
                // make sure that any items are correctly URL encoded in the connection string
                await sql.connect('mssql://portal:22166973Td!*@176.98.40.103/SINIFTANIM')
                const result = await sql.query`select  m.ogrenciid,m.resimyol,d.aciklama from ogrenciResim m,dosyaTipi d where m.tipid = d.id
                 and m.ogrenciid =  ${id} and d.id = ${type} `
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
