const querystring = require("querystring");

const handler = async (event) => {
  try {
    if (event.httpMethod !== "PUT") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
    const base = require('airtable').base('appSUgTUjToRLm1p2')
    const params = querystring.parse(event.body)
    const subject = params.table
    let records = {}
    let airtable = await base(subject).create(JSON.parse(params.create))
    records.data = airtable.map(at => at._rawJson)
    records.recordsUpdated = airtable.length
    return {
      statusCode: 200,
      body: JSON.stringify(records),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
