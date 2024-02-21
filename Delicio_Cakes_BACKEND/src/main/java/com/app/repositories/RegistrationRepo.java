package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entites.Registration;
@Repository

public interface RegistrationRepo extends JpaRepository<Registration, Integer> {
	
	@Query("select l from Registration l where l.email= :email and l.password= :password")
	public Registration check(String email,String password);
	
	
}
