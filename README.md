# json-html

[![Build Status](https://travis-ci.com/codejockie/json-html.svg?branch=master)](https://travis-ci.com/codejockie/json-html)
[![codecov](https://codecov.io/gh/codejockie/json-html/branch/master/graph/badge.svg)](https://codecov.io/gh/codejockie/json-html)
![npm](https://img.shields.io/npm/v/@codejockie/json-html)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@codejockie/json-html)

A simple JSON to HTML parser

## API
`jsonToHtml` - function that converts a JSON data to HTML

### Example
Given the following JSON file structure
```json
{
  "_type": "Element",
  "name": "div",
  "children": [
    {
      "_type": "Element",
      "name": "img",
      "attributes": [
        {
          "name": "alt",
          "value": "thumbnail"
        },
        {
          "name": "src",
          "value": "https://via.placeholder.com/150/92c952"
        }
      ]
    },
    {
      "_type": "Element",
      "name": "input",
      "attributes": [
        {
          "name": "type",
          "value": "email"
        },
        {
          "name": "placeholder",
          "value": "Enter email"
        }
      ]
    },
    {
      "_type": "Element",
      "name": "a",
      "attributes": [
        {
          "name": "href",
          "value": "http://example.com"
        }
      ],
      "children": [
        {
          "_type": "Characters",
          "data": "Click here"
        }
      ]
    }
  ]
}
```
```ts
import jsonToHtml from "@codejockie/json-html"

jsonToHtml(jsonData)

// Output
/*
<div>
  <img alt="thumbnail" src="https://via.placeholder.com/150/92c952" />
  <input type="email" placeholder="Enter email" />
  <a href="http://example.com">Click here</a>
</div>
*/
```
> JSON data must be in the format given above with one root element

If you are using ES5, the import statement is:
```
const jsonToHtml = require("@codejockie/json-html").default

// or

const { default: jsonToHtml } = require("@codejockie/json-html")
```

## Contributing
Pull Requests are welcomed!

## Issues
Please [file an issue](https://github.com/codejockie/json-html/issues) if you encounter any.

<a href="https://www.buymeacoffee.com/codejockie" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-red.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>