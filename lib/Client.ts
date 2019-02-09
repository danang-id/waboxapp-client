import Conversation from './Conversation'
import WaboxappAPI, { WaboxappRequestEndpoint } from './WaboxappAPI'

/**
 * Waboxapp Client class
 */
export default class Client {
  private options: IClientOptions
  private waboxappAPI: WaboxappAPI

  /**
   * @param options - Waboxapp Client options.
   */
  constructor(options: IClientOptions) {
    this.options = options
    this.waboxappAPI = new WaboxappAPI(this.options.apiToken, this.options.phoneNumber)
  }

  /**
   * Get conversation instance with spesific WhatsApp phone number.
   *
   * @param toPhoneNumber - The destination WhatsApp phone number of your conversation.
   * @returns Conversation instance with spesific WhatsApp phone number.
   */
  public getConversation(toPhoneNumber: string): Conversation {
    return new Conversation(
      {
        phoneNumber: toPhoneNumber,
      },
      this.waboxappAPI,
    )
  }

  /**
   * Check account (phone number) status.
   *
   * @returns Promise of IAccountStatusResponse object.
   */
  public async checkAccountStatus(): Promise<IAccountStatusResponse> {
    try {
      const response = await this.waboxappAPI.request(WaboxappRequestEndpoint.CHECK_ACCOUNT_STATUS)
      if (response.success) {
        return response
      } else {
        throw new Error(response.error ? response.error : 'Waboxapp API request failure.')
      }
    } catch (error) {
      throw error
    }
  }
}
