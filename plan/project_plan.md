
# HyperBook Project Plan

## Requirements Specification

The following documentation provides an overview of the HyperBook Application and details about the requirements specification.

### What is this project supposed to do? What is the input, the process, and the output?

The HyperBoop Application provides customers with the ability to book an itinerary to use the Hyperloop travel service.  Each itinerary is made up of one or more routes assigned to particular time slot(s).  When the customer chooses a particular itinerary, they can provide payment details to pay and reserve their travel plan.  Once completed, the user can lookup their itinerary to get details about it.

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


## System Specification

The following items provide details on the software and hardware requirements used by the HyperBook Application.

### Software Requirements

Software stack:

- ReactJS (frontend)
- .NET Core (backend)
- Azure SQL Server (database)


### Hardware Requirements

Cloud-based hosting:

- Azure App Service (free student account)


# Roles

- Brian Prost - Frontend, Design
- Paul Davison - Database, Technical Documentation
- Marie George - Frontend, Backend
- Dushyant Kumar - Frontend, Backend
- Prachet Agrawal - Backend, Database


# Schedule

| Week | Deliverable | Due Date |
|:----|:----|:----|
| 2 | Project Plan | 1/25 |
| 3 | User's Guide & Test Plan | 2/1 |
| 4 | Design | 2/8 |
| 5 | Phase 1 Source | 2/15 |
| 6 | Phase 2 Source | 2/22 |
| 7 | Phase 3 Source | 3/1 |
| 8 | Final Report | 3/8 |
