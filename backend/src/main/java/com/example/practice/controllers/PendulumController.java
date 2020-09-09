package com.example.practice.controllers;

import com.example.practice.models.Crystals;
import com.example.practice.models.Pendulums;
import com.example.practice.services.CrystalsService;
import com.example.practice.services.PendulumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/pendulums")
public class PendulumController {


    @Autowired
    PendulumsService pendulumsService;

    @GetMapping("/list")
    public Iterable<Pendulums> listPendulums() {
        return pendulumsService.listPendulums();
    }


    @PostMapping("/SellPendulums")
    public Pendulums createPendulumsPost(@RequestBody Pendulums newPendulums) {
        return pendulumsService.createPendulumsPost(newPendulums);
    }

    @DeleteMapping("/{pendulum/Id}")
    public HttpStatus deletePendulumsById(@PathVariable Long pendulumsId) {
        return pendulumsServicesService.deleteById(pendulumsIdsId);

    }
}
