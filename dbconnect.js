const { MongoClient } = require("mongodb")
const client = new MongoClient("mongodb://localhost:27017/")
async function getconnect() {
    let con = await client.connect()
    let db = con.db("MovieTicket")
    let collection = db.collection("users")
    let Ticketcollection = db.collection("TicketInfo")
    return {
        collection:collection,
        Ticketcollection:Ticketcollection
    }
}
module.exports = getconnect