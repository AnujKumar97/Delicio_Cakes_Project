	package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entites.CakeInfo;
import com.app.entites.CustomerOrders;
import com.app.services.CustomerOrdersService;


@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class CustomerOrdersController {
	
	@Autowired
	CustomerOrdersService csoservice;
	
	@GetMapping("/CustomerOrder")
	public List<CustomerOrders> getAll()
	{
		return csoservice.getAll();
	}
	
	@PostMapping("/placeorders/{customerId}/{cakeId}")
	public boolean save(@PathVariable("customerId") int customerId, @PathVariable("cakeId") int cakeId)
	{
		return csoservice.save(customerId, cakeId);
	}


}
