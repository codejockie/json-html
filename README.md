# json-html
A simple JSON to HTML parser

[![Build Status](https://travis-ci.com/codejockie/json-html.svg?branch=master)](https://travis-ci.com/codejockie/json-html)
[![codecov](https://codecov.io/gh/codejockie/json-html/branch/master/graph/badge.svg)](https://codecov.io/gh/codejockie/json-html)

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


Call to `jsonToHtml` passing the above JSON file as an argument will result in the following markup being generated.
```html
<div>
  <img alt="thumbnail" src="https://via.placeholder.com/150/92c952" />
  <input type="email" placeholder="Enter email" />
  <a href="http://example.com">Click here</a>
</div>
```
> JSON data must be in the format given above with one root element