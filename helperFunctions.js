const sortData = (sortBy, sortOrder) => {
    function accending(data1, data2) {
      return data1[sortBy] - data2[sortBy];
    }
    function decending(data1, data2) {
      return data2[sortBy] - data1[sortBy];
    }
    switch (sortOrder) {
      case "a":
        return accending;
      case "d":
        return decending;
      default:
        return accending;
    }
  };
  
  const filterBy = (data, category, choice) => {
    return data.filter((hotel) => {
      return (
        String(hotel[category]).toLowerCase() === String(choice).toLowerCase()
      );
    });
  };
  
  module.exports = {
    sortData,
    filterBy,
  };
  