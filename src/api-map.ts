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

type ApiEndpointSpec = {
  requestValidator: (obj: any) => boolean
  responseValidator: (obj: any) => boolean
  method: 'GET' | 'POST'
}

export const apiMap: Record<string, ApiEndpointSpec> = {
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
}
