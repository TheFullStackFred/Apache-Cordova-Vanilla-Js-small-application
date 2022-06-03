document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)
  document.getElementById('deviceready').classList.add('ready')
  console.log('Cordova version,', device.cordova)
  console.log('Device model,', device.model)
  console.log('Device platform,', device.platform)
  console.log('Device version,', device.version)

  const devicesElement = document.getElementById('devices-element')

  const cordovaVersion = document.createElement('p')
  cordovaVersion.className = 'device-element'
  cordovaVersion.innerHTML = 'Cordova version : ' + device.cordova
  devicesElement.appendChild(cordovaVersion)

  const deviceModel = document.createElement('p')
  deviceModel.className = 'device-element'
  deviceModel.innerHTML = 'Device version : ' + device.model
  devicesElement.appendChild(deviceModel)

  const devicePlatform = document.createElement('p')
  devicePlatform.className = 'device-element'
  devicePlatform.innerHTML = 'Device platform : ' + device.model
  devicesElement.appendChild(devicePlatform)

  const deviceVersion = document.createElement('p')
  deviceVersion.className = 'device-element'
  deviceVersion.innerHTML = 'Device version : ' + device.version
  devicesElement.appendChild(deviceVersion)
}

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((result) => {
    console.log(result)

    const allCountries = result

    allCountries.forEach((countries) => {
      const countriesElement = document.getElementById('countries-element')

      const countriesUl = document.createElement('ul')
      countriesUl.className = 'countries-ul'

      const countriesLi = document.createElement('li')
      countriesLi.className = 'countries-li'
      countriesLi.innerHTML = 'Name: ' + countries.name.common

      countriesUl.appendChild(countriesLi)
      countriesElement.appendChild(countriesUl)
    })
  })
