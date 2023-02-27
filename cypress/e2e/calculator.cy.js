describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display with the result of an operation', () => {
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9');
  })

  it('should perform multiple operations when chained together', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should operate with decimal numbers', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should operate with negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3')

  })

  it('should operate with very large numbers', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '23543100');
  })

  it('should return a string of "cannot divide by zero" when trying to divide by zero', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();   
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Cannot divide by zero');
  })
})