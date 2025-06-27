package org.example.server.application.mappers;

import org.example.server.application.dtos.BannerDTO;
import org.example.server.domain.banner.Banner;
import org.springframework.stereotype.Component;

@Component
public class BannerMapper {
	public Banner toEntity(BannerDTO dto) {
		return new Banner(
				dto.title(),
				dto.description(),
				dto.image()
		);
	}

	public BannerDTO toDTO(Banner entity) {
		return new BannerDTO(
				entity.getTitle(),
				entity.getDescription(),
				entity.getImage()
		);
	}
}