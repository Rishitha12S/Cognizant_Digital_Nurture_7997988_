import java.sql.*;

public class Exercise32_StudentDAO {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "root"; // nee MySQL password

        try {
            Connection con =
                DriverManager.getConnection(url, user, password);

            // INSERT
            String insertQuery =
                "INSERT INTO students(id,name) VALUES(?,?)";

            PreparedStatement ps1 =
                con.prepareStatement(insertQuery);

            ps1.setInt(1, 3);
            ps1.setString(2, "Kiran");

            ps1.executeUpdate();

            System.out.println("Student Inserted");

            // UPDATE
            String updateQuery =
                "UPDATE students SET name=? WHERE id=?";

            PreparedStatement ps2 =
                con.prepareStatement(updateQuery);

            ps2.setString(1, "Kiran Kumar");
            ps2.setInt(2, 3);

            ps2.executeUpdate();

            System.out.println("Student Updated");

            con.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}