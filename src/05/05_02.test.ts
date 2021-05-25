import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitleOfGovermentsBuildings, getStreetsTitleOfHouses} from "./05_02";



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

test ("list of streets titles ofgoverments buildings", ()=>{
    let streetsNames = getStreetsTitleOfGovermentsBuildings(city.governmentBuildings)
    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");

})

test ("list of streets title", ()=>{
    let streets = getStreetsTitleOfHouses(city.houses)
    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");

})


test("rasdasfasdgasdgasg", ()=>{
    let messages = createMessages (city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello from White street");
    expect(messages[1]).toBe("Hello from Happy street");
    expect(messages[2]).toBe("Hello from Happy street");
})