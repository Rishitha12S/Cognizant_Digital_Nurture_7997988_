import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) {
        try {
            ServerSocket server = new ServerSocket(5000);

            System.out.println("Server Started...");
            Socket socket = server.accept();

            System.out.println("Client Connected");

            DataInputStream in =
                    new DataInputStream(socket.getInputStream());

            String msg = in.readUTF();

            System.out.println("Client Message: " + msg);

            socket.close();
            server.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}