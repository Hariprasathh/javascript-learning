let employee={
    empname:"David",
    empid:1234,
    empsal:50000,
    bonus:function (){
        return((this.empsal*10)/100);
    }

};

console.log(employee.empname);
console.log(employee.bonus());