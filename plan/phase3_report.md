
# HyperBook Phase Three Report

Brian Prost, Paul Davison, Marie George, Dushyant Kumar, Prachet Agrawal

HyperBook Application - Phase Three Report

CMSC 495: Current Trends and Projects in Computer Science

Professor Rabiha Kayed

March 1, 2022


### Table of Contents

1. [Phase Three Milestone](#phase-three-milestone)
2. [Milestones](#milestones)
3. [Schedule](#schedule)
4. [Report](#report)
    1. [Modifications](#modifications)
    2. [Test Plan](#test-plan)

## Phase Three Milestone

The milestone for Week 7 was completed, with most development work going into minor feature additions and bug fixes.  In addition, testing was performed in accordance with the test plan.

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

## Milestones

Project milestones represent the anticipated work done for each phase, including the final project.

- Phase 1: Design decisions made, some adjustments required. First development build completed.
- Phase 2: Second development build completed.  Finalizing database schema and process flow.
- Phase 3: Fully tested all components including frontend-to-backend, backend-to-database.  Some adjustments for performance, final design decisions made.
- Final: Final project complete.  Documentation updated, report completed, integration testing complete.


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


## Report

During Phase Three of development, several bugs were identified and fixed.  These addressed some issues with rendering the frontend in different browsers, as well as adjustment to the frame and window elements.  Most of these were fixed, with some lingering issues that are being tracked in our Kanban project board.  Additionally, a few needed API methods have been built out on the backend to accomodate some minor additional functionality.  These primarily address user account creation, modifying user account info, and handing destinations during the booking process.  Some work still remains between frontend and backend, although this will be done within the final week of development.

### Modifications

As the project has progressed, a minor change was made to the database schema, which will not track departure and arrival times, but instead a window of time for customers to travel (similar to a metro rail or subway system).  Account credentials were changed to be stored in a non-reversable SHA-512 hash form, which is more secure than plaintext.  New functionality was added to allow users to create a new account, as well as adjust account information.  These adjustments should be representative of the final product.

### Test Plan

The HyperBook Application makes use of .NET Core API endpoints hosted in Azure for backend functionality.  These will be tested for proper functionality including the following checks:

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


