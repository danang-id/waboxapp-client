/**
 * IClientOptions interface define options for instantiating
 * a new Waboxapp Client instance.
 *
 * @param apiToken - Your Waboxapp API token or your enabled app token.
 * @param phoneNumber - Your WhatsApp account phone number with international code.
 */
export default interface IClientOptions {
  apiToken: string
  phoneNumber: string
}
