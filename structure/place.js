/**
 * This class managaed the structue of the places that we add such as it's
 * location, title, address.
 */


export class Place{
    constructor(title, imageurl,location){
        this.title = title;
        this.imageurl = imageurl;
        this.address = location.address;
        this.location = {lat: location.lat, long: location.long}; // it has latitude and longitude
        this.id = new Date().toString() + Math.random().toString();
    }
}