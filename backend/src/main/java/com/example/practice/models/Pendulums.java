package com.example.practice.models;

import javax.persistence.*;

public class Pendulums {
    @Entity
    @Table(name = "pendulums")
    public class Pendulum {

        @javax.persistence.Id
        @Column
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long Id;

        @Column
        private String price;

        @Column
        private String color;

        @Column
        private String cordType;

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

        public String getCordType() {
            return cordType;
        }

        public void setCordType(String cordType) {
            this.cordType = cordType;
        }

        public String getSize() {
            return size;
        }

        public void setSize(String size) {
            this.size = size;
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
        private String crystalType;


    }
}