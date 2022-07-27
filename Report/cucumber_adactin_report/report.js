$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/tina/eclipse-workspace/Cucumber/src/test/java/Featurefile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the application\"https://adactinhotelapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cuname\u003e\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-functionality;",
  "rows": [
    {
      "cells": [
        "uname",
        "password"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-functionality;;1"
    },
    {
      "comments": [
        {
          "line": 13,
          "value": "#|tina|trewq|"
        },
        {
          "line": 14,
          "value": "#|dafne|asdfg|"
        }
      ],
      "cells": [
        "tinadafne",
        "qwerfdsa"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#|tina|trewq|"
    },
    {
      "line": 14,
      "value": "#|dafne|asdfg|"
    }
  ],
  "line": 15,
  "name": "Login functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the application\"https://adactinhotelapp.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"tinadafne\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"qwerfdsa\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://adactinhotelapp.com",
      "offset": 28
    }
  ],
  "location": "Stepdefinition.user_launch_the_application(String)"
});
formatter.result({
  "duration": 2399692972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tinadafne",
      "offset": 12
    }
  ],
  "location": "Stepdefinition.user_enter_in_username_field(String)"
});
formatter.result({
  "duration": 126042636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerfdsa",
      "offset": 12
    }
  ],
  "location": "Stepdefinition.user_enter_in_password_field(String)"
});
formatter.result({
  "duration": 73929171,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 125065604,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Select hotel functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user redirects to  select hotel page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user select the location in location dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user select the hotelname in hotelname dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user select the roomtype from roomtype dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user select the roomnumber from roomnumber dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enter the datein in the datein field",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user enter the dateout in the dateout field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user select the adultroom from adult room dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user select the childroom from child room dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user click on the submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_redirects_to_select_hotel_page()"
});
formatter.result({
  "duration": 21089,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_location_in_location_dropdown()"
});
formatter.result({
  "duration": 2026273013,
  "error_message": "org.openqa.selenium.NoSuchElementException: \nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027tinas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1043:b49c:c39e:602f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 15.5, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 21F79, safari:platformVersion: 12.4, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: A51D9DDA-C7B6-49E1-B244-D391BB1423FE\n*** Element info: {Using\u003did, value\u003dlocation}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getTagName(Unknown Source)\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\n\tat Base_cucum.Baseclass.dropdown(Baseclass.java:54)\n\tat com.stepdefinition.Stepdefinition.user_select_the_location_in_location_dropdown(Stepdefinition.java:57)\n\tat ✽.When user select the location in location dropdown(/Users/tina/eclipse-workspace/Cucumber/src/test/java/Featurefile/Login.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_hotelname_in_hotelname_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_roomtype_from_roomtype_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_roomnumber_from_roomnumber_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_datein_in_the_datein_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_dateout_in_the_dateout_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_adultroom_from_adult_room_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_childroom_from_child_room_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Confirm hotel functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;confirm-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user redirects to confirm hotel page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user select the hotel radio button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "click on the continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_redirects_to_confirm_hotel_page()"
});
formatter.result({
  "duration": 2002123914,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_hotel_radio_button()"
});
formatter.result({
  "duration": 7573873,
  "error_message": "org.openqa.selenium.NoSuchElementException: \nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027tinas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1043:b49c:c39e:602f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 15.5, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 21F79, safari:platformVersion: 12.4, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: A51D9DDA-C7B6-49E1-B244-D391BB1423FE\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat Base_cucum.Baseclass.clickbutton(Baseclass.java:48)\n\tat com.stepdefinition.Stepdefinition.user_select_the_hotel_radio_button(Stepdefinition.java:118)\n\tat ✽.When user select the hotel radio button(/Users/tina/eclipse-workspace/Cucumber/src/test/java/Featurefile/Login.feature:32)\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.click_on_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Book hotel functionality",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-hotel-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user redirects to booking details page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "user enter the firstname in the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user enter the last name in the last name field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user enter the address in the address field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user enter the credit card number in the credit card number field",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user select the credit card type from credit card type dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "user select the expiry month from expiry month dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user select the expiry year from expiry year dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user click the book button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_redirects_to_booking_details_page()"
});
formatter.result({
  "duration": 2000146937,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_firstname_in_the_firstname_field()"
});
formatter.result({
  "duration": 8284998,
  "error_message": "org.openqa.selenium.NoSuchElementException: \nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027tinas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1043:b49c:c39e:602f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 15.5, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 21F79, safari:platformVersion: 12.4, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: A51D9DDA-C7B6-49E1-B244-D391BB1423FE\n*** Element info: {Using\u003did, value\u003dfirst_name}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat Base_cucum.Baseclass.textbox(Baseclass.java:43)\n\tat com.stepdefinition.Stepdefinition.user_enter_the_firstname_in_the_firstname_field(Stepdefinition.java:136)\n\tat ✽.When user enter the firstname in the firstname field(/Users/tina/eclipse-workspace/Cucumber/src/test/java/Featurefile/Login.feature:37)\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_last_name_in_the_last_name_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_address_in_the_address_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_credit_card_number_in_the_credit_card_number_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_credit_card_type_from_credit_card_type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_expiry_month_from_expiry_month_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_select_the_expiry_year_from_expiry_year_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_click_the_book_button()"
});
formatter.result({
  "status": "skipped"
});
});