const db = require('../db')
const { Publisher } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const publishers = [
        {
            name: 'Penguin Books',
            location: '375 Hudson St, New York, NY 10014',
            url: 'https://penguin.com'
          },
          {
            name: 'HarperCollins',
            location: '10 E 53rd St, New York, NY 10022',
            url: 'https://www.harpercollins.com'
          }
    ]

    await Publisher.insertMany(publishers)
    console.log('inserted publishers!')
}

const run = async () => {
    await main()
    db.close()
}

run()