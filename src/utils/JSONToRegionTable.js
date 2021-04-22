const {populationByRegionOlderThan18} = require('../components/Table/populationByRegion.json');

function joinJsonintoDataForTable(json) {
  const objectPrimera = json.filter((item) => item.Dosis === 'Primera');
  const objectSegunda = json.filter((item) => item.Dosis === 'Segunda');

  const firstDoseData = objectPrimera.map((item) => {
    const keys = Object.entries(item);
    const lastKeys = keys[keys.length - 1];
    const firstDose = parseInt(lastKeys[1]);
    const {Region} = item;
    const objectPopulation = populationByRegionOlderThan18[Region];

    return {
      Region: item.Region,
      firstDose,
      objectPopulation,
    };
  });

  const secondDoseData = objectSegunda.map((item) => {
    const keys = Object.entries(item);
    const lastKeys = keys[keys.length - 1];

    const secondDose = parseInt(lastKeys[1]);
    const lastDate = lastKeys[0];

    return {
      Region: item.Region,
      secondDose,
      lastDate,
    };
  });

  const groupData = [];

  for (let i = 0; i < firstDoseData.length; i++) {
    groupData[i] = {
      ...firstDoseData[i],
      ...secondDoseData[i],
    };
  }

  return groupData;
}
export default joinJsonintoDataForTable;
