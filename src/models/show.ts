/** @format */

class Show {
  id: string;
  name: string;
  date: string;

  constructor(nameShow: string, dateShow: string) {
    this.id = new Date().toISOString();
    this.name = nameShow;
    this.date = dateShow;
  }
}

export default Show;
