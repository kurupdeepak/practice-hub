export interface BloodGlucoseEntry{
  id:number,
  userid:number,
  value:number,
  createdDate:string,
  isMeal?:boolean,
  riskLevel?:string,
  beforeMeal?:boolean,
  afterMeal?:boolean,
  mealTime?:string
  updatedTime?:string
  insulin?:number,
  carbs?:number,
  calories?:number,
  food?:string,
  notes?:string,
  correction?:number
}
