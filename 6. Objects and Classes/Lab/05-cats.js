function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    arr.forEach(el => {
        const [name, age] = el.split(' ');
        const cat = new Cat(name, age);
        cat.meow()
    });
}
