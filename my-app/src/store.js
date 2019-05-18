import { seedData } from './seed.js'

export const store = {
    state: {
        seedData
    },
    getLat() {
        return this.state.seedData[0].lat
    },
    getLon(){
        return this.state.seedData[0].lon
    },
    setLat(lat) {
        this.state.seedData[0].lat = lat
    },
    SetLon(lon) {
        this.state.seedData[0].lon = lon
    }

}