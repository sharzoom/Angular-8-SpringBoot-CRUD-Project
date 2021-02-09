package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.model.Accounts;
import com.app.repository.AccountRepository;

@Service
public class AccountService {
@Autowired
private AccountRepository repo1;
public Accounts saveAccounts(Accounts accounts) {
	return repo1.save(accounts);
}
public Accounts fetchUserById(int id) {
	return repo1.findById(id);
}
}
