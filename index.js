#!/usr/bin/env node

'use strict'

const
  ineed = require('ineed')
, arg   = process.argv[2]
, src   = process.argv[3]
, out   = process.stdout
, pkg   = require('./package.json')
, write = a => out.write(`${JSON.stringify(a, null, 2)}\n`)
, help  = `
Usage: scrapingnode <option> <url> || scrapingnode -h || scrapingnode -v
Option can be one of:
content   (which collects content) or
data      (which collects links, scripts, etc.) or
code      (which collects HTML comments, CSS, and JS)
all       (all of the above)

Example: scrapingnode code zacanger.com

`

const doTheThing = () => {
  if (!arg || !src) {
    if (arg === '--version' || arg === '-v' || arg === 'version') {
      out.write(`${pkg.name} version ${pkg.version}`)
    } else {
      out.write(help)
    }
  } else {
    const url = src.includes('http://' || 'https://') ? src : `http://${src}`
    switch (arg) {
      case 'content':
        ineed
          .collect
          .title
          .texts
          .from(url, (err, rep, res) => write(res))
        break
      case 'code':
        ineed
          .collect
          .title
          .comments
          .cssCode
          .jsCode
          .from(url, (err, rep, res) => write(res))
        break
      case 'data':
        ineed
          .collect
          .title
          .hyperlinks
          .images
          .scripts
          .stylesheets
          .from(url, (err, rep, res) => write(res))
        break
      case 'all':
        ineed
          .collect
          .title
          .texts
          .stylesheets
          .scripts
          .hyperlinks
          .images
          .comments
          .cssCode
          .jsCode
          .from(url, (err, rep, res) => write(res))
        break
      default:
        out.write(help)
    }
  }
}

if (!module.parent) {
  doTheThing()
}
