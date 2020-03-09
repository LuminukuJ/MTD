package fr.formation.mtd.service.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.formation.mtd.dto.CreateEventFormDto;
import fr.formation.mtd.entity.EventForm;
import fr.formation.mtd.repository.EventFormJpaRepository;
import fr.formation.mtd.service.EventFormService;

@Service
public class EventFormServiceImpl implements EventFormService{

	@Autowired
    private ModelMapper mapper;
	
	private final EventFormJpaRepository eventFormJpaRepository;
	
	public EventFormServiceImpl(EventFormJpaRepository eventFormJpaRepository) {
    	super();
    	this.eventFormJpaRepository = eventFormJpaRepository;
        }

        @Override
        public void create(CreateEventFormDto dto) {
        	EventForm eventForm = mapper.map(dto, EventForm.class);
        	eventFormJpaRepository.save(eventForm);
        }

}
