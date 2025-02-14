const db = require('./db')

const { Tree } = db


async function main() {
  await Tree.deleteMany({})

  await Tree.insert({
    "id": "5f0e0b67af92089b5866bcd0",
    "childs": []
  })
}

main()
