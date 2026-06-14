package com.example.demo.entity;
import jakarta.persistence.*;

@Entity
public class Algorithm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name, category, timeComplexity, spaceComplexity;

    public Long getId(){
        return id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getCategory(){
        return category;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public String getTimeComplexity(){
        return timeComplexity;
    }

    public void setTimeComplexity(String timeComplexity){
        this.timeComplexity = timeComplexity;
    }

    public String getSpaceComplexity(){
        return spaceComplexity;
    }

    public void setSpaceComplexity(String spaceComplexity){
        this.spaceComplexity = spaceComplexity;
    }
}