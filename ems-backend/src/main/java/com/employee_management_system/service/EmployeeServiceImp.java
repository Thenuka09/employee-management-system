package com.employee_management_system.service;

import com.employee_management_system.entity.EmployeeEntity;
import com.employee_management_system.model.Employee;
import com.employee_management_system.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImp implements EmployeeService{

    //create and object for work with the database
    private EmployeeRepository employeeRepository;

    public EmployeeServiceImp(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();

        //return Employee Entity as list of employee
        List<Employee> employees = employeeEntities.stream()
                .map(employeeEntity -> new Employee(
                        employeeEntity.getId(),
                        employeeEntity.getName(),
                        employeeEntity.getEmail(),
                        employeeEntity.getMobile(),
                        employeeEntity.getAddress(),
                        employeeEntity.getDob(),
                        employeeEntity.getDesignation(),
                        employeeEntity.getDepartment(),
                        employeeEntity.getJoin_date()
                )).collect(Collectors.toList());

        return employees;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        EmployeeEntity employee = employeeRepository.findById(id).get();
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {

        //get the specific employee from the database
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();

        //update the employee
        employeeEntity.setName(employee.getName());
        employeeEntity.setEmail(employee.getEmail());
        employeeEntity.setMobile(employee.getMobile());
        employeeEntity.setAddress(employee.getAddress());
        employeeEntity.setDob(employee.getDob());
        employeeEntity.setDesignation(employee.getDesignation());
        employeeEntity.setDepartment(employee.getDepartment());
        employeeEntity.setJoin_date(employee.getJoin_date());

        //save the updated employee to the database
        employeeRepository.save(employeeEntity);
        return employee;
    }
}
