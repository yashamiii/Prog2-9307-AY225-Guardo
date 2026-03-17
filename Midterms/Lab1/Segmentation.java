import java.util.*;

class Customer {
    String name;
    double totalPurchases;

    Customer(String name, double totalPurchases) {
        this.name = name;
        this.totalPurchases = totalPurchases;
    }
}

public class Segmentation {
    public static void main(String[] args) {
        List<Customer> customers = Arrays.asList(
            new Customer("Alice", 120000),
            new Customer("Bob", 75000),
            new Customer("Charlie", 30000),
            new Customer("David", 5000),
            new Customer("Eve", 55000)
        );

        Map<String, List<String>> segments = new LinkedHashMap<>();
        segments.put("Platinum", new ArrayList<>());
        segments.put("Gold", new ArrayList<>());
        segments.put("Silver", new ArrayList<>());
        segments.put("Bronze", new ArrayList<>());

        for (Customer c : customers) {
            String tier;
            if (c.totalPurchases > 100000) tier = "Platinum";
            else if (c.totalPurchases >= 50000) tier = "Gold";
            else if (c.totalPurchases >= 10000) tier = "Silver";
            else tier = "Bronze";

            segments.get(tier).add(c.name);
        }

        // Output Results
        segments.forEach((tier, list) -> {
            System.out.println(tier + " (" + list.size() + "): " + String.join(", ", list));
        });
    }
}