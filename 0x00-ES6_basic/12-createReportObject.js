export default function createReportObject(employeesList) {
  const allEmployees = {};
  
  // Loop through each department and copy employees
  for (const [departmentName, employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = [...employees];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Returns the number of departments
    },
  };
}
