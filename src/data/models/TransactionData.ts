interface Transaction {
    transactionId:string;
    description:string;
    amount:string;
    title:string;
    date:string;
    transactionType:string;
    transactionSource:string;
}

// Function to generate a single transaction with actual values
function generateTransaction(
    transactionId: string,
    description: string,
    amount: string,
    title: string,
    date: string,
    transactionType: string,
    transactionSource: string
): Transaction {
    return {
        transactionId,
        description,
        amount,
        title,
        date,
        transactionType,
        transactionSource
    };
}

// Creating an array of transactions with actual values
export const transactions: Transaction[] = [
    generateTransaction("1", "Grocery shopping", "50.00", "Groceries", "2024-02-16", "expense", "Grocery Store"),
    generateTransaction("2", "Salary payment", "3000.00", "Salary", "2024-02-15", "income", "Company XYZ"),
    generateTransaction("3", "Electricity bill", "100.00", "Electricity", "2024-02-14", "expense", "Utility Company"),
    generateTransaction("4", "Dinner with friends", "80.00", "Dinner", "2024-02-13", "expense", "Restaurant"),
    generateTransaction("5", "Taxi fare", "20.00", "Transportation", "2024-02-12", "expense", "Taxi Service"),
    generateTransaction("6", "Freelance payment", "500.00", "Freelance Work", "2024-02-11", "income", "Client ABC"),
    generateTransaction("7", "Internet subscription", "60.00", "Internet", "2024-02-10", "expense", "Internet Provider"),
    generateTransaction("8", "Birthday gift", "30.00", "Gift", "2024-02-09", "expense", "Gift Shop"),
    generateTransaction("9", "Dividend received", "200.00", "Dividend", "2024-02-08", "income", "Investment Company"),
    generateTransaction("10", "Movie tickets", "40.00", "Entertainment", "2024-02-07", "expense", "Cinema"),
];
