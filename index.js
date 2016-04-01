#!/usr/bin/env node

'use strict'

const
  ineed = require('ineed')
, url   = process.argv[2]

if (!url) {
  process.stdout.write('\nplease supply a url! usage: scrapingnode npmjs.com/package/scapingnode\n\n')
} else {
  ineed
  .collect
  .images
  .hyperlinks
  .scripts
  .stylesheets
  .from('http://' + url, (err, response, result) => {
    process.stdout.write('\n' + JSON.stringify(result, null, 2) + '\n\n')
  })
}
