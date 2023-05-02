class HighlightText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style>
				:host {
					display: inline-block;
					background: linear-gradient(
						transparent,
						transparent 40%,
						var(--brand-color) 0,
						var(--brand-color) 85%,
						transparent 0
					) no-repeat;
				}
			</style>
            <slot></slot>
        `;
    }
}

customElements.define('highlight-text', HighlightText);