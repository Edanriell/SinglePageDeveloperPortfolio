package org.example.server.domain.skill;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "skills")
public class Skill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 100)
	private String name;

	@Column(nullable = false)
	private Integer experience;

	@Column(name = "created_at")
	private LocalDateTime createdAt;

	public Skill() {
		this.createdAt = LocalDateTime.now();
	}

	public Skill(String name, Integer experience) {
		this.name = name;
		this.experience = experience;
		this.createdAt = LocalDateTime.now();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}