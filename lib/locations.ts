export type StoreLocation = {
  id: string;
  name: string;
  shortLabel: string;
  addressLine: string;
  mapsUrl: string;
  embedUrl: string;
};

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: "geetabhawan",
    name: "Geetabhawan",
    shortLabel: "Geetabhawan Store",
    addressLine: "Geetabhawan, Indore, M.P.",
    mapsUrl:
      "https://www.google.com/maps/place/The+laundry+project/@22.7146355,75.8919041,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd1932cf13bd:0x4ae85fa1856921ee!8m2!3d22.7146355!4d75.894479!16s%2Fg%2F11n9h2wwd_?entry=ttu",
    embedUrl: "https://maps.google.com/maps?q=22.7146355,75.894479&z=17&output=embed",
  },
  {
    id: "scheme-140",
    name: "Scheme No. 140",
    shortLabel: "Scheme No. 140 Store",
    addressLine: "Scheme No. 140, Indore, M.P.",
    mapsUrl:
      "https://www.google.com/maps/place/Its+The+laundry+project/@22.7115289,75.9139561,17z/data=!3m7!1e1!3m5!1sWYlh0adoothjznrDU0djHQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.624512158658519%26panoid%3DWYlh0adoothjznrDU0djHQ%26yaw%3D330.7646888939707!7i16384!8i8192!4m10!1m2!2m1!1sThe+Laundry+Project!3m6!1s0x3962e3c740970609:0x8048f2277dd2f29b!8m2!3d22.711536!4d75.9140292!15sChNUaGUgTGF1bmRyeSBQcm9qZWN0WhUiE3RoZSBsYXVuZHJ5IHByb2plY3SSAQ9sYXVuZHJ5X3NlcnZpY2XgAQA!16s%2Fg%2F11yk4wjzv8?entry=ttu",
    embedUrl: "https://maps.google.com/maps?q=22.711536,75.9140292&z=17&output=embed",
  },
];

export const SERVICE_AREA_SUMMARY = "Indore, Madhya Pradesh — Geetabhawan & Scheme No. 140";
