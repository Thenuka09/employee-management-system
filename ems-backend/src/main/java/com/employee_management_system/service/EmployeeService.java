package com.employee_management_system.service;

import com.employee_management_system.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);

    List<Employee> getAllEmployees();

    Employee getEmployeeById(Long id);

    boolean deleteEmployee(Long id);

    Employee updateEmployee(Long id, Employee employee);
}
