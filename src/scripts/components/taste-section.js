class TasteSection extends HTMLElement {
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
        .section__title {
          color: #322f56;
          font-size: 48px;
          font-weight: 500;
          padding: 0 16px;
          margin-bottom: 32px;
        }
        #taste {
          max-width: 1000px;
          margin: auto;
          text-align: center;
          padding-top: 64px;
          padding-bottom: 32px;
          display: grid;
        }
        
        .taste__content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          text-align: start;
        }
        
        .taste__content p {
          margin: 0 16px 32px;
          font-size: 14px;
          line-height: 1.8em;
        }
        
        .taste__content button {
          background: #2b50b4;
          color: white;
          padding: 10px;
          border-radius: 5px;
          border: none;
          transition: opacity 0.3s;
          margin-left: 16px;
        }
        
        .taste__image {
          width: 100%;
          height: auto;
          margin: auto;
        }

        @media screen and (max-width: 599px) {
          .section__title {
            font-size: 36px;
            margin: 0 auto 32px;
          }
          
          .taste__image,
          .location__image {
            display: none;
          }

          .taste__content,
          .location__content {
            text-align: center;
          }

          .taste__content button,
          .location__content button {
            margin: 0 auto;
          }
        }

        @media screen and (min-width: 600px) {
          #taste {
            grid-template-columns: 7fr 5fr;
          }
        }
            
       </style>
       <section id="taste">
        <article class="taste__content">
          <h2 class="section__title">Cita Rasa Nusantara</h2>
          <p class="taste__tagline">
            Nikmati beragam makanan dan minuman khas dari seluruh Nusantara.
            Jelajahi sekarang juga
          </p>
          <button onclick="">Lihat Menu</button>
        </article>
        <img
          class="taste__image"
          src="images/food.png"
          alt="Makanan nusantara"
        />
      </section>
       `;
  }
}

customElements.define('taste-section', TasteSection);
