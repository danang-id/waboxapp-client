'use strict'
require('dotenv').config()
var expect = require('chai').expect
var WaboxappClient = require('./../dist/Client')

var apiToken = process.env.API_TOKEN
var phoneNumber = process.env.PHONE_NUMBER
var toPhoneNumber = process.env.TO_PHONE_NUMBER

describe('Client: check account status test', () => {
  it('should returns success', () => {
    var client = new WaboxappClient({
      apiToken,
      phoneNumber,
    })
    client.checkAccountStatus().then(response => {
      expect(response)
        .have.property('success')
        .equal(true)
    })
  })
})

describe('Conversation: send a chat', () => {
  it('should returns success', () => {
    var client = new WaboxappClient({
      apiToken,
      phoneNumber,
    })
    var conversation = client.getConversation({
      toPhoneNumber,
    })
    conversation.send('waboxapp-client testing').then(response => {
      expect(response)
        .have.property('success')
        .equal(true)
    })
  })
  it('should returns custom_uid', () => {
    var client = new WaboxappClient({
      apiToken,
      phoneNumber,
    })
    var conversation = client.getConversation({
      toPhoneNumber,
    })
    conversation.send('waboxapp-client testing').then(response => {
      expect(response).have.property('custom_uid')
    })
  })
})
