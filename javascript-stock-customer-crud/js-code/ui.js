// API'den gelen metinler HTML olarak yorumlanmasın diye escape edilir (XSS koruması)
const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const passiveIcon = '<i class="fa-regular fa-circle-xmark"></i>';
const activeIcon =
  '<span class="material-symbols-outlined"> task_alt </span>';

// notification
export const notify = (text, status = true) => {
  Toastify({
    text: text,
    style: {
      background: status
        ? 'linear-gradient(to right, #00b09b, #96c93d)'
        : 'crimson',
      borderRadius: '10px',
    },
  }).showToast();
};

// Stock UI Functions
export const renderStocks = (data) => {
  const tbody = document.querySelector('.stocks table tbody');
  tbody.innerHTML = data
    .map(
      (stock) => `<tr data-id="${escapeHtml(stock.ID)}" >
              <td><span>${escapeHtml(stock.Name)}</span></td>
              <td><span>${escapeHtml(stock.SellerCode)}</span></td>
              <td><span>${escapeHtml(stock.UnitName)}</span></td>
              <td><span>${escapeHtml(stock.Price)}</span></td>
              <td><span>${escapeHtml(stock.TaxPercent)}</span></td>
              <td>${stock.IsActive ? activeIcon : passiveIcon}</td>
              <td>
                <div class="btn">
                <button data-action="delete">SİL</button>
                <button data-action="edit">DÜZENLE</button>
                </div>
              </td>
            </tr>
      `
    )
    .join(' ');
};

export const removeStockRow = (row) => {
  const tbody = document.querySelector('.stocks table tbody');
  tbody.removeChild(row);
};

export const renderNewStocks = (data) => {
  const tbody = document.querySelector('.stocks table tbody');
  tbody.insertAdjacentHTML(
    'afterbegin',
    `<tr>
  <td><span>${escapeHtml(data.Name)}</span></td>
  <td><span>${escapeHtml(data.SellerCode)}</span></td>
  <td><span>${escapeHtml(data.UnitName)}</span></td>
  <td><span>${escapeHtml(data.Price)} ₺</span></td>
  <td><span>${escapeHtml(data.TaxPercent)}</span></td>
  <td>${data.IsActive ? activeIcon : passiveIcon}</td>
  <td>
  <div class="btn">
    SIRAYA ALINDI
  </div>
</td>
</tr>
`
  );
};

export const renderEditStocks = (data) => {
  const existingRow = document.querySelector(
    `tr[data-id="${escapeHtml(data.ID)}"]`
  );

  if (existingRow) {
    // Satır zaten varsa güncelle
    existingRow.innerHTML = `
      <td><span>${escapeHtml(data.Name)}</span></td>
      <td><span>${escapeHtml(data.SellerCode)}</span></td>
      <td><span>${escapeHtml(data.UnitName)}</span></td>
      <td><span>${escapeHtml(data.Price)}</span></td>
      <td><span>${escapeHtml(data.TaxPercent)}</span></td>
      <td>${data.IsActive ? activeIcon : passiveIcon}</td>
      <td>
       <div class="btn">
       <button data-action="delete">SİL</button>
       <button data-action="edit">DÜZENLE</button>
     </div>
     </td>
    `;
  }
};

// Customer UI Functions
export const renderCustomers = (data) => {
  const tbody = document.querySelector('.customers table tbody');
  tbody.innerHTML = data
    .map(
      (customer) => `
       <tr data-id="${escapeHtml(customer.ID)}">
        <td><span class="Name">${escapeHtml(customer.Name)}</span></td>
        <td><span class="TaxNumber">${escapeHtml(customer.TaxNumber)}</span></td>
        <td><span class="TaxDepartment">${escapeHtml(customer.TaxDepartment)}</span></td>
        <td><span class="Email">${escapeHtml(customer.Email ? customer.Email : 'İçerik Bulunamadı')}</span></td>
        <td>
          <div class="location">
            <div>
              <i class="fa-solid fa-city"></i>
              <span class="City">${escapeHtml(customer.City)}</span>
            </div>
            <div>
              <i class="fa-solid fa-map-location-dot"></i>
              <span class="Country">${escapeHtml(customer.Country)}</span>
            </div>
          </div>
        </td>
        <td>
          <div class="btn">
            <button data-action="delete" data-id="${escapeHtml(customer.ID)}">SİL</button>
            <button data-action="edit" data-id="${escapeHtml(customer.ID)}">DÜZENLE</button>
          </div>
        </td>
      </tr>`
    )
    .join('');
};

export const removeCustomerRow = (row) => {
  const tbody = document.querySelector('.customers table tbody');
  tbody.removeChild(row);
};

export const renderNewCustomers = (data) => {
  const tbody = document.querySelector('.customers table tbody');
  tbody.insertAdjacentHTML(
    'afterbegin',
    `<tr>
         <td><span>${escapeHtml(data.Name)}</span></td>
         <td><span>${escapeHtml(data.TaxNumber)}</span></td>
         <td><span>${escapeHtml(data.TaxDepartment)}</span></td>
         <td><span>${escapeHtml(customer.Email)}</span></td>
         <td>
           <div class="location">
             <div>
               <i class="fa-solid fa-city"></i>
               <p>${escapeHtml(customer.City)}</p>
             </div>
             <div>
               <i class="fa-solid fa-map-location-dot"></i>
               <p>${escapeHtml(customer.Country)}</p>
             </div>
           </div>
         </td>
         <td>
           <div class="btn">SIRAYA ALINDI</div>
         </td>
      </tr>

`
  );
};

export const renderEditCustomers = (data) => {
  const existingRow = document.querySelector(
    `tr[data-id="${escapeHtml(data.ID)}"]`
  );

  if (existingRow) {
    existingRow.innerHTML = `
         <td><span>${escapeHtml(data.Name)}</span></td>
         <td><span>${escapeHtml(data.TaxNumber)}</span></td>
         <td><span>${escapeHtml(data.TaxDepartment)}</span></td>
         <td><span>${escapeHtml(data.Email)}</span></td>
         <td>
           <div class="location">
             <div>
               <i class="fa-solid fa-city"></i>
               <p>${escapeHtml(data.City)}</p>
             </div>
             <div>
               <i class="fa-solid fa-map-location-dot"></i>
               <p>${escapeHtml(data.Country)}</p>
             </div>
           </div>
         </td>
         <td>
          <div class="btn">
            <button data-action="delete" data-id="${escapeHtml(data.ID)}">SİL</button>
            <button data-action="edit" data-id="${escapeHtml(data.ID)}">DÜZENLE</button>
          </div>
         </td>
    `;
  }
};

export const renderLoader = (outlet) => {
  outlet.innerHTML = `
  <section class="dots-container active">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</section>
 `;
};
