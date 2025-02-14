const db = require('./db')

const { Users } = db


async function main() {
  await Users.deleteMany({})

  await Users.insert({
    "id": "5f0e0b67af92089b5866bcd0",
    "date": new Date("2024-01-01T14:38:24.300Z"),
    "name": "IBL",
    "lastName": "",
    "dni": "123456",
    "email": "...@gmail.com",
    "password": "$2b$12$RlHD9nVl70rQiCi1.S7HGeTtLHweMourZbYez1QhWQ1sFTH5yn2kq",
    "parentId": null,
    "affiliated": true,
    "activated": false,
    "plan": "master",
    "n": 9,
    "affiliation_date": new Date("2024-01-01T14:32:20.910Z"),
    "token": "D44F71",
    "country": "Perú",
    "photo": "https://ik.imagekit.io/asu/impulse/avatar_cWVgh_GNP.png",
    "tree": true,
    "coverage": {
      "id": "5f0e0b67af92089b5866bcd0"
    },
    "points": 0,
    "affiliation_points": 0,
    "account": null,
    "account_type": null,
    "address": null,
    "age": null,
    "bank": null,
    "ibk": null,
    "phone": null,
    "_activated": false,
    "rank": "none"
  })
}

main()
