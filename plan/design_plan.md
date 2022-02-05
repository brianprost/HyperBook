
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
    1. [Application Components](#application-components)
    2. [Data Flow](#data-flow)
    3. [User Interface Design](#user-interface-design)
4. [Supporting Design Information](#supporting-design-information)
    1. [Test Cases](#test-cases)
    2. [Performance Estimates](#performance-estimates)

## Introduction

This document provides a breakdown of the project design plan for the HyperBook Application.  The HyperBoop Application provides customers with the ability to book an itinerary to use the Hyperloop travel service.  Each itinerary is made up of one or more routes assigned to particular time slot(s).  When the customer chooses a particular itinerary, they can provide payment details to pay and reserve their travel plan.  Once completed, the user can lookup their itinerary to get details about it.


## Purpose & Objectives

The purpose of this document is to provide a detailed specification for the HyperBook Application design including architecture, flowcharts, diagrams, and test cases.  The information contained will be used to guide the development of the application and measure success criteria for the final completed version.


## Details of Design Plan

High level diagram of application design showing division between the frontend and backend systems.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/arch_diag.png" width="600">


#### Entity Relationship Diagram

Diagram detailing the entities used by the application and their relationships to one another.

<img src="https://raw.githubusercontent.com/brianprost/HyperBook/main/plan/er_diag.png" width="600">


#### Application Components

##### List of API Methods

- login
	- Parameters: email, password
	- Response: Success/Failure Code
		- If Success: user_id, email
	- Logic: You have to match the email and password against the user details in the DB. Use SHA-512 with salt for hashing the password and storing in DB.
- get_username
	- Parameters: user_id
	- Response: first_name, last_name
	- Logic: To get the full name and may be other static details about the user to show on the account page of the user.
- get_bookings
	- Parameters: user_id
	- Response: list of bookings. Each booking is an object(Name, To, From, DateTime, Placeholder Image)
	- Logic: API to get the list of bookings of the specified user arranged in an order. The most recent booking should be first in the list.
- get_destinations
	- Parameters: none
	- Response: list of all destinations. Each destination is an object(destination_id, name)
- get_valid_destinations
	- Parameters: destination_id
	- Response: List of valid destination that the user can travel to from the specified destination
- get_itinerary
	- Parameters: From destination_id, To destination_id
	- Response: All possible itineraries for the above mentioned destinations. Each itinerary is an object(Label, Time, Price)
	- Logic: We will pass the from & to destinations selected by the user to get the itineraries(time & price) for the user to select.
- get_account_info
	- Parameters: user_id
	- Response: first_name, last_name, email, address_line, city, state, zip_code
	- Logic: When we pass in the user_id we will get the account details as mentioned above for that user to autofill in the payment screen.
- get_states
	- Parameters: none
	- Response: list of all states in the US
	- Logic: This to populate the dropdown of the state field in the payment screen. This will return all US states.


#### Data Flow

Data structures, data file structures, input formats, output formats?

<ADD_DATA_FLOW_DIAGRAM_HERE>


#### User Interface Design

Diagram of interface.

<ADD_INTERFACE_DESIGN_HERE>


## Supporting Design Information

#### Test Cases

Details here.

<ADD_TEST_CASES_HERE>


#### Performance Estimates

Details here.

<ADD_PERFORMANCE_ESTIMATE_HERE>
