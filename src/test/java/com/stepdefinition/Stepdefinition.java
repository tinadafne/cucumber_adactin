package com.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.runnerfile.Testrunner;

import Base_cucum.Baseclass;
import Pojo_cucum.POM;
import cofig_cucum.Filereader;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition extends Baseclass{
	public static WebDriver driver= Testrunner.driver;
	public static POM pom=new  POM(driver);
	@Given("^user launch the application\"([^\"]*)\"$")
	public void user_launch_the_application(String url) throws Throwable {
		geturl(url);
		   
	   
	}
	@Given("^user launch the application$")
	public void user_launch_the_application() throws Throwable {
		
	}
	@When("^user enter \"([^\"]*)\" in username field$")
	public void user_enter_in_username_field(String uname) throws Throwable {
		textbox(pom.login_obj().getUsername(),uname);
	    
	    
	}

	@When("^user enter \"([^\"]*)\" in password field$")
	public void user_enter_in_password_field(String pass) throws Throwable {
		textbox(pom.login_obj().getPassword(),pass);
	    
	}



	@Then("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		clickbutton(pom.login_obj().getLogin());
	    
	}

	@Given("^user redirects to  select hotel page$")
	public void user_redirects_to_select_hotel_page() throws Throwable {
	
		
	}

	@When("^user select the location in location dropdown$")
	public void user_select_the_location_in_location_dropdown() throws Throwable {
		Thread.sleep(2000);
	    dropdown(pom.select_obj().getLocation(),"selectbyvisibletext","Paris");
		
	}

	@When("^user select the hotelname in hotelname dropdown$")
	public void user_select_the_hotelname_in_hotelname_dropdown() throws Throwable {
		dropdown(pom.select_obj().getHotels(),"selectbyvisibletext","Hotel Creek");
	    
	}

	@When("^user select the roomtype from roomtype dropdown$")
	public void user_select_the_roomtype_from_roomtype_dropdown() throws Throwable {
		dropdown(pom.select_obj().getRmtype(),"selectbyvisibletext","Double");
	   
	}

	@When("^user select the roomnumber from roomnumber dropdown$")
	public void user_select_the_roomnumber_from_roomnumber_dropdown() throws Throwable {
		dropdown(pom.select_obj().getRmnos(),"selectbyvisibletext","1 - One");
	
	}

	@Then("^user enter the datein in the datein field$")
	public void user_enter_the_datein_in_the_datein_field() throws Throwable {
		pom.select_obj().getDatein().clear();
		textbox(pom.select_obj().getDatein(),"21/03/2022");
	}

	@Then("^user enter the dateout in the dateout field$")
	public void user_enter_the_dateout_in_the_dateout_field() throws Throwable {
		textbox(pom.select_obj().getDateout(),"23/03/2022");
	
	}

	@Then("^user select the adultroom from adult room dropdown$")
	public void user_select_the_adultroom_from_adult_room_dropdown() throws Throwable {
		dropdown(pom.select_obj().getAdultrm(),"selectbyvisibletext","1 - One");
	  
	}

	@Then("^user select the childroom from child room dropdown$")
	public void user_select_the_childroom_from_child_room_dropdown() throws Throwable {
		dropdown(pom.select_obj().getChldrm(),"selectbyvisibletext","1 - One");
	
	}

	@Then("^user click on the submit button$")
	public void user_click_on_the_submit_button() throws Throwable {
		clickbutton(pom.select_obj().getSubmit());
		
	}
	

	@Given("^user redirects to confirm hotel page$")
	public void user_redirects_to_confirm_hotel_page() throws Throwable {
		Thread.sleep(2000);
	    
	}

	@When("^user select the hotel radio button$")
	public void user_select_the_hotel_radio_button() throws Throwable {
		clickbutton(pom.confirm_obj().getRadiobut());
	    
	}

	@Then("^click on the continue button$")
	public void click_on_the_continue_button() throws Throwable {
		clickbutton(pom.confirm_obj().getCont());
	    
	}

	@Given("^user redirects to booking details page$")
	public void user_redirects_to_booking_details_page() throws Throwable {
		Thread.sleep(2000);
	    
	}

	@When("^user enter the firstname in the firstname field$")
	public void user_enter_the_firstname_in_the_firstname_field() throws Throwable {
		textbox(pom.book_obj().getFirstname(),"tina");
	    
	}

	@When("^user enter the last name in the last name field$")
	public void user_enter_the_last_name_in_the_last_name_field() throws Throwable {
		textbox(pom.book_obj().getLastname(),"dafne");
	    
	}

	@When("^user enter the address in the address field$")
	public void user_enter_the_address_in_the_address_field() throws Throwable {
		textbox(pom.book_obj().getAddress(),"ngl");
	    
	}

	@When("^user enter the credit card number in the credit card number field$")
	public void user_enter_the_credit_card_number_in_the_credit_card_number_field() throws Throwable {
		textbox(pom.book_obj().getCcnum(),"9876543211234567");
	    
	}

	@Then("^user select the credit card type from credit card type dropdown$")
	public void user_select_the_credit_card_type_from_credit_card_type_dropdown() throws Throwable {
		dropdown(pom.book_obj().getCctype(),"selectbyvisibletext","VISA");
	    
	}

	@Then("^user select the expiry month from expiry month dropdown$")
	public void user_select_the_expiry_month_from_expiry_month_dropdown() throws Throwable {
		dropdown(pom.book_obj().getExpmonth(),"selectbyvisibletext","May");
	}

	@Then("^user select the expiry year from expiry year dropdown$")
	public void user_select_the_expiry_year_from_expiry_year_dropdown() throws Throwable {
		dropdown(pom.book_obj().getExpyear(),"selectbyvisibletext","2022");
	}

	@Then("^user enter the cvv number$")
	public void user_enter_the_cvv_number() throws Throwable {
		textbox(pom.book_obj().getCccvv(),"123");
	}

	@Then("^user click the book button$")
	public void user_click_the_book_button() throws Throwable {
		clickbutton(pom.book_obj().getBook());
	}



}
