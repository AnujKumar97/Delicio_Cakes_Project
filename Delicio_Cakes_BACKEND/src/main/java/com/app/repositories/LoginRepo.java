package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entites.Login;
@Repository
public interface LoginRepo extends JpaRepository<Login, String> {
	@Query("select l.user from Login l where l.uid= :uid and l.pwd= :pwd")
	public String checkLogin(String uid,String pwd);
	

}

