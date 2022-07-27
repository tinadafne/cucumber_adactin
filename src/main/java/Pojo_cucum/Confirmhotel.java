package Pojo_cucum;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.FindBy;

public class Confirmhotel {
	public static WebDriver driver;
	
	public Confirmhotel(WebDriver driver) {
		Confirmhotel.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	@FindBy(id="radiobutton_0")
	private WebElement radiobut;
	@FindBy(id="continue")
	private WebElement cont;

	public WebElement getRadiobut() {
		return radiobut;
	}
	public WebElement getCont() {
		return cont;
	}
	

	
	

	

}
