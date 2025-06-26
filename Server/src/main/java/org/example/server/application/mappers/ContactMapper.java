package org.example.server.application.mappers;

import org.example.server.application.dtos.ContactDTO;
import org.example.server.domain.contact.Contact;
import org.springframework.stereotype.Component;

@Component
public class ContactMapper {
	public Contact toEntity(ContactDTO dto) {
		return new Contact(
				dto.name(),
				dto.email(),
				dto.message()
		);
	}

	public ContactDTO toDTO(Contact entity) {
		return new ContactDTO(
				entity.getName(),
				entity.getEmail(),
				entity.getMessage()
		);
	}
}