package org.example.junit;

import org.example.model.Normaliser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class NormaliserTest {
    private Normaliser normaliser;
    private List<String> normalizedJobTitles;

    @BeforeEach
    public void setUp() {
        // Given
        normalizedJobTitles = Arrays.asList("Architect", "Software engineer", "Quantity surveyor", "Accountant");
        normaliser = new Normaliser(normalizedJobTitles);
    }

    @Test
    public void testNormalise() {
        // When
        String normalisedJavaEngineer = normaliser.normalise("Java engineer");
        String normalisedCEngineer = normaliser.normalise("C# engineer");
        String normalisedChiefAccountant = normaliser.normalise("Chief Accountant");
        String normalisedArchitect = normaliser.normalise("Architect");
        String normalisedQuantitySurveyor = normaliser.normalise("Quantity surveyor");
        String normalisedSeniorArchitect = normaliser.normalise("Senior Architect");
        String normalisedJuniorSoftwareEngineer = normaliser.normalise("Junior Software engineer");

        // Then
        assertEquals("Software engineer", normalisedJavaEngineer);
        assertEquals("Software engineer", normalisedCEngineer);
        assertEquals("Accountant", normalisedChiefAccountant);
        assertEquals("Architect", normalisedArchitect);
        assertEquals("Quantity surveyor", normalisedQuantitySurveyor);
        assertEquals("Architect", normalisedSeniorArchitect);
        assertEquals("Software engineer", normalisedJuniorSoftwareEngineer);
    }

    @Test
    public void testNormaliseWithNoMatch() {
        // When
        String normalisedUnknownJobTitle = normaliser.normalise("Unknown job title");

        // Then
        assertEquals("Unknown job title", normalisedUnknownJobTitle);
    }

    @Test
    public void testNormaliseWithEmptyString() {
        // When
        String normalisedEmptyString = normaliser.normalise("");

        // Then
        assertEquals("", normalisedEmptyString);
    }

    @Test
    public void testNormaliseWithNull() {
        // When
        String normalisedNull = normaliser.normalise(null);

        // Then
        assertEquals(null, normalisedNull);
    }
}
