const handler = async (event) => {
  try {
    const base = require('airtable').base('appSUgTUjToRLm1p2')
    const subject = event.queryStringParameters.name || 'TimeLineEvents'
    const records = await base('Timeline').select({ maxRecords: 10, view: "Grid view" }).firstPage()
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
