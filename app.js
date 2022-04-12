function makeDeck() {}

const cardDeck = {
  deck: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck() {
    const { suits, values, deck } = this;
    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value: value,
          suit: suit,
        });
      }
    }
  },
  drawCard() {
    return this.deck.pop();
  },
};
