# src/electron/gateway/__tests__/slack-isgroup.test.ts

- determineIsGroup · function · L8-L12 — function determineIsGroup(channelInfo: { is_im?: boolean; is_mpim?: boolean }): boolean
- determineIsGroupFromChannelId · function · L14-L20 — function determineIsGroupFromChannelId(channelId: string): boolean | undefined
- mapMessageToIncoming · function · L74-L89 — function mapMessageToIncoming( message: { user?: string; channel?: string; ts?: string; text?: string }, userName: string, isGroup?: boolean, )
- mapCommandToIncoming · function · L132-L145 — function mapCommandToIncoming(command: { channel_id?: string; user_id: string; user_name: string; })
