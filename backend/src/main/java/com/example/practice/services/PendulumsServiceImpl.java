package com.example.practice.services;

import com.example.practice.models.Pendulums;
import com.example.practice.repositories.PendulumsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class PendulumsServiceImpl implements PendulumsService {

    @Autowired
    private PendulumsRepository pendulumsRepository;

    @Override
    public Iterable<Pendulums> listPendulums() {
        return pendulumsRepository.findAll();
    }

    @Override
    public Pendulums createPendulumsPost(Pendulums newPendulums) {
        return pendulumsRepository.save(newPendulums);


        @Override
        public HttpStatus deleteById (Long pendulumsId){
            pendulumsRepository.deleteById(pendulumsId);
            return HttpStatus.OK;


        }
    }
