package com.xiaolu.ttl.services;

import com.xiaolu.ttl.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.xiaolu.ttl.repositories.EmployeeRepository;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    public List<Employee> getQuery(String content) {
        String trimContent = content.trim().replaceAll("\\s{2,}", " ");
        return this.employeeRepository.getResultByContent(trimContent);
    }

    public List<Employee> getAllEmployees() {
        return this.employeeRepository.findAll();
    }



}
