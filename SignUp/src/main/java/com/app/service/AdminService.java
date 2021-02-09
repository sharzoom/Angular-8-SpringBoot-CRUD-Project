package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Admin;
import com.app.repository.AdminRepository;




@Service
public class AdminService {
	
	@Autowired
	private AdminRepository repo2;
	
	
	public Admin saveAdmin(Admin admin) {
		return repo2.save(admin);
	}
	
	public  Admin fetchAdminByEmailId(String email) {
		return repo2.findByEmailId(email);
	}
	
	
	public  Admin fetchAdminByEmailIdAndPassword(String email, String password) {
		return repo2.findByEmailIdAndPassword(email, password);
	}

	
	
}