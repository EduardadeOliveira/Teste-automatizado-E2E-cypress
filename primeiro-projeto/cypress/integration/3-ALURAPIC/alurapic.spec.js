describe('Usabilidade tela inicial ', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })

    /* novos casos de teste */
    it('verificar mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
 
    })

    it('verificar botão habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('xxoddso');
        cy.get('input[formcontrolname="password"]').type('021525');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('verificar nome da aplicação na tela inicial', () => {
        cy.contains('a' ,' ALURAPIC ').should('be.visible');
    })

    it('verificar menu clicavel tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
    
})