
-- Create Environment_Type table
CREATE TABLE Environment_Type (
    Id SERIAL PRIMARY KEY,
    Name TEXT NOT NULL,
    Description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_user TEXT DEFAULT current_user
);

-- Insert records into Environment_Type
INSERT INTO Environment_Type (Id, Name, Description, update_user)
VALUES 
    (0, 'All', 'All environments', 'system'),
    (1, 'Production', 'Production environment', 'system'),
    (2, 'Dev', 'Development environment', 'system');

CREATE TABLE CandyMachineAndCollection (
    id SERIAL PRIMARY KEY,
    Env INTEGER NOT NULL,
    env_candimachinename TEXT NOT NULL,
    candimachinename TEXT,
    candimachineeaddress TEXT NOT NULL,
    env_collectionName TEXT NOT NULL,
    collectionName TEXT NOT NULL,
    collectionadress TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_user TEXT DEFAULT current_user
);

-- Add foreign key constraint to CandyMachineAndCollection
ALTER TABLE CandyMachineAndCollection
ADD CONSTRAINT fk_machinecollection FOREIGN KEY (Env) REFERENCES Environment_Type(Id);

-- Ensure the foreign key references the correct table and column
-- 1️⃣ Create ENUM type for NFTStatusTypes
CREATE TYPE NFTStatus AS ENUM (
    'ARRIVING SOON',
    'AVAILABLE',
    'SOLD OUT',
    'Get it Now!',
    'More Details...'
);

-- 2️⃣ Create CollectionItemDetails table using the ENUM
CREATE TABLE CollectionItemDetails (
    id SERIAL PRIMARY KEY,
    CandyMachineAndCollectionId INTEGER NOT NULL,
    collectionurl TEXT NOT NULL,
    collectionSubtitles TEXT,
    collectionDetails TEXT,  
    collectionCandibarValue NUMERIC,
    collectionStatus TEXT NOT NULL,
    isSwappable BOOLEAN NOT NULL DEFAULT false,
    zodiacSign TEXT,
    zodiacYear TEXT,  
    zodiacIcon TEXT,
    Images JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_user TEXT DEFAULT current_user
);

-- Ensure the foreign key references the correct table and column
-- Add foreign key constraint to CollectionItemDetails
ALTER TABLE CollectionItemDetails
ADD CONSTRAINT fk_cid_cmac FOREIGN KEY (CandyMachineAndCollectionId) REFERENCES CandyMachineAndCollection(Id);


CREATE TABLE candibar_candymachine_config (
    Id SERIAL PRIMARY KEY,
    Env INTEGER NOT NULL,
    Name TEXT NOT NULL,
    description TEXT,
    Value TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_user TEXT DEFAULT current_user
);

-- Alter prod_candymachine_config to reference Environment_Type
ALTER TABLE candibar_candymachine_config
ADD CONSTRAINT fk_config_env FOREIGN KEY (Env) REFERENCES Environment_Type(Id);


CREATE TABLE zodiac_readings (
    id SERIAL PRIMARY KEY,
    sign VARCHAR(50) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    reading TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE "public"."zodiac_readings"
ADD CONSTRAINT "zodiac_readings_dur_sign_pkey" UNIQUE ("sign", "duration")