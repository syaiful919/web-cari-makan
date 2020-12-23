class FavHero extends HTMLElement {
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
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }
             
            .hero {
              display: flex;
              align-items: center;
              min-height: 100vh;
              width: 100%;
              height: auto;
              text-align: center;
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
            }
  
            .fav-hero {
              background-image: url("images/fav_hero.jpg");
            }
  
            .hero__inner {
              margin: 0 auto;
              max-width: 800px;
              text-shadow: 0 0 5px rgb(141, 204, 219), 0 0 10px rgb(205, 255, 255);
            }
  
            .hero__title {
              color: #fff;
              font-weight: 500;
              font-size: 54px;
              margin: 0 16px;
            }
  
            .hero__tagline {
              color: #fff;
              margin-top: 16px;
              margin-left: 16px;
              margin-right: 16px;
              font-size: 18px;
              font-weight: 300;
            }

            @media screen and (max-width: 599px) {
              .hero__title {
                font-size: 36px;
              }
            }
         </style>
         <section class="hero fav-hero">
          <div class="hero__inner">
            <h1 class="hero__title">Tempat Makan Favoritmu</h1>
            <p class="hero__tagline">
              Disini kamu bisa melihat daftar tempat makan yang kamu simpan
            </p>
          </div>
        </section>
         `;
  }
}

customElements.define('fav-hero', FavHero);
