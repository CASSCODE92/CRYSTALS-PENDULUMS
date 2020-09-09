package com.example.practice.models;

import javax.persistence.*;

@Entity
@Table(name= "crystals")
public class Crystals {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column
    private String price;

//            add as many columns as necessary

    @Column
    private String color;

    @Column
    private Long size;

    @Column
    private Long crystalType;


    public Crystals() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }

    public Long getCrystalType() {
        return crystalType;
    }

    public void setCrystalType(Long crystalType) {
        this.crystalType = crystalType;
    }
}
