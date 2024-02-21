package com.app.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="cakeinfo")
public class CakeInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cake_id")
	Integer cakeId;
	@Column
	String name;
	@Column
	String category;
	@Column
	String weight;
	@Column
	int price;
	
	  @JsonIgnore
	    @ManyToOne(fetch= FetchType.LAZY)
	    private Registration customer;
	  
	  
	
	public CakeInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CakeInfo(String name, String category, String weight, int price) {
		super();
		this.name = name;
		this.category = category;
		this.weight = weight;
		this.price = price;
	}
	
	
	public Integer getCakeId() {
		return cakeId;
	}
	public void setCakeId(Integer cakeId) {
		this.cakeId = cakeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
//	@Override
//	public String toString() {
//		return "CakeInfo [cakeId=" + cakeId + ", name=" + name + ", category=" + category + ", weight=" + weight
//				+ ", price=" + price + ", getCakeid()=" +   ", getName()=" + getName() + ", getCategory()="
//				+ getCategory() + ", getWeight()=" + getWeight() + ", getPrice()=" + getPrice() + ", getClass()="
//				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
//	}
	
	
	
	public Registration getCustomer() {
		return customer;
	}
	public void setCustomer(Registration customer) {
		this.customer = customer;
	}
	
	  @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (!(o instanceof CakeInfo )) return false;
	        return getCakeId() != null && getCakeId().equals(((CakeInfo) o).getCakeId());
	    }

	    @Override
	    public int hashCode() {
	        return getClass().hashCode();
	    }
	
	
}
