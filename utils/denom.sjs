function major(amountString, short = true) {
  if (!amountString) return amountString
  const parts = amountString.split('.')
  if (short) {
    if (parts.length == 2) return parts.splice(0, 1).join('')
    if (parts.length > 2) return parts.splice(0, parts.length-2).join('')
  } else {
    return parts.splice(0, parts.length-1).join('')
  }
}

function minor(amountString, short = true) {
  if (!amountString) return amountString
  const parts = amountString.split('.')
  if (parts.length < 2) return ''
  if (short) {
    if (parts.length > 2) return 'mil'
    if (parts.length == 2) return 'K'
  }
  return parts[parts.length-1]
}

export default {
  major,
  minor,
}