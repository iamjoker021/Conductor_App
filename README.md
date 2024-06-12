# Conductor App

## Goal:
To enable UPI/Net-Banking transaction in Govt and Private Bus.
- Solve Change issue on Buses
- Support Digital India

## Requirement

### Must Have:
- Authentication using (Moibile No and OTP) / Gmail / Any Valid Auth
- Able to see the List of Bus and Route
- Place the Bus ticket
- Receive the Bus ticket as acknowledgement

### Good to Have:
- Track the Bus on Real-Time
    - All conductor/driver must use this app, and this app GPS can be used to track the Bus. Since Conductor/Driver is always be present on the Bus
- Wallet. The user no need to pay every time. He can place ticket and money will be automatically withdrawn from his wallet
- Bus Pass. There are special passes allowed in buses. The app could include them as well

## Proposed Solution:
Approach 1:
- App that will enable user to login and place the tickets and pay via UPI/Net-Banking.
- Then, they'll receive the ticket and QR code
- If required, the Conductor can scan the QR code/ use a unique Serial No provided in ticket to verify the Ticket authenticity

Approach 2:
- The user can login to the website and place the ticket and pay the money. 
- Once the Conductor scanned the QR code and acknowledged then only transaction successful
- If failed, then the money will be refunded.
- In this approach the Conductoe has to scan the QR to complete the ticket process

## Timeline
- ### First Review: Jun 20, 2024
    - Created backend API with primary functions
    - Create frontend to interact and receive the ticket 

## Tech Stack
Stack" PERN
- P => PostgreSQL (Since Financial transaction involved, we are chossing SQL instead of NoSQL)
- E => Express
- R => React
- N => NodeJS

## App Structure and Functions
- Backend (Handle Ticket generation)
- Frontend (Provide User Interface)

## Actions:
