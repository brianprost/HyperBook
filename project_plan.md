
# Requirements Specification

The following item provides details about the requirements specification and an overview of the HyperBook Application.

### What is this project supposed to do? What is the input, the process, and the output?

The HyperLoop application provides customers with the ability to book an itinerary to use the Hyperloop travel service.  Each itinerary is made up of one or more routes assigned to particular timeslot(s).  When the customer chooses a particular itinerary, they can provide payment details to pay and reserve their travel plan.  Once completed, the user can lookup their itinerary to get details about it.

Inputs
- Locations
- Routes
- Timeslots
- Itinerary
- Customer Account
- Payment


Processing
- Customer can login to the site
- Customer can save billing address and profile information
- Customer can identify all available routes from a starting location
- Customer can look up a list of timeslots for a route
- Application confirms availability for specific timeslots
- Customer provides payment to hold an itinerary
- Application confirms payment for itinerary
- Application reserves itinerary for customer
- Application sends email to customer to confirm payment and provide reservation details
- Customer can lookup a booked reservation


Outputs
- Itinerary
- Payment Confirmation

### Scenarios

In the following example, a customer follows the steps to successfully book a reservation through the applicaiton:

1. Customer can login to the page using their account credentials


2. Customer can select a destination that is available


3. Customer chooses a timeslot for the destination from one available


4. Once a timeslot is chosen, customer can input payment information to pay for and reserve their itinerary


5. After obtaining their itinerary, the customer can reference their reservation



# System Specification

The following items provide details on the software and hardware requirements used by teh HyperBook Application.

### Software Requirements

Software stack:

- ReactJS (frontend)
- .NET Core (backend)
- MariaDB/MySQL (database)

### Hardware Requirements

Cloud-based hosting:

- Azure App Service (free student account)


# Roles

- Brian Prost - Frontend, design
- Paul Davison - Database, technical documentation
- Marie George - Backend
- Dushyant Kumar - Backend
- Prachet Agrawal - Frontend


# Schedule

### Week 2

Project plan completed (due by 1/25)

### Week 3

User's Guide & Test Plan completed (due by 2/1)

### Week 4

Design completed (due by 2/8)

### Week 5

Phase 1 Source completed (due by 2/15)

### Week 6

Phase 2 Source completed (due by 2/22)

### Week 7

Phase 3 Source completed (due by 3/1)

### Week 8

Final Report completed (due by 3/8)

