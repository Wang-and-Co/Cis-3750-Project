type EventData = {
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: {
    address: number;
    road: string;
    city: string;
    province: string;
    postalCode: string;
    extraInstructions: string;
  };
  isOnline: boolean;
  attendees: { current: number; max: number };
  volunteers: { current: number; max: number };
  wellnessType: WellnessType;
  cost: number;
  imageUri: string;
};
