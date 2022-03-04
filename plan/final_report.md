
# HyperBook Final Report

Brian Prost, Paul Davison, Marie George, Dushyant Kumar, Prachet Agrawal

HyperBook Application - Final Report

CMSC 495: Current Trends and Projects in Computer Science

Professor Rabiha Kayed

March 7, 2022


### Table of Contents

1. [Overview](#overview)
    1. [Purpose Statement](#purpose-statement)
    2. [Roles and Contributions](#roles-and-contributions)
    3. [Schedule](#schedule)
2. [Project Plan](#project-plan)
    1. [Input/Processing/Output](#inputprocessingoutput)
    2. [Scenarios](#scenarios)
3. [Requirements Specification](#requirements-specification)
    1. [System Specification](#system-specification)
    2. [Software Requirements](#software-requirements)
    3. [Hardware Requirements](#hardware-requirements)
4. [User's Guide](#users-guide)
    1. [Application Setup](#application-setup)
    2. [Application Tasks](#application-tasks)
        1. [Logging into the HyperBook Application](#logging-into-the-hyperbook-application)
        2. [Accessing user profile page](#accessing-user-profile-page)
        3. [Booking a trip](#booking-a-trip)
        4. [Registering a new user](#registering-a-new-user)
        5. [Cancelling a previously booked itinerary](#cancelling-a-previously-booked-itinerary)
5. [Design and Alternate Designs](#design-and-alternate-designs)
    1. [Architecture Diagram](#architecture-diagram)
    2. [Entity Relationship Diagram](#entity-relationship-diagram)
    3. [API Requirements](#api-requirements)
    4. [User Interface Design](#user-interface-design)
    5. [Alternate Design](#alternate-design)
6. [Test Plan and Results](#test-plan-and-results)
7. [Development History](#development-history)
    1. [Milestones](#milestones)
    2. [Phase 1 Report](#phase-1-report)
    3. [Phase 2 Report](#phase-2-report)
    4. [Phase 3 Report](#phase-3-report)
8. [Conclusion](#conclusion)


## Overview

### Purpose Statement

The HyperBook Application provides customers with the ability to book a trip using the Hyperloop travel service. Each trip is made up of a source and destination city that the customer will travel on during a chosen time slot. When the customer selects a particular trip, they can provide payment details to pay and reserve their travel plans. Once completed, the user can access their saved trips to get more details about it.

### Roles and Contributions

- Brian Prost - Frontend Development, Design Lead
- Paul Davison - Technical Documentation and Reporting
- Marie George - Database Design, Peer Reviews
- Dushyant Kumar - Backend Development
- Prachet Agrawal - Frontend Development

Each member of the Group 5 made substantial contributions in at least one specific area. As Brian had the initial idea for the project, he took on the role of Design Lead by making most of the frontend development decisions. Marie took on the database design and worked on the peer reviews. Paul took on the bulk of the reporting and documentation, and kept everything updated as the project progressed. Prachet supported frontend development and helped with the design. Dushyant worked on backend, including building out the APIs.

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
| 8 | Final Report | 3/7 |


## Project Plan

This document provides a breakdown of the project plan for the HyperBook Application. Throughout the development, we mapped out inputs, processes, and outputs that the application would use, which helped us to build out an API specification. Several scenarios were also built out which detailed example flows in the application that a customer would walk through during typical use.

### Input/Processing/Output

Inputs
- Customer Accounts
- Trips
- Cities
- Routes
- Timeslots
- Payment Information

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
- Application provides user ability to register new accounts

Outputs
- Customer Accounts
- Trips
- Payment Confirmation

### Scenarios

In the following example, a customer follows the steps to successfully book a reservation through the application:

1. Customer starts at the application front page

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/walkthrough1.png" width="800">

2. Customer can login to the page using their account credentials

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/walkthrough2.png" width="800">

3. Customer can select starting and ending destinations that are available

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/walkthrough3.png" width="800">

4. Customer chooses a time slot for the destination from one available

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/walkthrough4.png" width="800">

5. Once a time slot is chosen, customer can input information needed to pay and reserve their trip

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/walkthrough5.png" width="800">


In the next example, a new user registers an account in the application:

1. Customer navigates to login page

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/useraccount1.png" width="800">

2. After clicking teh Register New User options, the user fills out all relevant account information

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/useraccount2.png" width="800">


## Requirements Specification

### System Specification

The application will be a Single-Page Application (SPA) with a frontend web component, backend API components, and database for storage.

### Software Requirements

Software stack:

- ReactJS (frontend)
- .NET Core 5 (backend)
- Azure SQL (database)
- NextJS
- react-simple-maps
- PostCSS & Autoprefixer

### Hardware Requirements

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

For the `HyperBook.App` backend project, you can load and compile using Visual Studio Code with the NuGet and C# extensions installed. You will also need the .NET Core 5 64-bit SDK installed on your operating system.

| Resource | URL |
|-------------|-------------|
| Visual Studio Code: | https://code.visualstudio.com/Download |
| C# Language Instructions: | https://code.visualstudio.com/Docs/languages/csharp |
| NuGet Instructions: | https://docs.microsoft.com/en-us/nuget/install-nuget-client-tools |
| .NET Core 5.0 SDK: | https://dotnet.microsoft.com/en-us/download/dotnet/5.0 |

For the `HyperBook` frontend project, code is loaded directly from the GitHub repo into the Vercel service using GitHub APIs. When the `frontend-production` branch received new commits, a new version is deployed automatically.

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
  3. The user chooses the preferred time window for the trip.
  4. The user will proceed to the [payment process](https://hyper-book.vercel.app/checkout) and reserve the itinerary once payment is confirmed.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss3_book1.png" width="500">

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss3_book2.png" width="500">
  
<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/ss4_payment.png" width="500">

#### Registering a new user

- Users can register a new account by browsing to the link found on the login page

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/guide_register1.png" width="500">

- From here, users can provide information needed to register the account.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/guide_register2.png" width="500">

#### Cancelling a previously booked itinerary

TODO: Will add instructions here once functionality is completed


## Design and Alternate Designs

### Architecture Diagram

High level diagram of application design showing division between the frontend and backend systems.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/arch_diag.png" width="600">

### Entity Relationship Diagram

Diagram detailing the entities used by the application and their relationships to one another.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/er_diag.png" width="600">

### API Requirements

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

During the first week, some alternate design options were evaluated. In the initial project proposal, a Python-based application was planned, with either Django or Flask used for the frontend, and service/database hosting within Amazon Web Services (AWS). After the group was formed, it was determined that most of the team had significant .NET experience and a strong preference for React or Angular.js for frontend components, and these were evaluated for the final development plan. Ultimately, Microsoft Azure was chosen as a hosting provider due to the interoperability with .NET Core and Azure's Microsoft SQL services.


## Test Plan and Results

The HyperBook Application makes use of .NET Core API endpoints hosted in Azure for backend functionality. These will be tested for proper functionality including the following checks:

- GET requests return expected values with correct data types and structures.
- POST requests are validated by the application, and processed correctly to update any relevant data.
- Browser testing to verify the web application loads and displays properly among various browsers.

Specific tests to be performed using the functionality of the frontend are detailed below:

#### Functionality tests

| Tested Function           | Input                      | Expected Output            | Actual Output | Pass? |
|---------------------------|----------------------------|----------------------------|---------------|-------|
| Logging in to application | User, Password             | One success, one failure   | Valid login   |  Yes  |
| Choose travel options     | FromCity, ToCity, Schedule | Valid trip                 | Valid route   |  Yes  |
| Pay and book a trip       | Valid trip, payment info   | Booking confirmed          | ReferenceError |  No   |
| List a user's trips       | Logged in, choose menu     | List of booked trips       | TBD           |  TDB  |
| Cancel a prior trip       | Booked trip                | Cancellation of trip       | TBD           |  TDB  |
| Modify account info       | Address info, phone        | Successful change          | TBD           |  TDB  |
| Create a new user         | User, Password             | Account is created         | TBD           |  TBD  |

#### Browser testing

| Browser | Verified? |
|---------|-----------|
| Firefox |    Yes    |
| Chrome  |    Yes    |
| Edge    |    Yes    |
| Safari  |    Yes    |


## Development History

During the development process, three phases and versions were built out. Each phase had a tentative milestone that was accomplished, with peer reviews and instructor feedback being incorporated to ensure the project met the standards for a minimum viable product (MVP).

### Milestones

Project milestones represent the anticipated work done for each phase, including the final project.

- Phase 1: Design decisions made, some adjustments required. First development build completed.
- Phase 2: Second development build completed.  Finalizing database schema and process flow.
- Phase 3: Fully tested all components including frontend-to-backend, backend-to-database.  Some adjustments for performance, final design decisions made.
- Final: Final project complete.  Documentation updated, report completed, integration testing complete.

### Phase 1 Report

During Phase 1, it was necessary to adjust some aspects of the project as there were limitations in the original design. Given the fact that the HyperLoop train system has not been physically developed yet, some creative license was taken while making decisions about how schedules would work and what the user experience would be like. These decisions helped ensure the first development build was in line with the intent of the original design. 

As the project has progressed, several changes were made to the design plan. In particular, the database schema was modified regarding how the application routes users between cities. For the test plan, an in-depth breakdown of tests to be performed was defined with individual tasks to be validated on the application once each component has been built out. One other modification is to the database software listed in the project plan from MariaDB/MySQL to Azure SQL Server. 

### Phase 2 Report

For Phase 2, we made progress and completed the week’s milestone for the HyperBook Application. We are in the process of finalizing the database schema, with some minor adjustments made to documentation throughout the process. 

In terms of decisions made, we are keeping the application simple, with payment being implemented using a testing credit card which should use a simulated Luhn valid number. As a stretch goal, we could implement a third-party service such as Stripe for payment, or Okta for SSO and account management, however these would take additional effort and time outside the scope of the application’s primary functionality to complete. 

In addition, we are finalizing the booking page so that pricing is dependent on time windows travelled on a particular day, like the way that mass transit systems with open windows of operation. Users will not select a discrete time, instead they will choose a range of times (e.g., Morning, Afternoon, Evening). 

As the project has progressed, some changes were made to documentation. For one, the ER diagram has been updated to match the new database schema. This should represent the final version of the database layout. A few changes have been made to the design of the pages for the booking process. During development and testing, Chrome-based browsers render the city markers in the wrong location, so we will add additional browser testing to the plan. 

### Phase 3 Report

During Phase 3, several bugs were identified and fixed. These addressed some issues with rendering the frontend in different browsers, as well as adjustment to the frame and window elements. Most of these were fixed, with some lingering issues that are being tracked in our Kanban project board. 

Additionally, a few needed API methods have been built out on the backend to accommodate some minor additional functionality. These primarily address user account creation, modifying user account info, and handing destinations during the booking process. Some work remains between frontend and backend, although this will be done within the final week of development. 

As the project has progressed, a minor change was made to the database schema, which will not track departure and arrival times, but instead a window of time for customers to travel (similar to a metro rail or subway system). Account credentials were changed to be stored in a non-reversable SHA-512 hash form, which is more secure than plaintext. New functionality was added to allow users to create a new account, as well as adjust account information. These adjustments should be representative of the final product. 


## Conclusion

Several lessons were learned during development of the HyperBook Application. Communication and collaboration were both key to ensuring that deliverables could be provided on time, and that the project would stay on track. Some modifications to the project plan were made out of necessity given the eight-week time constraint for the class, while ensuring the project still met success criteria.

During week five, a Kanban-style project board was implemented using the GitHub projects feature.  This allowed our group to track individual development tasks and ensure nothing fell through the cracks.  The following screenshot shows the project board tracking these tasks.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/kanban.png" width="800">

### Strengths and Limitations

Major strengths for the HyperBook Application included the use of GitHub for tracking code and documenation, use of external cloud providers for hosting, and collaboration using a Discord server for chat communication. Using two GitHub repositories, the frontend and backend projects could be developed and integrated using GitHub API directly tied to external service providers for automated deployment. Documentation was also maintained using GitHub markdown which provided relatively seamless report generation (including this report). By using cloud service providers, hardware requirements were offloaded allowing the group to focus on software development tasks. Most team members were located in different timezones, so using an asynchronous services like Discord allowed the team to check in as progress was made.

Some features were planned, but could not be completed due to time constraints. These included external services that could be utilized for payment processing (simulated only), and ticket generation for the proposed Hyperloop travel system.

### Future Improvement

Some stretch goals were identified early on, and while time items were completed, not all could be finished. Some of these ideas are detailed below:

- **Functionality:** Application utilizes an external single sign-on (SSO) service for session management such as Okta or PingIdentity
- **Functionality:** Application administrator interface for directly managing database backend entry
- **Stretch goal:** Application generates QR Code for customer to use for ticket processing
- **Stretch goal:** Application charges payment to external payment processor (simulated only)

Other ideas were brain-stormed but ultimately deemed to be outside the scope for the project. With the final version, Group 5 feels confident that we completed the HyperBook Application meeting the standards for this capstone project!
