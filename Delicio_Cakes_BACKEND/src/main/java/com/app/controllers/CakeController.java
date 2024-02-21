package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entites.CakeInfo;
import com.app.services.CakeService;

@RestController
@CrossOrigin(origins ="http://localhost:3000")

public class CakeController {


	@Autowired
	CakeService cservice;
	
	@GetMapping("/cakedata")
	public List<CakeInfo> getAll()
	{
		return cservice.getAll();
	}

	@PostMapping("/addcakes")
	public CakeInfo save(@RequestBody CakeInfo ci)
	{
		System.out.println(ci);
		return cservice.save(ci);
	}
}
