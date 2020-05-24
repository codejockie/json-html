import jsonToHtml, { format } from "../src"
import * as json from "../examples/sample.json"
import * as json2 from "../examples/sample2.json"

const markup = `<div xmlns="http://www.xmlns.com" xmlns:xlink="http://www.w3.org/1999/xlink"><img alt="thumbnail" src="https://via.placeholder.com/150/92c952" /><p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada.</p></div>`

const markup2 = `<div><img alt="thumbnail" src="https://via.placeholder.com/150/92c952" /><input type="email" placeholder="Enter email" /><a href="http://example.com">Click here</a></div>`

describe("jsonToHtml", () => {
  test("given a JSON argument it produces HTML markup", () => {
    expect(jsonToHtml(json)).toEqual(markup)
    expect(jsonToHtml(json2)).toEqual(markup2)

    // Using format() to format json
    expect(jsonToHtml(format(json))).toEqual(markup)
  })
})

describe("format", () => {
  test("should format JSON", () => {
    // Renames _type to type
    expect(format(json)).toHaveProperty("type", "Element")
    expect(format(json)).not.toHaveProperty("_type")

    // Renames children to elements
    expect(format(json)).toHaveProperty("elements")
    expect(format(json).elements).toBeInstanceOf(Array)
    expect(format(json)).not.toHaveProperty("children")

    // Changes attributes to a string (key - value pair) instead of an array of object
    const attributes = 'xmlns="http://www.xmlns.com" xmlns:xlink="http://www.w3.org/1999/xlink"'
    expect(format(json)).toHaveProperty("attributes", attributes)

    // Leaves other properties as is
    expect(format(json)).toHaveProperty("name", "div")
  })
})