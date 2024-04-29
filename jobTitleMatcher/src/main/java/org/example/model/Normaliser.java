package org.example.model;
import java.util.Arrays;
import java.util.List;

public class Normaliser {
    private List<String> normalizedJobTitles;

    public Normaliser(List<String> normalizedJobTitles) {
        this.normalizedJobTitles = normalizedJobTitles;
    }

    public String normalise(String jobTitle) {
        if (jobTitle == null || jobTitle.trim().isEmpty()) {
            return jobTitle;
        }

        String lowerCaseJobTitle = jobTitle.toLowerCase();
        String[] words = lowerCaseJobTitle.split(" ");

        double maxScore = normalizedJobTitles.stream()
                .map(normalizedJobTitle -> calculateQualityScore(words, normalizedJobTitle))
                .max(Double::compareTo)
                .orElse(0.0);

        if (maxScore < 0.5) {
            return jobTitle;
        }

        return normalizedJobTitles.stream()
                .filter(normalizedJobTitle -> calculateQualityScore(words, normalizedJobTitle) == maxScore)
                .findFirst()
                .orElse(jobTitle);
    }

    private double calculateQualityScore(String[] words, String normalizedJobTitle) {
        String lowerCaseNormalizedJobTitle = normalizedJobTitle.toLowerCase();
        return Arrays.stream(words)
                .filter(lowerCaseNormalizedJobTitle::contains)
                .count() / (double) words.length;
    }
}
