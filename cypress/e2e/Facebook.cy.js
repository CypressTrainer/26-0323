///<reference types ="cypress" />


describe("facebook",()=>{


    it("Open the facebookpage",()=>{

        cy.visit("https://www.facebook.com")
        cy.get("username")
        cy.get("password")
        cy.get("abc")
        cy.get("1234")
   
        
    })
})