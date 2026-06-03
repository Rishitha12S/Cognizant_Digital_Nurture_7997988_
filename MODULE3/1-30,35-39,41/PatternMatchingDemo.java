public class PatternMatchingDemo {

    static void checkType(Object obj) {

        if (obj instanceof Integer) {
            System.out.println("Integer: " + obj);
        } else if (obj instanceof String) {
            System.out.println("String: " + obj);
        } else if (obj instanceof Double) {
            System.out.println("Double: " + obj);
        } else {
            System.out.println("Unknown Type");
        }
    }

    public static void main(String[] args) {

        checkType(100);
        checkType("Hello");
        checkType(99.99);
    }
}
