export interface Availability {
    ID: string
    RouteID: string
    Route: Route
    Date: string
    ParsedDate: string

    YAvailable: boolean
    WAvailable: boolean
    JAvailable: boolean
    FAvailable: boolean

    YMileageCost: number
    WMileageCost: number
    JMileageCost: number
    FMileageCost: number

    YRemainingSeats: number
    WRemainingSeats: number
    JRemainingSeats: number
    FRemainingSeats: number

    YAirlines: string
    WAirlines: string
    JAirlines: string
    FAirlines: string

    YDirect: boolean
    WDirect: boolean
    JDirect: boolean
    FDirect: boolean

    Source: string
    ComputedLastSeen: string
    APITermsOfUse: string
}

interface Route {
    ID: string
    OriginAirport: string
    OriginRegion: string
    DestinationAirport: string
    DestinationRegion: string
    NumDaysOut: number
    Distance: number
    Source: string
    AutoCreated: boolean
}
