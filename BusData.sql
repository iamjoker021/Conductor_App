-- Provide User Access
grant select on all tables in schema bus_details to tom;

-- City Details
CREATE TABLE City (
    City_ID int primary key,
    City_Name varhcar(1000)
);

INSERT INTO City 
VALUES
    (1, 'Chennai');

-- BusDetails
CREATE TABLE BusDetails (
    BusID INT PRIMARY KEY,
    BusName VARCHAR(50),
    Type VARCHAR(50),
    City_ID int,
    FOREIGN KEY (City_ID) REFERENCES City(City_ID)
);

INSERT INTO BusDetails (BusID, BusName, Type)
VALUES
    (1, 'MTC-101', 'Ordinary'),
    (2, 'MTC-102', 'Deluxe'),
    (3, 'MTC-103', 'AC'),
    (4, 'MTC-104', 'Semi-Luxury'),
    (5, 'MTC-105', 'Express');


-- Stop Data
CREATE TABLE Stops (
    StopID INT PRIMARY KEY,
    StopName VARCHAR(100),
    Latitude DECIMAL(10, 6),
    Longitude DECIMAL(10, 6)
);

INSERT INTO Stops (StopID, StopName, Latitude, Longitude)
VALUES
    (1, 'Parrys', 13.0945, 80.2821),
    (2, 'Tambaram', 12.9247, 80.1275),
    (3, 'CMBT', 13.0785, 80.2071),
    (4, 'Velachery', 12.9783, 80.2208),
    (5, 'Airport', 12.9900, 80.1690),
    (6, 'T. Nagar', 13.0324, 80.2300),
    (7, 'Egmore', 13.0839, 80.2590),
    (8, 'Guindy', 13.0077, 80.2202),
    (9, 'Adyar', 13.0064, 80.2575),
    (10, 'Thiruvanmiyur', 12.9860, 80.2597),
    (11, 'Koyambedu', 13.0695, 80.2060),
    (12, 'Anna Nagar', 13.0908, 80.2042);


-- Route Data
CREATE TABLE Routes (
    BusID INT,
    StopID INT,
    Stop_Order INT,
    Fare DECIMAL(8, 2),
    PRIMARY KEY (BusID, Stop_Order),
    FOREIGN KEY (BusID) REFERENCES BusDetails(BusID),
    FOREIGN KEY (StopID) REFERENCES Stops(StopID)
);

INSERT INTO Routes (BusID, StopID, Stop_Order, Fare)
VALUES
    -- MTC-101 (Parrys -> Tambaram)
    (1, 1, 1, 0.00),
    (1, 2, 2, 10.50),
    (1, 3, 3, 15.75),
    (1, 4, 4, 22.00),
    (1, 5, 5, 27.50),
    (1, 6, 6, 30.00),

    -- MTC-102 (CMBT -> Velachery)
    (2, 3, 1, 0.00),
    (2, 4, 2, 15.00),
    (2, 5, 3, 25.50),
    (2, 6, 4, 35.75),
    (2, 1, 5, 40.00),
    (2, 2, 6, 42.50),

    -- MTC-103 (Airport -> T. Nagar)
    (3, 5, 1, 0.00),
    (3, 6, 2, 25.00),
    (3, 7, 3, 40.50),
    (3, 8, 4, 55.75),
    (3, 9, 5, 60.00),
    (3, 10, 6, 65.50),

    -- MTC-104 (Thiruvanmiyur -> Koyambedu)
    (4, 10, 1, 0.00),
    (4, 11, 2, 10.00),
    (4, 12, 3, 20.50),
    (4, 1, 4, 30.75),
    (4, 2, 5, 40.00),
    (4, 3, 6, 50.50),

    -- MTC-105 (Guindy -> Anna Nagar)
    (5, 8, 1, 0.00),
    (5, 9, 2, 12.00),
    (5, 10, 3, 18.50),
    (5, 11, 4, 25.75),
    (5, 12, 5, 30.00),
    (5, 1, 6, 35.50);
