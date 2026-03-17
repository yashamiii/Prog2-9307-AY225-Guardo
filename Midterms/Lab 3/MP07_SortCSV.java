import java.io.*;
import java.util.*;

/*
MP07 - Sort records alphabetically by a column
*/

public class MP07_SortCSV {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter CSV file path: ");
        String filePath = scanner.nextLine();

        System.out.print("Enter column index to sort by: ");
        int columnIndex = scanner.nextInt();

        List<String[]> records = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {

            String line;

            while ((line = br.readLine()) != null) {
                records.add(line.split(","));
            }

            // Sort records
            records.sort((a, b) -> a[columnIndex].compareToIgnoreCase(b[columnIndex]));

            System.out.println("\nSorted Records:");

            for (String[] row : records) {
                System.out.println(String.join(", ", row));
            }

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        scanner.close();
    }
}