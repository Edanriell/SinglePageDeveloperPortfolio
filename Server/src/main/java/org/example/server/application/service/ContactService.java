package org.example.server.application.service;

import org.example.server.application.dto.ContactDTO;
import org.example.server.application.mapper.ContactMapper;
import org.example.server.domain.entity.Contact;
import org.example.server.domain.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService {
	private final ContactRepository contactRepository;
	private final ContactMapper contactMapper;

	@Autowired
	public ContactService(ContactRepository contactRepository, ContactMapper contactMapper) {
		this.contactRepository = contactRepository;
		this.contactMapper = contactMapper;
	}

	public ContactDTO saveContact(ContactDTO contactDTO) {
		Contact contact = contactMapper.toEntity(contactDTO);
		Contact savedContact = contactRepository.save(contact);
		return contactMapper.toDto(savedContact);
	}

	public List<ContactDTO> getAllContacts() {
		return contactRepository.findAll().stream()
				.map(contactMapper::toDto)
				.collect(Collectors.toList());
	}

	public ContactDTO getContactById(Long id) {
		return contactRepository.findById(id)
				.map(contactMapper::toDto)
				.orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
	}

	public void deleteContact(Long id) {
		contactRepository.deleteById(id);
	}
}