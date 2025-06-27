package org.example.server.application.dtos;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public record ProjectDTO(
		@NotBlank(message = "Name is required")
		@Size(max = 255, message = "Name must not exceed 255 characters")
		String name,

		@NotBlank(message = "Image URL is required")
		@Size(max = 500, message = "Image URL must not exceed 500 characters")
		String image,

		@NotEmpty(message = "At least one tag is required")
		List<@NotBlank(message = "Tag cannot be blank") String> tags,

		@NotNull(message = "Links are required")
		@Valid
		LinksDTO links
) {
	public record LinksDTO(
			@NotBlank(message = "Project URL is required")
			@Size(max = 500, message = "Project URL must not exceed 500 characters")
			String projectUrl,

			@NotBlank(message = "Code URL is required")
			@Size(max = 500, message = "Code URL must not exceed 500 characters")
			String codeUrl
	) {
	}
}