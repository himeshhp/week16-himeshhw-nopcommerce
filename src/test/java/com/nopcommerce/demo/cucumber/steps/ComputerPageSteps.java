package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerPageSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Computers menu tab$")
    public void iClickOnComputersMenuTab() {
    new HomePage().clickOnMenuTab("Computers");
    }

    @Then("^I am navigated to the Computers page successfully$")
    public void iAmNavigatedToTheComputersPageSuccessfully() {
        Assert.assertEquals("Computers page is not displayed", "Computers", new ComputerPage().getPageTitleText());
    }

    @And("^I click on Desktops sub menu$")
    public void iClickOnDesktopsSubMenu() {
        new ComputerPage().clickOnSubMenu("Desktops");
    }

    @And("^I select Processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor)  {
    new BuildYourOwnComputerPage().selectProcessor(processor);
    }

    @And("^I select Ram \"([^\"]*)\"$")
    public void iSelectRam(String ram)  {
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd)  {
        new BuildYourOwnComputerPage().selectHDD(hdd);
    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os)  {
        new BuildYourOwnComputerPage().selectOS(os);
    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^The product is added to cart successfully$")
    public void theProductIsAddedToCartSuccessfully() {
        Assert.assertEquals("Product is not added to cart","The product has been added to your shopping cart",new BuildYourOwnComputerPage().getProductAddedMessage());
    }

    @Then("^I am navigated to the Desktops page successfully$")
    public void iAmNavigatedToTheDesktopsPageSuccessfully() {
        Assert.assertEquals("Desktops page is not displayed", "Desktops", new DesktopsPage().getPageTitleText());
    }

    @And("^I select Product Build your own computer$")
    public void iSelectProductBuildYourOwnComputer() {
        new DesktopsPage().selectProduct("Build your own computer");
    }
}
