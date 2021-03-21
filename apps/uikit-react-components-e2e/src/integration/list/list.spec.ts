describe('uikit-react-components: List component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=list--primary&knob-hidden=false'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to uikit-react-components!');
    });
});
