-- Drops the sample_db if it exists currently --
DROP DATABASE IF EXISTS companyEmployee_db;
-- Creates the companyEmployee_db database --
CREATE DATABASE companyEmployee_db;

-- Use companyEmployee_db --
USE companyEmployee_db;


-- Creates the table "department" within companyEmployee_db --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
    department_name VARCHAR(30), -- Makes a string column called "departmentName" which cannot contain null --
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INT NOT NULL,
    title VARCHAR(30),
    department_name VARCHAR(30),
    salary DECIMAL,
    -- role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee;

-- See database in use --
-- SELECT DATABASE();