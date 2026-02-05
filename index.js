import axios from 'axios';

export async function ipAdresimiAl() {
  return await axios({
    method: 'get',
    url: 'https://apis.ergineer.com/ipadresim',
  }).then(function (response) {
    return response.data;
  });
}

export async function getData() {
  const ipAdresiniz = await ipAdresimiAl();

  return axios
    .get(`https://apis.ergineer.com/ipgeoapi/${ipAdresiniz}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export function cardOlustur(data) {
  // Ana kart
  const card = document.createElement('div');
  card.classList.add('card');

  // Bayrak
  const img = document.createElement('img');
  img.src = `https://flaglog.com/codes/standardized-rectangle-120px/${data.ülkeKodu}.png`;
  card.appendChild(img);

  // Card info alanı
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  // IP
  const ip = document.createElement('h3');
  ip.classList.add('ip');
  ip.textContent = `IP: ${data.sorgu}`;
  cardInfo.appendChild(ip);

  // Country
  const country = document.createElement('p');
  country.classList.add('ulke');
  country.textContent = `Country: ${data.ülke} (${data.ülkeKodu})`;
  cardInfo.appendChild(country);

  // Latitude - Longitude
  const latLong = document.createElement('p');
  latLong.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;
  cardInfo.appendChild(latLong);

  // City
  const city = document.createElement('p');
  city.textContent = `Şehir: ${data.şehir}`;
  cardInfo.appendChild(city);

  // Timezone
  const timezone = document.createElement('p');
  timezone.textContent = `Saat dilimi: ${data.saatdilimi}`;
  cardInfo.appendChild(timezone);

  // Currency
  const currency = document.createElement('p');
  currency.textContent = `Para birimi: ${data.parabirimi}`;
  cardInfo.appendChild(currency);

  // ISP
  const isp = document.createElement('p');
  isp.textContent = `ISP: ${data.isp}`;
  cardInfo.appendChild(isp);

  // Card içine ekle
  card.appendChild(cardInfo);

  // Geri döndür
  return card;
}
