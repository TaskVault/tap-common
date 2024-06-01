import {
  CampaignResponse,
  CampaignsResponse, ChannelResponse,
  ChannelsResponse, CreateCampaignRequest, CreateChannelRequest,
  FetchCampaignsRequest,
  FetchChannelsRequest,
  ForUser, MatchCampaignsRequest, MatchChannelsRequest,
  PaginatedRequest,
  PaginatedResponse, SendOffersRequest, SendOffersResponse, UserResponse,
} from './api-endpionts-types.js'

export function isPaginatedRequest<T extends object = {}>(obj: any): obj is PaginatedRequest<T> {
  return typeof obj === 'object' &&
    typeof obj.page === 'number' &&
    typeof obj.limit === 'number'
}

export function isPaginatedResponse<T>(obj: any): obj is PaginatedResponse<T> {
  return typeof obj === 'object' &&
    typeof obj.page === 'number' &&
    typeof obj.totalPages === 'number'
}

export function isForUser<T = {}>(obj: any): obj is ForUser<T> {
  return typeof obj === 'object' &&
    typeof obj.userId === 'number'
}

export function isFetchChannelsRequest(obj: any): obj is FetchChannelsRequest {
  return isPaginatedRequest(obj) && isForUser(obj)
}

export function isFetchCampaignsRequest(obj: any): obj is FetchCampaignsRequest {
  return isPaginatedRequest(obj) && isForUser(obj)
}

export function isMatchChannelsRequest(obj: any): obj is MatchChannelsRequest {
  return typeof obj === 'object' &&
    typeof obj.campaignId === 'number'
}

export function isMatchCampaignsRequest(obj: any): obj is MatchCampaignsRequest {
  return typeof obj === 'object' &&
    typeof obj.channelId === 'number'
}

export function isChannelsResponse(obj: any): obj is ChannelsResponse {
  return isPaginatedResponse(obj) &&
    'channels' in obj &&
    Array.isArray(obj.channels) &&
    obj.channels.every(isChannelResponse)
}

export function isCampaignsResponse(obj: any): obj is CampaignsResponse {
  return isPaginatedResponse(obj) &&
    'campaigns' in obj &&
    Array.isArray(obj.campaigns) &&
    obj.campaigns.every(isCampaignResponse)
}

export function isCreateChannelRequest(obj: any): obj is CreateChannelRequest {
  return typeof obj === 'object' &&
    typeof obj.telegramLink === 'string'
}

export function isSendOffersRequest(obj: any): obj is SendOffersRequest {
  return typeof obj === 'object' &&
    typeof obj.campaignId === 'number' &&
    Array.isArray(obj.channelIds) &&
    obj.channelIds.every((id: unknown) => typeof id === 'number')
}

export function isSendOffersResponse(obj: any): obj is SendOffersResponse {
  return typeof obj === 'object' &&
    typeof obj.success === 'boolean'
}

// Additional detailed type guards
export function isChannelResponse(obj: any): obj is ChannelResponse {
  return typeof obj === 'object' &&
    typeof obj.id === 'number' &&
    isUserResponse(obj.owner) &&
    typeof obj.name === 'string' &&
    (typeof obj.toneOfVoice === 'undefined' || typeof obj.toneOfVoice === 'string') &&
    (typeof obj.description === 'undefined' || typeof obj.description === 'string') &&
    typeof obj.status === 'string' &&
    Array.isArray(obj.tags) &&
    obj.tags.every((tag: unknown) => typeof tag === 'string') &&
    typeof obj.channelSubject === 'string'
}

export function isCampaignResponse(obj: any): obj is CampaignResponse {
  return typeof obj === 'object' &&
    typeof obj.id === 'number' &&
    isUserResponse(obj.owner) &&
    typeof obj.name === 'string' &&
    typeof obj.description === 'string' &&
    (typeof obj.ad_subject === 'undefined' || typeof obj.ad_subject === 'string') &&
    (typeof obj.toneOfVoice === 'undefined' || typeof obj.toneOfVoice === 'string') &&
    typeof obj.status === 'string' &&
    typeof obj.targetAudience === 'string' &&
    typeof obj.dateCreated === 'string' &&
    Array.isArray(obj.tags) &&
    obj.tags.every((tag: unknown) => typeof tag === 'string') &&
    Array.isArray(obj.photos) &&
    obj.photos.every((photo: unknown) => typeof photo === 'string')
}

export function isCreateCampaignRequest(obj: any): obj is CreateCampaignRequest {
  return typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.description === 'string' &&
    (typeof obj.ad_subject === 'undefined' || typeof obj.ad_subject === 'string') &&
    (typeof obj.toneOfVoice === 'undefined' || typeof obj.toneOfVoice === 'string') &&
    typeof obj.targetAudience === 'string' &&
    Array.isArray(obj.tags) &&
    obj.tags.every((tag: unknown) => typeof tag === 'string') &&
    Array.isArray(obj.photos) &&
    obj.photos.every((photo: unknown) => typeof photo === 'string')
}

export function isUserResponse(obj: any): obj is UserResponse {
  return typeof obj === 'object' &&
    typeof obj.id === 'number' &&
    typeof obj.telegram_id === 'number' &&
    typeof obj.name === 'string' &&
    (typeof obj.username === 'undefined' || typeof obj.username === 'string') &&
    typeof obj.status === 'string'
}
