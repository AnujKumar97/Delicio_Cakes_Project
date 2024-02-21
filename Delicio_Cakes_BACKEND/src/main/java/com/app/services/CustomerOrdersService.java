package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entites.CakeInfo;
import com.app.entites.CustomerOrders;
import com.app.entites.Registration;
import com.app.repositories.CakeRepo;
import com.app.repositories.CustomerOrdersRepo;
import com.app.repositories.RegistrationRepo;
@Service
public class CustomerOrdersService {
	
	@Autowired
	CustomerOrdersRepo csorepo;
	
	@Autowired
	CakeRepo cakeRepo;
	
	@Autowired
	RegistrationRepo regRepo;
	
	public List<CustomerOrders> getAll()
	{
		return csorepo.findAll();
	}
	
	public boolean save(int customerId, int cakeId) 
	{
		boolean send = false;
		Registration customer = regRepo.findById(customerId).get();
		CakeInfo cake = cakeRepo.findById(cakeId).get();
		customer.addCake(cake);
		CustomerOrders co = new CustomerOrders(cakeId, customerId);
		
	 try {
		regRepo.save(customer);
		csorepo.save(co);
		send = true;
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
		
		return send;
	}

}
