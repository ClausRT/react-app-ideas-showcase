import fs from 'fs'
import path from 'path'

function next() {
  let file = list[i++]
  if (!file) return done(null, results)
  file = path.resolve(dir, file)
  fs.stat(file, function (err, stat) {
    if (stat && stat.isDirectory()) {
      walk(file, function (err, res) {
        results = results.concat(res)
        next()
      })
    } else {
      results.push(file)
      next()
    }
  })
}

export default async function walk(dir, done) {
  const results = []
  fs.readdir(dir, function (err, list) {
    if (err) return done(err)
    const i = 0
    next()
  })
}
