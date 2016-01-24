#!/usr/bin/env node

var ineed = require('ineed')
  , url   = process.argv[2]

ineed.collect.images.hyperlinks.scripts.stylesheets.from('http://'+url,
  function(err, response, result){
    console.log(result)
  })

