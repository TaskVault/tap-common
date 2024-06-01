import {
  isCampaignResponse,
  isCampaignsResponse,
  isChannelResponse,
  isChannelsResponse,
  isCreateCampaignRequest,
  isCreateChannelRequest,
  isFetchCampaignsRequest,
  isFetchChannelsRequest,
  isMatchChannelsRequest,
  isSendOffersRequest,
  isSendOffersResponse,
} from './api-validators.js'

export const apiMap = {
  '/api/channels': {
    requestValidator: isFetchChannelsRequest,
    responseValidator: isChannelsResponse,
    method: 'GET',
  },
  '/api/channels/create': {
    requestValidator: isCreateChannelRequest,
    responseValidator: isChannelResponse,
    method: 'POST',
  },
  '/api/campaigns': {
    requestValidator: isFetchCampaignsRequest,
    responseValidator: isCampaignsResponse,
    method: 'GET',
  },
  '/api/campaigns/create': {
    requestValidator: isCreateCampaignRequest,
    responseValidator: isCampaignResponse,
    method: 'POST',
  },
  '/api/match-channels': {
    requestValidator: isMatchChannelsRequest,
    responseValidator: isChannelsResponse,
    method: 'GET',
  },
  '/api/send-offers': {
    requestValidator: isSendOffersRequest,
    responseValidator: isSendOffersResponse,
    method: 'POST',
  },
} as const
