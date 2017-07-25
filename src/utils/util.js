
export function trust (val) {
  return val && val !== 'false' && val !== '0'
}

export function makeOptions(arr) {
  return arr.map((name) => {
    return {
      text: `is-${name}`,
      value: name
    }
  })
}

// For Modal scrollBar hidden
let cached
export function getScrollBarSize (fresh) {
  if (fresh || cached === undefined) {
    const inner = document.createElement('div')
    inner.style.width = '100%'
    inner.style.height = '200px'

    const outer = document.createElement('div')
    const outerStyle = outer.style

    outerStyle.position = 'absolute'
    outerStyle.top = 0
    outerStyle.left = 0
    outerStyle.pointerEvents = 'none'
    outerStyle.visibility = 'hidden'
    outerStyle.width = '200px'
    outerStyle.height = '150px'
    outerStyle.overflow = 'hidden'

    outer.appendChild(inner)

    document.body.appendChild(outer)

    const widthContained = inner.offsetWidth
    outer.style.overflow = 'scroll'
    let widthScroll = inner.offsetWidth

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth
    }

    document.body.removeChild(outer)

    cached = widthContained - widthScroll
  }
  return cached
}

const TransitionEndEvent = {
  WebkitTransition : 'webkitTransitionEnd',
  MozTransition    : 'transitionend',
  OTransition      : 'oTransitionEnd otransitionend',
  transition       : 'transitionend'
}

export function transitionEndTest () {
  const el = document.createElement('bootstrap')
  for (const name in TransitionEndEvent) {
    if (el.style[name] !== undefined) {
      return {
        end: TransitionEndEvent[name]
      }
    }
  }
  return false
}
