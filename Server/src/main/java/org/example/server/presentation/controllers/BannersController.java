package org.example.server.presentation.controllers;

import org.example.server.application.dtos.BannerDTO;
import org.example.server.application.services.BannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/banners")
@CrossOrigin(origins = "*")
public class BannersController {

	private final BannerService bannerService;

	@Autowired
	public BannersController(BannerService bannerService) {
		this.bannerService = bannerService;
	}

	@PostMapping
	public ResponseEntity<BannerDTO> createBanner(@RequestBody BannerDTO bannerDTO) {
		try {
			BannerDTO savedBanner = bannerService.saveBanner(bannerDTO);
			return new ResponseEntity<>(savedBanner, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping
	public ResponseEntity<List<BannerDTO>> getAllBanners() {
		try {
			List<BannerDTO> banners = bannerService.getAllBanners();
			return new ResponseEntity<>(banners, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<BannerDTO> getBannerById(@PathVariable Long id) {
		try {
			BannerDTO banner = bannerService.getBannerById(id);
			return new ResponseEntity<>(banner, HttpStatus.OK);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<BannerDTO> updateBanner(@PathVariable Long id, @RequestBody BannerDTO bannerDTO) {
		try {
			BannerDTO updatedBanner = bannerService.updateBanner(id, bannerDTO);
			return new ResponseEntity<>(updatedBanner, HttpStatus.OK);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deleteBanner(@PathVariable Long id) {
		try {
			bannerService.deleteBanner(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}