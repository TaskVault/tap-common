import { has, isArray, isNumber, isString } from './lodash-like.js'
import {
  UserResponse,
  ChannelResponse,
  CampaignResponse,
  ChannelsResponse,
  CampaignsResponse,
  CreateChannelRequest,
  CreateCampaignRequest,
  MatchChannelsRequest,
  SendOffersRequest,
  SendOffersResponse,
  FetchChannelsRequest,
  FetchCampaignsRequest,
} from './api-endpionts-types.js'

export const isUserResponse = (obj: any): obj is UserResponse => {
  return (
    isNumber(obj.id) &&
    isNumber(obj.telegram_id) &&
    isString(obj.name) &&
    (obj.username === undefined || isString(obj.username)) &&
    isString(obj.status)
  )
}

export const isChannelResponse = (obj: any): obj is ChannelResponse => {
  return (
    isNumber(obj.id) &&
    isUserResponse(obj.owner) &&
    isString(obj.name) &&
    (obj.description === undefined || isString(obj.description)) &&
    isString(obj.status) &&
    isArray(obj.tags)
  )
}

export const isCampaignResponse = (obj: any): obj is CampaignResponse => {
  return (
    isNumber(obj.id) &&
    isUserResponse(obj.owner) &&
    isString(obj.name) &&
    isString(obj.description) &&
    isString(obj.targetAudience) &&
    isArray(obj.tags) &&
    isString(obj.status)
  )
}

export const isChannelsResponse = (obj: any): obj is ChannelsResponse => {
  return (
    isArray(obj.channels) &&
    obj.channels.every(isChannelResponse) &&
    isNumber(obj.page) &&
    isNumber(obj.totalPages)
  )
}

export const isCampaignsResponse = (obj: any): obj is CampaignsResponse => {
  return (
    isArray(obj.campaigns) &&
    obj.campaigns.every(isCampaignResponse) &&
    isNumber(obj.page) &&
    isNumber(obj.totalPages)
  )
}

export const isSendOffersResponse = (obj: any): obj is SendOffersResponse => {
  return has(obj, 'success') && typeof obj.success === 'boolean'
}

// Validation Functions
export const isFetchChannelsRequest = (obj: any): obj is FetchChannelsRequest => {
  return (
    (obj.userId === undefined || isNumber(obj.userId)) && isNumber(obj.page) && isNumber(obj.limit)
  )
}

export const isFetchCampaignsRequest = (obj: any): obj is FetchCampaignsRequest => {
  return (
    (obj.userId === undefined || isNumber(obj.userId)) && isNumber(obj.page) && isNumber(obj.limit)
  )
}

export const isCreateChannelRequest = (obj: any): obj is CreateChannelRequest => {
  return isString(obj.telegramLink)
}

export const isCreateCampaignRequest = (obj: any): obj is CreateCampaignRequest => {
  return isString(obj.name) && isString(obj.description) && isString(obj.targetAudience)
}

export const isMatchChannelsRequest = (obj: any): obj is MatchChannelsRequest => {
  return isNumber(obj.campaignId)
}

export const isSendOffersRequest = (obj: any): obj is SendOffersRequest => {
  return isNumber(obj.campaignId) && isArray(obj.channelIds) && obj.channelIds.every(isNumber)
}
