export type ServiceMenuItem = { name: string; price: string; duration: string };

export type SiteConfig = {
  businessName: string;
  ownerFirstName: string;
  phone: string;
  email: string;
  towns: string[];
  services: string[];
  yearsInBusiness: string;
  hours: string;
  review1Text: string;
  review1Author: string;
  review2Text: string;
  review2Author: string;
  review3Text: string;
  review3Author: string;
  brandColor: string;
  logoUrl: string;
  businessLocation?: string;
  notes: string;
  images: Record<string, string>;
  businessType?: string;
  bookingUrl?: string;
  servicesMenu?: ServiceMenuItem[];
  galleryPhotos?: string[];
  pexelsImages?: string[];
  serviceImages?: Record<string, string[]>;
  heroImage?: string;
  whyUsImage?: string;
  serviceDetails?: Record<string, { included: string[]; materials: string[]; blurb: string }>;
};

export const siteConfig: SiteConfig = {
  "businessName": "Hudson Ridge Painting Co.",
  "ownerFirstName": "Dan",
  "phone": "(845) 555-0198",
  "email": "dan@hudsonridgepainting.example",
  "towns": [
    "Beacon",
    "Cold Spring",
    "Fishkill",
    "Poughkeepsie",
    "Wappingers Falls"
  ],
  "services": [
    "Interior Painting",
    "Exterior Painting",
    "Cabinet Painting"
  ],
  "yearsInBusiness": "14",
  "hours": "Mon-Fri 7am-6pm\nSat 8am-2pm",
  "review1Text": "Hudson Ridge repainted our whole first floor in three days. Prep work was spotless and the color match was perfect.",
  "review1Author": "Kristen A.",
  "review2Text": "Exterior of our farmhouse looks brand new. They handled the trim and shutters with real care, not a rush job.",
  "review2Author": "Mike D.",
  "review3Text": "Cabinet refinish saved us from a full kitchen remodel. Looks like a different room. Would hire again in a heartbeat.",
  "review3Author": "Priya S.",
  "brandColor": "#1e5f5a",
  "logoUrl": "",
  "notes": "",
  "images": {
    "Interior Painting": "https://images.pexels.com/photos/34046207/pexels-photo-34046207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
    "Exterior Painting": "https://images.pexels.com/photos/34975633/pexels-photo-34975633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600",
    "Cabinet Painting": "https://images.pexels.com/photos/6835066/pexels-photo-6835066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=600"
  },
  "businessType": "contractor",
  "bookingUrl": "",
  "businessLocation": "Nyack, NY",
  "servicesMenu": [],
  "galleryPhotos": [],
  "heroImage": "https://images.pexels.com/photos/18326826/pexels-photo-18326826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1400",
  "whyUsImage": "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "pexelsImages": [
    "https://images.pexels.com/photos/18326826/pexels-photo-18326826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ],
  "serviceImages": {
    "Interior Painting": [
      "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/34046207/pexels-photo-34046207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/5798984/pexels-photo-5798984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/5583116/pexels-photo-5583116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    "Exterior Painting": [
      "https://images.pexels.com/photos/18326826/pexels-photo-18326826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/34975633/pexels-photo-34975633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/37818741/pexels-photo-37818741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/34264478/pexels-photo-34264478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    "Cabinet Painting": [
      "https://images.pexels.com/photos/6835066/pexels-photo-6835066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/6920631/pexels-photo-6920631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/8583860/pexels-photo-8583860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/4030055/pexels-photo-4030055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ]
  },
  "serviceDetails": {
    "Interior Painting": {
      "blurb": "Walls, ceilings, and trim finished with careful prep and a clean crew. No plastic-sheet chaos, no overspray.",
      "included": [
        "Full surface prep: patching, sanding, and caulking before a drop of paint goes on",
        "Two coats of premium interior paint, ceilings and trim included",
        "Furniture moved and protected, floors covered, daily cleanup",
        "Color consultation if you're not sure what you want"
      ],
      "materials": [
        "Sherwin-Williams and Benjamin Moore premium lines",
        "Low-VOC formulas safe for occupied homes",
        "Durable washable finishes for high-traffic rooms"
      ]
    },
    "Exterior Painting": {
      "blurb": "Siding, trim, and shutters prepped and coated to survive Hudson Valley winters for years.",
      "included": [
        "Pressure washing and scraping before any prep work starts",
        "Wood repair and caulking on trim, fascia, and soffits",
        "Two coats of exterior-grade paint rated for the climate",
        "Full cleanup, no chips or masking tape left behind"
      ],
      "materials": [
        "100% acrylic exterior paints built for freeze-thaw cycles",
        "Premium primers on bare or repaired wood",
        "Mildew-resistant formulas for shaded and north-facing walls"
      ]
    },
    "Cabinet Painting": {
      "blurb": "A full kitchen refresh without the cost or mess of a remodel. Sprayed finishes that look factory-built.",
      "included": [
        "All doors and drawers removed, labeled, and finished off-site",
        "Degreasing, sanding, and priming for real adhesion",
        "Sprayed (not brushed) topcoat for a smooth factory finish",
        "New or reinstalled original hardware, your call"
      ],
      "materials": [
        "Catalyzed cabinet-grade enamels built for daily wear",
        "Bonding primers rated for laminate, oak, and MDF",
        "Soft-close hardware upgrades available on request"
      ]
    }
  }
};

export default siteConfig;
