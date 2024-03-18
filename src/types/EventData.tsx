type EventData = {
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: { latitude: number; longitude: number };
  attendees: { current: number; max: number };
  volunteers: { current: number; max: number };
  wellnessType: WellnessType;
  cost: number;
  imageUri: string;
};
