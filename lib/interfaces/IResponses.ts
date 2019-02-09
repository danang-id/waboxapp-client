/**
 * ISendResponse interface define object you receive as a response of send request.
 *
 * @param success - Indicate whether the message has been successfully receive by Waboxapp.
 * @param customUID - Your custom unique identifier for this message.
 */
interface ISendResponse {
  success: boolean
  custom_uid: string
}

/**
 * ISendResponse interface define object you receive as a response of account status request.
 *
 * @param success - Indicate whether account status has been successfully checked.
 * @param uid - Your WhatsApp account phone number with international code.
 * @param hook_url - Account URL for web hooks.
 * @param alias - Your WhatsApp account name.
 * @param platform - Your smartphone platform.
 * @param battery - Your smartphone battery percentage.
 * @param plugged - Indicates whether your smartphone is plugged and charging.
 * @param locale - Your WhatsApp web session locale.
 */
interface IAccountStatusResponse {
  success: boolean
  uid: string
  hook_url: string
  alias: string
  platform: string
  battery: number
  plugged: boolean
  locale: string
}
