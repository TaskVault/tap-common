export enum UserStatusType {
  active = 'active',
  inactive = 'inactive',
  expired = 'expired',
}

export type UserStatus = `${UserStatusType}`

export enum AdStatusType {
  published = 'published',
  pending = 'pending',
}

export type AdStatus = `${AdStatusType}`

export enum AvgPostViewsTimeRangeType {
  week = 'week',
  day = 'day',
}

export type AvgPostViewsTimeRange = `${AvgPostViewsTimeRangeType}`

export enum CurrenciesType {
  ton = 'ton',
}

export type Currency = `${CurrenciesType}`

// probably don't wanna publish instantly. click to confirm
export enum ChannelStatusType {
  published = 'published',
  pending = 'pending',
}

export type ChannelStatus = `${ChannelStatusType}`

export type UserResponse = {
  id: number
  telegram_id: number
  name: string
  username?: string
  status: UserStatus
}

export type UserGroupsResponse = {
  ad_id: AdResponse['id']
  user_id: UserResponse['id']
}

export type UserChannelsResponse = {
  user_id: UserResponse['id']
  channel_id: ChannelResponse['id']
  channel: ChannelResponse
}

export type AdResponse = {
  id: number
  name: string
  description: string
  target_audience: string
  date_created: string
  status: AdStatus
  ad_subject: string
  stylistics: string
  tags: string[]
  owner: UserResponse
  photos: string[]
}

export type ChannelResponse = {
  id: number
  owner: UserResponse
  name: string
  description: string
  channel_subject: string
  status: ChannelStatus
  tags: string[]
  stylistics: string
  members: number // this is temporal for PoC, in the future will be deprecated
  avg_post_views: number // temporal for poc,
}

export type UserAdsResponse = {
  user_id: number
  ad_id: number
  user: UserResponse
  ad: AdResponse
}

export type AdOfferResponse = {
  id: AdResponse['id']
  ad: AdResponse
  budget: number
  currency: Currency // so far only ton, then other currencies
  members_min: number
  avg_post_views_min?: number
  avg_post_views_range?: AvgPostViewsTimeRange
}

export type ChannelOfferResponse = {
  id: ChannelResponse['id']
  channel: ChannelResponse
  budget_min: number
  currency: Currency
}
