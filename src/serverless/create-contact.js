require('dotenv').config()
const fetch = require("node-fetch").default

const v2_key = process.env.v2_key
const v2_token = process.env.v2_token
const list_id = process.env.list_id
const headers = {
  'Authorization': 'Bearer ' + v2_token,
  'Content-Type': 'application/json'
}
const endpoint = 'https://api.constantcontact.com/v2/contacts?action_by=ACTION_BY_OWNER&api_key=' + v2_key

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body)
  const contact = {
    lists: [
      { id: list_id }
    ],
    "email_addresses": [{
     "email_address": data.email
     }]
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(contact)
    })
    const Json = await res.json()
    console.log(Json)
    return {
      statusCode: 200,
      body: JSON.stringify({data: Json})
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 200,
      body: JSON.stringify({errors: e})
    }
  }
}