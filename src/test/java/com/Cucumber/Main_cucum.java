package com.Cucumber;

import org.openqa.selenium.WebDriver;

import Base_cucum.Baseclass;
import Pojo_cucum.POM;

public class Main_cucum extends Baseclass {
public static WebDriver driver= Baseclass.browser("safari");
public static POM pom=new POM(driver);
public static void main(String[] args) throws Throwable {
	

	geturl("https://adactinhotelapp.com");
	//geturl(frob.)
	
	/* login page */
	textbox(pom.login_obj().getUsername(),"tinadafne");
	textbox(pom.login_obj().getPassword(),"qwerfdsa");
	clickbutton(pom.login_obj().getLogin());
	Thread.sleep(2000);
	
	/* select hotel */
	dropdown(pom.select_obj().getLocation(),"selectbyvisibletext","Paris");
	dropdown(pom.select_obj().getHotels(),"selectbyvisibletext","Hotel Creek");
	dropdown(pom.select_obj().getRmtype(),"selectbyvisibletext","Double");
	dropdown(pom.select_obj().getRmnos(),"selectbyvisibletext","1 - One");
	pom.select_obj().getDatein().clear();
	textbox(pom.select_obj().getDatein(),"21/03/2022");
	textbox(pom.select_obj().getDateout(),"23/03/2022");
	dropdown(pom.select_obj().getAdultrm(),"selectbyvisibletext","1 - One");
	dropdown(pom.select_obj().getChldrm(),"selectbyvisibletext","1 - One");
	clickbutton(pom.select_obj().getSubmit());
	Thread.sleep(2000);
	
	/* confirm hotel*/
	clickbutton(pom.confirm_obj().getRadiobut());
	clickbutton(pom.confirm_obj().getCont());
	Thread.sleep(2000);
	
	/*book hotel */
	textbox(pom.book_obj().getFirstname(),"tina");
	textbox(pom.book_obj().getLastname(),"dafne");
	textbox(pom.book_obj().getAddress(),"ngl");
	textbox(pom.book_obj().getCcnum(),"9876543211234567");
	dropdown(pom.book_obj().getCctype(),"selectbyvisibletext","VISA");
	dropdown(pom.book_obj().getExpmonth(),"selectbyvisibletext","May");
	dropdown(pom.book_obj().getExpyear(),"selectbyvisibletext","2022");
	textbox(pom.book_obj().getCccvv(),"123");
	clickbutton(pom.book_obj().getBook());
	Baseclass.screenshot();
	
driver.close();

}
}