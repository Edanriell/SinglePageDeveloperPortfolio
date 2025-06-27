package org.example.server.domain.project;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 255)
	private String name;

	@Column(nullable = false, length = 500)
	private String image;

	@ElementCollection
	@CollectionTable(name = "project_tags", joinColumns = @JoinColumn(name = "project_id"))
	@Column(name = "tag")
	private List<String> tags;

	@Column(name = "project_url", nullable = false, length = 500)
	private String projectUrl;

	@Column(name = "code_url", nullable = false, length = 500)
	private String codeUrl;

	@Column(name = "created_at")
	private LocalDateTime createdAt;

	public Project() {
		this.createdAt = LocalDateTime.now();
	}

	public Project(String name, String image, List<String> tags, String projectUrl, String codeUrl) {
		this.name = name;
		this.image = image;
		this.tags = tags;
		this.projectUrl = projectUrl;
		this.codeUrl = codeUrl;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	public String getProjectUrl() {
		return projectUrl;
	}

	public void setProjectUrl(String projectUrl) {
		this.projectUrl = projectUrl;
	}

	public String getCodeUrl() {
		return codeUrl;
	}

	public void setCodeUrl(String codeUrl) {
		this.codeUrl = codeUrl;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}