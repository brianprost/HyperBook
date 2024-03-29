
# HyperBook Project Design Plan

Brian Prost, Paul Davison, Marie George, Dushyant Kumar, Prachet Agrawal

HyperBook Application - Project Design Plan

CMSC 495: Current Trends and Projects in Computer Science

Professor Rabiha Kayed

February 8, 2022


### Table of Contents

1. [Introduction](#introduction)
2. [Purpose & Objectives](#purpose--objectives)
3. [Details of Design Plan](#details-of-design-plan)
    1. [Architecture Diagram](#architecture-diagram)
    2. [Entity Relationship Diagram](#entity-relationship-diagram)
    3. [Application Components](#application-components)
    4. [User Interface Design](#user-interface-design)
    5. [Test Cases](#test-cases)

## Introduction

This document provides a breakdown of the project design plan for the HyperBook Application.  The HyperBook Application provides customers with the ability to book an itinerary to use the Hyperloop travel service.  Each itinerary is made up of one or more routes assigned to particular time slot(s).  When the customer chooses a particular itinerary, they can provide payment details to pay and reserve their travel plan.  Once completed, the user can lookup their itinerary to get details about it.


## Purpose & Objectives

The purpose of this document is to provide a detailed specification for the HyperBook Application design including architecture, flowcharts, diagrams, and test cases.  The information contained will be used to guide the development of the application and measure success criteria for the final completed version.


## Details of Design Plan

The HyperBook Application is a single page application (SPA) which includes a frontend and backend.  Frontend components are rendered within user's web browsers, and including login functionality as well as basic account management.  The backend is implemented using API endpoints hosted in the Azure cloud along with an Azure SQL instance.

The specific components used include:

- Frontend
    - Vercel (platform provider)
    - React
    - NextJS
    - react-simple-maps
    - PostCSS & Autoprefixer

- Backend
    - .NET Core 5
    - Azure App Service (cloud service)
    - Azure SQL


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


### Test Cases

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

