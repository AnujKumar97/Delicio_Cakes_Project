package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repositories.LoginRepo;

@Service
public class LoginService {
	@Autowired
	LoginRepo lrepo;
	public String checkLogin(String uid,String pwd)
	{
		return lrepo.checkLogin(uid, pwd);
	}

}
