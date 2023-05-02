class StepSection extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.shadowRoot.innerHTML = `
			<style>
				.container {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					align-items: center;
					gap: 10px;
					height: 100%;
					min-height: 300px;
				}

				:host([reversed]) .container {
					flex-direction: row-reverse;
				}

				.box1 {
					flex: 3 0 200px;
					max-width: 500px;
				}

				.box2 {
					flex: 2 0 200px;
					display: contents;
				}

				.steps {
					font-size: 16px;
					color: var(--brand-color);
				}

				.step-header {
					font-size: 30px;
				}
			</style>
			<div class="container">
				<div class="box1">
					<span class="steps">${this.getAttribute('heading')}</span> <br>
					<span class="step-header">${this.getAttribute('subHeading')}</span> <br><br>
					<span>
						<slot></slot>
					</span>
				</div>
				<div class="box2">
					<iframe width="433" height="244" src="https://www.youtube.com/embed/eZTS4cL4Euo" frameborder="0"></iframe>
				</div>
			</div>
		`
	}
}

customElements.define('step-section', StepSection);

/**
 * Web Components
 * 1- Custom Elements definieren
 * 2- Shadow DOM
 * 3- HTML Templates
 */