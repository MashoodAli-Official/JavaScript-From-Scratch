// Sample data
const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
  ];
  
  // Search function
  function search(query) {
    const results = data.filter(item => {
      const searchTerm = query.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm)
      );
    });
    return results;
  }
  
  // Example usage
  const query = 'doe';
  const results = search(query);
  console.log(results);
  // Output:
  // [
  //   { id: 1, name: 'John Doe', email: 'john@example.com' },
  //   { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  // ]