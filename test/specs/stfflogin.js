import stfloginpage from "../pageobjects/stfloginpage.js"
import { expect } from "chai"

describe('Login to application smoke' , ()=>{
    it('Login to application' , async()=>{

        await browser.url("http://rmgtestingserver/domain/Online_Banking_System/staff_login.php")
        await browser.maximizeWindow()
        let title = await browser.getTitle()
        console.log(title);
        //expect(browser).toHaveTitleContaining('Online Banking System')
        expect(title).to.be.include('Online Banking Syst')
       //expect(browser).toHaveTitleContaining('Staff Pge')
       //expect(title2).to.be.contains('Staff Page')
       expect(await stfloginpage.lgnbtn.waitForClickable({timeout:3000})).to.be.equal
       await stfloginpage.stflgnaction(210001,'password')
       let title3= await browser.getTitle()
       console.log(title3);
       await browser.pause(5000)
       
       //await expect(browser).toHaveTitle('Staff')
       //expect(title3).to.be.include('Staff Hom')

    })
})