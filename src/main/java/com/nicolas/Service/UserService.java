package com.nicolas.Service;

import com.nicolas.Dao.UserDao;
import com.nicolas.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService {
    @Autowired
    private com.nicolas.Dao.UserDao UserDao;

    public Collection<User> getAllUsers(){
        return this.UserDao.getAllUsers();
    }
    public User getUserById(int id){
        return this.UserDao.getUserById(id);
    }
}

