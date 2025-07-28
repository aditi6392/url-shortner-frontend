package com.url.shortner.dtos;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UrlMappingDTO {
    private long id;
    private String originalUrl;
    private String shortUrl;
    private long clickCount;
    private LocalDateTime createdDate;
    private String username;

}
