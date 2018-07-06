// const salaries = {
//     'John Doe': 10000,
//     'Jonathan Doe': 100,
//     'Celine Adams': 500,
// }

export function calc(employeeList) {
    let total = 0;

    for (let key in employeeList) {
        // const salaryAmount = parseFloat(employeeList[key]);
        const salaryAmount = Number(employeeList[key]);

        if (!isNaN(salaryAmount)) {
            total = total + salaryAmount;
        } else {
            console.warn('Salary amount is NaN', employeeList[key]);
        }

    }

    return total;
}

// console.log(calc(salaries));