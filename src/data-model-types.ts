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

// TODO: probably, that sucks and we do wanna do this in a different way
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

