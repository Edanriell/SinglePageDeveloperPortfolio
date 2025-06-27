package org.example.server.application.mappers;

import org.example.server.application.dtos.ProjectDTO;
import org.example.server.domain.project.Project;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {
	public Project toEntity(ProjectDTO dto) {
		return new Project(
				dto.name(),
				dto.image(),
				dto.tags(),
				dto.links().projectUrl(),
				dto.links().codeUrl()
		);
	}

	public ProjectDTO toDTO(Project entity) {
		return new ProjectDTO(
				entity.getName(),
				entity.getImage(),
				entity.getTags(),
				new ProjectDTO.LinksDTO(
						entity.getProjectUrl(),
						entity.getCodeUrl()
				)
		);
	}
}