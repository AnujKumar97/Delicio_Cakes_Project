package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entites.CakeInfo;
import com.app.repositories.CakeRepo;

@Service
public class CakeService {
	@Autowired
	CakeRepo cirepo;
	public List<CakeInfo> getAll()
	{
		return cirepo.findAll();
	}
	
	public CakeInfo save(CakeInfo ci)
	{
		return cirepo.save(ci);
	}

}
