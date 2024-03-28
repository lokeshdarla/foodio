export const fetchFoodData = async () => {
  try {
    const response = await fetch('http://192.168.1.100:3000/fooditems/66051013c598221438b158a9');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
