/**
 * This class managaed the structue of the places that we add such as it's
 * location, title, address.
 */


class Place{
    constructor(title, imageurl, address, location){
        this.title = title;
        this.imageurl = imageurl;
        this.address = address;
        this.location = location; // it has latitude and longitude
        this.id = new Date().toString() + Math.random().toString();
    }
}