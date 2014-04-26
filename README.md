# Markdeck

Markdeck is an tool for converting a special format of Markdown into markup
that is compatible with an HTML presentation deck library. It was built for
[Reveal.js](http://lab.hakim.se/reveal-js/) but is hopefully flexible enough
to work with many other libraries.

## Installation and Usage

### Node.js

Simply `npm install --save markdeck` to install.
    
```js
var markdeck = require('markdeck');

var html = markdeck(markdownString, options);
```

### Browser

TODO

## Usage

```js

```

## The Syntax

Each slide is written in standard Markdown syntax with two small exceptions:

1. You must use the `# Header` syntax, not a line of `===` or `---`
2. Any horizontal rules must be HTML, e.g. `<hr>` not `---`

These rules are in place because of slide separators.

### Slide Separators

Slides are separated with a line of `=` or `-`, for example:

```markdown
# My Presentation
## Author Name

===

# Big Ideas
## Are Hard to Come By

---

![Cool Image](/images/whatever.png)
```

Note that `=` and `-` are meant to denote hierarchy, e.g. `===` for horizontal
navigation in Reveal.js and `---` for vertical.

### Slide Decoration

Markdeck makes as few assumptions as possible about how your presentation library
works. Many frameworks have special class names or data attributes required to
enable certain effects. To add these decorations, simply write the HTML attributes
you want to apply to the element in your slide separator:

```markdown
# Title Slide

=== style="background: yellow;" data-special="500" class="big-slide"

# Yellow Slide

--- class="image-slide"

![Cool Image](/images/whatever.png)
```

The content after `===` or `---` is simply inserted into the element.

## Options

After the markdown string, the second argument passed to Markdeck is an options
object with any of the following:

* **markdownOptions:** specify [marked options](https://github.com/chjj/marked#options-1)
  to be set on the markdown Renderer. Defaults to `{smartypants: true, sanitize: false}`,
  so you'll likely want to set `sanitize: true` in an untrusted environment.
* **element:** specify the type of element to denote a slide. Defaults to `section`.

## License

Copyright (c) 2014 Michael Bleigh and Divshot, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.