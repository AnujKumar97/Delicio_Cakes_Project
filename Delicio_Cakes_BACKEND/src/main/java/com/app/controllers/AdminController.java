package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entites.Admin;
import com.app.services.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class AdminController {

	@Autowired
	AdminService aservice;
	
	@PostMapping("/adminData")
	public Admin save(@RequestBody Admin ad)
	{
		return aservice.save(ad);
	}
}
