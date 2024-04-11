import HelloWorld from './HelloWorld.vue'

describe('<HelloWorld />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelloWorld)
    cy.get('#layer8-persistence-check-btn').click()
    cy.get('#check-tunnel-btn').click()
  })
})
