package com.example.practice.controllers;

import com.example.practice.models.Crystals;
import com.example.practice.models.Jewelry;
import com.example.practice.services.JewelryService;
import com.example.practice.services.JewelryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/jewelry")

public class JewelryController {
    @Autowired
    JewelryService jewelryService;

    @GetMapping("/list")
    public Iterable<Jewelry> listJewelry() {
        return jewelryService.listJewelry();

}

    @PostMapping("/SellJewelry")
    public Jewelry createJewelryPost(@RequestBody Jewelry newJewelry) {
        return crystalsService.createCrystalsPost(newCrystals);
    }
    @DeleteMapping("/{crystal/Id}")
    public HttpStatus deleteCrystalsById(@PathVariable Long crystalsId) {
        return crystalsService.deleteById(crystalsId);

    }
}


