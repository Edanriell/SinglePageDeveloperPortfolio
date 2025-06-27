package org.example.server.application.services;

import org.example.server.application.dtos.SkillDTO;
import org.example.server.application.mappers.SkillMapper;
import org.example.server.domain.skill.Skill;
import org.example.server.domain.skill.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {
	private final SkillRepository skillRepository;
	private final SkillMapper skillMapper;

	@Autowired
	public SkillService(SkillRepository skillRepository, SkillMapper skillMapper) {
		this.skillRepository = skillRepository;
		this.skillMapper = skillMapper;
	}

	public SkillDTO saveSkill(SkillDTO skillDTO) {
		Skill skill = skillMapper.toEntity(skillDTO);
		Skill savedSkill = skillRepository.save(skill);
		return skillMapper.toDTO(savedSkill);
	}

	public List<SkillDTO> getAllSkills() {
		List<Skill> skills = skillRepository.findAll();
		return skills.stream()
				.map(skillMapper::toDTO)
				.toList();
	}

	public SkillDTO getSkillById(Long id) {
		Optional<Skill> skill = skillRepository.findById(id);
		if (skill.isPresent()) {
			return skillMapper.toDTO(skill.get());
		}
		throw new RuntimeException("Skill not found with id: " + id);
	}

	public SkillDTO updateSkill(Long id, SkillDTO skillDTO) {
		Optional<Skill> existingSkill = skillRepository.findById(id);
		if (existingSkill.isPresent()) {
			Skill skill = existingSkill.get();
			skill.setName(skillDTO.name());
			skill.setExperience(skillDTO.experience());
			Skill updatedSkill = skillRepository.save(skill);
			return skillMapper.toDTO(updatedSkill);
		}
		throw new RuntimeException("Skill not found with id: " + id);
	}
 
	public void deleteSkill(Long id) {
		if (!skillRepository.existsById(id)) {
			throw new RuntimeException("Skill not found with id: " + id);
		}
		skillRepository.deleteById(id);
	}
}