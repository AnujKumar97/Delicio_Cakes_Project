package com.app.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;

@Entity
@Table(name="customerorders")
public class CustomerOrders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer ordid;
	
	@Column
	int cakeId;
	
	@Column
	int customerId;
	
	
	public CustomerOrders() {
		super();
	}

	public CustomerOrders(int cakeId, int customerId) {
		super();
		this.cakeId = cakeId;
		this.customerId = customerId;
	}

	public Integer getOrdid() {
		return ordid;
	}

	public void setOrdid(Integer ordid) {
		this.ordid = ordid;
	}

	public int getCakeId() {
		return cakeId;
	}

	public void setCakeId(int cakeId) {
		this.cakeId = cakeId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	
	
	
	
	
	
//	@Column
//	String name;
//	@Column
//	String category;
//	@Column
//	String weight;
//	@Column
//	int price;
//	public CustomerOrders() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	public CustomerOrders( String name, String category, String weight, int price) {
//		super();
//		this.name = name;
//		this.category = category;
//		this.weight = weight;
//		this.price = price;
//	}
//	public int getOrdid() {
//		return ordid;
//	}
//	public void setOrdid(int ordid) {
//		this.ordid = ordid;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getCategory() {
//		return category;
//	}
//	public void setCategory(String category) {
//		this.category = category;
//	}
//	public String getWeight() {
//		return weight;
//	}
//	public void setWeight(String weight) {
//		this.weight = weight;
//	}
//	public int getPrice() {
//		return price;
//	}
//	public void setPrice(int price) {
//		this.price = price;
//	}
//	@Override
//	public String toString() {
//		return "CustomerOrders [ordid=" + ordid + ", name=" + name + ", category=" + category + ", weight=" + weight
//				+ ", price=" + price + ", getOrdid()="  + ", getName()=" + getName() + ", getCategory()="
//				+ getCategory() + ", getWeight()=" + getWeight() + ", getPrice()=" + getPrice() + ", getClass()="
//				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
//	}
//	
//	
//	
//	
	
	
	

}
