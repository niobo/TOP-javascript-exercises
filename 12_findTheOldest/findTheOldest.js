const findTheOldest = function(people) {
    max = people[0];
    if (!max.yearOfDeath) {
        max.yearOfDeath = new Date().getFullYear();
    }
    for (person of people.slice(1)) {
        if (person.yearOfDeath) {
            if (person.yearOfDeath - person.yearOfBirth > max.yearOfDeath - max.yearOfBirth) {
                max = person;
            }
        } else {
            age = new Date().getFullYear() - person.yearOfBirth;
            if (age > max.yearOfDeath - max.yearOfBirth) {
                person.yearOfDeath = new Date().getFullYear();
                max = person;
            }
        }
    }
    return max;
};

function age (birth, death) {
    if (!death) {
        return Infinity;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
