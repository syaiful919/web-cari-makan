class LocationSection extends HTMLElement {
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
          
          #location {
            max-width: 1000px;
            margin: auto;
            text-align: center;
            padding-top: 64px;
            padding-bottom: 32px;
            display: grid;
          }

          .location__content {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-align: end;
          }

          .location__content p {
            margin: 0 16px 32px;
            font-size: 14px;
            line-height: 1.8em;
          }

          .location__content button {
            background: #2b50b4;
            color: white;
            padding: 10px;
            border-radius: 5px;
            border: none;
            transition: opacity 0.3s;
            margin-right: 16px;
          }

          .location__image {
            width: 100%;
            height: auto;
            margin: auto;
          }
  
          @media screen and (max-width: 599px) {
            .section__title {
              font-size: 36px;
              margin: 0 auto 32px;
            }
            
            .location__image {
              display: none;
            }
  
            .location__content {
              text-align: center;
            }
  
            .location__content button {
              margin: 0 auto;
            }
          }
  
          @media screen and (min-width: 600px) {
            #location {
              grid-template-columns: 5fr 7fr;
            }
          }
              
         </style>
         <section id="location">
          <img
            class="location__image"
            src="images/city.png"
            alt="Lokasi"
          />
          <article class="location__content">
            <h2 class="section__title">Tersebar di Seluruh Indonesia</h2>
            <p class="location__tagline">
              Kami hadir di lebih dari 1000 kota di seluruh Indonesia. Jika anda
              mencari kami, kami ada dimana-mana
            </p>
            <button onclick="">Lihat Kota</button>
          </article>
        </section>
         `;
  }
}

customElements.define('location-section', LocationSection);
