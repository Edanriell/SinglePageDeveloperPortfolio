package org.example.server.presentation.controllers;

import jakarta.validation.Valid;
import org.example.server.application.dtos.SkillDTO;
import org.example.server.application.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
 
@RestController
@RequestMapping("/api/skills")
public class SkillsController {
	private final SkillService skillService;

	@Autowired
	public SkillsController(SkillService skillService) {
		this.skillService = skillService;
	}

	@PostMapping
	public ResponseEntity<SkillDTO> createSkill(@Valid @RequestBody SkillDTO skillDTO) {
		SkillDTO savedSkill = skillService.saveSkill(skillDTO);
		return new ResponseEntity<>(savedSkill, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<SkillDTO>> getAllSkills() {
		List<SkillDTO> skills = skillService.getAllSkills();
		return ResponseEntity.ok(skills);
	}

	@GetMapping("/{id}")
	public ResponseEntity<SkillDTO> getSkillById(@PathVariable Long id) {
		SkillDTO skill = skillService.getSkillById(id);
		return ResponseEntity.ok(skill);
	}

	@PutMapping("/{id}")
	public ResponseEntity<SkillDTO> updateSkill(@PathVariable Long id, @Valid @RequestBody SkillDTO skillDTO) {
		SkillDTO updatedSkill = skillService.updateSkill(id, skillDTO);
		return ResponseEntity.ok(updatedSkill);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteSkill(@PathVariable Long id) {
		skillService.deleteSkill(id);
		return ResponseEntity.noContent().build();
	}
}