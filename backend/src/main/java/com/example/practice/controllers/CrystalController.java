package com.example.practice.controllers;

import com.example.practice.models.Crystals;
import com.example.practice.services.CrystalsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/crystals")
public class CrystalController {

    @Autowired
    private CrystalsService crystalsService;

    @GetMapping("/list")
    public Iterable<Crystals> listCrystals() {
        return crystalsService.listCrystals();
    }


@PostMapping("/SellCrystals")
public Crystals createCrystalsPost(@RequestBody Crystals newCrystals) {
    return crystalsService.createCrystalsPost(newCrystals);
}
@DeleteMapping("/{crystalId}")
    public HttpStatus deleteCrystalsById(@PathVariable Long crystalsId) {
      return crystalsService.deleteById(crystalsId);

}
}

