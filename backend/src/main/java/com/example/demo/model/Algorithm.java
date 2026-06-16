package com.example.demo.model;

public class Algorithm {

    private String name;
    private String category;
    private String timeComplexity;
    private String spaceComplexity;


    public Algorithm(
            String name,
            String category,
            String timeComplexity,
            String spaceComplexity
    ) {
        this.name = name;
        this.category = category;
        this.timeComplexity = timeComplexity;
        this.spaceComplexity = spaceComplexity;
    }


    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getTimeComplexity() {
        return timeComplexity;
    }

    public String getSpaceComplexity() {
        return spaceComplexity;
    }
}