package Pojo_cucum;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Selecthotel {
	public static WebDriver driver;
	
	public Selecthotel(WebDriver driver) {
		Selecthotel.driver=driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="location")
	private WebElement location;
	@FindBy(id="hotels")
	private WebElement hotels;
	@FindBy(id="room_type")
	private WebElement rmtype;
	@FindBy(id="room_nos")
	private WebElement rmnos;
	@FindBy(id="datepick_in")
	private WebElement datein;
	@FindBy(id="datepick_out")
	private WebElement dateout;
	@FindBy(id="adult_room")
	private WebElement adultrm;
	@FindBy(id="child_room")
	private WebElement chldrm;
	@FindBy(id="Submit")
	private WebElement submit;

	public WebElement getSubmit() {
		return submit;
	}

	public static WebDriver getDriver() {
		return driver;
	}
	public WebElement getLocation() {
		return location;
	}
	public WebElement getHotels() {
		return hotels;
	}
	public WebElement getRmtype() {
		return rmtype;
	}
	public WebElement getRmnos() {
		return rmnos;
	}
	public WebElement getDatein() {
		return datein;
	}
	public WebElement getDateout() {
		return dateout;
	}
	public WebElement getAdultrm() {
		return adultrm;
	}
	public WebElement getChldrm() {
		return chldrm;
	}
	
	
	
	

}
