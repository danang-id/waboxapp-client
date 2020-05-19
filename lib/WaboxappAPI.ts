import axios, { AxiosInstance } from 'axios'

export default class WaboxappAPI {
  private axiosInstance: AxiosInstance

  constructor(private readonly token: string, private readonly uid: string) {
    this.axiosInstance = axios.create({
      baseURL: 'https://www.waboxapp.com/api/',
    })
  }

  private static createUrl(endpoint: WaboxappRequestEndpoint): string {
    switch (endpoint) {
      case WaboxappRequestEndpoint.SEND_CHAT:
        return '/send/chat'
      case WaboxappRequestEndpoint.SEND_IMAGE:
        return '/send/image'
      case WaboxappRequestEndpoint.SEND_LINK:
        return '/send/link'
      case WaboxappRequestEndpoint.SEND_MEDIA:
        return '/send/media'
      case WaboxappRequestEndpoint.CHECK_ACCOUNT_STATUS:
        return '/status'
      default:
        return '/'
    }
  }

  public async request(endpoint: WaboxappRequestEndpoint, data?: any): Promise<any> {
    let url = WaboxappAPI.createUrl(endpoint)
    if (data === void 0) {
      data = {}
      url = url + '/' + this.uid
    } else {
      data.uid = this.uid
    }
    data.token = this.token
    try {
      const response = await this.axiosInstance.post(url, data)
      return response.data
    } catch (error) {
      if (error.response !== void 0) {
        throw new Error(error.response.data.error)
      } else {
        throw error
      }
    }
  }
}

export enum WaboxappRequestEndpoint {
  SEND_CHAT,
  SEND_IMAGE,
  SEND_LINK,
  SEND_MEDIA,
  CHECK_ACCOUNT_STATUS,
}
