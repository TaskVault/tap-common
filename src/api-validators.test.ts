import { expect, test } from 'vitest';
import {
  isUserResponse,
  isChannelResponse,
  isCampaignResponse,
  isChannelsResponse,
  isCampaignsResponse,
  isSendOffersResponse,
  isFetchChannelsRequest,
  isFetchCampaignsRequest,
  isCreateChannelRequest,
  isCreateCampaignRequest,
  isMatchChannelsRequest,
  isSendOffersRequest
} from './api-validators.js';

test('isUserResponse', () => {
  expect(isUserResponse({
    id: 1,
    telegram_id: 123456789,
    name: 'John Doe',
    status: 'active'
  })).toBe(true);

  expect(isUserResponse({
    id: 1,
    telegram_id: 'invalid_id',
    name: 'John Doe',
    status: 'active'
  })).toBe(false);

  expect(isUserResponse({
    id: 1,
    telegram_id: 123456789,
    name: 'John Doe',
    username: 'johndoe',
    status: 'active'
  })).toBe(true);

  expect(isUserResponse({
    id: 1,
    telegram_id: 123456789,
    name: 'John Doe'
  })).toBe(false);
});

test('isChannelResponse', () => {
  expect(isChannelResponse({
    id: 1,
    owner: {
      id: 1,
      telegram_id: 123456789,
      name: 'John Doe',
      status: 'active'
    },
    name: 'Channel Name',
    status: 'published',
    tags: ['tag1', 'tag2']
  })).toBe(true);

  expect(isChannelResponse({
    id: 1,
    owner: {
      id: 1,
      telegram_id: 123456789,
      name: 'John Doe',
      status: 'active'
    },
    name: 'Channel Name',
    status: 'published',
    tags: 'not_an_array'
  })).toBe(false);

  expect(isChannelResponse({
    id: 1,
    owner: {
      id: 1,
      telegram_id: 123456789,
      name: 'John Doe',
      status: 'active'
    },
    name: 'Channel Name',
    description: 'Channel Description',
    status: 'published',
    tags: ['tag1', 'tag2']
  })).toBe(true);

  expect(isChannelResponse({
    id: 1,
    owner: 'not_an_owner',
    name: 'Channel Name',
    status: 'published',
    tags: ['tag1', 'tag2']
  })).toBe(false);
});

test('isCampaignResponse', () => {
  expect(isCampaignResponse({
    id: 1,
    owner: {
      id: 1,
      telegram_id: 123456789,
      name: 'John Doe',
      status: 'active'
    },
    name: 'Campaign Name',
    description: 'Campaign Description',
    targetAudience: 'Everyone',
    status: 'pending',
    tags: ['tag1', 'tag2']
  })).toBe(true);

  expect(isCampaignResponse({
    id: 1,
    owner: {
      id: 1,
      telegram_id: 123456789,
      name: 'John Doe',
      status: 'active'
    },
    name: 'Campaign Name',
    description: 'Campaign Description',
    targetAudience: 'Everyone',
    status: 'pending',
    tags: 'not_an_array'
  })).toBe(false);

  expect(isCampaignResponse({
    id: 1,
    owner: {
      id: 1,
      telegram_id: 123456789,
      name: 'John Doe',
      status: 'active'
    },
    name: 'Campaign Name',
    description: 'Campaign Description',
    targetAudience: 'Everyone',
    status: 'pending',
    tags: ['tag1', 'tag2']
  })).toBe(true);

  expect(isCampaignResponse({
    id: 1,
    owner: 'not_an_owner',
    name: 'Campaign Name',
    description: 'Campaign Description',
    targetAudience: 'Everyone',
    status: 'pending',
    tags: ['tag1', 'tag2']
  })).toBe(false);
});

test('isChannelsResponse', () => {
  expect(isChannelsResponse({
    channels: [{
      id: 1,
      owner: {
        id: 1,
        telegram_id: 123456789,
        name: 'John Doe',
        status: 'active'
      },
      name: 'Channel Name',
      status: 'published',
      tags: ['tag1', 'tag2']
    }],
    page: 1,
    totalPages: 10
  })).toBe(true);

  expect(isChannelsResponse({
    channels: 'not_an_array',
    page: 1,
    totalPages: 10
  })).toBe(false);

  expect(isChannelsResponse({
    channels: [{
      id: 1,
      owner: {
        id: 1,
        telegram_id: 123456789,
        name: 'John Doe',
        status: 'active'
      },
      name: 'Channel Name',
      status: 'published',
      tags: ['tag1', 'tag2']
    }],
    page: 'not_a_number',
    totalPages: 10
  })).toBe(false);

  expect(isChannelsResponse({
    channels: [{
      id: 1,
      owner: {
        id: 1,
        telegram_id: 123456789,
        name: 'John Doe',
        status: 'active'
      },
      name: 'Channel Name',
      status: 'published',
      tags: ['tag1', 'tag2']
    }],
    page: 1,
    totalPages: 'not_a_number'
  })).toBe(false);
});

