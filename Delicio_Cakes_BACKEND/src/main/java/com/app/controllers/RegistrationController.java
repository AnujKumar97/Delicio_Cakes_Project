package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entites.Registration;
import com.app.services.RegistrationService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class RegistrationController {
	
	@Autowired
	RegistrationService rservice;
	
	@GetMapping("/GetData")
	public List<Registration> getAll()
	{
		return rservice.getAll();
	}

	@PostMapping("/Register")
	public Registration save(@RequestBody Registration rs)
	
	{
		System.out.println(rs);
		return rservice.save(rs);
	}
	
	@GetMapping("/check")
	public String check(@RequestParam("email") String email, @RequestParam("password") String password)
	{
		return rservice.check(email, password);
	}
//	@GetMapping("/getone")
//	public Registration getone(@RequestParam("Reg_Id")int id)
//	
//	{
//		return rservice.getOne(id);
//	}
}
