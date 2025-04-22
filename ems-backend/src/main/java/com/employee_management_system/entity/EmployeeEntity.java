package com.employee_management_system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String mobile;
    private String address;
    private String dob;
    private String designation;
    private String department;
    private String join_date;

    public EmployeeEntity(){

    }

    public EmployeeEntity(long id, String name, String email, String mobile, String address, String dob, String designation, String department, String join_date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.dob = dob;
        this.designation = designation;
        this.department = department;
        this.join_date = join_date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getJoin_date() {
        return join_date;
    }

    public void setJoin_date(String join_date) {
        this.join_date = join_date;
    }
}
