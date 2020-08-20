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