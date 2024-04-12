import HelloWorld from './HelloWorld.vue'

describe('<HelloWorld />', () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelloWorld)
  })

  it('renders', () => {
    cy.get('h3')
    cy.get('#layer8-persistence-check-btn')
    cy.get('#check-tunnel-btn')
  })

  it('opens the tunnel', () => {
    // see: https://on.cypress.io/mounting-vue
    // cy.mount(HelloWorld)
    cy.get('#layer8-persistence-check-btn').click()
  })

  it('sends a post request through the tunnel', () => {
    // see: https://on.cypress.io/mounting-vue
    // cy.mount(HelloWorld)
    cy.get('#check-tunnel-btn').click()
  })
})
