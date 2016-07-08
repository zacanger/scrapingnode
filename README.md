this does what i need it to do.

`npm i -g scrapingnode`, then `scrapingnode url.com/scrape/this`.
(the you can leave off the `http://` if you want. or not. up to you.)

you'll get a bunch of stuff you can really easily parse. nice, huh?

maybe do it like `scrapingnode zacanger.com > zacanger.com.json`
so you have a nice file to use, or `scrapingnode zacanger.com | jq .`.

gets images, links, scripts, and stylesheets.

if you want it to get other things, or not those things, or whatever,
open the script (it's at `/usr/local/bin/node_modules/scrapingnode/index.js`
by default) and change it! and don't laugh at how simple this is.
all the magic is done by [ineed](https://www.npmjs.com/package/ineed).
