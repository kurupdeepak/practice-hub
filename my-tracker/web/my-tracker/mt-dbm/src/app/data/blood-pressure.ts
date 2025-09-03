export interface BloodPressureEntry{
  id:number,
  userid:number,
  createdDate:string,
  createdTime:string,
  updatedTime?:string
  systolic:number,
  distolic:number,
  pulse:number,
  notes?:string,
  user?:string,
}
