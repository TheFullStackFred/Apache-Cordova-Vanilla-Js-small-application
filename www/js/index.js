/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
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
  deviceVersion.innerHTML = 'Device version : ' + device.model
  devicesElement.appendChild(deviceVersion)
}

fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
  })
