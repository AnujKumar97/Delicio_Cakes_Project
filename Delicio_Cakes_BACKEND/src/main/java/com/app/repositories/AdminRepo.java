package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entites.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer> {

}
