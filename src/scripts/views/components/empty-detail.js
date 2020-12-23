class EmptyDetail extends HTMLElement {
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

        .empty-detail {
          height: calc(100vh - 60px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .empty-detail__message {
          font-size: 18px;
          font-weight: 500;
          color: #2c3e50;
          padding: 0 32px;
          text-align: center;
        }

        .empty-detail__image {
          width: 100px;
          height: auto;
          margin-bottom: 16px;
        }

        .behind-appbar {
          position: fixed;
          width: 100%;
          top: 0;
          height: 60px;
          background-color: #2c3e50;
        }
          
        </style>
        <div class="empty-detail">
          <img 
              class="empty-detail__image" 
              src="images/attention.png"
              alt="perhatian"
            />
          <p class="empty-detail__message">Terjadi kesalahan, coba beberapa saat lagi</p>
        </div>
        <div class="behind-appbar"></div>
         `;
  }
}

customElements.define('empty-detail', EmptyDetail);