test('isCampaignsResponse', () => {
  expect(isCampaignsResponse({
    campaigns: [{
      id: 1,
      owner: {
        id: 1,
        telegram_id: 123456789,
        name: 'John Doe',
        status: 'active'
      },
      name: 'Campaign Name',
      description: 'Campaign Description',
      targetAudience: 'Everyone',
      status: 'pending',
      tags: ['tag1', 'tag2']
    }],
    page: 1,
    totalPages: 10
  })).toBe(true);

  expect(isCampaignsResponse({
    campaigns: 'not_an_array',
    page: 1,
    totalPages: 10
  })).toBe(false);

  expect(isCampaignsResponse({
    campaigns: [{
      id: 1,
      owner: {
        id: 1,
        telegram_id: 123456789,
        name: 'John Doe',
        status: 'active'
      },
      name: 'Campaign Name',
      description: 'Campaign Description',
      targetAudience: 'Everyone',
      status: 'pending',
      tags: ['tag1', 'tag2']
    }],
    page: 'not_a_number',
    totalPages: 10
  })).toBe(false);

  expect(isCampaignsResponse({
    campaigns: [{
      id: 1,
      owner: {
        id: 1,
        telegram_id: 123456789,
        name: 'John Doe',
        status: 'active'
      },
      name: 'Campaign Name',
      description: 'Campaign Description',
      targetAudience: 'Everyone',
      status: 'pending',
      tags: ['tag1', 'tag2']
    }],
    page: 1,
    totalPages: 'not_a_number'
  })).toBe(false);
});

test('isSendOffersResponse', () => {
  expect(isSendOffersResponse({
    success: true
  })).toBe(true);

  expect(isSendOffersResponse({
    success: 'not_a_boolean'
  })).toBe(false);

  expect(isSendOffersResponse({
    success: false
  })).toBe(true);

  expect(isSendOffersResponse({
    anotherField: 'extra'
  })).toBe(false);
});

test('isFetchChannelsRequest', () => {
  expect(isFetchChannelsRequest({
    userId: 1,
    page: 1,
    limit: 10
  })).toBe(true);

  expect(isFetchChannelsRequest({
    page: 1,
    limit: 10
  })).toBe(true);

  expect(isFetchChannelsRequest({
    userId: 'not_a_number',
    page: 1,
    limit: 10
  })).toBe(false);

  expect(isFetchChannelsRequest({
    userId: 1,
    page: 'not_a_number',
    limit: 10
  })).toBe(false);

  expect(isFetchChannelsRequest({
    userId: 1,
    page: 1,
    limit: 'not_a_number'
  })).toBe(false);
});

test('isFetchCampaignsRequest', () => {
  expect(isFetchCampaignsRequest({
    userId: 1,
    page: 1,
    limit: 10
  })).toBe(true);

  expect(isFetchCampaignsRequest({
    page: 1,
    limit: 10
  })).toBe(true);

  expect(isFetchCampaignsRequest({
    userId: 'not_a_number',
    page: 1,
    limit: 10
  })).toBe(false);

  expect(isFetchCampaignsRequest({
    userId: 1,
    page: 'not_a_number',
    limit: 10
  })).toBe(false);

  expect(isFetchCampaignsRequest({
    userId: 1,
    page: 1,
    limit: 'not_a_number'
  })).toBe(false);
});

test('isCreateChannelRequest', () => {
  expect(isCreateChannelRequest({
    telegramLink: 'https://t.me/channel1'
  })).toBe(true);

  expect(isCreateChannelRequest({
    telegramLink: 123
  })).toBe(false);

  expect(isCreateChannelRequest({
    telegramLink: 'https://t.me/channel1',
    extra: 'extra'
  })).toBe(true);

  expect(isCreateChannelRequest({
    extra: 'extra'
  })).toBe(false);
});

test('isCreateCampaignRequest', () => {
  expect(isCreateCampaignRequest({
    name: 'Campaign Name',
    description: 'Campaign Description',
    targetAudience: 'Everyone'
  })).toBe(true);

  expect(isCreateCampaignRequest({
    name: 123,
    description: 'Campaign Description',
    targetAudience: 'Everyone'
  })).toBe(false);

  expect(isCreateCampaignRequest({
    name: 'Campaign Name',
    description: 123,
    targetAudience: 'Everyone'
  })).toBe(false);

  expect(isCreateCampaignRequest({
    name: 'Campaign Name',
    description: 'Campaign Description',
    targetAudience: 123
  })).toBe(false);
});

test('isMatchChannelsRequest', () => {
  expect(isMatchChannelsRequest({
    campaignId: 1
  })).toBe(true);

  expect(isMatchChannelsRequest({
    campaignId: 'not_a_number'
  })).toBe(false);
});

test('isSendOffersRequest', () => {
  expect(isSendOffersRequest({
    campaignId: 1,
    channelIds: [1, 2, 3]
  })).toBe(true);

  expect(isSendOffersRequest({
    campaignId: 'not_a_number',
    channelIds: [1, 2, 3]
  })).toBe(false);

  expect(isSendOffersRequest({
    campaignId: 1,
    channelIds: 'not_an_array'
  })).toBe(false);

  expect(isSendOffersRequest({
    campaignId: 1,
    channelIds: [1, 'not_a_number', 3]
  })).toBe(false);
});



