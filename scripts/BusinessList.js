import {useBusinesses, newYorkBusinesses, manufacturingBusinesses, agentNames} from "./BusinessProvider.js";
import {Business, Agent} from "./Business.js";

const contentTarget = document.querySelector(".business-list");
const contentTargetNY = document.querySelector(".business-list-newYork");
const contentTargetManufacturing = document.querySelector(".business-list-manufacturing");
const contentTargetAgents = document.querySelector(".agent-list");

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

export const AgentList = () => {
    const agentArray = agentNames;
    contentTargetAgents.innerHTML = "<h2>Purchasing Agents</h2>"

    agentArray.forEach(
        (agentObject) => {
            contentTargetAgents.innerHTML += Agent(agentObject);
        }
    )
};