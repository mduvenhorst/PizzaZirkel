class HeroSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        .responsive-two-column-grid > * {
            padding: 1rem;
        }

        .header {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .heroSec {
            display: block;
            background-image: url("img/heropic.png");
            background-repeat: no-repeat;
            background-position: 100% 0%;
            height: 100vh;
            background-size: contain;
            width: clamp(200px, 80%, 1350px);
            margin: auto;

          }

          .headings {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 500px;
          }

          #hero1 {
            font-size: clamp(2.5rem, 8vw, 4rem);
          }
          
          #hero2 {
            font-size: clamp(1.5rem, 8vw, 2rem);
          }

          .nav-container {
            max-width: 1000px;
            margin: 0 auto;
          }

          @media only screen and (max-width: 800px) {
            #hero1 {
                font-size: clamp(2.5rem, 8vw, 4rem);
                padding-top: 0px;
                padding-left: 0px;
              }
              
              #hero2 {
                padding-left: 0px;
                font-size: clamp(1rem, 5.5vw, 2rem);
              }
            
              .heroSec {
                display: inline-block;
                background: none;
                height: 100vh;
                background-size: contain;
              }

              .headings {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                height: 200px;
              }
          }
        </style>

        <section>
        <div class="responsive-two-column-grid header">
          <div class="heroSec headings">
            <mo-flex  gap="10px" style="max-width: 500px;" justifyContent="center">
              <span id="hero1">${this.getAttribute('text-hero1')}</span>
              <span id="hero2"> ${this.getAttribute('text-hero2')}</span>
            </mo-flex>
          </div>
        `
    }
}

customElements.define('hero-section', HeroSection)