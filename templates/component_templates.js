// const convertPascalCaseToCamelCase = (s) => s[0].toLowerCase() + s.substring(1)

exports.component = (name) => `import React from 'react'

const ${name} = ({className, ...rest}) => {
  return (
    <div>${name}contenthere</div>
  )
}

export default ${name}
`

// styles.js
exports.styles = (name) => `import styled from 'styled-components'

export const Styled${name} = styled
`
// index.js
exports.index = (name) => `export {default as ${name}} from './${name}'\n`
