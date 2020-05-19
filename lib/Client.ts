import Conversation from './Conversation'
import WaboxappAPI, { WaboxappRequestEndpoint } from './WaboxappAPI'
import IClientOptions from './interfaces/IClientOptions'
import { IAccountStatusResponse } from './interfaces/IResponses'

/**
 * Waboxapp Client class
 */
export default class Client {
  private readonly waboxappAPI: WaboxappAPI

  /**
   * @param options - Waboxapp Client options.
   */
  constructor(private options: IClientOptions) {
    this.waboxappAPI = new WaboxappAPI(this.options.apiToken, this.options.phoneNumber)
  }

  /**
   * Get conversation instance with specific WhatsApp phone number.
   *
   * @param toPhoneNumber - The destination WhatsApp phone number of your conversation.
   * @returns Conversation instance with specific WhatsApp phone number.
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
