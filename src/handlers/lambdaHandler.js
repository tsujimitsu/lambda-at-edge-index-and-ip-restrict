'use strict'
exports.lambdaHandler = async (event, context, callback) => {
  require('dotenv').config()
  const ipRangeCheck = require('ip-range-check')

  const permitIp = process.env.RESTRICT_IP || ''

  var request = event.Records[0].cf.request
  const httpVersion = request.httpVersion
  const clientIp = request.clientIp

  // ip check
  let isPermitted = false
  if (permitIp) {
    const permitIps = permitIp.split(',')
    for (let key in permitIps) {
      if (ipRangeCheck(clientIp, permitIps[key])) {
        isPermitted = true
      }
    }
  }

  if (isPermitted) {
    // Extract the URI from the request
    var olduri = request.uri

    // Match any '/' that occurs at the end of a URI. Replace it with a default index
    var newuri = olduri.replace(/\/$/, '/index.html')

    // Log the URI as received by CloudFront and the new URI to be used to fetch from origin
    console.log('Old URI: ' + olduri)
    console.log('New URI: ' + newuri)

    // Replace the received URI with the URI that includes the index page
    request.uri = newuri

    // Return to CloudFront
    return callback(null, request)
  } else {
    // 許可されていないIPに対しては許可されていない旨のメッセージを返す
    const body =
      '<!DOCTYPE html>\n' +
      '<html>\n' +
      '<head><title>Hello From Lambda@Edge</title></head>\n' +
      '<body>\n' +
      'Your IP address is not permitted to access!\n' +
      '</body>\n' +
      '</html>'

    /* Generate HTTP response */
    const customResponse = {
      status: '200',
      statusDescription: 'HTTP OK',
      httpVersion: httpVersion,
      body: body,
      headers: {
        'cache-control': [
          {
            key: 'Cache-Control',
            value: 'max-age=100'
          }
        ],
        'content-type': [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8'
          }
        ]
      }
    }
    callback(null, customResponse)
  }
}
