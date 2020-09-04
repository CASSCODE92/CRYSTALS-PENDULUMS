package com.example.practice.services;

import com.example.practice.models.Crystals;
import com.example.practice.repositories.CrystalsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CrystalsServiceImpl implements CrystalsService {

    @Autowired
    private CrystalsRepository crystalsRepository;

    @Override
    public Iterable<Crystals> listCrystals() {
        return crystalsRepository.findAll();
    }

    @Override
    public Crystals createCrystalsPost(Crystals newCrystals) {
        return crystalsRepository.save(newCrystals);
    }



    @Override
    public HttpStatus deleteById(Long crystalsId) {
       crystalsRepository.deleteById(crystalsId);
       return HttpStatus.OK;
    }
}
