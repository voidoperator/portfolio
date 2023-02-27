/* eslint-disable no-console */
import * as fs from 'fs'

const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const replaceTailwind = (filename: string) => {
  const file = fs.readFileSync(filename, { encoding: 'utf-8' })
  const regex = /<([a-zA-Z]+)\s+className='([^']*)'([^>]*)>/g
  let match

  const importTw = `import tw from 'tailwind-styled-components';\n\n`
  fs.writeFileSync(filename, importTw, { flag: 'a+' })
  while ((match = regex.exec(file))) {
    const [fullMatch, tag, classes, rest] = match
    const newTag = `${capitalize(tag).trim()}`
    const generatedComponent = `\nconst ${newTag} = tw.${tag.trim()}\`${classes.trim()}\`;`
    fs.writeFileSync(filename, generatedComponent, { flag: 'a+' })
  }
}

const args = process.argv.slice(2)

for (let filename of args) {
  console.log(`Processing file: ${filename}`)
  replaceTailwind(filename)
}
