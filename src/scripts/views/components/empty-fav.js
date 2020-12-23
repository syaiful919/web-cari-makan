class EmptyFav extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .empty-plate {
          width: 100%;
          height: auto;
          margin: auto;
        }
        
        .empty-fav__message {
          font-size: 18px;
          font-weight: 500;
          color: #2c3e50;
        }
        
        @media screen and (max-width: 900px) {
          .empty-plate {
            width: 50%;
          }
        }
        
          
      </style>
      <div>
        <img 
            class="empty-plate" 
            src="images/plate.png"
            alt="piring kosong"
          />
        <p class="empty-fav__message">Belum ada favorit</p>
      </div>
       `;
  }
}

customElements.define('empty-fav', EmptyFav);
