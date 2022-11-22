class KonbiniEmployee {
  static Workplace = "Konbini";
  firstname;
  lastname;
  fullname;

  constructor(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;

    this.fullname = fname + " " + lname;
  }
  set firstname(newname) {
    this.firstname = newname;
    this.fullname = newname + " " + this.lastname;
  }
  static getWorkplace() {
    return Workplace;
  }
}

const P = new KonbiniEmployee("Ryan", "PINA-SILASSE");
console.log(P);

const P2 = new KonbiniEmployee("Alexandre", "HASCOUR");
console.log(P2);

const P3 = {
  firstname: "Kevin",
  lastname: "SINGER",
  fullname: "Kevin SINGER",
};
console.log(P3);

// P2.firstname = "Yolo";
// console.log(P, P2);

const date = new Date();
date.getDate();
