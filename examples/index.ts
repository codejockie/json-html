import * as json from "./sample.json"
import * as json2 from "./sample2.json"
import jsonToHtml, { format } from "../src"

// Sample1
jsonToHtml(format(json)) // same result as below
console.log(jsonToHtml(json))
/*
<div xmlns="http://www.xmlns.com" xmlns:xlink="http://www.w3.org/1999/xlink"><img alt="thumbnail" src="https://via.placeholder.com/150/92c952" /><p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada.</p></div>
*/
console.log()

// Sample2
console.log(jsonToHtml(json2))