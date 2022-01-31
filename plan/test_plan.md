# HyperBook Test Plan & User Guide

Brian Prost, Paul Davison, Marie George, Dushyant Kumar, Prachet Agrawal

HyperBook Application - Test Plan & User Guide

CMSC 495: Current Trends and Projects in Computer Science

Professor Rabiha Kayed

February 1, 2022


### Table of Contents

[fill in]


## Introduction

This document provides a breakdown of the testing procedures for the HyperBook Application along with an initial version of the user guide.


## Purpose & Objectives

The purpose of this document is to detail the three phases of testing for the HyperBook application. These are noted in the following objectives:

- API Testing
- Integration Testing
- System Testing

In addition, a user guide is provided which includes details about the typical use of the HyperBook Application:

- Logging into the HyperBook Application
- Searching for available travel destinations
- Booking an itinerary
- Cancelling a previously booked itinerary


## Description of Test Procedures

### API Testing

The HyperBook Application makes use of .NET Core API endpoints hosted in Azure for backend functionality.  These will be tested for proper functionality including the following checks:

- GET requests return expected values with correct data types and structures.
- POST requests are validated by the application, and processed correctly to update any relevant data.


### Integration Testing

The HyperBook Application consists of multiple components including frontend, backend, and database.  These will be tested together to ensure seamless functionality using the following methodology:

- Big Bang Approach: All components of the application will be tested together to ensure interoperability between frontend/backend, and backend/database.


### System Testing

Once built out, the HyperBook application will be deployed fully to the relevant Azure services.  System testing will include the following checks:

- Load testing: Measuring performance of the application under typical conditions, e.g., multiple users performing various actions.
- Stress testing: Identifying upper performance limits of the application, e.g., identifying application behaviour under excessive use.
- Scalability testing: Testing the ability of the application to scale with additional load, e.g., determining that the portal can handle multiple users at the same time.


## User's Guide

#### Logging into the HyperBook Application

- Users will be provided with credentials to access the HyperBook Application which is demonstrated [here](https://hyperloop-booking-demo.vercel.app/#login).

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/ss1_login.png" width="500">

#### Accessing profile page
  
- Once logged in, users will have access to their [profile page](https://hyperloop-booking-demo.vercel.app/#account-bookings) from which they can do several actions:
  1. Add/modify profile settings such as name, contact details, and address.
  2. View saved itineraries that have been booked.

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/ss2_profile.png" width="500">

#### Booking a trip

- From the default home page, users will be presented with a map that includes all [available destinations](https://hyperloop-booking-demo.vercel.app/#book) where they can begin to plan their trip.
  1. The user selects the starting city from which they will depart from.
  2. The user selects the destination city to which they will travel to.
  3. The user chooses the preferred available timeslot for each leg of the trip between cities.  This will iterate for each intermediate stop between cities until the destination city is reached.
  4. The user will proceed to the [payment process](https://hyperloop-booking-demo.vercel.app/#checkout) and reserve the itinerary once payment is confirmed.

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/ss3_book1.png" width="500">

<img src="https://github.com/brianprost/HyperBook/blob/main/plan/ss3_book2.png" width="500">
  
<img src="https://github.com/brianprost/HyperBook/blob/main/plan/ss4_payment.png" width="500">

