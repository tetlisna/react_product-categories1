(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,a,c){},13:function(e,a,c){"use strict";c.r(a);c(1);var s=c(3),t=c.n(s),r=(c(9),c(10),c(11),c(4)),i=c.n(r),n=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],l=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],d=c(0);const o=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((e=>{const a=l.find((a=>a.id===e.categoryId)),c=n.find((e=>e.id===a.ownerId));return{category:a,product:e,user:c}})),j=()=>Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Product Categories"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("nav",{className:"panel",children:[Object(d.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(d.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(d.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),Object(d.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 1"}),Object(d.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:"is-active",children:"User 2"}),Object(d.jsx)("a",{"data-cy":"FilterUser",href:"#/",children:"User 3"})]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:"qwe"}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(d.jsx)("span",{className:"icon is-right",children:Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(d.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(d.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(d.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(d.jsx)("div",{className:"panel-block",children:Object(d.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(d.jsxs)("div",{className:"box table-container",children:[Object(d.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(d.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(d.jsx)("th",{children:Object(d.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(d.jsx)("a",{href:"#/",children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(d.jsx)("tbody",{children:o.map((e=>{const{user:a,product:c,category:s}=e,t="f"===a.sex;return Object(d.jsxs)("tr",{"data-cy":"Product",children:[Object(d.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:c.id}),Object(d.jsx)("td",{"data-cy":"ProductName",children:c.name}),Object(d.jsxs)("td",{"data-cy":"ProductCategory",children:["\ud83c\udf7a -",s.title]}),Object(d.jsx)("td",{"data-cy":"ProductUser",className:i()("has-text-link",{"has-text-danger":t}),children:a.name})]},c.id)}))})]})]})]})});t.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3b89d0e2.chunk.js.map