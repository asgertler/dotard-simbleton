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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            const searchArray = useBusinesses();

            const foundBusiness = searchArray.find(business => {
                return business.companyName.includes(keyPressEvent.target.value)
            });

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}
                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });

const agentSearchResultArticle = document.querySelector(".foundAgents")

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            const searchArray = useBusinesses();

            const foundAgent = searchArray.find(agent => {
                return agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            });

            agentSearchResultArticle.innerHTML = `
                <h2>
                ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundAgent.companyName}
                </section>
                <section>
                ${foundAgent.addressFullStreet}
                </section>
                <section>
                ${foundAgent.addressCity},
                ${foundAgent.addressStateCode}
                ${foundAgent.addressZipCode}
                </section>
            `;
        }
    });