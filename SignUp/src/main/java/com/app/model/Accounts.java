package com.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Accounts {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int id;
	 private String name;
	 private String email;
	 private String address;
	 private String country;
	 private String state;
	 private int pin;
	 private long addhar;
	 private String pan;
	 private long contact;
	 private String accounttype;

public Accounts()
{
	
}

public Accounts(int id, String name, String email, String address, String country, String state, int pin, long addhar,
		String pan, long contact, String accounttype) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.address = address;
	this.country = country;
	this.state = state;
	this.pin = pin;
	this.addhar = addhar;
	this.pan = pan;
	this.contact = contact;
	this.accounttype = accounttype;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
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

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public String getCountry() {
	return country;
}

public void setCountry(String country) {
	this.country = country;
}

public String getState() {
	return state;
}

public void setState(String state) {
	this.state = state;
}

public int getPin() {
	return pin;
}

public void setPin(int pin) {
	this.pin = pin;
}

public long getAddhar() {
	return addhar;
}

public void setAddhar(long addhar) {
	this.addhar = addhar;
}

public String getPan() {
	return pan;
}

public void setPan(String pan) {
	this.pan = pan;
}

public long getContact() {
	return contact;
}

public void setContact(long contact) {
	this.contact = contact;
}

public String getAccounttype() {
	return accounttype;
}

public void setAccounttype(String accounttype) {
	this.accounttype = accounttype;
}

}