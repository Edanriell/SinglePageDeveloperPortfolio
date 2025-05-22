package org.example.server.application.mapper;

import org.example.server.application.dto.ContactDTO;
import org.example.server.domain.entity.Contact;
import org.springframework.stereotype.Component;

@Component
public class ContactMapper {
	public Contact toEntity(ContactDTO dto) {
		return new Contact(
				dto.getName(),
				dto.getEmail(),
				dto.getMessage()
		);
	}

	public ContactDTO toDto(Contact entity) {
		return new ContactDTO(
				entity.getName(),
				entity.getEmail(),
				entity.getMessage()
		);
	}
}