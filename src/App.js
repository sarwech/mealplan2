import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './components/Day'
import Week from './components/Week'
// import Ingredients from './components/Ingredients'

class App extends Component {
  constructor() {
    super()
    const days = ['Monday', 'Tuesday', 'Wednesday']
    this.state = {
      days
    }
  }
  _onAdd = () => {
    const days = [].concat(this.state.days, ['Friday'])
    // const myObj = Object.assign({}, myOldObj, { something: 1 })
    // myOldObj.something = 1
    this.setState({ days })
  }
  render() {
    return (
        <div>
          <h2>Hello World!</h2>
        </div>
    );
  }
}

export default App;


// class Animal {
//   constructor ({ message } = {}) {
//     this.message = message
//   }
//   // constructor (options) {
//   //   Object.assign(this, options)
//   // }
//   move () {
//     console.log(`moving... with the message: ${this.message} !!`)
//   }
// }

// class Dog extends Animal {
//   constructor(options) {
//     super(options)
//   }
//   walk () {
//     console.log('walking ...')
//     this.move()
//   }
// }

// class Bird extends Animal {
//   constructor(options) {
//     super(options)
//   }
//   move () {
//     super.move()
//     console.log('bird moving')
//   }
//   fly () {
//     console.log('flying ...')
//     this.move()
//   }
// }


// const dog = new Dog({ message: 'dog are wicked' })
// const bird = new Bird()

// dog.walk()
// bird.fly()





// const listOfNumbers = [1,2,5,3,6,2,6,3]

// const squaredNumbers = listOfNumbers.map(num => {
//   return num ** 2
// })

// const squaredNumbers = listOfNumbers.map(num => num ** 2)

// console.log(squaredNumbers)