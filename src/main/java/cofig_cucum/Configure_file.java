package cofig_cucum;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Configure_file {
	public static Properties p;
	public Configure_file() throws Throwable {
		File f= new File("/Users/tina/eclipse-workspace/Adactin_proj/src/main/java/configuration/config.properties");
	FileInputStream fs= new FileInputStream(f);
	p=new Properties();
	p.load(fs);
	
	}
	public String geturl() {
String furl=p.getProperty("url");
return furl;

	}
	public String getuser() {
		String fusr=p.getProperty("username");
		return fusr;
			}
			public String getpass() {
				String fpass=p.getProperty("password");
				return fpass;

			}
			
	

}
