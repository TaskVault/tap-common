import {
  CampaignResponse,
  CampaignsResponse, ChannelResponse,
  ChannelsResponse, CreateCampaignRequest, CreateChannelRequest,
  FetchCampaignsRequest,
  FetchChannelsRequest,
  ForUser, MatchCampaignsRequest, MatchChannelsRequest,
  PaginatedRequest,
  PaginatedResponse, SendOffersRequest, SendOffersResponse, UserResponse,
} from './api-endpoints-types.js'

export const mockPaginatedRequest: PaginatedRequest<{ extraField: string }> = {
  page: 1,
  limit: 10,
  extraField: 'extraValue',
}

export const mockPaginatedResponse: PaginatedResponse<{ extraField: string }> = {
  page: 1,
  totalPages: 5,
  extraField: 'extraValue',
}

export const mockForUser: ForUser<{ extraField: string }> = {
  userId: 123,
  extraField: 'extraValue',
}

export const mockFetchChannelsRequest: FetchChannelsRequest = {
  page: 1,
  limit: 10,
  userId: 123,
}

export const mockFetchCampaignsRequest: FetchCampaignsRequest = {
  page: 1,
  limit: 10,
  userId: 123,
}

export const mockMatchChannelsRequest: MatchChannelsRequest = {
  campaignId: 456,
}

export const mockMatchCampaignsRequest: MatchCampaignsRequest = {
  channelId: 789,
}

export const mockChannelsResponse: ChannelsResponse = {
  page: 1,
  totalPages: 2,
  channels: [
    {
      id: 1,
      owner: {
        id: 1,
        telegram_id: 1001,
        name: 'John Doe',
        username: 'johndoe',
        status: 'active',
      },
      name: 'Channel One',
      toneOfVoice: 'Friendly',
      description: 'This is channel one',
      status: 'pending',
      tags: ['tag1', 'tag2'],
      channelSubject: 'Subject One',
    },
    {
      id: 2,
      owner: {
        id: 2,
        telegram_id: 1002,
        name: 'Jane Smith',
        username: 'janesmith',
        status: 'active',
      },
      name: 'Channel Two',
      status: 'pending',
      tags: ['tag3', 'tag4'],
      channelSubject: 'Subject Two',
    },
  ],
}

export const mockCampaignsResponse: CampaignsResponse = {
  page: 1,
  totalPages: 2,
  campaigns: [
    {
      id: 1,
      owner: {
        id: 1,
        telegram_id: 1001,
        name: 'John Doe',
        username: 'johndoe',
        status: 'active',
      },
      name: 'Campaign One',
      description: 'This is campaign one',
      status: 'pending',
      targetAudience: 'Audience One',
      dateCreated: '2023-01-01',
      tags: ['tag1', 'tag2'],
      photos: ['photo1.jpg', 'photo2.jpg'],
    },
    {
      id: 2,
      owner: {
        id: 2,
        telegram_id: 1002,
        name: 'Jane Smith',
        username: 'janesmith',
        status: 'active',
      },
      name: 'Campaign Two',
      description: 'This is campaign two',
      ad_subject: 'Subject Two',
      status: 'published',
      targetAudience: 'Audience Two',
      dateCreated: '2023-01-02',
      tags: ['tag3', 'tag4'],
      photos: ['photo3.jpg', 'photo4.jpg'],
    },
  ],
}

export const mockCreateChannelRequest: CreateChannelRequest = {
  telegramLink: 'https://t.me/channelLink',
}

export const mockSendOffersRequest: SendOffersRequest = {
  campaignId: 123,
  channelIds: [1, 2, 3],
}

export const mockSendOffersResponse: SendOffersResponse = {
  success: true,
}

export const mockChannelResponse: ChannelResponse = {
  id: 1,
  owner: {
    id: 1,
    telegram_id: 1001,
    name: 'John Doe',
    username: 'johndoe',
    status: 'active',
  },
  name: 'Channel One',
  toneOfVoice: 'Friendly',
  description: 'This is channel one',
  status: 'published',
  tags: ['tag1', 'tag2'],
  channelSubject: 'Subject One',
}

export const mockCampaignResponse: CampaignResponse = {
  id: 1,
  owner: {
    id: 1,
    telegram_id: 1001,
    name: 'John Doe',
    username: 'johndoe',
    status: 'active',
  },
  name: 'Campaign One',
  description: 'This is campaign one',
  ad_subject: 'Subject One',
  toneOfVoice: 'Friendly',
  status: 'pending',
  targetAudience: 'Audience One',
  dateCreated: '2023-01-01',
  tags: ['tag1', 'tag2'],
  photos: ['photo1.jpg', 'photo2.jpg'],
}

export const mockCreateCampaignRequest: CreateCampaignRequest = {
  name: 'New Campaign',
  description: 'This is a new campaign',
  ad_subject: 'New Subject',
  toneOfVoice: 'Professional',
  targetAudience: 'New Audience',
  tags: ['new', 'campaign'],
  photos: ['photo5.jpg', 'photo6.jpg'],
}

export const mockUserResponse: UserResponse = {
  id: 1,
  telegram_id: 1001,
  name: 'John Doe',
  username: 'johndoe',
  status: 'active',
}
