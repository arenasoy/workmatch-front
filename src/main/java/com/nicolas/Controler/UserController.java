package com.nicolas.Controler;

import com.nicolas.Entity.User;
import com.nicolas.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService UserService;

    @RequestMapping(method = RequestMethod.GET)
    public Collection<User> getAllUsers(){
        return UserService.getAllUsers();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public User getUserByID(@PathVariable("id") int id){
        return UserService.getUserById(id);
    }
}

