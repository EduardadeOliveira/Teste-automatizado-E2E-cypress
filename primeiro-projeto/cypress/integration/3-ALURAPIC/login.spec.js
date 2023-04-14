describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')
  
        // simulação para o teste falhar, ao invés de 200, retornar 400
        
      cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
         statusCode: 400
       } ).as('stubPost')
    })

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');   
    })

    it('fazer login de usuario invalido', () => {
        cy.login('maria', '06687892')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password') 
        })     
    })

})