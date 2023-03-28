const employee = {
    name: "Lily",
    streetAddress: "97 Street",
};

function updateEmployeeWithKeyAndValue () {
    return {
        ...employee,
        ["name"]: "Sam",
        ["streetAddress"]: "11 Broadway",
    };
}

const employeeUpdatedAddress = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.streetAddress = "12 Broadway";
    return employee;
  }

const destructiveChangeAddress = destructivelyUpdateEmployeeWithKeyAndValue( employee, "streetAddress", "12 Broadway");

beforeEach(function () {
    for (const key in employee) {
        delete employee [key];
    }
    employee.name ='Sam';
});

const newEmployee = [...employee];
function deleteFromEmployeeByKey () {
    return {
        newEmployee,
        delete : employee["name"],
    }
};

const copyOfNewEmployee = deleteFromEmployeeWithKey(employee, "name");

beforeEach(function () {
    for (const key in employee) {
        delete employee [key];
    }
    employee.name ='Sam';
});

function destructivelyDeleteFromEmployeeByKey() {
   delete employee["name"];
   return employee;
};

let newEmployeeName = destructivelyDeleteFromEmployeeByKey(employee, "name");
