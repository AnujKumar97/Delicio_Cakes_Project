package com.app.entites;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="rrg")
public class Registration {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int regid;
	@Column
	String name;
	@Column
	String email;
	@Column
	String password;
	@Column
	Long contact;
	@Column
	String usertype;	
	@OneToMany(mappedBy="customer",
            orphanRemoval = true)
    private List<CakeInfo> cakes;
	
	
	

	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Registration( String name, String email, String password, Long contact, String usertype) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.contact = contact;
		this.usertype = usertype;
	}
	public int getRegid() {
		return regid;
	}
	public void setRegid(int regid) {
		this.regid = regid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public List<CakeInfo> getCakes() {
		return cakes;
	}
	public void setCakes(List<CakeInfo> cakes) {
		this.cakes = cakes;
	}
	
	 public void addCake(CakeInfo cake) {
	        cakes.add(cake);
	        cake.setCustomer(this);
	    }

	    public void removeCake(CakeInfo cake) {
	        cakes.remove(cake);
	        cake.setCustomer(null);
	    }
	

}
