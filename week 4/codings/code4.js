// Write a Javascript program that compares two arrays and print whether they are equal or not.
var a=[{name:'shalu',class:'senior'}]
var b =[{name:'shalu',class:'senior'}]

// var ed = JSON.stringify(a)==JSON.stringify(b)
console.log(a==b)
console.log(a==c)
// shallowEqual(a,b)
// console.log(ed)
var c = JSON.parse(JSON.stringify(a))
c.name = 'mohit'
console.log (c.name)
console.log(a[0].name)
var c = [...b]
b[0]={name:'mohit',class:'senior'}
console.log(b[0])
console.log(c[0])