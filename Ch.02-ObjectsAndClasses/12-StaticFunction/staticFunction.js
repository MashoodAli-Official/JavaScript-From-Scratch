"use Restrict";
class cat {
    constructor (name){
        this.name = name;
    };

    introduce(){
        console.log('This is ' + this.name);
    };

    // static method
    static voice (){
        console.log(' Meow');
    };
}
const myCat = new cat('Tom');
myCat.introduce();
cat.voice();