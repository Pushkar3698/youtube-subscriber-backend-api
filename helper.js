// this function takes in the array of all subscribers object and is returned as new array of id,name and sunscribedChannel and thus filtering out the rest of the things like the dates.

const refactorTillNames = (arr) => {
  return arr.map((el, i) => {
    return {
      id: el._id,
      name: el.name,
      subscribedChannel: el.subscribedChannel,
    };
  });
};
// exporting the function created
module.exports = refactorTillNames;
