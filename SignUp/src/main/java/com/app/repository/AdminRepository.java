package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
	
	public Admin findByEmailId(String emailId);
	public Admin findByEmailIdAndPassword(String emailId, String password);

}