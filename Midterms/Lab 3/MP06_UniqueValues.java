import java.io.*;
import java.util.*;

/*
 MP06 - Display Unique Values in a Column
 This program reads a CSV file and prints unique values
 from a user-specified column.
*/

public class MP06_UniqueValues {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Ask user for dataset path
        System.out.print("Enter CSV file path: ");
        String filePath = scanner.nextLine();

        // Ask which column index to process
        System.out.print("Enter column index (starting at 0): ");
        int columnIndex = scanner.nextInt();

        // Set to store unique values
        Set<String> uniqueValues = new HashSet<>();

        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {

            String line;

            // Read each line from CSV
            while ((line = br.readLine()) != null) {

                String[] values = line.split(",");

                if (columnIndex < values.length) {
                    uniqueValues.add(values[columnIndex]);
                }
            }

            System.out.println("\nUnique values in column " + columnIndex + ":");

            for (String value : uniqueValues) {
                System.out.println(value);
            }

        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }

        scanner.close();
    }
}