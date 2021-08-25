const employees = [
    { id: 1, firstName: "John", email: "email@gmail.com", position: "manager" },
    { id: 2, firstName: "John", email: "email@gmail.com", position: "manager" },
    { id: 3, firstName: "John", email: "email@gmail.com", position: "manager" },
    { id: 4, firstName: "John", email: "email@gmail.com", position: "manager" },
];

const getEmployees = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(employees), 700);
    });
};

export { getEmployees };
