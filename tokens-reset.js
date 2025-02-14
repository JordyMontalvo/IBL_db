const db = require('./db')

const { Token } = db


async function main() {
  await Token.updateMany({}, {
    free: true,
  })

  await Token.insert({
    value: 'D44F71',
    free: true,
  })
}

main()
