Feature: Hotel Booking In Adactin Application

Scenario Outline: Login functionality

Given user launch the application"https://adactinhotelapp.com"
When user enter "<uname>" in username field
And user enter "<password>" in password field
Then user click on login button

Examples:
|uname|password|

#|tina|trewq|
#|dafne|asdfg|
|tinadafne|qwerfdsa|

Scenario: Select hotel functionality

Given user redirects to  select hotel page
When user select the location in location dropdown
And user select the hotelname in hotelname dropdown
And user select the roomtype from roomtype dropdown
And user select the roomnumber from roomnumber dropdown
Then user enter the datein in the datein field
And user enter the dateout in the dateout field
And user select the adultroom from adult room dropdown
And user select the childroom from child room dropdown
Then user click on the submit button

Scenario: Confirm hotel functionality
Given user redirects to confirm hotel page
When user select the hotel radio button
Then click on the continue button

Scenario: Book hotel functionality
Given user redirects to booking details page
When user enter the firstname in the firstname field
And user enter the last name in the last name field
And user enter the address in the address field
And user enter the credit card number in the credit card number field
Then user select the credit card type from credit card type dropdown
And user select the expiry month from expiry month dropdown
And user select the expiry year from expiry year dropdown
And user enter the cvv number
Then user click the book button



