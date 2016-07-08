#!/usr/bin/env node

'use strict'

const
  ineed = require('ineed')
, arg   = process.argv[2]
, out   = process.stdout

if (!arg) {
  out.write('\nplease supply a url!\nusage: scrapingnode npmjs.com/package/scapingnode\n\n')
} else {
  const url = arg.includes('http://' || 'https://') ? arg : `http://${arg}`
  ineed
  .collect
  .title
  .hyperlinks
  .images
  .scripts
  .stylesheets
  .from(url, (err, response, result) => {
    out.write(`${JSON.stringify(result, null, 2)}\n`)
  })
}
