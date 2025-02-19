// - Fetch Channels and Campaigns with Pagination
//     Endpoint: /api/channels (GET), /api/campaigns (GET)
//     Request Type: FetchChannelsRequest and FetchCampaignsRequest
//     Response Type: ChannelsResponse and CampaignsResponse
//
// - Create a Channel
//     Endpoint: /api/channels (POST)
//     Request Type: CreateChannelRequest
//     Response Type: ChannelResponse
//
// - Create an Ad Campaign
//     Endpoint: /api/campaigns (POST)
//     Request Type: CreateCampaignRequest
//     Response Type: CampaignResponse
//
// - Find Best Matching Channels for a Campaign
//     Endpoint: /api/match-channels (GET)
//     Request Type: MatchChannelsRequest
//     Response Type: MatchChannelsResponse
//
// - Send Ad Offers
//     Endpoint: /api/send-offers (POST)
//     Request Type: SendOffersRequest
//     Response Type: SendOffersResponse
//
import { AdStatus, ChannelStatus, UserStatus } from './data-model-types.js'

export type PaginatedRequest<T extends object = {}> = {
  page: number
  limit: number
} & T

export type PaginatedResponse<T> = {
  page: number
  totalPages: number
} & T

export type ForUser<T = {}> = {
  userId: number
} & T

export type FetchChannelsRequest = PaginatedRequest<ForUser>

export type FetchCampaignsRequest = PaginatedRequest<ForUser>

export type MatchChannelsRequest = {
  campaignId: number
}

export type MatchCampaignsRequest = {
  channelId: number
}

export type ChannelsResponse = PaginatedResponse<{
  channels: ChannelResponse[]
}>

export type CampaignsResponse = PaginatedResponse<{
  campaigns: CampaignResponse[]
}>

export type CreateChannelRequest = {
  telegramLink: string
}

export type SendOffersRequest = {
  campaignId: number
  channelIds: number[]
}

export type SendOffersResponse = {
  success: boolean
}

// Detailed Responses mimicking the provided data model
export type ChannelResponse = {
  id: number
  owner: UserResponse
  name: string
  toneOfVoice?: string
  description?: string
  status: ChannelStatus
  tags: string[]
  channelSubject: string
}

export type CampaignResponse = {
  id: number
  owner: UserResponse
  name: string
  description: string
  ad_subject?: string
  toneOfVoice?: string
  status: AdStatus
  targetAudience: string
  dateCreated: string
  tags: string[]
  photos: string[]
}

export type CreateCampaignRequest = Omit<CampaignResponse, 'id' | 'owner' | 'status' | 'dateCreated'>

export type UserResponse = {
  id: number
  telegram_id: number
  name: string
  username?: string
  status: UserStatus
}
