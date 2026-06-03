import java.util.concurrent.*;

public class TaskExecutor {

    public static void main(String[] args) throws Exception {

        ExecutorService service = Executors.newFixedThreadPool(2);

        Callable<String> task1 = () -> "Task 1 Completed";
        Callable<String> task2 = () -> "Task 2 Completed";

        Future<String> result1 = service.submit(task1);
        Future<String> result2 = service.submit(task2);

        System.out.println(result1.get());
        System.out.println(result2.get());

        service.shutdown();
    }
}