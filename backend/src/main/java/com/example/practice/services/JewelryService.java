package com.example.practice.services;


import com.example.practice.models.Jewelry;
import org.springframework.http.HttpStatus;

public interface JewelryService {

    public Iterable<Jewelry> listJewelry();
    public Jewelry createJewelryPost(Jewelry newJewelry);
    public HttpStatus deleteById(Long jewelryId);

}
