package com.example.practice.repositories;

import com.example.practice.models.Jewelry;
import org.springframework.data.repository.CrudRepository;

public interface JewelryRepository extends CrudRepository<Jewelry, Long> {
}
