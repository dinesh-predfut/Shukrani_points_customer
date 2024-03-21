function derivedProps(props={}, internalProps={}) {
  const result = {}
  const keys = Object.keys(props)
  for (let i=0; i<keys.length; i++) {
    const key = keys[i]
    if (internalProps[key] === null) {
      result[key] = props[key]
    } else {
      result[key] = internalProps[key]
    }
  }
  return result
}

export default {
  derivedProps,
}