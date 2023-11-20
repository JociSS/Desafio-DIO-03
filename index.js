const prompt = require('prompt-sync')();

class HeroIdentity {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    finalMessage() {
        const heroTypeLower = this.type.toLowerCase();
        const attacksMap = Object.freeze({
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken',
        });

        const attack = attacksMap[heroTypeLower] || "";
        if (attack === "") {
            console.log('Erro: Tipo de herói inválido.');
            return
        }

        console.log(`O herói ${this.name} do tipo ${this.type} atacou usando ${attack}.`);
    }
}

let answer = '';
while (answer.toLowerCase() !== 'n') {
    let heroName = prompt('Qual é o nome do herói: ');
    let heroAge = prompt('Qual é a idade do herói: ');
    let heroType = prompt('Qual é o tipo do herói [guerreiro, mago, monge, ninja]: ');

    let hero = new HeroIdentity(heroName, heroAge, heroType);
    hero.finalMessage();

    answer = prompt('Deseja continuar? [S/N] ');
}

console.log('Terminou');