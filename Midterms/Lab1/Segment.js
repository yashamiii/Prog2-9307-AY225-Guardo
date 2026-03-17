const customers = [
    { name: "Alice", totalPurchases: 120000 },
    { name: "Bob", totalPurchases: 75000 },
    { name: "Charlie", totalPurchases: 30000 },
    { name: "David", totalPurchases: 5000 },
    { name: "Eve", totalPurchases: 55000 }
];

const segments = { Platinum: [], Gold: [], Silver: [], Bronze: [] };

customers.forEach(customer => {
    let segment;
    const amount = customer.totalPurchases;

    if (amount > 100000) segment = "Platinum";
    else if (amount >= 50000) segment = "Gold";
    else if (amount >= 10000) segment = "Silver";
    else segment = "Bronze";

    segments[segment].push(customer.name);
});

// Output Results
for (const [tier, list] of Object.entries(segments)) {
    console.log(`${tier} (${list.length}): ${list.join(", ")}`);
}