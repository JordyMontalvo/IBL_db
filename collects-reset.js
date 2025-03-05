const db = require('./db')

const { Collect } = db


async function main() {
  await Collect.deleteMany({})
}

main()
