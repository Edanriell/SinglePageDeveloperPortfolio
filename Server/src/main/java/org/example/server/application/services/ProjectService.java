package org.example.server.application.services;

import org.example.server.application.dtos.ProjectDTO;
import org.example.server.application.mappers.ProjectMapper;
import org.example.server.domain.project.Project;
import org.example.server.domain.project.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
 
@Service
public class ProjectService {
	private final ProjectRepository projectRepository;
	private final ProjectMapper projectMapper;

	@Autowired
	public ProjectService(ProjectRepository projectRepository, ProjectMapper projectMapper) {
		this.projectRepository = projectRepository;
		this.projectMapper = projectMapper;
	}

	public ProjectDTO saveProject(ProjectDTO projectDTO) {
		Project project = projectMapper.toEntity(projectDTO);
		Project savedProject = projectRepository.save(project);
		return projectMapper.toDTO(savedProject);
	}

	public List<ProjectDTO> getAllProjects() {
		List<Project> projects = projectRepository.findAll();
		return projects.stream()
				.map(projectMapper::toDTO)
				.toList();
	}

	public ProjectDTO getProjectById(Long id) {
		Optional<Project> project = projectRepository.findById(id);
		if (project.isPresent()) {
			return projectMapper.toDTO(project.get());
		}
		throw new RuntimeException("Project not found with id: " + id);
	}

	public ProjectDTO updateProject(Long id, ProjectDTO projectDTO) {
		Optional<Project> existingProject = projectRepository.findById(id);
		if (existingProject.isPresent()) {
			Project project = existingProject.get();
			project.setName(projectDTO.name());
			project.setImage(projectDTO.image());
			project.setTags(projectDTO.tags());
			project.setProjectUrl(projectDTO.links().projectUrl());
			project.setCodeUrl(projectDTO.links().codeUrl());
			Project updatedProject = projectRepository.save(project);
			return projectMapper.toDTO(updatedProject);
		}
		throw new RuntimeException("Project not found with id: " + id);
	}

	public void deleteProject(Long id) {
		if (!projectRepository.existsById(id)) {
			throw new RuntimeException("Project not found with id: " + id);
		}
		projectRepository.deleteById(id);
	}
}