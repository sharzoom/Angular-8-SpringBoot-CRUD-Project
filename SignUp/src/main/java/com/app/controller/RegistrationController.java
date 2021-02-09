package com.app.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.app.model.Accounts;
import com.app.model.Admin;
import com.app.model.User;
import com.app.repository.AccountRepository;
import com.app.service.AccountService;
import com.app.service.AdminService;
import com.app.service.RegistrationService;

@RestController
public class RegistrationController {

      @Autowired
      private RegistrationService service;

      @PostMapping("/registeruser")
      @CrossOrigin("http://localhost:4200")
      public User registerUser(@RequestBody User user) throws Exception {
         String tempEmailId = user.getEmailId();
         if(tempEmailId != null && !"".equals(tempEmailId)) {
            User userobj = service.fetchUserByEmailId(tempEmailId);
            if(userobj != null) {
               throw new Exception("user with "+tempEmailId+" already exists");
             }
       }
         User userObj = null;
         userObj = service.saveUser(user);
         return userObj;
}
         @PostMapping("/login")
         @CrossOrigin("http://localhost:4200")
         public User loginUser(@RequestBody User user) throws Exception {
         String tempEmailId = user.getEmailId();
         String tempPass = user.getPassword();
         User userObj = null;
         if(tempEmailId != null && tempPass != null) {
        	 userObj =service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
         }
         if (userObj ==null) {
        	 throw new Exception("Bad credentials");
         }
         return userObj;
        	 
         }

         @Autowired
         private AccountService service1;
         
         
         @PostMapping("/registeraccount")
         @CrossOrigin("http://localhost:4200")
         public Accounts registerAccounts(@RequestBody Accounts accounts) {
        	Accounts accountsObj = service1.saveAccounts(accounts);
             return accountsObj;
    }
         
         @Autowired	private AccountRepository accountRepository;
         
         @PutMapping("/registeraccount/{id}")
         @CrossOrigin("http://localhost:4200")
     	public ResponseEntity<Accounts> updateAccounts(@PathVariable int id, @RequestBody Accounts accountsDetails){
        	 Accounts accounts = accountRepository.findById(id);
        	 accounts.setName(accountsDetails.getName());
        	 accounts.setEmail(accountsDetails.getEmail());
        	 accounts.setContact(accountsDetails.getContact());
     		
     		Accounts updatedAccounts = accountRepository.save(accounts);
     		return ResponseEntity.ok( updatedAccounts);
     	}
         
         @GetMapping("/registeraccount/{id}")
         @CrossOrigin("http://localhost:4200")
     	public ResponseEntity<Accounts> getAccountsById(@PathVariable int id) {
        	 Accounts accounts = accountRepository.findById(id);
     		return ResponseEntity.ok(accounts);
     	}
         
         @DeleteMapping("/registeraccount/{id}")
         @CrossOrigin("http://localhost:4200")
     	public ResponseEntity<Accounts> deleteAccounts(@PathVariable int id){
        	 Accounts accounts = accountRepository.findById(id);
        	 accountRepository.delete(accounts);
     		
     		return ResponseEntity.ok(accounts);
     	}
         
         @GetMapping("/registeraccount")
         @CrossOrigin("http://localhost:4200")
     	public List<Accounts> getAllAccounts(){
     		return accountRepository.findAll();
     	}
         
         @Autowired
         private AdminService service2;

         @PostMapping("/registeradmin")
         @CrossOrigin("http://localhost:4200")
         public Admin registerAdmin(@RequestBody Admin admin) throws Exception {
            String tempEmailId = admin.getEmailId();
            if(tempEmailId != null && !"".equals(tempEmailId)) {
               Admin adminobj = service2.fetchAdminByEmailId(tempEmailId);
               if(adminobj != null) {
                  throw new Exception("admin with "+tempEmailId+" already exists");
                }
          }
            Admin adminObj = null;
            adminObj = service2.saveAdmin(admin);
            return adminObj;
   }
            @PostMapping("/loginadmin")
            @CrossOrigin("http://localhost:4200")
            public Admin loginAdmin(@RequestBody Admin admin) throws Exception {
            String tempEmailId = admin.getEmailId();
            String tempPass = admin.getPassword();
            Admin adminObj = null;
            if(tempEmailId != null && tempPass != null) {
           	 adminObj =service2.fetchAdminByEmailIdAndPassword(tempEmailId, tempPass);
            }
            if (adminObj ==null) {
           	 throw new Exception("Bad credentials");
            }
            return adminObj;
           	 
            }
         
         
}


           




