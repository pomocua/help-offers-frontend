const fs = require('fs')
const {component, styles, index} = require('./templates/component_templates')

// grab component name from terminal argument
const [name, path] = process.argv.slice(2)
if (!name) throw new Error('You must include a component name.')

// const getDashed = (str) =>
//   str
//     .replace(/\b[A-Z]/g, (m) => m.toLowerCase())
//     .replace(/\B[A-Z]/g, (m) => `-${m.toLowerCase()}`)

const fullPath = path ? `${path}` : `./src/app/components`
const dir = path ? `${path}/${name}` : `./src/app/components/${name}/`

process.stdout.write(
  `*** TIP!: You can specify two parameters: name and path.\n*** Ex.: 'yarn gc Box ./src/app/components' will generate Box component in ./src/app/components/box folder.\n*** Default path is ./src/app/components/\n\n`,
)
// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error('A component with that name already exists.')

// create the folder
fs.mkdirSync(dir)

function writeFileErrorHandler(err) {
  if (err) throw err
}

// component.tsx
// fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler)
// component.scss
// fs.writeFile(`${dir}/${name}.scss`, '', writeFileErrorHandler)
// storybook.jsx
// fs.writeFile(`${dir}/${name}.stories.jsx`, story(name), writeFileErrorHandler)
// test.tsx
// fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler)
// index.tsx
// fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler)

// component.jsx
fs.writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler)

// index.js
fs.writeFile(`${dir}/index.js`, index(name), writeFileErrorHandler)

// component.tsx
fs.writeFile(`${dir}/styles.js`, styles(name), writeFileErrorHandler)

if (fs.existsSync(`${fullPath}/index.js`)) {
  // insert new component into 'components/index.ts file
  fs.readFile(`${fullPath}/index.js`, 'utf8', function (err, data) {
    if (err) throw err

    // grab all components and combine them with new component
    // const currentComponents = data.match(/(?<=export {default as )(.*?)(?=} from)/g)
    // const newComponents = currentComponents ? [name, ...currentComponents].sort() : [name]

    // create the import and export statements
    // const importStatements = newComponents.map((importName) => `import ${importName} from './${importName}';\n`).join('')
    // const exportStatements = `export {\n${newComponents.map((component) => `  ${component},\n`).join('')}};\n`
    // const exportDefaultStatements = newComponents
    //   .map((componentName) => `export {default as ${componentName}} from './${getDashed(componentName)}'\n`)
    //   .join('')

    // const fileContent = `${exportDefaultStatements}`

    const fileContent = `${data}export {${name}} from './${name}'\n`
    fs.writeFile(`${fullPath}/index.js`, fileContent, writeFileErrorHandler)
  })
}
