const Node = require('./node.js');
class LinkedList {
  constructor(){
    this.head = null;
  }
  append (value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
      return this ;