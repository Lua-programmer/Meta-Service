package com.luaprogrammer.metaservice.repositories;

import com.luaprogrammer.metaservice.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long>{

}
