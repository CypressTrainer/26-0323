///<reference types="cypress"/>


describe("Collection of Test Suits",()=>{

    it("Test Case No:-1 - To open the google website",()=>{
        cy.visit("https://www.google.com")
        cy.wait(2000)

        cy.get(".gLFyf ").eq(0).type("Cypress Learning")
       //cy.get("input[class='gLFyf']").type("Cypress")
      // cy.get("textarea[id='APjFqb']").type("India")
       //cy.get("input[role='button']").eq(1).click({force:true})
       cy.get(".gNO89b").eq(1).click({force:true})
    })

    


   
                
   


})
