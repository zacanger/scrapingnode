#!/usr/bin/env node

'use strict'

const
  ineed = require('ineed')
, arg   = process.argv[2]
, src   = process.argv[3]
, out   = process.stdout
, help  = `
usage: scrapingnode option url
option can be one of
content (which collects content) or
data (which collects links, scripts, etc.) or
code (which collects HTML comments, CSS, and JS)
all (all of the above)

`

if (!arg || !src || arg === 'help' || arg === '--help' || arg === '-h') {
  out.write(help)
} else {
  const url = src.includes('http://' || 'https://') ? src : `http://${src}`
  if (arg === 'content') {
    ineed.collect.title.texts
    .from(url, (err, response, result) => {
      out.write(`${JSON.stringify(result, null, 2)}\n`)
    })
  }
  if (arg === 'code') {
    ineed.collect.title.comments.cssCode.jsCode
    .from(url, (err, response, result) => {
      out.write(`${JSON.stringify(result, null, 2)}\n`)
    })
  }
  if (arg === 'data') {
    ineed.collect.title.hyperlinks.images.scripts.stylesheets
    .from(url, (err, response, result) => {
      out.write(`${JSON.stringify(result, null, 2)}\n`)
    })
  }
  if (arg === 'all') {
    ineed.collect.title.texts.stylesheets.scripts.hyperlinks.images.comments.cssCode.jsCode
    .from(url, (err, response, result) => {
      out.write(`${JSON.stringify(result, null, 2)}\n`)
    })
  }
}
