class EmptyList extends HTMLElement {
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

          .empty-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .empty-list__message {
            font-size: 18px;
            font-weight: 500;
            color: #2c3e50;
            padding: 0 32px;
            text-align: center;
          }

          .empty-list__image {
            width: 100px;
            height: auto;
            margin-bottom: 16px;
          } 
        
       </style>
       <div class="empty-list">
        <img 
            class="empty-list__image" 
            src="images/attention.png"
            alt="perhatian"
          />
        <p class="empty-list__message">Terjadi kesalahan, coba beberapa saat lagi</p>
      </div>
       `;
  }
}

customElements.define('empty-list', EmptyList);
