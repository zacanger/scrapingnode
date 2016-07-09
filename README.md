a simple command-line wrapper around [ineed](https://www.npmjs.com/package/ineed).

this does what i need it to do.

`npm i -g scrapingnode`, then run it with `scapingnode`.

```text
usage: scrapingnode option url
option can be one of
content (which collects content) or
data (which collects links, scripts, etc.) or
code (which collects HTML comments, CSS, and JS)
all (all of the above)
```
(you can leave off the `http://` if you want. or not. up to you.)

you'll get a bunch of stuff you can really easily parse. nice, huh?

maybe do it like `scrapingnode zacanger.com > zacanger.com.json`
so you have a nice file to use, or `scrapingnode zacanger.com | jq .`.
