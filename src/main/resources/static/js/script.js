
/* start gGrid */
var gGrid = {
  _node: null,              
  _siteFragment: null,     
  _sites:[],
  _ready:false,
  //--------------------------------------------------------------//
  init:function(){
	this._node = document.getElementById("gridRow");
	this._createSiteFragment();    
  },
  refresh:function(){
	this._node.innerHTML = "";
    let cell = document.createElement("div");
    cell.classList.add("cell","col-12","col-sm-6","col-md-4","col-lg-3");
    
    var sites = this._sites;
    var nSites = sites.length;
    
    // Creates nSites cells
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < nSites; i++) {
      fragment.appendChild(cell.cloneNode(true));
    }
    // Create cells.
    let cells = Array.from(fragment.childNodes, (cell) => new Cell(cell));
     
    for (let i = 0; i < nSites; i++) {
      if (sites[i]) {
        this._createSite(sites[i], cells[i]);
      }
    }
    
    this._node.appendChild(fragment);
    
  },
  _createSiteFragment:function() {
	  let site = document.createElement("div");
	  site.classList.add("site","h-100","mx-auto");
		
	  site.innerHTML='<button class="delete"><i class="fa fa-minus-circle"></i></button>';
	  site.innerHTML+='<h5 class="text-center titulo"></h5>';
	  site.innerHTML+='<div class="text-justify"></div>';
	  site.innerHTML+='<button class="add"><i class="fa fa-plus-circle" aria-hidden="true"></i></button>';
	  
    this._siteFragment = document.createDocumentFragment();
    this._siteFragment.appendChild(site);
  },
  
  _createSite: function(aSite, aCell) {
	aSite.render();
    aCell.node
    	.appendChild(aSite.node);
  }

};	/* end gGrid */



function Cell(aNode) {
  this._node = aNode;
}

Cell.prototype = {
  get node() { return this._node; }
};


function Site() {
  this.id;
  this.titulo;
  this.sinopsis;
  this.poster;
  this._node = gGrid._siteFragment.cloneNode(true).childNodes[0];
 
  this.addEventHandlers();
}

Site.prototype = {
	get node(){ return this._node; },
	
	getSinopsis:function() {
		if(this.sinopsis.length >= 195){
			substring = this.sinopsis.substr(0,195)+"...";
			return substring; 
		}else{
			return this.sinopsis; 
		}	    
	},
	
	render:function(){
		let node = this._node;
		node.childNodes[1].innerHTML = this.titulo;
		node.childNodes[2].innerHTML = this.getSinopsis();		
		this._node = node;
		this.renderPoster();
		
	},
	
	renderPoster:function(){
		if(this.poster != undefined){
			this._node.style
			.backgroundImage = 'url("'+ this.poster +'")';
		}
	},
	
	delete:function(){		
		var cell = this._node.parentNode;
		gGrid._node.removeChild(cell);
		deleteSite(this.id);
	},
	
	add:function(){		
		buildSite(this.titulo);
	},
	
	addEventHandlers:function(){
		this._node.childNodes[0].addEventListener("click",this,false);
		this._node.childNodes[3].addEventListener("click",this,false);
	},
	
	enableDeleteControl:function(){
		this._node.childNodes[0].style.display = "block";
	},
	
	enableAddControl:function(){
		this._node.childNodes[3].style.display = "block";
	},
	
	handleEvent:function(aEvent){
		let {target} = aEvent;
		if (target.classList.contains("delete")) {
			this.delete();
		} else if(target.classList.contains("add")){
			this.add();
		}
	}
};


function mostarOcultarLs(){
	var ls = document.querySelector('.list-group');
	if(ls.style.display == "none" || ls.style.display ==""){
		ls.style.display="block";
	}else{
		ls.style.display="none";
	}
}


$( document ).ready(function() {
    gGrid.init(); 
});
	 
