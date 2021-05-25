import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairedHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(()=>{
    city = {
        title:"New york",
        houses: [
            {
            buildedAt: 2012, repaired:false,
            address:{ number:100,street:{title:"White street"}}
            },
            {
            buildedAt: 2008, repaired:true,
            address:{ number:100,street:{title:"Happy street"}}
            },
            {
            buildedAt: 2020, repaired:false,
            address:{ number:101,street:{title:"Happy street"}}
            }
            ],
        governmentBuildings:[
            {type:"Hospital", budget:40000, staffCount:1000,
                address:{
                    street:{
                        title: "White street"
                    }
            }
            },
            {type:"Fire-station", budget:40000, staffCount:1000,
                address:{
                    street:{
                        title: "Happy street"
                    }
                }
            }
        ],
        citizensNumber:1000000

    }
})

test("test city should contains 3 houses", () =>{
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(100);
    expect(city.houses[0].address.street.title).toBe("White street")

    expect(city.houses[1].buildedAt).toBe(2008);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe("Happy street")

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(101);
    expect(city.houses[2].address.street.title).toBe("Happy street")


} )
test("test city should contains hospital and fire station", () =>{
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("Hospital");
    expect(city.governmentBuildings[0].budget).toBe(40000);
    expect(city.governmentBuildings[0].staffCount).toBe(1000);
    expect(city.governmentBuildings[0].address.street.title).toBe("White street")

    expect(city.governmentBuildings[1].type).toBe("Fire-station");
    expect(city.governmentBuildings[1].budget).toBe(40000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000);
    expect(city.governmentBuildings[1].address.street.title).toBe("Happy street")

} )


test ("Budget should be change for Fire-station",()=>{
    addMoneyToBudget(city.governmentBuildings[0], 20000);

    expect(city.governmentBuildings[0].budget).toBe(60000)

})

test ("Budget should be change for Hospital",()=>{
    addMoneyToBudget(city.governmentBuildings[1], 10000);
    expect(city.governmentBuildings[1].budget).toBe(50000)


})




test ("staff should be increased", () =>{
    repairedHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy();
})

test ("House should be increased", () =>{
    toFireStaff(city.governmentBuildings[0], 20);
   expect(city.governmentBuildings[0].staffCount).toBe(980)

})

test ("House should be repaired", () =>{
    toHireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(1020)

})

test ("Greeding message should be correct for cbity", () =>{
   const message = createMessage(city)
    expect(message).toBe("Hello New york citizens. I want you be happy. All 1000000 peoples")

})