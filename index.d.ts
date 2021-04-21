interface stats {
  Region: string;
  firstDose: number;
  objectPopulation: number;
  secondDose: number;
  lastDate: string;
}
interface Props {
  allStats: stats[];
}
