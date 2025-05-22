package org.example.server.infrastructure.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan("org.example.server.domain.entity")
@EnableJpaRepositories("org.example.server.infrastructure.persistence")
public class DatabaseConfig {
}
