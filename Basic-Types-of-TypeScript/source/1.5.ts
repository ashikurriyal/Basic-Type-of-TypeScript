// Reference type --> object
const user: {
  firstName: string;
  middleName?: string; // type --> optional type (if middleName available then it should string otherwise undefined)
  lastName: string;
  age: 25;
  readonly company: "braincellum"; // type --> literal type (if we want to fixed the company name that will not change )
 // readonly means you can not change it. it can only be readable
} = {
  firstName: "Molla",
  // middleName: 'Ashikur',
  lastName: "Rahman",
  age: 25,
  company: "braincellum",
};
