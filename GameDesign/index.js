let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');
class Minion {
    constructor(power, faction, name) {
        this.power = power;
        this.faction = faction;
        this.type = 'minion';
        this.name = name;
    }
}
class Action {
    constructor(faction, name) {
        this.faction = faction;
        this.type = 'action';
        this.name = name;
    }
}
let baseVar = 1;
class Base {
    constructor() {
        this.breakPoint = 20;
        this.firstVP = 3;
        this.secondVP = 2;
        this.thirdVP = 1;
        this.name = 'base' + baseVar.toString();
        baseVar += 1;
    }
}
let dinosaurs = [new Minion(2, 'dinosaurs', 'war-raptor'), new Minion(2, 'dinosaurs', 'war-raptor'), 
    new Minion(2, 'dinosaurs', 'war-raptor'), new Minion(2, 'dinosaurs', 'war-raptor'), 
    new Minion(3, 'dinosaurs', 'armor-stego'), new Minion(3, 'dinosaurs', 'armor-stego'), 
    new Minion(3, 'dinosaurs', 'armor-stego'), new Minion(4, 'dinosaurs', 'laseratops'), 
    new Minion(4, 'dinosaurs', 'laseratops'), new Minion(7, 'dinosaurs', 'king-rex'), 
    new Action('dinosaurs', 'augmentation'), new Action('dinosaurs', 'augmentation'), 
    new Action('dinosaurs', 'howl'), new Action('dinosaurs', 'howl'), 
    new Action('dinosaurs', 'natural-selection'), new Action('dinosaurs', 'rampage'), 
    new Action('dinosaurs', 'survival-of-the-fittest'), new Action('dinosaurs', 'tooth-and-claw-and-guns'), 
    new Action('dinosaurs', 'upgrade'), new Action('dinosaurs', 'wildlife-preserve')];
let bases = [new Base(), new Base(), new Base(), new Base(), new Base(), new Base()];
let baseDiscard = [];

function shuffle(deck) {
    let remains = deck.length;
    let newDeck = [];
    while(remains > 0) {
        let keyVar = Math.floor(Math.random() * remains);
        newDeck.push(deck[keyVar]);
        deck.splice(keyVar, 1);
        remains -= 1;
    }
    return newDeck;
}
function display(group) {
    let list = [];
    for(let i = 0; i < group.length; i++) {
        list.push(group[i].name);
    }
    console.log(list);
    console.log('-END-');
}
class HumanPlayer {
    constructor(deck1, deck2) {
        this.VP = 0;
        this.deck = deck1;
        this.deck.push.apply(this.deck, deck2);
        this.hand = [];
        this.discard = [];
    }
    // showhHand(ctx) {
    //     this.hand.forEach((item, itemIndex) => {
    //         let image = document.getElementById(item);
    //         ctx.drawImage(image, 10 + itemIndex * 90, 20, 90, 140);
    //     })
    // }
    dealCards() {
        this.deck = shuffle(this.deck);
        display(this.deck);
        this.hand = this.deck.splice(0, 5);
        display(this.hand);
        display(this.deck);
        for(let i = 0; i < this.hand.length; i++) {
            if(this.hand[i].type === 'minion') break;
            if(i === this.hand.length - 1) console.log('Reshuffle?');
        }
    }
}
class GameManager {
    constructor(player1) {
        this.player1 = player1;
        this.basesInPlay = [];
    }
    setUp() {
        this.player1.dealCards();
        bases = shuffle(bases);
        this.basesInPlay = bases.splice(0, 2);
        display(this.basesInPlay);
    }
}
let henry = new HumanPlayer(dinosaurs, dinosaurs);
let charlie = new GameManager(henry);
charlie.setUp();