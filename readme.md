this does what i need it to do.

`npm i -g scrapingnode`, then `scrapingnode url.com/scrape/this`
(the http:// is added on for ya).

you'll get a bunch of stuff you can really easily parse. nice, huh?

maybe do it like `scrapingnode zacanger.com > zacanger.com.objects.js`
so you have a nice file to use.

gets images, links, scripts, and stylesheets.

if you want it to get other things, or not those things, or whatever,
open the script (it's at `/usr/local/bin/node_modules/scrapingnode/index.js`
by default) and change it! and don't laugh at how simple this is.
all the magic is done by [ineed](https://www.npmjs.com/package/ineed).

