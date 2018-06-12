const stocks = Object.create({}, {
    company: {
        value: 'Star Fleet',
        enumerable: true,
        writable: true
    },
    specialty: {
        value: 'technology',
        enumerable: true,
        writable: true
    },
    name: {
        value: 'Data',
        enumerable: true
    },
    portfolio: {
        value: [
            {name: "AAPL",
            shares: 152,
            valuation: 30400,
            purchased: true},
    ],
    },
    worth: {
        value: function () {
            let netWorth = this.portfolio
            let dollarAmount = 0
            netWorth.forEach(object => {
                if(object.purchased === false) {
                    dollarAmount -= object.valuation
                } else {
                    dollarAmount += object.valuation
                }
            })
            return dollarAmount
        }
    },
    transaction: {
        value: function (symbol, quantity, price, boo) {
           this.portfolio.push({name: symbol,
            shares: quantity,
            valuation: price,
            purchased: boo})
        }
    }
})
stocks.transaction("HELL", 666, 9000, true)
stocks.transaction('MSFT', 290, 40000000, false)

console.log(stocks.worth())
console.log(stocks)

const fragment = document.createDocumentFragment()
const articles = document.querySelector('#dude')

for (let key in stocks) { 
    
    const section = document.createElement('section')
    section.textContent = `${key.charAt(0).toLocaleUpperCase() + key.slice(1)}: ${stocks[key]}`
    
    fragment.appendChild(section)
}

let port = stocks.portfolio
port.forEach(object => {
    for (key in object) {
        const portSection = document.createElement('section')
        portSection.textContent = `${key.charAt(0).toLocaleUpperCase() + key.slice(1)}: ${object[key]}`
        fragment.appendChild(portSection)
    }
})


articles.appendChild(fragment)