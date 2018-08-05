
var local = {
	get:function(name){
		return localStorage.getItem(name);
	},
	set:function(name,value){
		return localStorage.setItem(name,value);
	},
	romove:function(name){
		return localStorage.removeItem(name);
	}
}

var session = {
	get:function(name){
		return sessionStorage.getItem(name);
	},
	set:function(name,value){
		return sessionStorage.setItem(name,value);
	},
	romove:function(name){
		return sessionStorage.removeItem(name);
	}
}

export { local , session };
