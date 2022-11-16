package com.luaprogrammer.metaservice.controllers;

import com.luaprogrammer.metaservice.entities.Sale;
import com.luaprogrammer.metaservice.service.SaleService;
import com.luaprogrammer.metaservice.service.SmsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sales")
@RequiredArgsConstructor
public class SaleController {
    private final SaleService service;
    private final SmsService smsService;

    @GetMapping
    public Page<Sale> findSales(Pageable pageable,
                                @RequestParam(value = "minDate", defaultValue = " ") String minDate,
                                @RequestParam(value = "maxDate", defaultValue = " ") String maxDate){
        return service.findSales(pageable, minDate, maxDate);
    }


    @GetMapping("/{id}/notification")
    public void notifySms(@PathVariable Long id){
        smsService.sendSms(id);
    }
}
