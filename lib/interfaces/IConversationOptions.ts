/**
 * IConversationOptions interface define options for instantiating
 * a new Waboxapp Conversation instance.
 *
 * @param phoneNumber - Recipient WhatsApp account phone number with international code.
 */
export default interface IConversationOptions {
  phoneNumber: string
}
