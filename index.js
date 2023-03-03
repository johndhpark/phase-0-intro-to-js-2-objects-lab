// Write your solution in this file!

const employee = { name: "Same" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
	const updated = { ...employee };
	updated[key] = value;

	return updated;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
	employee[key] = value;

	return employee;
}

function deleteFromEmployeeByKey(employee, key) {
	const deleted = { ...employee };
	delete deleted[key];

	return deleted;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
	delete employee[key];

	return employee;
}
