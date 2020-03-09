package fr.formation.mtd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.mtd.entity.EventForm;

public interface EventFormJpaRepository extends JpaRepository<EventForm, Long> {

}
