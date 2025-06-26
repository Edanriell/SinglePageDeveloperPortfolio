package org.example.server.presentation.controllers;

import jakarta.validation.Valid;
import org.example.server.application.dtos.ContactDTO;
import org.example.server.application.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
public class ContactsController {
	private final ContactService contactService;

	@Autowired
	public ContactsController(ContactService contactService) {
		this.contactService = contactService;
	}

	@PostMapping
	public ResponseEntity<ContactDTO> createContact(@Valid @RequestBody ContactDTO contactDTO) {
		ContactDTO savedContact = contactService.saveContact(contactDTO);
		return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<ContactDTO>> getAllContacts() {
		List<ContactDTO> contacts = contactService.getAllContacts();
		return ResponseEntity.ok(contacts);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ContactDTO> getContactById(@PathVariable Long id) {
		ContactDTO contact = contactService.getContactById(id);
		return ResponseEntity.ok(contact);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteContact(@PathVariable Long id) {
		contactService.deleteContact(id);
		return ResponseEntity.noContent().build();
	}
}