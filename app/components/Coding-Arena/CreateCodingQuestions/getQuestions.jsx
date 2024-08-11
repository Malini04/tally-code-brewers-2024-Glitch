export const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/problems", {
        cache: "no-store",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching questions:", error);
      return []; // Return an empty array if there's an error
    }
  };
  