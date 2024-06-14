# Conductor App

## Goal:
To enable UPI/Net-Banking transaction in Govt and Private Bus.
- Solve Change issue on Buses
- Support Digital India

## Vision
I wanna build a Conductor app. 
Below are expected functionalities:

User End:
1. User will be able to login to webpage/PWA using (Mobile.No and OTP) or Email or (Any Valid Auth method). For now, let first do via Google SSO
2. The User will be able to place From and To. 
3. User able to Place No. of tikcets. Click to Proceed
4. Then, he will be rediredcted to Payment options like G-pay, Net-Bank etc,,
5. After Payement he will receive the QR code, unique serial no. and ticket details in his mobile on the website. The ticket is valid for 1 hour
6. The user payment came to a wallent for On-Hold. After Conductor scan QR, then only the ticket process is completed. Else ticket process is not completed and the money will be refunded.
7. Any-time is future user will be able to login and view his historical Tickets List and Active Lists. So that if conductor asks he can show the Ticket and QR

Conductor End:
1. Conductor can open the website using his login which is Conductor Role.
2. He can scan the QR code for acknowlegement.
3. Post successful scan he will receive the verification. And the ticket process is complete

I am planning to Build this app via PERN stack

## Requirement

### Must Have:
- Authentication using (Moibile No and OTP) / Gmail / Any Valid Auth
- Able to see the List of Bus and Route
- Place the Bus ticket
- Receive the Bus ticket as acknowledgement

### Good to Have:
- Scan the QR in the Bus, to auto-get the BusNumber, so user only need to chose the From and To
- Track the Bus on Real-Time
    - All conductor/driver must use this app, and this app GPS can be used to track the Bus. Since Conductor/Driver is always be present on the Bus
- Wallet. The user no need to pay every time. He can place ticket and money will be automatically withdrawn from his wallet
- Bus Pass. There are special passes allowed in buses. The app could include them as well

## Proposed Solution:
Approach 1:
- The user can login to the website and place the ticket and pay the money. 
- Once the Conductor scanned the QR code and acknowledged then only transaction successful
- If failed, then the money will be refunded.
- In this approach the Conductor has to scan the QR to complete the ticket process

Approach 2:
- App that will enable user to login and place the tickets and pay via UPI/Net-Banking.
- Then, they'll receive the ticket and QR code
- If required, the Conductor can scan the QR code/ use a unique Serial No provided in ticket to verify the Ticket authenticity

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
- Create Database with necessary data
- Backend (Handle Ticket generation)
- Frontend (Provide User Interface)

## Actions:
- [x] Create Postgres DB with BusDetails Data
- [x] Create Express App and listen to Port
- [x] Connect to DB
- Create Backend with Must Have APIs (ChatGPT helped)
    ### User Authentication API
    - [ ] Endpoint for user registration (if required).
    - [ ] Endpoint for user login using Google SSO.
    - [ ] Endpoint to generate and send OTP for mobile number authentication.
    - [ ] Endpoint to verify OTP.
    - [ ] Endpoint for user logout.

    ### Bus Route Details API
    - [x] Get List of City
    - [x] Endpoint to get List of Bus for the City
    - [x] Endpoint to get Route of Bus and Fare by BusNumber

    ### Ticket Booking API
    - [ ] Endpoint to accept booking details (From, To, Number of Tickets).
    - [ ] Endpoint to calculate ticket fare.
    - [ ] Endpoint to generate QR code for the ticket.
    - [ ] Endpoint to handle payment options (G-pay, Net-Bank, etc.).
    - [ ] Endpoint to mark the ticket as on-hold after successful payment.
    - [ ] Endpoint to send ticket details to the user via SMS or email.

    ### Wallet API
    - [ ] Endpoint to manage user wallet balance.
    - [ ] Endpoint to deduct money from the wallet for ticket booking.
    - [ ] Endpoint to refund money to the wallet if the ticket process is not completed.

    ### Ticket Management API
    - [ ] Endpoint to retrieve user's historical tickets.
    - [ ] Endpoint to retrieve active tickets.
    - [ ] Endpoint to mark a ticket as used (when scanned by conductor).
    - [ ] Endpoint to cancel a ticket and refund money.

    ### Conductor API
    - [ ] Endpoint for conductor login.
    - [ ] Endpoint for conductor to scan QR code for ticket verification.
    - [ ] Endpoint to validate the scanned QR code and mark the ticket as used.

    ### Miscellaneous APIs
    - [ ] Endpoint for handling errors and exceptions.
    - [ ] Endpoint for fetching system status or configuration details.

- Create Frontend
    ### Build User Bus Ticket Book pages
    - [x] Page to choose City
    - [x] Page to choose BusNo
    - [x] Page to choose FROM, TO and NumberOfTickets

## My Activities

<details>
    <summary>Jun 11</summary>
    <ul>
        <li>Fixing the Timeline with FIrst Review on Jun 20</li>
        <li>Creating the README file</li>
        <li>Describing the Project</li>
    </ul>
</details>

<details>
    <summary>Jun 12</summary>
    <ul>
        <li>Visualizing the Solution</li>
        <li>Asking ChatGPT for list of APIs for backend</li>
        <li>Created Bus Route Data on Postgres</li>
    </ul>
</details>
<details>
    <summary>Jun 13</summary>
    <ul>
        <li>Create React App setup</li>
        <li>Created City Choose Page</li>
        <li>Created Bus Number Choose Page</li>
    </ul>
</details>