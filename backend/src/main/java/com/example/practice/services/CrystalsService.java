package com.example.practice.services;

import com.example.practice.models.Crystals;
import org.springframework.http.HttpStatus;

public interface CrystalsService {

    public Iterable<Crystals> listCrystals();
    public Crystals createCrystalsPost(Crystals newCrystals);
    public HttpStatus deleteById(Long crystalsId);
}
