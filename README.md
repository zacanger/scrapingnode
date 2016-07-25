# scrapingnode

A simple command-line wrapper around [ineed](https://www.npmjs.com/package/ineed).

### Installation

`npm i -g scrapingnode`

### Usage:

`scrapingnode`

```
Usage: scrapingnode <option> <url>
Option can be one of:
content   (which collects content) or
data      (which collects links, scripts, etc.) or
code      (which collects HTML comments, CSS, and JS)
all       (all of the above)

Example: scrapingnode code zacanger.com
```

You can leave off the `https://`/`http://` if you want. Or not. Up to you.

You'll get a bunch of stuff you can really easily parse. Nice, huh?

Maybe do something like `scrapingnode content someblog.com > someblog.com.json`,
or `scrapingnode code | jq .` or something.

Contributions welcome.

License: WTFPL.
