# HyperBook Test Plan & User Guide

Title Page


### Table of Contents

<fill in>

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

- Performance testing
- Load testing
- Stress testing
- Scalability testing

## User's Guide

<fill in>

## References

<fill in>
  
