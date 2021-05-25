import {GovernmentBuildingType, HouseType, StreetType} from "../02/02_02";

export const getStreetsTitleOfGovermentsBuildings = (buildings:Array<GovernmentBuildingType>) =>{

    return buildings.map( b=> b.address.street.title)

}

export const getStreetsTitleOfHouses = (houses:Array<HouseType>) =>{

    return houses.map(s=> s.address.street.title)

}

export const createMessages =(houses:Array<HouseType>) =>{
    return houses.map(h=> `Hello from ${h.address.street.title}`)
}