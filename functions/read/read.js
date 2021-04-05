const handler = async (event) => {
  try {
    const base = require('airtable').base('appSUgTUjToRLm1p2')
    const subject = event.queryStringParameters.name
    const id = event.queryStringParameters.id
    const record = await base(subject).find(id)
    return {
      statusCode: 200,
      body: JSON.stringify(record._rawJson),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
