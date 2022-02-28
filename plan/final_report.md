
# HyperBook Final Report

Brian Prost, Paul Davison, Marie George, Dushyant Kumar, Prachet Agrawal

HyperBook Application - Final Report

CMSC 495: Current Trends and Projects in Computer Science

Professor Rabiha Kayed

March 8, 2022


### Table of Contents

1. [Overview](#overview)
	1. [Purpose Statement](#purpose-statement)
	2. [Roles](#roles)
	3. [Schedule](#schedule)
2. [Project Plan](#project-plan)
	1. [Input/Processing/Output](#input-processing-output)
	2. [Scenarios](#scenarios)
3. [Requirements Specification](#requirements-specification)
	1. [System Specification](#system-specification)
	2. [Software Requirements](#software-requirements)
	3. [Hardware Requirements](#hardware-requirements)
4. [User's Guide](user-s-guide)
	1. [Application Setup](#application-setup)
	2. [Application Tasks](#application-sasks)
5. [Design and Alternate Designs](#design-and-alternate-designs)
    1. [Architecture Diagram](#architecture-diagram)
    2. [Entity Relationship Diagram](#entity-relationship-diagram)
    3. [Application Components](#application-components)
    4. [User Interface Design](#user-interface-design)
	5. [Alternate Design](#alternatedesign)
6. [Test Plan and Results](#test-plan-and-results)
7. [Development History](#development-history)
8. [Conclusions](#conclusions)


## Overview

### Purpose Statement

<UPDATE>
The HyperBoop Application provides customers with the ability to book an itinerary to use the Hyperloop travel service.  Each itinerary is made up of one or more routes assigned to particular time slot(s).  When the customer chooses a particular itinerary, they can provide payment details to pay and reserve their travel plan.  Once completed, the user can lookup their itinerary to get details about it.

### Roles

- Brian Prost - Frontend, Design
- Paul Davison - Database, Technical Documentation
- Marie George - Frontend, Backend
- Dushyant Kumar - Frontend, Backend
- Prachet Agrawal - Backend, Database

<UPDATE>
Summary of individual contributions here

### Schedule

| Week | Deliverable | Due Date |
|:----|:----|:----|
| 1 | Form Groups | 1/18 |
| 2 | Project Plan | 1/25 |
| 3 | User's Guide & Test Plan | 2/1 |
| 4 | Design | 2/8 |
| 5 | Phase 1 Source | 2/15 |
| 6 | Phase 2 Source | 2/22 |
| 7 | Phase 3 Source | 3/1 |
| 8 | Final Report | 3/8 |


## Project Plan

This document provides a breakdown of the project plan for the HyperBook Application.  The HyperBook Application provides customers with the ability to book an itinerary to use the Hyperloop travel service.  Each itinerary is made up of one or more routes assigned to particular time slot(s).  When the customer chooses a particular itinerary, they can provide payment details to pay and reserve their travel plan.  Once completed, the user can look up their itinerary to get details about it.

### Input/Processing/Output

Inputs
- Locations
- Routes
- Time slots
- Itinerary
- Customer Account
- Payment

Processing
- Customer can login to the site
- Customer can save billing address and profile information
- Customer can identify all available routes from a starting location
- Customer can look up a list of time slots for a route
- Application confirms availability for specific time slots
- Customer provides payment to hold an itinerary (simulate only)
- Application confirms payment for itinerary
- Application reserves itinerary for customer
- Application sends email to customer to confirm payment and provide reservation details
- Customer can lookup a booked reservation
- Customer can cancel/reschedule a reserved itinerary
- Application releases a reservation for a cancelled itinerary
- (Stretch Goal) Application generates QR Code for customer to use for check in
- (Stretch Goal) Application charges payment to external payment processor (simulate only)
- (Stretch Goal) Application provides user ability to register new accounts

Outputs
- Customer Account
- Itinerary
- Payment Confirmation

### Scenarios

In the following example, a customer follows the steps to successfully book a reservation through the application:

1. Customer can login to the page using their account credentials

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/main_page.png" width="800">

2. Customer can select a destination that is available

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/destinations.png" width="800">

3. Customer chooses a time slot for the destination from one available

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/timeslots.png" width="800">

4. Once a time slot is chosen, customer can input payment information to pay for and reserve their itinerary

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/payment.png" width="800">

5. After obtaining their itinerary, the customer can reference their reservation

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/reservation_list.png" width="800">




## Requirements Specification

### System Specification

The following items provide details on the software and hardware requirements used by the HyperBook Application.

#### Software Requirements

Software stack:

- ReactJS (frontend)
- .NET Core 5 (backend)
- Azure SQL (database)
- NextJS
- react-simple-maps
- PostCSS & Autoprefixer

#### Hardware Requirements

Cloud-based hosting:

- Azure App Service
- Azure SQL Server
- Vercel Application Hosting




## User's Guide

### Application Setup

| Component | URL |
|-------------|-------------|
| HyperBook Application: |  https://hyper-book.vercel.app/ |
| Frontend code: | https://github.com/brianprost/HyperBook/ |
| Backend code: | https://github.com/thedeeks/HyperBook.App/ |
| Documentation: | https://github.com/brianprost/HyperBook/tree/main/plan |

The files for the project can be downloaded directly from GitHub with the following commands:

```
 git clone https://github.com/thedeeks/HyperBook.App
 git clone https://github.com/brianprost/HyperBook
```

For the `HyperBook.App` backend project, you can load and compile using Visual Studio Code with the NuGet and C# extensions installed. You will also needthe .NET Core 5 64-bit SDK installed on your operating system.

| Resource | URL |
|-------------|-------------|
| Visual Studio Code: | https://code.visualstudio.com/Download |
| C# Language Instructions: | https://code.visualstudio.com/Docs/languages/csharp |
| NuGet Instructions: | https://docs.microsoft.com/en-us/nuget/install-nuget-client-tools |
| .NET Core 5.0 SDK: | https://dotnet.microsoft.com/en-us/download/dotnet/5.0 |

For the `HyperBook` frontend project, code is loaded directly from GitHub into the Vercel service using a GitHub API token tied to the repo. When the `frontend-production` branch received new commits, a new version is deployed automatically.

### Application Tasks

#### Logging into the HyperBook Application

- Users will be provided with credentials to access the HyperBook Application which is demonstrated [here](https://hyper-book.vercel.app/login).

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss1_login.png" width="500">

#### Accessing user profile page
  
- Once logged in, users will have access to their [profile page](https://hyper-book.vercel.app/account) from which they can do several actions:
  1. Add/modify profile settings such as name, contact details, and address.
  2. View saved itineraries that have been booked.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss2_profile.png" width="500">

#### Booking a trip

- From the default home page, users will be presented with a map that includes all [available destinations](https://hyper-book.vercel.app/book) where they can begin to plan their trip.
  1. The user selects the starting city from which they will depart from.
  2. The user selects the destination city to which they will travel to.
  3. The user chooses the preferred available timeslot for each leg of the trip between cities.  This will iterate for each intermediate stop between cities until the destination city is reached.
  4. The user will proceed to the [payment process](https://hyper-book.vercel.app/checkout) and reserve the itinerary once payment is confirmed.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss3_book1.png" width="500">

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss3_book2.png" width="500">
  
<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss4_payment.png" width="500">

#### Cancelling a previously booked itinerary

TODO: Will add instructions here once functionality is completed

#### Registering a new user

TODO: Will add instructions here once functionality is completed


## Design and Alternate Designs

### Architecture Diagram

High level diagram of application design showing division between the frontend and backend systems.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/arch_diag.png" width="600">

### Entity Relationship Diagram

Diagram detailing the entities used by the application and their relationships to one another.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/er_diag.png" width="600">

### Application Components

#### List of API Methods

- login
	- Parameters: email, password
	- Response: Success/Failure Code
		- If Success: user_id, email
		- If Failure: redirect back to login
	- Logic: You have to match the email and password against the user details in the DB. Use SHA-512 with salt for hashing the password and storing in DB.
- get_username
	- Parameters: user_id
	- Response: first_name, last_name
	- Logic: To get the full name and may be other static details about the user to show on the account page of the user.
- get_trips
	- Parameters: user_id
	- Response: list of trips. Each reservation is an object of:
		- trip_id
		- departure_city
		- destination_city
		- price_paid
		- trip_image
			- A side by side image, as seen in the demo
		- date_of_travel
	- Logic: API to get the list of bookings of the specified user arranged in an order. The most recent booking should be first in the list.
- get_cities
	- Parameters: none
	- Response: an object of all operating cities, each of which contains:
		- city_id
		- city_name
		- coordinates [lon, lat]
- get_destinations
	- Parameters: city_id
	- Response: a list of city_id’s that can be traveled to from the city_id passed
- get_pod_schedules
	- Parameters: departure_city_id, destination_city_id
	- Response: an object of three PodSchedules, each of which contains:
		- pod_schedule_id
		- departure_time
		- arrival_time
		- price
	- Logic: With the cities passed, return a list of pod_schedules between the two cities. There will only ever be 3 pod_schedules per valid city itinerary.
- get_account_autofill_info
	- Parameters: user_id
	- Response: object of:
		- name
		- email
		- addressline1
		- addressline2
		- city
		- state
		- zip_code
	- Logic: When we pass in the user_id we will get the account details as mentioned above for that user to autofill in the payment screen.

### User Interface Design

The following diagrams are provided which represent the web frontend of the application, which is how users can interact with the HyperBook Application.

Home Page:

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/hyperbook_ui_home.png" width="800">

Login Page:

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/hyperbook_ui_login.png" width="800">

Booking Pages:

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/hyperbook_ui_booking.png" width="800">

Payment Page:

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/hyperbook_ui_payment.png" width="800">

Reservation Page:

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/hyperbook_ui_reservation.png" width="800">

### Alternate Design

<UPDATE>
To add some notes here about original Python-based project plan.  Adjusted based on team member skills, experience, simplcity with integrating into Azure.


## Test Plan and Results

The HyperBook Application makes use of .NET Core API endpoints hosted in Azure for backend functionality.  These will be tested for proper functionality including the following checks:

- GET requests return expected values with correct data types and structures.
- POST requests are validated by the application, and processed correctly to update any relevant data.

Specific tests to be performed using the functionality of the frontend are detailed below:

| Tested Function           | Input                      | Expected Output            | Actual Output | Pass? |
|---------------------------|----------------------------|----------------------------|---------------|-------|
| Logging in to application | User, Password             | One success, one failure   | TBD           |  TDB  |
| Choose travel options     | FromCity, ToCity, Schedule | Valid trip                 | TBD           |  TDB  |
| Pay and book a trip       | Valid trip, payment info   | Confirmation email, status | TBD           |  TDB  |
| Cancel a prior trip       | Booked trip                | Cancellation of trip       | TBD           |  TDB  |
| Modify account info       | Address info, phone        | Successful change          | TBD           |  TDB  |
| List a user's trips       | Logged in, choose menu     | List of booked trips       | TBD           |  TDB  |


## Development History

<UPDATE>


## Conclusion

<UPDATE>
Including lessons learned, design strengths, limitations and suggestions for future improvement


