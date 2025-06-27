package org.example.server.domain.banner;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "banners")
public class Banner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, length = 255)
	private String title;

	@Column(nullable = false, columnDefinition = "TEXT")
	private String description;

	@Column(nullable = false, length = 500)
	private String image;

	@Column(name = "created_at", nullable = false, updatable = false)
	private LocalDateTime createdAt;

	public Banner() {
		this.createdAt = LocalDateTime.now();
	}

	public Banner(String title, String description, String image) {
		this.title = title;
		this.description = description;
		this.image = image;
		this.createdAt = LocalDateTime.now();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
}