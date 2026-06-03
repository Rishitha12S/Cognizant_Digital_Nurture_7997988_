import java.util.List;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {

        List<Person> people = List.of(
            new Person("Ravi", 20),
            new Person("Kiran", 17),
            new Person("Teja", 25)
        );

        System.out.println("All Persons:");
        people.forEach(System.out::println);

        System.out.println("\nAge >= 18:");

        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}