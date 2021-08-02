// playground to learn more and practice with TypeScript

interface User {
  name: string
  id: number
}

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user: User = new UserAccount('John', 12)


type MyBool = true | false

type WindowState = 'open' | 'closed' | 'half'

function checkIt(obj: string | string[]) {
  if (typeof obj === 'string') {
    console.log('you got a string here!')
  } else {
    console.log(`you've probably got an array`)
  }
}

checkIt('blob')
