import * as json from "./sample.json"
import jsonToHtml, { format } from "../src"

const formattedJson: any = format(json)
console.log(jsonToHtml(json))
console.log()
console.log(jsonToHtml(formattedJson))