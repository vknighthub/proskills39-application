const AES_KEY = "zPMYLe1bfGsqJap+U0KrUrvqjFpPErU2";

import CryptoJS from 'crypto-js';
import {encode as base64_encode} from 'base-64';
import uuid from 'react-uuid';


// var CryptoJS = require("crypto-js");
// Decrypt data

export function AES256Encrypt(encryptedData: any) {

  var key = CryptoJS.enc.Utf8.parse(AES_KEY);
  // var iv = CryptoJS.enc.Utf8.parse(CONSTKEYIV);

  var ivStr =  uuid();

  var ivStr16 = base64_encode(ivStr).substring(0,16);

  var iv = CryptoJS.enc.Utf8.parse(ivStr16);
  
  var rawData = JSON.stringify(encryptedData);

  var plaintextData = CryptoJS.AES.encrypt(
    rawData,
    key,
    {iv:iv}).toString();

  return {
    iv: ivStr16,
    textmessage: plaintextData
  };
}

export function AES256Decrypt(encryptedData: any, ivkey: string) {
  var rawData = CryptoJS.enc.Base64.parse(encryptedData);
  var key = CryptoJS.enc.Utf8.parse(AES_KEY);
  var iv = CryptoJS.enc.Utf8.parse(ivkey);
  
  var plaintextData = CryptoJS.AES.decrypt(
      {ciphertext: rawData},
      key,
      {iv:iv});
      var plaintext = plaintextData.toString(CryptoJS.enc.Utf8);

  return JSON.parse(plaintext);
}

export function GenerateMessage(data:any) {
  const encryptedData = data.data
  const ivkey = data.headers.proskills39
  return AES256Decrypt(encryptedData,ivkey)
}