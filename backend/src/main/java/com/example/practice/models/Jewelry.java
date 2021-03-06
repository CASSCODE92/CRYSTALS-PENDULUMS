package com.example.practice.models;

import javax.persistence.*;

@Entity
@Table(name= "jewelry")
public class Jewelry {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private String price;

    @Column
    private String color;

    @Column
    private String wrapMaterial;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
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

    public String getWrapMaterial() {
        return wrapMaterial;
    }

    public void setWrapMaterial(String wrapMaterial) {
        this.wrapMaterial = wrapMaterial;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getJewelryType() {
        return jewelryType;
    }

    public void setJewelryType(String jewelryType) {
        this.jewelryType = jewelryType;
    }

    public String getCrystalType() {
        return crystalType;
    }

    public void setCrystalType(String crystalType) {
        this.crystalType = crystalType;
    }

    @Column
    private String size;

    @Column
    private String jewelryType;

    @Column
    private String crystalType;

}

