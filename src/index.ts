const SELF_CLOSING_TAGS = ["area", "base", "basefont", "br", "col", "frame", "hr", "input", "img", "link", "meta", "param"]

interface Attribute {
  name: string
  value: string
}

interface JsonChild {
  _type?: string
  attributes?: Attribute[]
  data?: string
  type?: string
}

interface Json {
  _type?: string
  attributes?: Attribute[]
  children: Json[] | JsonChild[]
  elements?: Json[] | JsonChild[]
  name: string
  type?: string
}

function toHtmlAttributes(attributes: Attribute[] | undefined) {
  if (!attributes) {
    return ""
  }
  return attributes.map((attr: any) => `${attr.name}="${attr.value}"`).join(" ")
}

function toHtmlTag(name: string, children: any[], attr: string | Attribute[] | undefined) {
  const attributes = (Array.isArray(attr) ? ` ${toHtmlAttributes(attr)}` : attr && ` ${attr}`) || ""
  if (SELF_CLOSING_TAGS.includes(name)) {
    return `<${name}${attributes} />`
  }
  return `<${name}${attributes}>${arrayToHtml(children)}</${name}>`
}

function arrayToHtml(array: Json[]): string {
  return array.map((a: Json) => {
    const type = a.type || a._type
    const children = a.elements || a.children

    if (type == "Element") {
      return toHtmlTag(a.name, children, a.attributes)
    }

    if (type == "Characters") {
      return (a as JsonChild).data
    }
  }).join("")
}

export default function jsonToHtml(rootItem: Json): string {
  const { attributes, name } = rootItem
  const children = rootItem.elements || rootItem.children
  return toHtmlTag(name, children, attributes)
}

export function format(data: Json): Json {
  return Object.keys(data).reduce((acc: any, key: string) => {
    switch (key) {
      case "_type":
        return { ...acc, type: data[key] }
      case "attributes":
        return { ...acc, attributes: toHtmlAttributes(data[key]) }
      case "children":
        return { ...acc, elements: (data[key] as Json[]).map((c: Json) => format(c)) }

      default:
        return { ...acc, [key]: (data as any)[key] }
    }
  }, <Json>{})
}
