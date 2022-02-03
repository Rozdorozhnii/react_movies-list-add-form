(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var a=i(10),s=i.n(a),r=(i(17),i(12)),n=i(4),l=i(5),m=i(8),c=i(7),o=i(1),d=i.n(o),h=(i(18),i(2)),b=(i(19),i(20),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:a,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:s,children:"IMDB"})]})]})]})},g=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(j,Object(h.a)({},e),e.imdbId)}))})},u=i(6),p=i(3),v=i.n(p),O=(i(22),function(e){Object(m.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={title:"",messageTitle:"",description:"",imgUrl:"",messageImgUrl:"",imdbUrl:"",messageImdbUrl:"",imdbId:"",messageImdbId:""},e.handleFormItemChange=function(t){e.setState((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(u.a)({},t.target.name,t.target.value))}))},e.handleOnBlur=function(t){switch(t.target.name){case"title":e.state.title?e.setState({messageTitle:""}):e.setState({messageTitle:"Title required"});break;case"imgUrl":e.state.imgUrl?e.checkUrl(e.state.imgUrl)?e.setState({messageImgUrl:""}):e.setState({messageImgUrl:"ImgUrl isn't valid"}):e.setState({messageImgUrl:"ImgUrl required"});break;case"imdbUrl":e.state.imdbUrl?e.checkUrl(e.state.imdbUrl)?e.setState({messageImdbUrl:""}):e.setState({messageImdbUrl:"ImdbUrl isn't valid"}):e.setState({messageImdbUrl:"ImdbUrl required"});break;case"imdbId":e.state.imdbId?e.setState({messageImdbId:""}):e.setState({messageImdbId:"ImdbId required"})}},e.checkUrl=function(e){return/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g.test(e)},e.clearForm=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},e.onSubmitNewMovieForm=function(t){t.preventDefault();var i=e.state,a={title:i.title,description:i.description,imgUrl:i.imgUrl,imdbUrl:i.imdbUrl,imdbId:i.imdbId};e.props.addMovie(a),e.clearForm()},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state,t=e.title,i=e.messageTitle,a=e.description,s=e.imgUrl,r=e.messageImgUrl,n=e.imdbUrl,l=e.messageImdbUrl,m=e.imdbId,c=e.messageImdbId,o=t&&s&&n&&m&&!i&&!r&&!l&&!c;return Object(b.jsxs)("form",{className:"form",onSubmit:this.onSubmitNewMovieForm,children:[Object(b.jsx)("div",{className:"form__item",children:Object(b.jsxs)("label",{htmlFor:"title-input",children:["New movie title *\xa0",Object(b.jsx)("input",{className:v()("",{"input-error":i}),name:"title",type:"text",id:"title-input",placeholder:"Enter title of movie here",value:t,onChange:this.handleFormItemChange,onBlur:this.handleOnBlur}),i&&Object(b.jsx)("div",{className:"message-error",children:i})]})}),Object(b.jsx)("div",{className:"form__item",children:Object(b.jsxs)("label",{htmlFor:"description-input",children:["Description of new movie\xa0",Object(b.jsx)("textarea",{name:"description",id:"description-input",placeholder:"Enter description of movie here",value:a,onChange:this.handleFormItemChange})]})}),Object(b.jsx)("div",{className:"form__item",children:Object(b.jsxs)("label",{htmlFor:"imgUrl-input",children:["Link for avatar of movie *\xa0",Object(b.jsx)("input",{className:v()("",{"input-error":r}),name:"imgUrl",type:"text",id:"imgUrl-input",placeholder:"Put link for avatar here",value:s,onChange:this.handleFormItemChange,onBlur:this.handleOnBlur}),r&&Object(b.jsx)("div",{className:"message-error",children:r})]})}),Object(b.jsx)("div",{className:"form__item",children:Object(b.jsxs)("label",{htmlFor:"imdbUrl-input",children:["Link for movie from IMDb *\xa0",Object(b.jsx)("input",{className:v()("",{"input-error":l}),name:"imdbUrl",type:"text",id:"imdbUrl-input",placeholder:"Put link of movie from IMDb here",value:n,onChange:this.handleFormItemChange,onBlur:this.handleOnBlur}),l&&Object(b.jsx)("div",{className:"message-error",children:l})]})}),Object(b.jsx)("div",{className:"form__item",children:Object(b.jsxs)("label",{htmlFor:"imdbId-input",children:["ID from Internet Movie Database *\xa0",Object(b.jsx)("input",{className:v()("",{"input-error":c}),name:"imdbId",type:"text",id:"imdbId-input",placeholder:"Enter id of movie from IMDb here",value:m,onChange:this.handleFormItemChange,onBlur:this.handleOnBlur}),c&&Object(b.jsx)("div",{className:"message-error",children:c})]})}),Object(b.jsx)("button",{className:"form__item",type:"submit",disabled:!o,children:"Add new movie"}),!o&&Object(b.jsx)("div",{className:"message-error",children:"Please fill all fields with *"})]})}}]),i}(o.Component)),f=i(11),I=function(e){Object(m.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(r.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(g,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(O,{addMovie:this.addMovie})})]})}}]),i}(d.a.Component);s.a.render(Object(b.jsx)(I,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ce735458.chunk.js.map