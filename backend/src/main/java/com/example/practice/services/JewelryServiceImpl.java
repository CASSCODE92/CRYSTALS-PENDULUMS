package com.example.practice.services;

import com.example.practice.models.Crystals;
import com.example.practice.models.Jewelry;

import com.example.practice.repositories.JewelryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class JewelryServiceImpl implements JewelryService {

    @Autowired
    private JewelryRepository jewelryRepository;

    @Override
    public Iterable<Jewelry> listJewelry() {
        return jewelryRepository.findAll();
    }

    @Override
    public Jewelry createJewelryPost(Jewelry newJewelry) {
        return jewelryRepository.save(newJewelry);
    }



    @Override
    public HttpStatus deleteById(Long jewelryId) {
        jewelryRepository.deleteById(jewelryId);
        return HttpStatus.OK;
    }


}
