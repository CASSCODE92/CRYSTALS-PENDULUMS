package com.example.practice.services;


import com.example.practice.models.Pendulums;
import org.springframework.http.HttpStatus;





public interface PendulumsService {

    public Iterable<Pendulums> listPendulums();
    public Pendulums createPendulumsPost(Pendulums newPendulums);
    public HttpStatus deleteById(Long pendulumsId);
}
