INSERT INTO department (id, department_name)
VALUES  (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");


INSERT INTO roles (id, title, salary, department_id)
VALUES  (001, "Sales Lead", 100000, 1),
        (002, "Salesperson", 80000, 1),
        (003, "Lead Engineer", 150000, 2),
        (004, "Software Engineer", 120000, 2),
        (005, "Account Manager", 160000, 3),
        (006, "Accountant", 125000, 3),
        (007, "Legal Team Lead", 250000, 4),
        (008, "Lawyer", 190000, 4);


INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES (001, "John", "Doe", 1, NULL),
        (002, "Mike", "Chan", 2, 001),
        (003, "Ashley", "Rodriguez", 3, NULL),
        (004, "Kevin","Tupik", 4, 003),
        (005, "Kunal", "Singh", 5, NULL),
        (006, "Malia", "Brown", 6, 005),
        (007, "Sarah", "Lourd", 7, NULL),
        (008, "Tom", "Allen", 8, 007);


