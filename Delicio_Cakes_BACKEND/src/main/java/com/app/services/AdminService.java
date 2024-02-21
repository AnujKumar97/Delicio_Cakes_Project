package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entites.Admin;
import com.app.repositories.AdminRepo;

@Service
public class AdminService {
	@Autowired
	AdminRepo arepo;
	
	public Admin save(Admin ad)
	{
		return arepo.save(ad);
	}
	
	
}
