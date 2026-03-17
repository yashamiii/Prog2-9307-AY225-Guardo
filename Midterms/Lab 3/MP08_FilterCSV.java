import java.io.*;
import java.util.*;

/*
MP08 - Filter records using a keyword
*/

public class MP08_FilterCSV {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter CSV file path: ");
        String filePath = scanner.nextLine();

        System.out.print("Enter keyword to filter: ");
        String keyword = scanner.nextLine();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {

            String line;

            System.out.println("\nMatching Records:");

            while ((line = br.readLine()) != null) {

                if (line.toLowerCase().contains(keyword.toLowerCase())) {
                    System.out.println(line);
                }
            }

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        scanner.close();
    }
}