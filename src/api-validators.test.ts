import { describe, it, expect } from 'vitest'
import {
  isCampaignResponse,
  isCampaignsResponse, isChannelResponse,
  isChannelsResponse, isCreateCampaignRequest, isCreateChannelRequest,
  isFetchCampaignsRequest,
  isFetchChannelsRequest,
  isForUser, isMatchCampaignsRequest, isMatchChannelsRequest,
  isPaginatedRequest,
  isPaginatedResponse, isSendOffersRequest, isSendOffersResponse, isUserResponse,
} from './api-validators.js'
import {
  mockCampaignResponse,
  mockCampaignsResponse, mockChannelResponse,
  mockChannelsResponse, mockCreateCampaignRequest, mockCreateChannelRequest,
  mockFetchCampaignsRequest,
  mockFetchChannelsRequest,
  mockForUser, mockMatchCampaignsRequest, mockMatchChannelsRequest,
  mockPaginatedRequest,
  mockPaginatedResponse, mockSendOffersRequest, mockSendOffersResponse, mockUserResponse,
} from './api-endpoints-types.mock.js'

describe('Type Guards', () => {
  it('should validate PaginatedRequest', () => {
    expect(isPaginatedRequest(mockPaginatedRequest)).toBe(true)
  })

  it('should validate PaginatedResponse', () => {
    expect(isPaginatedResponse(mockPaginatedResponse)).toBe(true)
  })

  it('should validate ForUser', () => {
    expect(isForUser(mockForUser)).toBe(true)
  })

  it('should validate FetchChannelsRequest', () => {
    expect(isFetchChannelsRequest(mockFetchChannelsRequest)).toBe(true)
  })

  it('should validate FetchCampaignsRequest', () => {
    expect(isFetchCampaignsRequest(mockFetchCampaignsRequest)).toBe(true)
  })

  it('should validate MatchChannelsRequest', () => {
    expect(isMatchChannelsRequest(mockMatchChannelsRequest)).toBe(true)
  })

  it('should validate MatchCampaignsRequest', () => {
    expect(isMatchCampaignsRequest(mockMatchCampaignsRequest)).toBe(true)
  })

  it('should validate ChannelsResponse', () => {
    expect(isChannelsResponse(mockChannelsResponse)).toBe(true)
  })

  it('should validate CampaignsResponse', () => {
    expect(isCampaignsResponse(mockCampaignsResponse)).toBe(true)
  })

  it('should validate CreateChannelRequest', () => {
    expect(isCreateChannelRequest(mockCreateChannelRequest)).toBe(true)
  })

  it('should validate SendOffersRequest', () => {
    expect(isSendOffersRequest(mockSendOffersRequest)).toBe(true)
  })

  it('should validate SendOffersResponse', () => {
    expect(isSendOffersResponse(mockSendOffersResponse)).toBe(true)
  })

  it('should validate ChannelResponse', () => {
    expect(isChannelResponse(mockChannelResponse)).toBe(true)
  })

  it('should validate CampaignResponse', () => {
    expect(isCampaignResponse(mockCampaignResponse)).toBe(true)
  })

  it('should validate CreateCampaignRequest', () => {
    expect(isCreateCampaignRequest(mockCreateCampaignRequest)).toBe(true)
  })

  it('should validate UserResponse', () => {
    expect(isUserResponse(mockUserResponse)).toBe(true)
  })
})
