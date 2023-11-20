
DROP EXTENSION IF EXISTS "uuid-ossp" CASCADE;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


/*just general lol*/
/*delete later*/
CREATE TABLE IF NOT EXISTS "user" 
(
    id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    name    varchar(32) NOT NULL,
    email   varchar(32) NOT NULL,
    dob     TIMESTAMP NOT NULL,
    password varchar(256) NOT NULL,

    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS "user_session" 
(
    id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    user_id uuid NOT NULL,
    token   varchar(256) NOT NULL,
    expires TIMESTAMP NOT NULL,

    PRIMARY KEY(id)
);

/*Creates roles*/
CREATE TABLE IF NOT EXISTS role
(
    id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
 /* or  SERIAL PRIMARY KEY DEFAULT */,   
    name varchar(32) NOT NULL,

    PRIMARY KEY(id)
);  /*user type donor, specialist, clinic admin, adopter*/

INSERT INTO role(name) 
VALUES  ('donor'),
        ('specialist'),
        ('clinic admin'),
        ('adopter');
;

/*user and their role*/
CREATE TABLE IF NOT EXISTS user_role
(
    id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    user_id uuid NOT NULL,
    role_id uuid NOT NULL,

    PRIMARY KEY(id)
);

/*sample types : sperm, eggs, child */
CREATE TABLE IF NOT EXISTS sample_type
(
    id uuid DEFAULT uuid_generate_v4(),
    sample_type_id UUID NOT NULL,

    name varchar(32) NOT NULL,
    PRIMARY KEY(id),
    
)

/*Update sample type table*/




/*display samples table*/
CREATE TABLE IF NOT EXISTS samples
(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    sample

)

/*donor table*/
CREATE TABLE IF NOT EXISTS donor
(
    id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    donor_id uuid NOT NULL,
    address varchar(256) NOT NULL,
    phone varchar(32) NOT NULL,  /*assume +91 for now*/
    first_name varchar(32) NOT NULL,
    last_name varchar(32) NOT NULL,
    blood_group varchar(5) NOT NULL,  /*gonna need custom enum bruv*/
    weight int NOT NULL,  /*decimal??*/
    aadhar_number INT(12) NOT NULL,  /*pakka indianized lessgoo*/
    

    PRIMARY KEY(id)
); /*table for samples and connect it*/

/*adopter table*/



/*table connecting adopter nd preferred donors*/

/*clinic*/
CREATE TABLE IF NOT EXISTS clinic
(
    id UUID DEFAULT uuid_generate_v4(),

    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

/*clinic admin*/
