export const Business = (busObj) => {
    return `
        <section class="business-list-entry">
            <h3 class="business-list-name">${busObj.companyName}</3>
            <div class="business-list-address">
                <p class="business-list-address-street">${busObj.addressFullStreet}</p>
                <p class="business-list-address-csz">${busObj.addressCity}, ${busObj.addressStateCode} ${busObj.addressZipCode}</p>
            </div>
        </section>
    `
};

export const Agent = (busObj) => {
    return `
        <section class="agent-list-entry">
            <h3 class="agent-list-name">${busObj.fullName}</h3>
            <p class="agent-list-contact">${busObj.company} | ${busObj.phoneNumber}</p>
        </section>
    `
}