package com.nicolas.Dao;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import com.nicolas.Entity.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
    private static Map<Integer, User> usuario;

    static{
        usuario = new HashMap<Integer, User>(){
            {
                put(1, new User(455, "meuNome", "minhaSEnha", "meu@gmail"));
                put(2, new User(456, "meuNome2", "minhaSEnha2", "meu@gmail2"));
                put(3, new User(457, "meuNome3", "minhaSEnha3", "meu@gmail3"));
            }
        };
    }
    public Collection<User> getAllUsers(){
        return this.usuario.values();
    }

    public User getUserById(int id){
        return this.usuario.get(id);
    }

}
