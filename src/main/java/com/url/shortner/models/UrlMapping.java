package com.url.shortner.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
public class UrlMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "original_url")
    private String originalUrl;
    @Column(name = "short_url")
    private String shortUrl;
    @Column(name = "click_count")
    private long clickCount=0;
    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @ManyToOne
    @JoinColumn(name="user_id")
    private  User user;


    @OneToMany(mappedBy="urlMapping")
    private List<ClickEvent> clickEvents;

}
