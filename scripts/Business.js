export const Business = (busObj) => {
    return `
        <section class="business-list-entry">
            <h2 class="business-list-name">${busObj.companyName}</h2>
            <div class="business-list-address">
                <p class="business-list-address-street">${busObj.addressFullStreet}</p>
                <p class="business-list-address-csz">${busObj.addressCity}, ${busObj.addressState} ${busObj.addressZipCode}</p>
            </div>
        </section>
    `
};