class PlayingCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.suit = this.getAttribute('suit') || 'hearts';
      this.value = this.getAttribute('value') || 'A';
      this.isFaceUp = false;
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>/* Basic flip animation CSS */</style>
        <div class="card" onclick="this.toggleFlip()">
          ${this.isFaceUp ? `${this.value}${this.suit}` : '🂠'}
        </div>
      `;
    }
  
    toggleFlip() { 
      this.isFaceUp = !this.isFaceUp;
      this.render();
    }
  }
  customElements.define('playing-card', PlayingCard);