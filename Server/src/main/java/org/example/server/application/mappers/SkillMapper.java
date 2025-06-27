package org.example.server.application.mappers;

import org.example.server.application.dtos.SkillDTO;
import org.example.server.domain.skill.Skill;
import org.springframework.stereotype.Component;

@Component
public class SkillMapper {
	public Skill toEntity(SkillDTO dto) {
		return new Skill(
				dto.name(),
				dto.experience()
		);
	}
  
	public SkillDTO toDTO(Skill entity) {
		return new SkillDTO(
				entity.getName(),
				entity.getExperience()
		);
	}
}