package Pojo_cucum;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Bookhotel {

	public static WebDriver driver;
	public Bookhotel(WebDriver driver) {
		Bookhotel.driver=driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="first_name")
	private WebElement firstname;
	@FindBy(id="last_name")
	private WebElement lastname;
	@FindBy(id="address")
	private WebElement address;
	@FindBy(id="cc_num")
	private WebElement ccnum;
	@FindBy(id="cc_type")
	private WebElement cctype;
	@FindBy(id="cc_exp_month")
	private WebElement expmonth;
	@FindBy(id="cc_exp_year")
	private WebElement expyear;
	@FindBy(id="cc_cvv")
	private WebElement cccvv;
	@FindBy(id="book_now")
	private WebElement book;
	
	public WebElement getFirstname() {
		return firstname;
	}
	public WebElement getLastname() {
		return lastname;
	}
	public WebElement getAddress() {
		return address;
	}
	public WebElement getCcnum() {
		return ccnum;
	}
	public WebElement getCctype() {
		return cctype;
	}
	public WebElement getExpmonth() {
		return expmonth;
	}
	public WebElement getExpyear() {
		return expyear;
	}
	public WebElement getCccvv() {
		return cccvv;
	}
	public WebElement getBook() {
		return book;
	}
	
}
