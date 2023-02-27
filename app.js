require('dotenv').config()

// ChatBot
const { createBot, createProvider, createFlow, addKeyword, CoreClass } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

// ChatGPTClass
const ChatGPTClass = require('./chatgpt.class')

// Configuration ChatBot
const createBotGPT = async ({ provider, database }) =>  {
  return new ChatGPTClass(database, provider);
}

const main = () => {
  const adapterDB = new MockAdapter()
  const adapterProvider = createProvider(BaileysProvider)

  // ChatBotGPT
  createBotGPT({
    provider: adapterProvider,
    database: adapterDB,
  })

  QRPortalWeb()
}

main()