package com.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entites.CustomerOrders;
@Repository
public interface CustomerOrdersRepo extends JpaRepository<CustomerOrders, Integer> {

}
