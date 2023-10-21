


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
    
    name varchar(32) NOT NULL,

    PRIMARY KEY(id)
);  /*user type donor, specialist, clinic admin, adopter*/

INSERT INTO role(name) 
VALUES  ('donor'),
        ('specialisy'),
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

CREATE TABLE IF NOT EXISTS donor
(
    id  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    user_id uuid NOT NULL,
    address varchar(256) NOT NULL,
    phone varchar(32) NOT NULL,

    PRIMARY KEY(id)
);