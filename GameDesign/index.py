from random import seed
from random import random
import math
seed(1)

class Minion:
    def __init__(self, name, power, faction):
        self.name = name
        self.power = power
        self.faction = faction
        self.type = 'Minion'

class Action:
    def __init__(self, name, faction):
        self.name = name
        self.faction = faction
        self.type = 'Action'

#An example deck complete with names, power, and faction
dinosaurs = [Minion('war-raptor', 2, 'dinosaurs'), Minion('war-raptor', 2, 'dinosaurs'), 
    Minion('war-raptor', 2, 'dinosaurs'), Minion('war-raptor', 2, 'dinosaurs'), 
    Minion('armor-stego', 3, 'dinosaurs'), Minion('armor-stego', 3, 'dinosaurs'), 
    Minion('armor-stego', 3, 'dinosaurs'), Minion('laseratops', 4, 'dinosaurs'), 
    Minion('laseratops', 4, 'dinosaurs'), Minion('king-rex', 7, 'dinosaurs'), 
    Action('augmentation', 'dinosaurs'), Action('augmentation', 'dinosaurs'), 
    Action('howl', 'dinosaurs'), Action('howl', 'dinosaurs'), 
    Action('natural-selection', 'dinosaurs'), Action('rampage', 'dinosaurs'), 
    Action('survival-of-the-fittest', 'dinosaurs'), Action('wildlife-preserve', 'dinosaurs'), 
    Action('upgrade', 'dinosaurs'), Action('wildlife-preserve', 'dinosaurs')]

def shuffle(deck):
    newDeck = []
    while len(deck) > 0:
        remains = len(deck)
        keyVar = math.floor(random() * remains)
        newDeck.append(deck[keyVar])
        deck.pop(keyVar)
    return newDeck

class Player:
    def __init__(self, deck1, deck2):
        self.deck = []
        for card in deck1:
            self.deck.append(card)
        for card in deck2:
            self.deck.append(card)
        self.hand = []
    def dealCards(self): #this function shuffles the player's deck and then draws five cards
        self.deck = shuffle(self.deck)
        self.hand = self.deck[0:5]
        self.deck = self.deck[6:]
        for card in self.hand: #checks to make sure the hand has at least one minion
            if card.type == 'Minion':
                break
            if self.hand[-1] == card:
                print('Reshuffle?')

#An example player: Ryan. His hand and his deck are printed
ryan = Player(dinosaurs, dinosaurs)
ryan.dealCards()
for card in ryan.deck:
    print(card.name)
print('----End!----') #This makes it easier to see the split between the hand and deck
for card in ryan.hand:
    print(card.name)
