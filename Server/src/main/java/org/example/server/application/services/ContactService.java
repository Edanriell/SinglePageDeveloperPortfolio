package org.example.server.application.services;

import org.example.server.application.dtos.ContactDTO;
import org.example.server.application.mappers.ContactMapper;
import org.example.server.domain.contact.Contact;
import org.example.server.domain.contact.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
		return contactMapper.toDTO(savedContact);
	}

	public List<ContactDTO> getAllContacts() {
		List<Contact> contacts = contactRepository.findAll();
		return contacts.stream()
				.map(contactMapper::toDTO)
				.toList();
	}

	public ContactDTO getContactById(Long id) {
		Optional<Contact> contact = contactRepository.findById(id);
		if (contact.isPresent()) {
			return contactMapper.toDTO(contact.get());
		}
		throw new RuntimeException("Contact not found with id: " + id);
	}

	public void deleteContact(Long id) {
		if (!contactRepository.existsById(id)) {
			throw new RuntimeException("Contact not found with id: " + id);
		}
		contactRepository.deleteById(id);
	}
}