package com.luaprogrammer.metaservice.service;

import com.luaprogrammer.metaservice.entities.Sale;
import com.luaprogrammer.metaservice.repositories.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
@RequiredArgsConstructor
public class SaleService {
    private final SaleRepository repository;

    public Page<Sale> findSales(Pageable pageable, String minDate, String maxDate) {

        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        LocalDate min = minDate.equals(" ") ? today.minusDays(365) : LocalDate.parse(minDate);
        LocalDate max = maxDate.equals(" ") ? today : LocalDate.parse(maxDate);

        return repository.findSales(min, max, pageable);
    }
}
