package com.datadriven;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Write_excel {
	public static void main(String[] args) throws IOException {
		File f= new File("/Users/tina/Desktop/selenium/DATADRIVEN/datadriven.xlsx");
		FileInputStream fis=new FileInputStream(f);
		Workbook wb=new XSSFWorkbook();
		Sheet sh1 =wb.createSheet("Project");
		String name[]= {"Student name","tina","dafne","RAMANDA"};
		String age[]= {"Student Age","20","30","40"};
		
		for(int r=0;r<name.length;r++) 
		{
			System.out.println("r=" +r);
			Row RW1 = sh1.createRow(r);
			int h=0;
			for(int c=h;c<=h;c++) 
			{
				System.out.println("c ="+c);
				System.out.println("h = "+h);
				Cell CL1 = RW1.createCell(c);
				CL1.setCellValue(name[r]);
				System.out.println("name="+name[r]);
			
			for(int k=c+1;k<2;k++) {
				System.out.println("k = "+k);
				Cell CL2 = RW1.createCell(k);
			   CL2.setCellValue(age[r]);
				//Cell CL2 = sh1.createRow(r).createCell(c+1);
				
				System.out.println("age= "+age[r]);
				System.out.println("********");
			}
			
		}
		}
		/*
		Row row = sh1.createRow(0);
		Cell cell = row.createCell(0);
		cell.setCellValue("Students Name");
		Cell cell = row.createCell(1);
		cell.setCellValue("Students Age");
		
		for(int j=1;j<=3;j++)
		{
			Row R1 = sh1.createRow(j);
			for(int k=j-1;k>=name.length;k++) {
				Cell C1 = R1.createCell(k);
				C1.setCellValue(name[k]);
			}
			
			C1.setCellValue(name[j]);
		}
		
		
		int age[]= {10,20,30};
		for(int i=1;i<4;i++)
		{
			Row R = wb.getSheet("Project").createRow(i);
			
			R.createCell(0).setCellValue(a[i-1]);
			
			
		}
		//Row R1 = wb.getSheet("Project").createRow(1);
	    //Row R2 = wb.getSheet("Project").createRow(2);
	    //Row R3 = wb.getSheet("Project").createRow(3);
		
	//R1.createCell(0).setCellValue("TINA");
	//R2.createCell(0).setCellValue("DAFNE");
	//R3.createCell(0).setCellValue("RAMANDA");
	*/
		FileOutputStream fos=new FileOutputStream(f);
		wb.write(fos);
	}

}
