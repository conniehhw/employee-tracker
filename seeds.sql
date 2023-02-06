INSERT INTO department (id, department_name)
VALUES  (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");


INSERT INTO roles (id, title, department_name, salary, department_id)
VALUES  (001, "Sales Lead", "Sales", 100000, 1),
        (002, "Salesperson", "Sales", 80000, 1),
        (003, "Lead Engineer", "Engineering", 150000, 2),
        (004, "Software Engineer", "Engineering", 120000, 2),
        (005, "Account Manager", "Finance", 160000, 3),
        (006, "Accountant", "Finance", 125000, 3),
        (007, "Legal Team Lead", "Legal", 250000, 4),
        (008, "Lawyer", "Legal", 190000, 4);

INSERT INTO employee (id, first_name, last_name, title, department_name, salary, manager_id)
-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "John", "Doe", "Sales Lead", "Sales", 100000, "null", NULL),
        (002, "Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe", 001),
        (003, "Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000, "null", NULL),
        (004, "Kevin","Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriguez", 003),
        (005, "Kunal", "Singh", "Account Manager", "Finance", 160000, 005, NULL),
        (006, "Malia", "Brown", "Accountant", "Finance", 125000, "Kunal Singh", 005),
        (007, "Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, "null", NULL),
        (008, "Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd", 007);