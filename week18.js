/*
Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70
*/
class Warrior {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }

    strike(enemy, swings) {
        enemy.health = Math.max(0, enemy.health - (swings * 10));
    }

}

/*
The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

But it's not working properly.
*/

class Dinglemouse {

    constructor() { //set initial variables
        this.name = this.name || '' 
        this.age = this.age || ''
        this.sex = this.sex || ''
        
        this.retStr = 'Hello.' 
    }

    setAge(age) {
        if(this.retStr.indexOf(this.age)){ //if age already exists, replace, otherwise create
          this.retStr = this.retStr.replace(this.age, age)
          this.age = age
        }else{
          this.age = age
          this.retStr += ` I am ${this.age}.`
        }

        return this
    }

    setSex(sex) { //if sex already exists, replace, otherwise create
      
        if(this.retStr.indexOf(this.sex)){
          this.retStr = this.retStr.replace(this.sex, sex == 'M' ? "male" : "female")
          this.sex = sex == 'M' ? "male" : "female"
        }else{
          this.sex = sex == 'M' ? "male" : "female"
          this.retStr += ` I am ${this.sex}.`
        }
      
        return this
    }

    setName(name) { //if name already exists, replace, otherwise create
        if(this.retStr.indexOf(this.name)){
          this.retStr = this.retStr.replace(this.name, name)
          this.name = name
        }else{
          this.name = name
          this.retStr += ` My name is ${this.name}.`
        }

        return this
    }

    hello() {
        return this.retStr
    }

}

    let dm = new Dinglemouse().setName("Bob").setAge(27).setSex('M')
    let expected = "Hello. My name is Bob. I am 27. I am male."

/*
Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order
*/

var sortArray = function(value) {
    return value.split('').sort((a, b) => a - b ).join('');
}

