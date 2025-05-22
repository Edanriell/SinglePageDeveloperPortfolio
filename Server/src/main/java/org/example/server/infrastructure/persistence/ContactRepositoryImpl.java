package org.example.server.infrastructure.persistence;

import org.example.server.domain.entity.Contact;
import org.example.server.domain.repository.ContactRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepositoryImpl extends JpaRepository<Contact, Long>, ContactRepository {
}

