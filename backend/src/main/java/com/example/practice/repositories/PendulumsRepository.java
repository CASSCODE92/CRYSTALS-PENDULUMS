package com.example.practice.repositories;

import com.example.practice.models.Pendulums;
import org.springframework.data.repository.CrudRepository;


public interface PendulumsRepository extends CrudRepository<Pendulums, Long> {
}
