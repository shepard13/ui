const employees = [
    { id: 1, name: "John", surname: "Hey", email: "email@gmail.com", age: 20 },
    { id: 2, name: "John", surname: "Hey", email: "email@gmail.com", age: 19 },
    { id: 3, name: "John", surname: "Hey", email: "email@gmail.com", age: 35 },
    { id: 4, name: "John", surname: "Hey", email: "email@gmail.com", age: 40 },
];

const getEmployees = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(employees), 700);
    });
};

export { getEmployees };
