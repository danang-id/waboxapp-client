import Random from './Random'
import WaboxappAPI, { WaboxappRequestEndpoint } from './WaboxappAPI'

/**
 * Waboxapp Conversation class
 */
export default class Conversation {
  private options: IConversationOptions
  private waboxappAPI: WaboxappAPI

  /**
   * @param options - Waboxapp Conversation options.
   */
  constructor(options: IConversationOptions, waboxappAPI: WaboxappAPI) {
    this.options = options
    this.waboxappAPI = waboxappAPI
  }

  /**
   * Send WhatsApp text message (chat).
   *
   * @param message - Text message to be send.
   * @param customUID - (Optional) Your custom unique identifier for the new message to be send. Used to identify each message and should be returned with the exact same value.
   * @returns Promise of ISendResponse object.
   */
  public async send(
    message: string,
    customUID: string = Random.generate(),
  ): Promise<ISendResponse> {
    if (!message) {
      throw new Error('Mandatory parameter "message" is undefined or null.')
    }
    try {
      const data = {
        to: this.options.phoneNumber,
        custom_uid: customUID,
        text: message,
      }
      const response = await this.waboxappAPI.request(WaboxappRequestEndpoint.SEND_CHAT, data)
      if (response.success) {
        return response
      } else {
        throw new Error(response.error ? response.error : 'Waboxapp API request failure.')
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * Send an image with URL.
   *
   * @param imageUrl - The link URL of image to be send.
   * @param optionalParams - (Optional) Object consist of: (1) "caption": Title to show on image preview; and (2) "description": Extended description to show on image preview.
   * @param customUID - (Optional) Your custom unique identifier for the new message to be send. Used to identify each message and should be returned with the exact same value.
   * @returns Promise of ISendResponse object.
   */
  public async sendImage(
    imageUrl: string,
    optionalParams: {
      caption?: string
      description?: string
    },
    customUID: string = Random.generate(),
  ): Promise<ISendResponse> {
    if (!imageUrl) {
      throw new Error('Mandatory parameter "imageUrl" is undefined or null.')
    }
    try {
      const data = {
        to: this.options.phoneNumber,
        custom_uid: customUID,
        url: imageUrl,
      }
      if (optionalParams !== void 0) {
        ;(data as any).caption = optionalParams.caption
        ;(data as any).description = optionalParams.description
      }
      const response = await this.waboxappAPI.request(WaboxappRequestEndpoint.SEND_IMAGE, data)
      if (response.success) {
        return response
      } else {
        throw new Error(response.error ? response.error : 'Waboxapp API request failure.')
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * Send a link (with preview).
   *
   * @param linkUrl - The link URL to be send.
   * @param optionalParams - (Optional) Object consist of: (1) "caption": Title to show on link preview; (2) "description": Extended description to show on link preview; and (3) "urlThumb": URL of thumb image to show on link preview.
   * @param customUID - (Optional) Your custom unique identifier for the new message to be send. Used to identify each message and should be returned with the exact same value.
   * @returns Promise of ISendResponse object.
   */
  public async sendLink(
    linkUrl: string,
    optionalParams?: {
      caption?: string
      description?: string
      urlThumb?: string
    },
    customUID: string = Random.generate(),
  ): Promise<ISendResponse> {
    if (!linkUrl) {
      throw new Error('Mandatory parameter "linkUrl" is undefined or null.')
    }
    try {
      const data = {
        to: this.options.phoneNumber,
        custom_uid: customUID,
        url: linkUrl,
      }
      if (optionalParams !== void 0) {
        ;(data as any).caption = optionalParams.caption
        ;(data as any).description = optionalParams.description
        ;(data as any).url_thumb = optionalParams.urlThumb
      }
      const response = await this.waboxappAPI.request(WaboxappRequestEndpoint.SEND_LINK, data)
      if (response.success) {
        return response
      } else {
        throw new Error(response.error ? response.error : 'Waboxapp API request failure.')
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * Send media (any kind of file).
   *
   * @param mediaUrl - The link URL of file to be send.
   * @param optionalParams - (Optional) Object consist of: (1) "caption": Title to show on file preview; (2) "description": Extended description to show on file preview; and (3) "urlThumb": URL of thumb image to show on file preview.
   * @param customUID - (Optional) Your custom unique identifier for the new message to be send. Used to identify each message and should be returned with the exact same value.
   * @returns Promise of ISendResponse object.
   */
  public async sendMedia(
    mediaUrl: string,
    optionalParams?: {
      caption?: string
      description?: string
      urlThumb?: string
    },
    customUID: string = Random.generate(),
  ): Promise<ISendResponse> {
    if (!mediaUrl) {
      throw new Error('Mandatory parameter "mediaUrl" is undefined or null.')
    }
    try {
      const data = {
        to: this.options.phoneNumber,
        custom_uid: customUID,
        url: mediaUrl,
      }
      if (optionalParams !== void 0) {
        ;(data as any).caption = optionalParams.caption
        ;(data as any).description = optionalParams.description
        ;(data as any).url_thumb = optionalParams.urlThumb
      }
      const response = await this.waboxappAPI.request(WaboxappRequestEndpoint.SEND_MEDIA, data)
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
