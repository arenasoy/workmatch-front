package com.nicolas.Entity;

public class Competencia {
    private String name;
    private int id;
    private int nivel;

    public Competencia(String name, int id, int nivel) {
        this.name = name;
        this.id = id;
        this.nivel = nivel;
    }

    public Competencia() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        if(id >=0 && <4){
            this.id = id;
        }
        else{
            System.out.println("nivel errado");
        }
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }
}
