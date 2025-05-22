package org.example.server.domain.repository;

import org.example.server.domain.entity.Contact;

import java.util.List;
import java.util.Optional;

public interface ContactRepository {
	Contact save(Contact contact);

	Optional<Contact> findById(Long id);

	List<Contact> findAll();

	void deleteById(Long id);
}