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

/*
In my simple RPG, every character will be created with the object-constructor: Character.

var balthazaar = new Character('Balthazaar', 20);
                        // Balthazaar will be his name
                        // 20 will be his opness (as Over-Poweredness)
I did the best of my haxxing magic, but it seems I've got problems:

After creating him, my poor little hero's attacks seems to miss the magic of randomness. (The first fight with that stupid rat didn't go too well...)
*/

class Character{
  
    constructor(name, opness){
      this.name = name;
      this.opness = opness;
    }
    
    attack(){
      return this.opness + (Math.random() * 20) + 1;
    }
    
  }

function automaton(e) {
	if (typeof e === "string") {

    if(e.length > 0){
    return e.split('').reduce( (acc, letter) => {
      const vowels = ['a', 'e', 'i', 'u', 'o']
      vowels.includes(letter.toLowerCase()) ? acc += 1 : false
      return acc
    }, 0)
    }
		return 0
	} else if (typeof e === "number") {
		if (e == 1) return false;

		for (var i = 2; i < e; i++) if (e % i < 1) return false;

		return true;
	} else if (typeof e === "object") {
		var a = {};

		for (var k in e) a[e[k]] = k + "";

		return a;
	}
}