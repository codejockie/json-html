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

<style>.bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 15px 7px 10px !important;line-height: 35px !important;height:51px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#FF5F5F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 15px 7px 10px !important;font-size: 28px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/codejockie"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px;font-size:28px !important;">Buy me a coffee</span></a>