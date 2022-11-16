package com.luaprogrammer.metaservice.service;

import com.luaprogrammer.metaservice.entities.Sale;
import com.luaprogrammer.metaservice.repositories.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SaleService {
    private final SaleRepository repository;

    public List<Sale> findSales() {
        return repository.findAll();
    }
}
