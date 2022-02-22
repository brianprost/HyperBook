# HyperBook Test Plan & User Guide

Brian Prost, Paul Davison, Marie George, Dushyant Kumar, Prachet Agrawal

HyperBook Application - Test Plan & User Guide

CMSC 495: Current Trends and Projects in Computer Science

Professor Rabiha Kayed

February 1, 2022

<div style="page-break-after: always;"></div>

### Table of Contents

1. [Introduction](#introduction)
2. [Purpose & Objectives](#purpose--objectives)
3. [Description of Test Procedures](#description-of-test-procedures)
    1. [API Testing](#api-testing)
    2. [Integration Testing](#integration-testing)
4. [User's Guide](#users-guide)
    1. [Logging into the HyperBook Application](#logging-into-the-hyperbook-application)
    2. [Accessing user profile page](#accessing-user-profile-page)
    3. [Booking a trip](#booking-a-trip)
    4. [Cancelling a previously booked itinerary](#cancelling-a-previously-booked-itinerary)

<div style="page-break-after: always;"></div>

## Introduction

This document provides a breakdown of the testing procedures for the HyperBook Application along with an initial version of the user guide.


## Purpose & Objectives

The purpose of this document is to detail the three phases of testing for the HyperBook application. These are noted in the following objectives:

- API Testing
- Integration Testing

In addition, a user guide is provided which includes details about the typical use of the HyperBook Application:

- Logging into the HyperBook Application
- Accessing user profile page
- Booking a trip
- TODO: Cancelling a previously booked itinerary


## Description of Test Procedures

#### API Testing

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

#### Integration Testing

The HyperBook Application consists of multiple components including frontend, backend, and database.  These will be tested together to ensure seamless functionality using the following methodology:

- Big Bang Approach: All components of the application will be tested together to ensure interoperability between frontend/backend, and backend/database.


## User's Guide

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

