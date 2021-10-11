/** @format */

class Todo {
  id: string;
  text: string;

  constructor(textNote: string) {
    this.text = textNote;
    this.id = new Date().toISOString();
  }
}

export default Todo;
