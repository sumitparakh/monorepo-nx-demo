describe('uikit-react-components: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--primary&knob-text=&knob-backgroundColor='));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to uikit-react-components!');
    });
});
