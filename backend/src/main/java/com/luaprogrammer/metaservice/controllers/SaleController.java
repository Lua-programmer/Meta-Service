package com.luaprogrammer.metaservice.controllers;

import com.luaprogrammer.metaservice.entities.Sale;
import com.luaprogrammer.metaservice.service.SaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SaleController {
    private final SaleService service;

    @GetMapping
    public List<Sale> findSales(){
        return service.findSales();
    }
}
