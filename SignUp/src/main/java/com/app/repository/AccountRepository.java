package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Accounts;

public interface AccountRepository extends JpaRepository<Accounts,Integer> {
	
	public Accounts findById(int id);
	
}
