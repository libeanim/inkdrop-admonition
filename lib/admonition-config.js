const admonitionConfig = {}

const admonitionTypes = [
  'abstract',
  'note',
  'danger',
  'warning',
  'info',
  'success',
  'fail',
  'question',
  'example'
]

admonitionTypes.forEach(type => {
  admonitionConfig[type] = {
    classes: `admonition-${type}`,
    title: 'optional'
  }
  admonitionConfig[`${type}-spoiler`] = {
    classes: `admonition-${type}`,
    title: 'required',
    details: true
  }
})

admonitionConfig['spoiler'] = {
  classes: 'admonition-spoiler',
  title: 'required',
  details: true
}

module.exports = admonitionConfig
