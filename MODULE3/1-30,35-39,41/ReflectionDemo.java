import java.lang.reflect.Method;

public class ReflectionDemo {

    public void showMessage() {
        System.out.println("Reflection Example");
    }

    public static void main(String[] args) throws Exception {

        Class<?> cls = ReflectionDemo.class;

        Method[] methods = cls.getDeclaredMethods();

        for (Method m : methods) {
            System.out.println("Method: " + m.getName());
        }

        ReflectionDemo obj = new ReflectionDemo();

        Method method = cls.getDeclaredMethod("showMessage");
        method.invoke(obj);
    }
}