import {useBusinesses} from "./BusinessProvider.js";
import {newYorkBusinesses} from "./BusinessProvider.js";
import {manufacturingBusinesses} from "./BusinessProvider.js";
import {Business} from "./Business.js";

const contentTarget = document.querySelector(".business-list");
const contentTargetNY = document.querySelector(".business-list-newYork");
const contentTargetManufacturing = document.querySelector(".business-list-manufacturing");

export const BusinessList = () => {
    const businessArray = useBusinesses();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject);
        }
    )
};

export const NYBusinessList = () => {
    const businessArray = newYorkBusinesses;
    contentTargetNY.innerHTML = "<h2>New York Businesses</h2>"

    businessArray.forEach(
        (businessObject) => {
            contentTargetNY.innerHTML += Business(businessObject);
        }
    )
};

export const ManufacturingBusinessList = () => {
    const businessArray = manufacturingBusinesses;
    contentTargetManufacturing.innerHTML = "<h2>Manufacturing Businesses</h2>"

    businessArray.forEach(
        (businessObject) => {
            contentTargetManufacturing.innerHTML += Business(businessObject);
        }
    )
};