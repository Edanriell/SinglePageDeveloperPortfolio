package org.example.server.application.services;

import org.example.server.application.dtos.BannerDTO;
import org.example.server.application.mappers.BannerMapper;
import org.example.server.domain.banner.Banner;
import org.example.server.domain.banner.BannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BannerService {
	private final BannerRepository bannerRepository;
	private final BannerMapper bannerMapper;

	@Autowired
	public BannerService(BannerRepository bannerRepository, BannerMapper bannerMapper) {
		this.bannerRepository = bannerRepository;
		this.bannerMapper = bannerMapper;
	}

	public BannerDTO saveBanner(BannerDTO bannerDTO) {
		Banner banner = bannerMapper.toEntity(bannerDTO);
		Banner savedBanner = bannerRepository.save(banner);
		return bannerMapper.toDTO(savedBanner);
	}

	public List<BannerDTO> getAllBanners() {
		List<Banner> banners = bannerRepository.findAll();
		return banners.stream()
				.map(bannerMapper::toDTO)
				.toList();
	}

	public BannerDTO getBannerById(Long id) {
		Optional<Banner> banner = bannerRepository.findById(id);
		if (banner.isPresent()) {
			return bannerMapper.toDTO(banner.get());
		}
		throw new RuntimeException("Banner not found with id: " + id);
	}

	public BannerDTO updateBanner(Long id, BannerDTO bannerDTO) {
		Optional<Banner> existingBanner = bannerRepository.findById(id);
		if (existingBanner.isPresent()) {
			Banner banner = existingBanner.get();
			banner.setTitle(bannerDTO.title());
			banner.setDescription(bannerDTO.description());
			banner.setImage(bannerDTO.image());
			Banner updatedBanner = bannerRepository.save(banner);
			return bannerMapper.toDTO(updatedBanner);
		}
		throw new RuntimeException("Banner not found with id: " + id);
	}

	public void deleteBanner(Long id) {
		if (!bannerRepository.existsById(id)) {
			throw new RuntimeException("Banner not found with id: " + id);
		}
		bannerRepository.deleteById(id);
	}
}