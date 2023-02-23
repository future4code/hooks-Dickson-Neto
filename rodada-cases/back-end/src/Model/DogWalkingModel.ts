export class DogWalkingModel {
  constructor(
    private id : string,
    private name: string,
    private price: number,
    private rideDuration: string,
    private appointmentDate: string,
    private qtyPet: number,
    private latitude: string,
    private longitude: string,
    private startTime: string,
    private endTime: string
    
    ) {}

  //GETER
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getPrice(): number {
    return this.price;
  }
  public getRideDuration(): string {
    return this.rideDuration;
  }
  public getAppointmentDate(): string {
    return this.appointmentDate;
  }
  public getQtyPet(): number {
    return this.qtyPet;
  }
  public getLatitude(): string {
    return this.latitude;
  }
  public getLongitude(): string {
    return this.longitude;
  }
  public getStartTime(): string {
    return this.startTime;
  }
  public getEndTime(): string {
    return this.endTime;
  }

  // SETTERS

  public setName(name: string) {
    this.name = name;
  }
  public setPrice(price: number) {
    this.price = price;
  }
  public setRideDuration(rideDuration: string) {
    this.rideDuration = rideDuration;
  }
  public setAppointmentDate(appointmentDate: string) {
    this.appointmentDate = appointmentDate;
  }
  public setQtyPet(qtyPet: number) {
    this.qtyPet = qtyPet;
  }
  public setLatitude(latitude: string) {
    this.latitude = latitude;
  }
  public setLongitude(longitude: string) {
    this.longitude = longitude;
  }
  public setStartTime(startTime: string) {
    this.startTime = startTime;
  }
  public setEndTime(endTime: string) {
    this.endTime = endTime;
  }

  public static toWalking(data? : any): DogWalkingModel | undefined {
    return (
      data &&
      new DogWalkingModel(
        data.id,
        data.name,
        data.price,
        data.rideDuration || data.ride_duration,
        data.appointmentDate || data.appointment_date,
        data.qtyPet || data.qty_pet,
        data.latitude,
        data.longitude,
        data.startTime || data.start_time,
        data.endTime || data.end_time
      )
    );
  }

}

export interface DogWalkingDTO {
  name: string;
  rideDuration: string;
  appointmentDate: string;
  qtyPet: number;
  latitude: string;
  longitude: string;
  startTime: string;
  endTime: string;
}
