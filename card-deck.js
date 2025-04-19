class CardDeck extends HTMLElement {
    constructor() {
      super();
      this.cards = [];
      this.createDeck(); // Generates 52 cards
      this.render();
    }
  
    render() {
      this.innerHTML = this.cards.map(card => `
        <playing-card suit="${card.suit}" value="${card.value}"></playing-card>
      `).join('');
    }
  
    shuffle() { 
      this.cards.sort(() => Math.random() - 0.5);
      this.render();
    }
  }
  customElements.define('card-deck', CardDeck);