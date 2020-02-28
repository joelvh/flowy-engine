import ArrowElement from './ArrowElement'

class BlockElement {
  static find = (id, { window }) => {
    const { document } = window
    const node = document.querySelector(`.blockid[value='${id}']`).parentNode

    return node ? new this(id, node, { window }) : null
  }

  static fromElement = (node, { window }) => {
    const input = node.querySelector(`.blockid`)

    return input ? new this(parseInt(input.value), node, { window }) : null
  }

  constructor(id, node, { window }) {
    this.id = parseInt(id)
    this.node = node
    this.window = window
  }

  position = () => {
    const { height, width } = this.window.getComputedStyle(this.node)

    return {
      top: this.node.getBoundingClientRect().top + this.window.scrollY,
      left: this.node.getBoundingClientRect().left + this.window.scrollX,
      height: parseInt(height),
      width: parseInt(width)
    }
  }

  styles = styles => Object.assign(this.node.style, styles)

  arrow = () => ArrowElement.find(this)
}

export default BlockElement
