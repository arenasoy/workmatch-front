package com.nicolas.Entity;

public class User {
    private int id;
    private String name;
    private String senha;
    private String email;

    public User(int id, String name, String senha, String email){
        this.id = id;
        this.name = name;
        this.senha = senha;
        this.email = email;

    }

    public User(){

    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getSenha() {
        return senha;
    }
}
