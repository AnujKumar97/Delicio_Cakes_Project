package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entites.CakeInfo;

@Repository
public interface CakeRepo extends JpaRepository<CakeInfo, Integer> {
	

}
