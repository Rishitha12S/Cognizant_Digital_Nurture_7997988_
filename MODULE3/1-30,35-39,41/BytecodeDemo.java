public class BytecodeDemo {
    public void greet() {
        System.out.println("Hello Bytecode");
    }

    public static void main(String[] args) {
        BytecodeDemo obj = new BytecodeDemo();
        obj.greet();
    }
}