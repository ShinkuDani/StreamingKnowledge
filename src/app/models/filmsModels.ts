export interface FilmsModel {
    result: Result[]
  }
  
  export interface Result {
    type: string
    title: string
    overview: string
    streamingInfo: StreamingInfo
    cast: string[]
    year?: number
    imdbId: string
    tmdbId: number
    originalTitle: string
    genres: Genre[]
    directors?: string[]
    firstAirYear?: number
    lastAirYear?: number
    creators?: string[]
    status?: Status
    seasonCount?: number
    episodeCount?: number
    seasons?: Season[]
  }
  
  export interface StreamingInfo {
    us: U[]
  }
  
  export interface U {
    service: string
    streamingType: string
    link: string
    videoLink?: string
    audios: Audio[]
    subtitles: Subtitle[]
    leaving?: number
    availableSince: number
    addon?: string
    quality?: string
    price?: Price
  }
  
  export interface Audio {
    language: string
    region: string
  }
  
  export interface Subtitle {
    locale: Locale
    closedCaptions: boolean
  }
  
  export interface Locale {
    language: string
    region: string
  }
  
  export interface Price {
    amount: string
    currency: string
    formatted: string
  }
  
  export interface Genre {
    id: number
    name: string
  }
  
  export interface Status {
    statusCode: number
    statusText: string
  }
  
  export interface Season {
    type: string
    title: string
    streamingInfo: StreamingInfo2
    firstAirYear: number
    lastAirYear: number
    episodes: Episode[]
  }
  
  export interface StreamingInfo2 {
    us?: U2[]
  }
  
  export interface U2 {
    service: string
    streamingType: string
    quality?: string
    link: string
    audios: Audio2[]
    subtitles: Subtitle2[]
    price?: Price2
    availableSince: number
    videoLink?: string
    leaving?: number
    addon?: string
  }
  
  export interface Audio2 {
    language: string
    region: string
  }
  
  export interface Subtitle2 {
    locale: Locale2
    closedCaptions: boolean
  }
  
  export interface Locale2 {
    language: string
    region: string
  }
  
  export interface Price2 {
    amount: string
    currency: string
    formatted: string
  }
  
  export interface Episode {
    type: string
    title: string
    streamingInfo: StreamingInfo3
    year: number
  }
  
  export interface StreamingInfo3 {
    us?: U3[]
  }
  
  export interface U3 {
    service: string
    streamingType: string
    link: string
    videoLink?: string
    audios: Audio3[]
    subtitles: Subtitle3[]
    leaving?: number
    availableSince: number
    quality?: string
    addon?: string
    price?: Price3
  }
  
  export interface Audio3 {
    language: string
    region: string
  }
  
  export interface Subtitle3 {
    locale: Locale3
    closedCaptions: boolean
  }
  
  export interface Locale3 {
    language: string
    region: string
  }
  
  export interface Price3 {
    amount: string
    currency: string
    formatted: string
  }
  