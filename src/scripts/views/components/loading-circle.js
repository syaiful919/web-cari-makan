class LoadingCircle extends HTMLElement {
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
          @keyframes loading-io {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          .loading-io div {
            position: absolute;
            width: 60px;
            height: 60px;
            border: 10px solid #e15b64;
            border-top-color: transparent;
            border-radius: 50%;
          }
          .loading-io div {
            animation: loading-io 1s linear infinite;
            top: 50px;
            left: 50px;
          }
          .loadingio-spinner-rolling-io {
            width: 100px;
            height: 100px;
            display: inline-block;
            overflow: hidden;
            background: #ffffff;
          }
          .loading-io {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
          }
          .loading-io div {
            box-sizing: content-box;
          }        
            
         </style>
         <div class="loadingio-spinner-rolling-io">
            <div class="loading-io">
              <div></div>
            </div>
          </div>
         `;
  }
}

customElements.define('loading-circle', LoadingCircle);
