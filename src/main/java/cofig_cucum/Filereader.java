package cofig_cucum;

import org.openqa.selenium.WebDriver;

public class Filereader {
public static WebDriver driver;

	
	//singleton mthds
	
	//private
	private Filereader() {
	}
	
	//static mthd
	public static Filereader filereader_obj() {
		Filereader  frob=new Filereader ();
		return frob;

	}
	// non static mthd
	public Configure_file configure_file_obj() throws Throwable {
		Configure_file cob = new Configure_file();
		return cob;

	}

}
