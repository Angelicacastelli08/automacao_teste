///<reference types="cypress" />

describe('tasks', ()=>{
    
   
    it('deve visitar a pagina principal e criar login', ()=>{
        cy.visit('https://venia.magento.com/');
        cy.get('.accountTrigger-trigger-23q > .accountChip-root-1l4').click();
        cy.get('.signIn-buttonsContainer-1vC > .button-root_normalPriority-F4F').click();
        
        cy.get('#firstName').type('Angelica');
        cy.get('#lastName').type('castelli');
        cy.get('#Email').type('angel_castelli@hotmail.com');
        cy.get('#Password').type('Familia230313.');
        cy.get('#subscribe').click();
        cy.get('.grecaptcha-logo > iframe').click();
        cy.get('.accountMenu-createAccount-4W1').click();
        cy.get('.slider-bannerWrapper-20F').click();
        cy.screenshot();
        cy.get('.get').screenshot()
        
       
   })
    it('logar usuario', ()=>{
        cy.visit('https://venia.magento.com/');
        cy.get('.accountTrigger-trigger-23q > .accountChip-root-1l4 > [aria-label=""]').click();
        cy.get('.signIn-form-nPj > .field-root-ffA > .fieldIcons-root-Gff > .fieldIcons-input-1wB > #email').type('angel_castelli@hotmail.com');
        cy.get('#Password').type('Familia230313.');
        cy.get('.grecaptcha-logo > iframe').click;
        cy.get('.button-root_highPriority-1Zl').click();
        cy.screenshot();
        cy.get('.post').screenshot()

       
        
    })
   
})
