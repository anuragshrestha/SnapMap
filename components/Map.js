const GOOGLE_API_KEY = "AIzaSyAyaVGBJ11y1nnrTo7kRtCYVfbJUxXtBds";

export function getMap(latitude, longitude) {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap
 &markers=color:blue%7C${latitude},${longitude}
 &key=${GOOGLE_API_KEY}`;

 return imagePreview;
}


