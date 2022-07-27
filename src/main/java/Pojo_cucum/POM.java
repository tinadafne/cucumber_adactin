package Pojo_cucum;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class POM {
	public static WebDriver driver;
	/* creating objects for the pages */
	private static Loginpage lp;
	private static Selecthotel sh;
	private static Confirmhotel ch;
	private static Bookhotel bh;
	public POM(WebDriver driver) {
		POM.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public Loginpage login_obj() {
		lp=new Loginpage(driver);
		return lp;

	}
	public Selecthotel select_obj() {
         sh=new Selecthotel(driver);
         return sh;
         }
	public Confirmhotel confirm_obj() {
         ch=new Confirmhotel(driver);
         return ch;
	}
	public  Bookhotel book_obj() {
         bh=new Bookhotel(driver);
         return bh;
	}

	
	
}
