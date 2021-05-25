import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    return s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, buget: number) => {
    building.budget += buget;
}

export const repairedHouse = (house: HouseType) => {
    house.repaired = true
}


export const toFireStaff = (building: GovernmentBuildingType, staffToFire: number) => {
    building.staffCount -= staffToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffToHire: number) => {
    building.staffCount += staffToHire;
}

export const createMessage = (city: CityType) => {

    return "Hello " + city.title +" citizens. I want you be happy. All " + city.citizensNumber + " peoples";
}