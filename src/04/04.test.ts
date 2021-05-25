import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New york",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                id: 2, buildedAt: 2008, repaired: true,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }
        ],
        governmentBuildings: [
            {
                type: "Hospital", budget: 40000, staffCount: 400,
                address: {
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                type: "Fire-station", budget: 40000, staffCount: 1000,
                address: {
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        citizensNumber: 1000000

    }
})

test("Houses should be destroyed", ()=>{
    demolishHousesOnTheStreet(city,"Happy street");
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})


test("buldings with correct staff count", ()=>{
  let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("Fire-station");
})