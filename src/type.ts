export type Journey = {
    id: number,
    departure: Date,
    return: Date,
    departurestation_id: number,
    departurestation_name: string,
    returnstation_id: number
    returnstation_name: string;
    covereddistance: number,
    duration: number
}

export type Station = {
    FID: number,
    id?: number,
    name?: string,
    address: string,
    city: string,
    operator: string,
    capacities: number
    x: number
    y: number
  }

export type StationDetail={

    stationNme?:string
    stationAdress?: string,
    capacity?:number,
    city?: string,
    returnCount?:number,
    departureCount?:number,
    count?: number
  }

  export type IJouney = {
      journeyList: Journey[]
      total: number
  }

 export  interface JourneyQueryOptions {
    page: number
    pageSize: number
    search:string
    sortField:string
    sortDirection: string
}


export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}