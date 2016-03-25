package com.btapp.repository;

import com.btapp.domain.Btr;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Btr entity.
 */
public interface BtrRepository extends JpaRepository<Btr,Long> {

    @Query("select btr from Btr btr where btr.user.login = ?#{principal.username}")
    List<Btr> findByUserIsCurrentUser();

    @Query("select btr from Btr btr where btr.assigned_to.login = ?#{principal.username}")
    List<Btr> findByAssigned_toIsCurrentUser();

    @Query("select btr from Btr btr where btr.assigned_from.login = ?#{principal.username}")
    List<Btr> findByAssigned_fromIsCurrentUser();

    @Query("select btr from Btr btr where btr.manager.login = ?#{principal.username}")
    List<Btr> findByManagerIsCurrentUser();

    @Query("select btr from Btr btr where btr.supplier.login = ?#{principal.username}")
    List<Btr> findBySupplierIsCurrentUser();

}