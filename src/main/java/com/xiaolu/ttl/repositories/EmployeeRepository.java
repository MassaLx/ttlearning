package com.xiaolu.ttl.repositories;

import com.xiaolu.ttl.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {


//    List<Employee> findAll();

    @Query(value = "select * from ttl_consultants t where " +
            "concat( t.firstName, ' ', t.lastName ) like %:content% or " +
            "concat( t.lastName, ' ', t.firstName ) like %:content% or " +
            "t.lastname like %:content% or " +
            "t.firstname like %:content% or " +
            "t.position like %:content% or " +
            "t.degree1 like %:content% or " +
            "t.degree2 like %:content% or " +
            "t.degree3 like %:content% or " +
            "t.specialist like %:content% or " +
            "t.fields like %:content% or " +
            "t.expertise like %:content% or " +
            "t.interests like %:content%", nativeQuery = true)
    List<Employee> getResultByContent(@Param("content") String content);

//    Employee save(Employee employee);

}
