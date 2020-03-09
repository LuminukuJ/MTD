package fr.formation.mtd.controller;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.mtd.dto.CreateEventFormDto;
import fr.formation.mtd.service.EventFormService;

@RestController
@RequestMapping("/eventform")
@CrossOrigin(origins = "*")
public class EventFormController {
	
private final EventFormService eventFormService;
	
	public EventFormController(EventFormService eventFormService) {
		super();
		this.eventFormService = eventFormService;
	    }

	    @PostMapping("/createdto")
	    public void create(@Valid @RequestBody CreateEventFormDto dto) {
	    	eventFormService.create(dto);
	    }
}
