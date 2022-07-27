package com.runnerfile;

import org.junit.runner.RunWith;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;

import Base_cucum.Baseclass;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/tina/eclipse-workspace/Cucumber/src/test/java/Featurefile/Login.feature",
                 glue = "com.stepdefinition",
                 monochrome = true,
                 dryRun=false,
                 strict=true,
                  plugin = {"html:Report/cucumber_adactin_report",
                		  "pretty",
                		  "json:Report/json_report",
                		  "com.cucumber.listener.ExtentCucumberFormatter:Report/extent_report.html"}
)

public class Testrunner {
	public static WebDriver driver;

	@BeforeClass
	public static void setUp() {
		driver = Baseclass.browser("safari");

	}
@AfterClass
	public static void tearDown() {
		driver.close();

	}

}
