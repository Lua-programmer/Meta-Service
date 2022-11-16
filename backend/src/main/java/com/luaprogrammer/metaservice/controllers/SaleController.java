package com.luaprogrammer.metaservice.controllers;

import com.luaprogrammer.metaservice.entities.Sale;
import com.luaprogrammer.metaservice.service.SaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SaleController {
    private final SaleService service;

    @GetMapping
    public Page<Sale> findSales(Pageable pageable,
                                @RequestParam(value = "minDate", defaultValue = " ") String minDate,
                                @RequestParam(value = "maxDate", defaultValue = " ") String maxDate){
        return service.findSales(pageable, minDate, maxDate);
    }
}
