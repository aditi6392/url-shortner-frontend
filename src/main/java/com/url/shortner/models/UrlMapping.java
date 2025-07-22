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
    private String original_url;
    private String short_url;
    private long click_count=0;
    private LocalDateTime createdDate;

    @ManyToOne
    @JoinColumn(name="user_id")
    private  User user;


    @OneToMany(mappedBy="urlMapping")
    private List<ClickEvent> clickEvents;
}
