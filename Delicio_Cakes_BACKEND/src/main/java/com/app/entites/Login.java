package com.app.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="login")
public class Login {
	@Id
	String uid;
	@Column
	String pwd;
	@Column
	String user;
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(String uid, String pwd, String user) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.user = user;
	}
	public String getUid() {
		return uid;
	}
	public void setUid(String uid) {
		this.uid = uid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	
	
	

}
