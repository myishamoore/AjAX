let list=$('ul#userlist')

$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(userList){
  console.log(userList);
  userList.forEach(function(userList){
  let li=$('<li></li>');
  li.text(userList);
  list.append(li)
 })
});

$(function(){
	var myBtn= document.getElementById(myButton)
  $('#btn').click(function() {
      console.log(myBtn);
 
});
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10', function(userList){
    console.log(userList);
} });
// 3.
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12', function(data){
	console.log(data);
});
//4.
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/2', function(data){
	console.log(data);
});
//5.
$.post('http://jsonplaceholder.typicode.com/posts',{
	userId: 1,
	title: " New Post",
	body: "This is my new post"
}, function(data){
	console.log(data.id)
})

// 6.
$.ajax({
	method: 'PUT',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12',
	data: {
		userId: 1,
		title: "New Post",
		body: "New post added"
	},
	complete: function(response){
		console.log(response.responseJSON);
	}
})
