import { event } from "tealium";

console.log("this is our example event function");
console.log({{att_test}})
const attribute_list = {{att_list}};
const data = {{key_pair}}
attribute_list.forEach(a=>{
  console.log(a);
})
