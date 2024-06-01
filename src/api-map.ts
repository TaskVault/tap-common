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
  },
  '/api/channels/create': {
    requestValidator: isCreateChannelRequest,
    responseValidator: isChannelResponse,
  },
  '/api/campaigns': {
    requestValidator: isFetchCampaignsRequest,
    responseValidator: isCampaignsResponse,
  },
  '/api/campaigns/create': {
    requestValidator: isCreateCampaignRequest,
    responseValidator: isCampaignResponse,
  },
  '/api/match-channels': {
    requestValidator: isMatchChannelsRequest,
    responseValidator: isChannelsResponse,
  },
  '/api/send-offers': {
    requestValidator: isSendOffersRequest,
    responseValidator: isSendOffersResponse,
  },
}
