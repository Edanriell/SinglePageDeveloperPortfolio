package org.example.server.application.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record SkillDTO(
		@NotBlank(message = "Name is required")
		@Size(max = 100, message = "Name must not exceed 100 characters")
		String name,

		@NotNull(message = "Experience is required")
		@Positive(message = "Experience must be a positive number")
		Integer experience
) {
}