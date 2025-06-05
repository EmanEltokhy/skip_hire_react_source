const SkipService = {

  baseUrl: 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft',

  getAllSkips: async function () {
    try {
      console.log('here');
      console.log(this.baseUrl);
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const apiData = await response.json();

      const skips = apiData.map(skip => ({
        id: skip.id,
        size: skip.size,
        hirePeriod: skip.hire_period_days,
        price: Math.trunc(skip.price_before_vat * (1 + (skip.vat/100))), 
        roadRestriction: !skip.allowed_on_road, 
        image: `skip-${skip.size}.png`, 
      }));

      return skips;
    } catch (error) {
      console.log('Error fetching skips:', error);
      throw error;
    }
  },

  // Get a single skip by ID
  getSkipById: async (id) => {
    try {
      const skips = await SkipService.getAllSkips();
      return skips.find(skip => skip.id === id) || null;
    } catch (error) {
      console.log(`Error fetching skip with id ${id}:`, error);
      throw error;
    }
  }
};

export default SkipService;
