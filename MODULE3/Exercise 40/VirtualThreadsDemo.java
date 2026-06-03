public class VirtualThreadsDemo {

    public static void main(String[] args) throws InterruptedException {

        // Virtual Threads Test
        long startVirtual = System.currentTimeMillis();

        Thread[] virtualThreads = new Thread[100000];

        for (int i = 0; i < 100000; i++) {
            int taskId = i;

            virtualThreads[i] = Thread.startVirtualThread(() -> {
                System.out.println("Virtual Thread: " + taskId);
            });
        }

        for (Thread t : virtualThreads) {
            t.join();
        }

        long endVirtual = System.currentTimeMillis();

        System.out.println("\nVirtual Threads Time: "
                + (endVirtual - startVirtual) + " ms");

        // Traditional Threads Test
        long startTraditional = System.currentTimeMillis();

        Thread[] platformThreads = new Thread[1000];

        for (int i = 0; i < 1000; i++) {
            int taskId = i;

            platformThreads[i] = new Thread(() -> {
                System.out.println("Platform Thread: " + taskId);
            });

            platformThreads[i].start();
        }

        for (Thread t : platformThreads) {
            t.join();
        }

        long endTraditional = System.currentTimeMillis();

        System.out.println("\nTraditional Threads Time: "
                + (endTraditional - startTraditional) + " ms");
    }
}