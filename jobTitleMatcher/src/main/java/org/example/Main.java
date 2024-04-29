package org.example;

import org.example.model.Normaliser;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> normalizedJobTitles = Arrays.asList("Architect", "Software engineer", "Quantity surveyor", "Accountant");
        Normaliser normaliser = new Normaliser(normalizedJobTitles);

        String[] jobTitles = {"Java engineer", "C# engineer", "Chief Accountant"};
        for (String jobTitle : jobTitles) {
            String normalisedTitle = normaliser.normalise(jobTitle);
            System.out.println("Original Title: " + jobTitle);
            System.out.println("Normalised Title: " + normalisedTitle);
            System.out.println();
        }
    }
}