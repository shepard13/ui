const employees = [
    { firstName: "John", email: "email@gmail.com", position: "manager" },
    { firstName: "John", email: "email@gmail.com", position: "manager" },
    { firstName: "John", email: "email@gmail.com", position: "manager" },
    { firstName: "John", email: "email@gmail.com", position: "manager" },
];

const getEmployees = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(employees), 700);
    });
};

const setEmployees = (data) => {
    employees.push(data);
};

export { getEmployees, setEmployees };
