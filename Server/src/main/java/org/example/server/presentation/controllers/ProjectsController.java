package org.example.server.presentation.controllers;

import jakarta.validation.Valid;
import org.example.server.application.dtos.ProjectDTO;
import org.example.server.application.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectsController {
	private final ProjectService projectService;

	@Autowired
	public ProjectsController(ProjectService projectService) {
		this.projectService = projectService;
	}

	@PostMapping
	public ResponseEntity<ProjectDTO> createProject(@Valid @RequestBody ProjectDTO projectDTO) {
		ProjectDTO savedProject = projectService.saveProject(projectDTO);
		return new ResponseEntity<>(savedProject, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<ProjectDTO>> getAllProjects() {
		List<ProjectDTO> projects = projectService.getAllProjects();
		return ResponseEntity.ok(projects);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ProjectDTO> getProjectById(@PathVariable Long id) {
		ProjectDTO project = projectService.getProjectById(id);
		return ResponseEntity.ok(project);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ProjectDTO> updateProject(@PathVariable Long id, @Valid @RequestBody ProjectDTO projectDTO) {
		ProjectDTO updatedProject = projectService.updateProject(id, projectDTO);
		return ResponseEntity.ok(updatedProject);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
		projectService.deleteProject(id);
		return ResponseEntity.noContent().build();
	}
}