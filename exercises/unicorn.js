class Unicorn {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(title, color = 'white') {
    this.name = title
    this.color = color
  }

  isWhite() {
    if (this.color === 'white'){
      return true
    } else {
      return false
    }
  }
  says(words){
      //return "**;* " + words + " *;**"
      return `**;* ${words} *;**`
      // two ways to string interpolate use $ instead of #
  }
}
//define a function way 1
//function isWhite() => {}

//define a function way 2
//const isWhite = ()  => {}

// this is how to invoke
//isWhite()

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Unicorn;
// in JS you have to export and require, its not smart like rails to must be explicit
// and the place you want them to show up must require
