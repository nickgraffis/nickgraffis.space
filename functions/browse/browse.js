const handler = async (event) => {
  try {
    const base = require('airtable').base('appSUgTUjToRLm1p2')
    const limit = parseInt(event.queryStringParameters.limit) || 100
    const subject = event.queryStringParameters.name
    const offset = parseInt(event.queryStringParameters.offset) || 0
    const sort = event.queryStringParameters.sort ? JSON.parse(event.queryStringParameters.sort) : null
    const rawFilter = event.queryStringParameters.filter ? JSON.parse(event.queryStringParameters.filter) : null
    const filter = rawFilter ? `{${rawFilter.field}} = "${rawFilter.value}"` : null

    function apiOn() {
      return new Promise(resolve => {
        let count = 1
        let parameters = sort ? { sort } : { }
        if (filter) parameters.filterByFormula = filter
        let records = []
        base(subject).select(parameters).eachPage((rec, fetchNextPage) => {
          let done = false
          for (let i = 0; i < rec.length; i++) {
            console.log(i, count, (limit + offset))
            if (count > (limit + offset)) {
              console.log('We are done')
              done = true
              break
            }
            if (count > offset) {
              let record = rec[i]._rawJson
              record.recordNumber = count
              records.push(record)
            }
            count++
          }

          if (!done) {
            console.log('fetching new page')
            fetchNextPage()
          } else {
            resolve(records)
          }
        }, (error) => {
          if (error) resolve({ statusCode: 500, body: error.toString() })
          else resolve(records)
        })
      })
    }

    const records = await apiOn()

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
