
# HyperBook Phase One Report

Brian Prost, Paul Davison, Marie George, Dushyant Kumar, Prachet Agrawal

HyperBook Application - Phase One Report

CMSC 495: Current Trends and Projects in Computer Science

Professor Rabiha Kayed

February 15, 2022


### Table of Contents

1. [Phase One Milestone](#phase-one-Milestone)
2. [Schedule](#schedule)
3. [Milestone](#milestone)
3. [Issues Encountered](#issues-encountered)
    1. [Architecture Diagram](#architecture-diagram)
    2. [Entity Relationship Diagram](#entity-relationship-diagram)
    3. [Application Components](#application-components)
    4. [User Interface Design](#user-interface-design)
    5. [Test Cases](#test-cases)

## Phase One Milestone

The milestone for Week 5 was completed, with an initial example application deployed to the test platforms

- HyperBook Application (non-prod, dev version): https://hyper-book.vercel.app/
- Frontend and Documentation: https://github.com/brianprost/HyperBook/
- Backend API: https://github.com/thedeeks/HyperBook.App/
- API Requirements Document: https://docs.google.com/document/d/1G_6kURhd2jU4Ts_lE3kykty3BGvdLr98HrMD6-adpSg/

The files for the project can be downloaded directly from GitHub with the following commands:

```
 git clone https://github.com/brianprost/HyperBook.git
 git clone https://github.com/thedeeks/HyperBook.App
```


## Schedule

The project schedule is detailed in the table below:

| Week | Deliverable | Due Date |
|:----|:----|:----|
| 2 | Project Plan | 1/25 |
| 3 | User's Guide & Test Plan | 2/1 |
| 4 | Design | 2/8 |
| 5 | Phase 1 Source | 2/15 |
| 6 | Phase 2 Source | 2/22 |
| 7 | Phase 3 Source | 3/1 |
| 8 | Final Report | 3/8 |


## Milestones

Project milestones represent the anticipated work done for each phase, including the final project.

- Phase 1: Design decisions made, some adjustments required. First development build completed.
- Phase 2: Second development build completed.  Finalizing database schema and process flow.
- Phase 3: Fully tested all components including frontend-to-backend, backend-to-database.  Some adjustments for performance, final design decisions made.
- Final: Final project complete.  Documentation updated, report completed, integration testing complete.


### Issues Encountered

During the course of development, it was necessary to adjust some aspects of the project as there were limitations in the original design.  Given the fact that the HyperLoop train system has not been physically developed yet, some creative license was taken while making decisions about how schedules would work and what the user experience would be like.  These decisions helped ensure the first development build was inline with the intent of the original design.


### Modifications

As the project has progressed, several changes were made to the design plan.  In particular, the database schema was modified regarding how the application routes users between cities.  For the test plan, an in-depth breakdown of tests to be performed was defined with individual tasks to be validated on the application once each component has been built out.  One other modification is to the database software listed in the project plan from MariaDB/MySQL to Azure SQL Server.

### Test Plan

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
