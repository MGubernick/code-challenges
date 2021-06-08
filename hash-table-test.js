// Generic HashTable Implementation

class HashTable {
  constructor() {
    this.table = new Array(137)
    this.values = []
  }
  
  // define the hash function allowing a string to be used as the key
  hash(string) {
    const H = 37
    let total = 0

    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i)
    }
    total %= this.table.length
    if (total < 1) {
      this.table.length -1
    }
    return parseInt(total)
  }

  showDistribution() {
    for ( const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, ':', this.table[key])
      }
    }
  }

  put(data) {
    const pos = this.hash(data)
    this.table[pos] = data
  }

  get(key) {
    return this.table[this.hash(key)]
  }
}

// Hash table with BUILD CHAINS technique of collision-resolution

class HashTableChains extends HashTable {
  constructor() {
    super()
    this.buildChains()
  }
  buildChains() {
    for(let i = 0; i < this.table.length; i++) {
      this.table[i] = newArray()
    }
  }

  showDistribution() {
    for (const key in this.table) {
      if(this.table[key][0] !== undefined) {
        console.log(key, ':', this.table[key])
      }
    }
  }

  put(key, data) {
    const pos = this.hash(key)
    let index = 0
    if(this.table[pos][index] === undefined) {
      this.table[pos][index] = data
    } else {
      ++index
      while (this.table[pos][index] !== undefined) {
        index++
    }
    this.table[pos][index] = data
     }
  }
  get(key) {
    const pos = this.hash(key)
    let index = 0
    while (this.table[pos][index] !== key) {
      if(this.table[pos][index] !== undefined) {
        return this.table[pos][index]
      } else {
        return undefined
      }
      index++
    }
  }
}



  // HASH TABLE WITH LINEAR PROBING TECHNIQUE for Collision-resolution
  class HashTableLinearP extends HashTable {
    constructor() {
      super()
      this.values = new Array()
    }

    put(key, data) {
      const pos = this.hash(key)
      if (this.table[pos] === undefined) {
        this.table[pos] = key
        this.values[pos] = data
      } else {
        while(this.table[pos] !== undefined) {
          pos++
        }
        this.table[pos] = key
        this.values[pos] = data
      }
    }

    get(key) {
      const hash = this.hash(key)
      if(hash > -1) {
        for (let i = hash; this.table[i] !== undefined; i++) {
          if (this.table[i] === key) {
            return this.values[i]
          }
        }
      }
      return undefined
    }

    showDistribution() {
      for (const key in this.table) {
        if(this.table[key] !== undefined) {
          console.log(key, ':', this.values[key])
        }
      }
    }
  }
