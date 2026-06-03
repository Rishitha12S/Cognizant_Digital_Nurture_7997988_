import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 5000);

            DataOutputStream out =
                    new DataOutputStream(socket.getOutputStream());

            out.writeUTF("Hello Server");

            out.flush();
            socket.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}