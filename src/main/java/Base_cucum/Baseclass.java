package Base_cucum;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.Select;


public class Baseclass {
	public static WebDriver driver;
	/* driver */
	public static WebDriver browser(String brwname) {
		if(brwname.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver",System.getProperty("Users/tina"+"/eclipse-workspace/chromedriver"));
			 driver= new ChromeDriver();
		}
		else if(brwname.equalsIgnoreCase("safari")) {
			System.setProperty("webdriver.safari.driver","");
		 driver= new SafariDriver();
		}
		//driver.manage().window().maximize();
		return driver;
		

	}
	/* get url*/
	
	public static  void geturl(String url) {
		driver.get(url);

	}
	
	/* text box */
	public static void textbox(WebElement element,String S) {
		element.sendKeys(S);
	}
	
	/* button */
	public static void clickbutton(WebElement element) {
		element.click();

	}
	
	/* dropdown */
	public static void dropdown(WebElement element,String type,String value) {
		Select dd = new Select(element);
		if(type.equalsIgnoreCase("selectbyvalue"))
		{
			dd.selectByValue(value);
		}
		else if(type.equalsIgnoreCase("selectbyvisibletext"))
		{
			dd.selectByVisibleText(value);
		}
		else if(type.equalsIgnoreCase("selectbyindex"))
		{
			int val=Integer.parseInt(value);
			dd.selectByIndex(val);
		}
		
		
	}
	
	
	/*screenshot */
	public static void screenshot() throws IOException {
    TakesScreenshot ts = (TakesScreenshot)driver;
    File srcfile=ts.getScreenshotAs(OutputType.FILE);
    File dstfile = new File("/Users/tina/Desktop/selenium/adact.png");
    FileHandler.copy(srcfile, dstfile);
    
    
	}
	
	
	
	

}
