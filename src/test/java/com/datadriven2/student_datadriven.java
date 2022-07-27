package com.datadriven2;

import java.io.File;
import java.util.Scanner;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class student_datadriven {
	public static void main(String[] args) {
		File fin= new File("/Users/tina/Desktop/selenium/DATADRIVEN/student_DD.xlsx");
		Workbook wb= new XSSFWorkbook();
		Sheet sh1 = wb.createSheet("student details");
		Row r1 = sh1.createRow(0);
		Cell cl1 = r1.createCell(0);
		
		
	}

}
