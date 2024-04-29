package org.example.spock

import org.example.model.Normaliser
import spock.lang.Specification

class NormaliserSpec extends Specification {
    Normaliser normaliser
    List<String> normalizedJobTitles

    def setup() {
        normalizedJobTitles = ["Architect", "Software engineer", "Quantity surveyor", "Accountant"]
        normaliser = new Normaliser(normalizedJobTitles)
    }

    def "test normalise"() {
        when:
        String result = normaliser.normalise(jobTitle)

        then:
        result == expected

        where:
        jobTitle                   || expected
        'Java engineer'            || 'Software engineer'
        'C# engineer'              || 'Software engineer'
        'Accountant'               || 'Accountant'
        'Chief Accountant'         || 'Accountant'
        'Senior Architect'         || 'Architect'
        'Junior Quantity surveyor' || 'Quantity surveyor'
        'Software developer'       || 'Software engineer'
        'Unknown'                  || 'Unknown'
    }
}
