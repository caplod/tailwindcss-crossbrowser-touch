module.exports = function() {
  return function({ addVariant, e }) {
    addVariant('touch', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.touch .${e(`touch${separator}${className}`)}`
      })
    })
    addVariant('no-touch', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.no-touch .${e(`no-touch${separator}${className}`)}`
      })
    })
    addVariant('no-touch-hover', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.no-touch .${e(`no-touch-hover${separator}${className}`)}:hover`
      })
    })
    addVariant('no-touch-group-hover', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.no-touch .group:hover .${e(`no-touch-group-hover${separator}${className}`)}`
      })
    })
  }
}
